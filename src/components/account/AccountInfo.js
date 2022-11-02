import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import AccountNav from './AccountNav';
//import AccountNav from './components/AccountNav/AccountNav';

const AccountInfo = () => {
    const account = useSelector((state) => state.account);


    return account.username ? (

        <div className='account-container'>
            <div className='account-info'>
                <h1>Account Information:</h1>
                <h3>{`Name: ${account.firstName} ${account.lastName}`}</h3>
                <h3>{`Username: ${account.username}`}</h3>
                <h3>{`Email: ${account.email}`}</h3>
                <h3>{`Address: ${account.address ? account.address :
                    'Please add your address'}`}</h3>
            </div>
            {account.isAdmin ? (
                <Link to='/adminDashboard'><button>Admin Dashboard</button></Link>
            ) : (
                <></>
            )}
        </div>
    ) : (<div>You must be logged in to view account information</div>


    );

};

export default AccountInfo;


// {state.accounts.length > 0 ?
//     <div className='account-container'>
//         <h1>{state.accounts[id].firstName} {state.accounts[id].lastName}</h1>
//         <h3>username: {state.accounts[id].username}</h3>
//         <h3>email: {state.accounts[id].email}</h3>
//     </div>
//     :
//     <h1>no data</h1>
// }
    // const [accountInfo, setAccountInfo] = useState()

    // const data = async () => {
    //     const data = await axios.get('/api/accounts')
    //     console.log(data)

    // }

    // useEffect(() => {
    //     data()
    // })