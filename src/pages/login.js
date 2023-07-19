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
    
  
return <p>Hello I am the Login page</p>


}

