import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {

    const users=useLoaderData();
    console.log(users);


    return ( 
        <div>
            <h2>Users:{users.length}</h2>
            <p>Here is a list of users</p>
            <div>
                {
                    users.map(user=><User user={user} key={user.id}></User>)
                }
            </div>
            
        </div>
    );
};

export default Users;