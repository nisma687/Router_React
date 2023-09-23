import { useNavigate, useRouteError } from "react-router-dom";


const ErrorPage = () => {
    const navigate=useNavigate();
    const back=()=>{
        navigate(-1);
    }
    // checking error
    const error=useRouteError();
    console.log(error);
    
    return (
        <div>
            <h1>Opps!404 Error</h1>
            <h2>Page not found</h2>
            <p>{error.statusText || error.message}</p>
            {
                error.status===404 && <p>Page not found please go back</p>
            }
            <button onClick={back}>Go Back</button>
            
        </div>
    );
};

export default ErrorPage;