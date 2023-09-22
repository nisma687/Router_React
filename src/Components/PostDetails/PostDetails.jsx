import { useLoaderData } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData();
    console.log(post);
    const {id,title,body}=post;
    return (
        <div>
            <h1>Post Details</h1>
            <h2>Post Id:{id}</h2>
            <h2>Post Title:{title}</h2>
            <h2>Post Body:{body}</h2>
            
            
        </div>
    );
};

export default PostDetails;