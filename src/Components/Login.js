import React,{useEffect, useState} from "react";

const Login=()=>{
    const[user,setUser]=useState([]);

    useEffect(()=>{
        let user=JSON.parse(localStorage.getItem("user"))
        setUser(user)
    },[])

    const renderUser = (user) => {
        return (
            <div>
                <h1>Logged In</h1>
                <h4>Id:{user.id}</h4>
                <h4>FirstName:{user.firstName}</h4>
                <h4>LastName:{user.lastName}</h4>
                <h4>Gender:{user.gender}</h4>
            </div>
        )
    }

    return(
        <div className="Login">
           {user && user.length > 0 ? user.map(renderUser) : renderUser(user)}
        </div>
    )
}
export default Login;