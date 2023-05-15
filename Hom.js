// import React from "react";
// import "./Hom.css";

// function Hom(){
//     return(
//         <div>
//             <nav className="navbar navbar-light bg-nav navbar-fixed-top">
//             <div className="container">
// 		    <div className="navbar-brand">
//             <img src="\images\Defence_Research_and_Development_Organisation_Logo.png" alt="logo" title="" className="img-fluid">
//             </img>
//             </div>
// 		    <div className="pull-xl-right text-xl-right">
//             </div>
//             </div>
//             </nav>
//             </div>
//     )
// }
// export default Hom;

import React, { useState } from "react";
function Hel() {
  const [name, setName] = useState("");
  const [file, setFile] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  async function addproduct() {
    console.warn(name, file, price, description);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("name", name);
    formData.append("price", price);
    formData.append("desciption", description);
    let result = await fetch("http://localhost:8000/api/addproduct", {
      method: "POST",
      body: formData,
    });
    alert("data have been saved");
  }
  return (
    <div className="col-sm-6 offset-sm-6">
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        placeholder="name"
      />
      <input
        type="file"
        className="form-control"
        onChange={(e) => setFile(e.target.files[0])}
        placeholder="file"
      />
      <input
        type="text"
        className="form-control"
        onChange={(e) => setPrice(e.target.value)}
        placeholder="price"
      />
      <input
        type="text"
        className="form-control"
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button onClick={addproduct}>submit</button>
    </div>
  );
}
export default Hel;
