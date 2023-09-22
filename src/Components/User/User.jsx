import { Link } from "react-router-dom";


const User = ({user}) => {
    const {id,name,email,phone}=user;
    const userStyle={
        border:'3px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={userStyle}>
            <h2>Name:{name}</h2>
            <p>Email:{email}</p>
            <p>Phone:{phone}</p>
            <p>ID:{id}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <br />
            <Link to={`/user/${id}`}>
                <button>Click Me</button>
            </Link>
        </div>
    );
};

export default User;