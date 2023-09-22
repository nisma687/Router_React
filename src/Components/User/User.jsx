

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
            
        </div>
    );
};

export default User;