import { useLoaderData } from "react-router-dom";


const UserDetails = () => {
    const user=useLoaderData();
    const {id,name,email,phone,website}=user;
    const userStyle={
        border:'3px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    
    return (
        <div style={userStyle} >
            <h2>Details of the user:</h2>
           
            <h3>Name: {name}</h3>
            <h3>Id: {id}</h3>
            <p>Website: {website}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>

            
        </div>
    );
};

export default UserDetails;