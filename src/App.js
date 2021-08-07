// This session is all about a react component
// Class based components
// functional Components | react hooks
import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react'
import MyButton from "./my-button";
import MenuItem from "./menu-item"; //Both of these are just hooks

function App() {

    // useEffect(() => {
    //     console.log('run this code only on page load')
    //     // console.log('run this code only when certain things in the deps list changes')
    // }, [])

    const [counter, setCounter] = useState(0);
    const [toDoList, setToDoList] = useState(['Item one', 'Item two']);

    const [menuItems, setMenuItems] = useState([
        'Installation',
        'Main Concepts',
        'Advanced Guides',
        'Hooks',
    ]);

    const [buttonItems, setButtonItems] = useState([
        {text: 'Continue', rounded: true, color: 'red'},
        {text: 'Submit'},
        {text: 'Sign Up', rounded: true},
    ]);


    // Loop over the buttonItems and render the button component for each item in the array

    const [itemText, setItemText] = useState('');

    const incrementCounter = async () => {
        let newCounter = counter + 1 // I have made a copy of the counter state variable.
                                     // NOT updating the counter directly
        console.log(newCounter)
        setCounter(newCounter)
    };

    const updateInputValue = async (event) => {
        console.log(event.currentTarget.value)
        setItemText(event.currentTarget.value)

    };

    const addItem = async () => {
        setToDoList([...toDoList, itemText])
        setItemText('')
    };

    const executeThisFunctionWhenButtonIsClicked = async (num) => {
        console.log('the number received from the child is', num)
        alert(`the number received from the child is ${num}`)

    };

  return (

      <div>

          <br/>
          <br/>
          <input value={itemText} onChange={updateInputValue} type="text" />&nbsp;&nbsp;
          <button onClick={addItem}>Add item</button>
          <br/>
          <br/>
          <br/>

          {/*looping and child components*/}
          {/*passing data from the child to the parent*/}



          <div className={'flex justify-center'}>
              {/*props*/}
              <MyButton myFunc={executeThisFunctionWhenButtonIsClicked} buttonText={'Continue Now'} color={'red'} rounded={true} />&nbsp;&nbsp;

              {/*<MyButton buttonText={'Submit number '+counter} rounded={true} />&nbsp;&nbsp;*/}

              {/*<MyButton buttonText={'Place Order'} color={'red'} />&nbsp;&nbsp;*/}

              {/*<MyButton />*/}
          </div>


          {buttonItems.map((buttonItem, idx) => {
              return <div key={idx} className={'p-4'}>
                        <MyButton
                               color={buttonItem.color}
                               buttonText={buttonItem.text}
                               rounded={buttonItem.rounded} />
              </div>
          })}



          {menuItems.map((menuItem, idx) => {
              return <MenuItem menuItemText={menuItem} />

          })}

          <ul>
              {toDoList.map((item, idx) => {
                  return <li key={idx}>{item}</li>
              })}
          </ul>

          <br/>
          <br/>
          <p>Current Value of the item text is: {itemText}</p>

          <br/>
          <br/>
          <br/>
          <br/>
          <button className={'border'} onClick={incrementCounter}>Click me</button>

          <p>The current Click count is: {counter}</p>

          {/*ternary operator*/}

          <h1 style={counter==5 ? {color: 'red'} : {color: 'green'}}>Hello World!</h1>

          {/*Boolean Operators AND OR */}

          {counter==10 && <h2>Hello World 10!</h2>}


          {counter==7 && <h3>Hello World 7!</h3>}

          {((counter==7) || (counter==10)) && <h1>Hello World 10! or 7!</h1>}
          {/*<h4 style={{color: 'red'}}>Hello World</h4>*/}
        {/*Hello world*/}
      </div>

  );
}

export default App;



// <div className="App" style={{marginTop: '10px'}}>
//   {/*JSX Not HTML*/}
//   <header className="App-header">
//     <img src={logo} className="App-logo" alt="logo" />
//     <p>
//       Edit <code>src/App.js</code> and save to reload.
//     </p>
//     <a
//         className="App-link"
//         href="https://reactjs.org"
//         target="_blank"
//         rel="noopener noreferrer"
//     >
//       Learn React
//     </a>
//   </header>
// </div>
