import { useState } from "react" // this is the code we injected 


function SignUpForm (){
    
const [username, setUsername] = useState ('');
const [password, setPassword] = useState ('');
const [error , setError] = useState (null);
    
async function handleSubmit(e) {
    e.preventDefault()}; // this is stopping page from refreshing !!!
    console.log('hey there ✌🏻')
    try {    
    } catch (error){
        setError(error.message)
    }

    return ( 
       
    <>

    <h2> Sign up </h2> 
    
    <form onSubmit = {handleSubmit}> 
        <label>
            Username: < input value = {username} onChange={(e) => setUsername(e.target.value)} />
        </label>

        <label>
            Password: <input value = {password} onChange={(e) => setPassword(e.target.value)}/>
        </label>
        <button> Submit </button>
    </form>

    </>
    );
}

export default SignUpForm