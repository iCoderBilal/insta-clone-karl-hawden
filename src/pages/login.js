import { useNavigate } from "react-router-dom";
import { useState,useContext,useEffect } from "react";
import FirebaseContext from "../context/firebase";

export default function Login(){

    const history = useNavigate();
    const {firebase} = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error,setError] = useState("");
    const isInValid = password === " "  || emailAddress ===" ";

    const handleLogin = () => {};

    useEffect(() => {
      document.title = "Login - Instagram";
    
    })
    
  
return ( <div className="container flex mx-auto max-w-screen-md items-center h-screen">
     <div className="flex w-3/5">
     <img src="/images/iphone-with-profile.jpg" alt="iPhone with Instagram app" />
     </div>

     <div className="flex flex-col w-2/5">
      <p>I will be Form</p>
     </div>
</div>)


}

