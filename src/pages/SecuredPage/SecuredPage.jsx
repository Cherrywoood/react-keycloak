import React, {useState} from 'react';
import Button from "../../ui/Button/Button";
import './SecuredPage.css'
import {instance} from "../../helpers/API";

const SecuredPage = () => {
    const [users, setUsers] = useState([])
    const getUser = async () => {
        try {
            const response = await instance.get("user-service/admin/users")
            setUsers(response.data.content)
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <div className="secured-page">
            <h1>Welcome to the Protected Page</h1>
            <Button onClick={getUser}>Get Users</Button>
            {

               users.map(user =>
                <div className="secured-page-user" key={user.email}>
                    <div>{user.firstName}</div>
                    <div>{user.lastName}</div>
                    <div>{user.email}</div>
                </div>
                )
            }
        </div>
    );
};

export default SecuredPage;