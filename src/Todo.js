import React, {useState, useEffect} from 'react';

// 1. Get information from the input element.
// So when the user types in something and clicks on add button, you should have access to what was typed.
// 2. Display OR add the item to the list

// This is the only one that is left
// 3. Show All, Active and completed

function Todo(props) {

    // CORS requests

    const [newItemText, setNewItemText] = useState('');
    const [items, setItems] = useState([
        {text: 'Go to the grocery', completed: false},
        {text: 'Work on project', completed: false},
        {text: 'Study Programming', completed: false}
    ]);

    // Go to the grocery
    // Work on project
    // Study Programming

    const onTextChange = async (event) => {
        setNewItemText(event.currentTarget.value)
    };

    const addItem = async () => {
        setItems([...items, {text: newItemText, completed: false}])
        setNewItemText('')
    };

    const onCheckBoxChange = async (event, item, idx) => {
        let itemsCopy = items
        itemsCopy.map((itemCopy, index) => {
            if(index == idx){
                itemCopy.completed = event.target.checked
            }
        })
        setItems([...itemsCopy])
    };

    const onItemDeleted = async (event, item, idx) => {
        let itemsCopy = []
        items.map((item, index) => {
            if(index != idx){
                itemsCopy.push(item)
            }
        })
        setItems([...itemsCopy])
    };

    return (
        <>
            <div className={'flex justify-center mt-20'}>
                <div className={' h-96 w-1/3'}>


                    <div className={'flex p-4'}>
                        <div className={'w-2/3'}>
                            <input value={newItemText}
                                   onChange={onTextChange}
                                   placeholder={'Add task...'}
                                   type="text"
                                   className={'border p-2 w-full'}/>

                                   {/*feel free to remove this paragraph*/}
                                   <p>{JSON.stringify(items)}</p>

                        </div>

                        <div className={'w-1/3 flex justify-center'}>
                            <button onClick={addItem} className={'border-2 border-blue-500 text-blue-500 font-bold rounded w-2/3 mr-4'}>Add</button>
                        </div>

                    </div>


                    <div className={'bg-gray-100 h-full p-2 mt-4'}>

                        <ul>

                            {items.map((item, idx) => {
                               return <li className={'flex relative p-2 border-b-2 border-blue-100'}>
                                   <div className={'mr-4'}>
                                       <input type="checkbox" onChange={(event) => onCheckBoxChange(event, item, idx)}/>
                                   </div>
                                   <div className={''}>
                                       {item.text}
                                       <i onClick={(event) => onItemDeleted(event, item, idx)} className={'fa fa-trash absolute right-10 text-red-300 cursor-pointer'}/>
                                   </div>
                               </li>
                            })}

                            {/*<li className={'flex relative p-2 border-b-2 border-blue-100'}>*/}
                            {/*    <div className={'mr-4'}>*/}
                            {/*        <input type="checkbox"/>*/}
                            {/*    </div>*/}
                            {/*    <div className={''}>*/}
                            {/*        Go to the grocery*/}
                            {/*        <i className={'fa fa-trash absolute right-10 text-red-300'}/>*/}
                            {/*    </div>*/}
                            {/*</li>*/}

                            {/*<li className={'flex relative p-2 border-b-2 border-blue-100'}>*/}
                            {/*    <div className={'mr-4'}>*/}
                            {/*        <input type="checkbox"/>*/}
                            {/*    </div>*/}
                            {/*    <div className={''}>*/}
                            {/*        Work on project*/}
                            {/*        <i className={'fa fa-trash absolute right-10 text-red-300'}/>*/}
                            {/*    </div>*/}
                            {/*</li>*/}

                            {/*<li className={'flex relative p-2 border-b-2 border-blue-100'}>*/}
                            {/*    <div className={'mr-4'}>*/}
                            {/*        <input type="checkbox"/>*/}
                            {/*    </div>*/}
                            {/*    <div className={''}>*/}
                            {/*        Study Programming*/}
                            {/*        <i className={'fa fa-trash absolute right-10 text-red-300'}/>*/}
                            {/*    </div>*/}
                            {/*</li>*/}
                        </ul>

                    </div>

                    <div className={'mt-4'}>
                        <h2 className={'font-semibold'}>Show</h2>
                        <button className={'mt-2 mr-4 px-8 py-2 rounded bg-blue-500 text-white'}>All</button>
                        <button className={'border mr-4 px-8 py-2 rounded bg-gray-200 text-gray-500 font-semibold'}>Active</button>
                        <button className={'border px-8 py-2 rounded bg-gray-200 text-gray-500 font-semibold'}>Completed</button>

                    </div>


                </div>

            </div>

        </>
    );
}

export default Todo;
