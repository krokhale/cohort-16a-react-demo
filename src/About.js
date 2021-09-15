import React, {useState, useEffect} from 'react';

function About(props) {

    // Try to add a button to delete a user
    // Try to add a button update a user

    const [users, setUsers] = useState();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const fetchAllUsers = async () => {
        let res = await fetch('http://localhost:3000/api/users')
        let u = await res.json()
        console.log('the users from the backend are', u)
        setUsers(u)
    };

    useEffect(() => {
        console.log('this code only runs once on page load')
        fetchAllUsers()
    }, [])

    const updateFirstName = async (event) => {
        setFirstName(event.currentTarget.value)
    };

    const updateLastName = async (event) => {
        setLastName(event.currentTarget.value)
    };

    const addUser = async () => {
        console.log('the user has typed the firstName as', firstName)
        console.log('the user has typed the lastName as', lastName)
        let res = await fetch('http://localhost:3000/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({firstName, lastName})
        })
        let u = await res.json()
        console.log('the newly created user is', u)
        fetchAllUsers()

    };

    return (
        <div>
            this is the about component

            <h1 className={'text-3xl font-bold text-center'}>List of users</h1>

            <div className={'flex justify-center p-4'}>
                <input value={firstName} onChange={updateFirstName} type="text" className={'border mr-2 p-2'} placeholder={'Enter firstName'}/>
                <input value={lastName} onChange={updateLastName} type="text" className={'border p-2'} placeholder={'Enter lastName'}/>

                <button onClick={addUser} className={'bg-blue-500 text-white rounded py-4 px-3 ml-4'}>Create User</button>
            </div>


            {users && <ul className={'list text-center'}>
                {users.map((user) => {
                    return <li className={'text-2xl mt-2'}>{user.firstName} {user.lastName}</li>
                })}
            </ul>}

        </div>
    );
}

export default About;
