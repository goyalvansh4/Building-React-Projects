import { useContext, useState } from "react"
import UserContext from "../store/UserContext";

const Login=() => {
  const {setUser} = useContext(UserContext);
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    setUser({username,password});
  }
    return (
        <div>
            <h1>Login</h1>
            <input type="text"
             value={username}
             onChange={(e)=>setUsername(e.target.value)}
             placeholder="username (random)" /><br />
             <input type="text"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             placeholder="password (random)" /><br />
             <button type="submit" onClick={(e)=>{handleSubmit(e)}}>Login</button>
        </div>
    )
}

export default Login;