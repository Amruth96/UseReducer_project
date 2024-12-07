import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
 
const initialState = {
    isAdmin: false,
    user: null,
}
 
 
const authReducer = (state, action) => {
    switch (action.type) {
        case "signin":
            return {
                ...state,
                isAdmin: true,
                user: action.payload,
            }
        case "signout":
            return {
                ...state,
                isAdmin: false,
                user: null,
            }
        default:
            return state
    }
}
 
function AuthApp() {
    const [state, dispatch] = useReducer(authReducer, initialState)
    const navigate = useNavigate()
 
 
    const handleSignIn = () => {
        const user = { name: "madhavi", email: "madhavi@gmail.com" }
        dispatch({ type: "signin", payload: user })
        navigate("/dashboard")
    }
 
   
    const handleSignOut = () => {
        dispatch({ type: "signout" });
        navigate("/")
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
                    <button onClick={handleSignIn}>Sign in</button>
                </div>
            )}
        </div>
    )
}
export default AuthApp;