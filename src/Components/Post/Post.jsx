import { Link, useLoaderData } from "react-router-dom";





const Post = ({post}) => {
    // const post=useLoaderData();
    const {id,title}=post;
    const postStyle={
        border:'3px solid purple',
        margin:'20px',
        padding:'20px',
        borderRadius:'20px'
    }
    return (
        <div style={postStyle}>
             <h3>Id:{id}</h3>
            <p>Tittle:{title}</p>
            <Link to={`/post/${id}`}>
                See More</Link>
           
        </div>
    );
};

export default Post;