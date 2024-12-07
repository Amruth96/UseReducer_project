import React, { useReducer } from "react";

 
const initialState = {
    isAdmin: false,
    user: null,
}
 

function AuthApp() {
    const [state, dispatch] = useReducer(authReducer, initialState)
   
 
    const handleSignIn = () => {
        const user = { name: "innovators", email: "innovatorstech@gmail.com" }
        dispatch({ type: "signin", payload: user })

    }
 
   
    const handleSignOut = () => {
        dispatch({ type: "signout" });
        
    }
 
    return (
        <div>
            <h1>Sign in  and Signout</h1>
            {state.isAdmin? (
                <div>
                    <p>Welcome, {state.user.name}</p>
                    <p>Email: {state.user.email}</p>
                    <button onClick={handleSignOut}>Sign Out</button>
                </div>
            ) : (
                <div>
                    <p>Please sign in.</p>
                    <button onClick={handleSignIn}>Sign In</button>
                </div>
            )}
        </div>
    )
}
export default AuthApp;