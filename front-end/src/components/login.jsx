import { Fragment, useState } from "react"
import { useNavigate} from "react-router-dom";

function Login(){
    const [userName,setUserName] =useState("");
    const [password,setPassword]= useState("");
    const [userType,setUserType]= useState("");
    const [secretKey,setSecretKey]= useState("");
    const navigate= useNavigate();
    const styles={
        padding: "90px",
        border: "2px solid rgb(51, 54, 238)",
        height: "290px",
        width: "200px",
        float: "center",
        alignItems: "center",
        paddingBottom: "150px",
        paddingRight: "120px",
    }
    const goBack= ()=>{
        window.history.back();
    }
    const handleLogin=(e)=>{
    const savedUsername= localStorage.getItem('username');
    const savedPassword= localStorage.getItem('password');
    try {
        let errorMessage= "credentials not found"
        e.preventDefault();
    if(userName === savedUsername && password === savedPassword){    
       alert("Successfully Logged in")
       navigate("/dashboard")
    }
       else{
        throw new Error(errorMessage)
       }
    } catch (error) {
        alert(error.message)
    }
    if(userType === "Admin" && secretKey !== "web2.0"){
        e.preventDefault();
        alert("Invalid Admin");
        return;
      }
      
}
    return(
        <Fragment>
            <div className="log" style={styles}>
                <h1 style={{color:'rgb(51, 54, 238)',textAlign:'center'}}>Log In</h1>
            Login As:    
        <input type="radio" name="UserType" value="User" onChange={(e)=>{setUserType(e.target.value)}} /> User
        <input type="radio" name="UserType" value="Admin" onChange={(e)=>{setUserType(e.target.value)}} />Admin <br/>
        {userType === "Admin"? ( <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
          Secret Key:
          <input type="text" placeholder='secret key' onChange={(e)=>setSecretKey(e.target.value)} style={{margin: 12+'px',height:22+'px',width:250+'px'}} />
          </label>
          ) :null}  
          <br />        
        <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
        Username:
        <input type="text" placeholder="ahmed123@gmail.com" name="email" value={userName} onChange={(e)=>{setUserName(e.target.value)}} style={{margin: 12+'px',height:22+'px',width:250+'px'}}/>
        </label>
        <br />
        <label style={{color:'rgb(51, 54, 238)',fontSize:18+'px',fontWeight:"bold"}}>
        Password:
        <input type="password" placeholder="********" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} style={{margin:12+'px',height:22+'px',width:250+'px'}}/>
        </label>
        <input type="button" value="Login" onClick={handleLogin} style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:30+'px',width:80+'px',fontSize:18+"px"}}/> <br/>
        <b>don't have account? </b>  <a href="/signup" >Sign Up Here</a>
        </div>
        <button onClick={goBack} style={{margin:12+'px',backgroundColor:'rgb(51, 54, 238)',color:"antiquewhite",height:50+'px',width:80+'px',fontSize:18+"px", borderRadius: 9+"px"}}>Go Back</button>
        </Fragment>
    )
}
export default Login