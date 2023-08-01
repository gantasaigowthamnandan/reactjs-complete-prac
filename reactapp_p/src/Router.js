import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
function Routerdom(){
    return(
        <Router>
            <div>
                <ul>
                    <li><Link to="home">Home</Link></li>
                    <li><Link to="profile">Profile</Link></li>
                    <li><Link to="todo">ToDo</Link></li>
                </ul>
                <hr/>
                <Routes>
                    <Route path="home" element={<Home/>}/>     //if index send as attribute it will be opening Component
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="todo" element={<ToDo/>}/>
                </Routes>
            </div>
        </Router>
    )
}
function Home(){
    return(
        <div>This is Home</div>
    )
}
function Profile(){
    return(
        <div>This is Profile</div>
    )
}
function ToDo(){
    return(
        <div>This is ToDo</div>
    )
}
export default Routerdom;