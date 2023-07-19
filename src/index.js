import React from "react";
import ReactDOM from "react-dom/client";
import App from './App';
import FirebaseContext from "./context/firebase.js";
import {fireBase, FieldValue} from "./lib/firebase.js";

const root = ReactDOM.createRoot(document.getElementById("root"));


root.render( 
<FirebaseContext.Provider value={{fireBase, FieldValue}}>
<App/>
</FirebaseContext.Provider>
)

