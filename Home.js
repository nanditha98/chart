import Navbar from "../Navbar/Navbar";
import React from "react";
import "./Home.css";
import SideNav from "../SideNav/SideNav";
import HeaderSearchPage from "../Search/Search";

function Home (){
    
    return(
<div>
 <div className="grid-container">
<p>welcome</p>
<p>hello</p>
</div>
   <div>
    <img className="logo" src="https://seeklogo.com/images/D/drdo-logo-26087DC7CA-seeklogo.com.png"></img>
    </div> 
<div className="grid">
    <p>welcome to user</p>
</div>
<Navbar/>
<SideNav/>
<HeaderSearchPage/>
</div>
    )
}
export default Home