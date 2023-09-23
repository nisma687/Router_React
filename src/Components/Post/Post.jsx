import { Link, useLoaderData, useNavigate } from "react-router-dom";





const Post = ({post}) => {
    // const post=useLoaderData();
    const {id,title}=post;
    const postStyle={
        border:'3px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    const navigate=useNavigate();
    const handleClick=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div style={postStyle}>
             <h3>Id:{id}</h3>
            <p>Tittle:{title}</p>
            <Link to={`/post/${id}`}>
                See More</Link>
            <Link to={`/post/${id}`}>
                <button>See More</button>
            </Link>
            <button onClick={handleClick}>Click to see details</button>
           
        </div>
    );
};

export default Post;