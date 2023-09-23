import { useLoaderData, useNavigate, useParams } from "react-router-dom";


const PostDetails = () => {
    const post=useLoaderData();
    console.log(post);
    const {id,title,body}=post;
    const navigate=useNavigate();
    const handleBack=()=>{
        // navigate('/posts')
        navigate(-1);
    };
    // const params=useParams();
    // console.log(params);
    const {postId}=useParams();
    console.log(postId);

    return (
        <div>
            <h1>Post Details</h1>
            <h2>Post Id:{id}</h2>
            <h2>Post Title:{title}</h2>
            <h2>Post Body:{body}</h2>
            <button onClick={handleBack}>Go back</button>
            
            
        </div>
    );
};

export default PostDetails;