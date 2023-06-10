import React from 'react'

const UserInfo = (props) => {
    return (
        // create the datas here and input the props parameter thast will create the link to the parent component "App.jsx"
        <div>
        
            <div>
                <h1>Firstname: {props.name1}</h1>
                <h1>Lastname: {props.name2}</h1>
                <h1>Email Address: {props.email}</h1>
                <h1>Phone Number: {props.phone}</h1>
            </div>
        </div>
    )
}

export default UserInfo
