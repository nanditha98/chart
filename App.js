// import React from 'react';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// import SideNav from './Main/SideNav/SideNav';
// import Reg from './components/Monitor';
// import Main from './New/NewLogin/NewLogin';

// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//       {/* <SideNav/> */}
//       {/* <Reg/> */}
//       <Main/>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Records from './New/NewLogin/NewLogin';
import NewPagination from './New/NewLogin/NewPagination';

function App() {

    // To hold the actual data
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true);

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(10);


    useEffect(() => {
        axios.get('MOCK_DATA.json')
            .then(res => {
                    setData(res.data);
                    setLoading(false);
                })
                .catch(() => {
                    alert('There was an error while retrieving the data')
                })
    }, [])

    const indexOfLastRecord = currentPage * recordsPerPage;
    // console.log("indexOfLastRecord",indexOfLastRecord);
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    // console.log("indexOfFirstRecord",indexOfFirstRecord);
    const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
    // console.log("currentRecords",currentRecords);
    const nPages = Math.ceil(data.length / recordsPerPage)
    // console.log("nPages",nPages);

    return (
        <div className='container mt-5'>
            <h2> Simple Pagination Example in React </h2>
            <Records data={currentRecords}/>
            <NewPagination
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>
    );
}

export default App;

// import React from 'react';
// import {
//   BrowserRouter, Routes, Route
// } from 'react-router-dom';
// import { AppProvider } from './Compo/Context';

// import Home from './Compo/Pages/Home/Home';
// import About from './Compo/Pages/About/About';
// import BookList from './Compo/BookList/BookList';
// import BookDetails from './Compo/BookDetails/BookDetails';
// import Helo from './Compo/Heelo';

// function App(){
//   return(
//     <AppProvider>
//     <BrowserRouter>
//       <Routes>
//         <Route path = "/" element = {<Home />}>
//           <Route path = "about" element = {<About />} />
//           <Route path = "book" element = {<BookList />} />
//           <Route path = "/book/:id" element = {<BookDetails />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   </AppProvider>
//   )
// }
// export default App;


// import React from "react";
// import Navbar from "./components/Navbar/Navbar";
// import Home from "./Main/Home/Home";
// // import Navbar1 from "./Main/Navbar/Navbar1";
// // import SideNav from "./Main/SideNav/SideNav"


// function App(){
//   return(
//     <div>
//       {/* <Home/> */}
//      {/* <Navbar1/> 
//     <SideNav/> */}
//     <Navbar/>
//     </div>
//   )
// }
// export default App;

// import Form from "./Main/Home/Home";
// function App(){
//   const getData = (data) =>{
//     console.log("coming to react js",data);

//   }
//   return(
// <Form onSubmit={getData}/>
//   )
// }

// export default App;



// import './App.css';
// import 'bootstrap/dist/css/bootstrap.css'
// import { Nav, Navbar } from 'react-bootstrap'
// import SideNav from './Main/SideNav/SideNav';

// function App() {
//   return (
//     <div className="App">
//       <Navbar bg="dark" variant="dark"
//         sticky="top" expand="sm" collapseOnSelect>
//         <Navbar.Brand>
//          {' '}
//           Logo
//         </Navbar.Brand>

//         <Navbar.Toggle className="coloring" />
//         <Navbar.Collapse>
//           <Nav>
//             <Nav.Link href="/home">home</Nav.Link>
//             <Nav.Link href="/Search">Search</Nav.Link>
//             <Nav.Link href="/MachineTranslation">MachineTranslation</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>

//       </Navbar>
//       <div className="content">
//         <SideNav/>
//       </div>
//     </div>
//   );
// }

// export default App;



// import React, { useEffect } from "react";
// import "./App.css";

// // Importing TagCloud package
// import TagCloud from "TagCloud";

// const App = () => {
//   // Animation settings for Text Cloud
//   useEffect(() => {
//     return () => {
//       const container = ".tagcloud";
//       const texts = [
//         "HTML",
//         "CSS",
//         "SASS",
//         "JavaScript",
//         "React",
//         "Vue",
//         "Nuxt",
//         "NodeJS",
//         "Babel",
//         "Jquery",
//         "ES6",
//         "GIT",
//         "GITHUB",
//       ];

//       const options = {
//         radius: 300,
//         maxSpeed: "normal",
//         initSpeed: "normal",
//         keep: true,
//       };

//       TagCloud(container, texts, options);
//     };
//   }, []);

//   return (
//     <>
//       <div className="text-shpere">
//         {/* span tag className must be "tagcloud"  */}
//         <span className="tagcloud"></span>
//       </div>
//     </>
//   );
// };

// export default App;


// npm i -S TagCloud




// import React, { useState, useEffect } from 'react';
// import Posts from './Post';
// import Pagination from './Pagination';
// import axios from 'axios';
// import './App.css';

// const App = () => {
//   const [posts, setPosts] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [postsPerPage] = useState(10);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       setLoading(true);
//       const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
//       setPosts(res.data);
//       setLoading(false);
//     };

//     fetchPosts();
//   }, []);

//   // Get current posts
//   const indexOfLastPost = currentPage * postsPerPage;
//   const indexOfFirstPost = indexOfLastPost - postsPerPage;
//   const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

//   // Change page
//   const paginate = pageNumber => setCurrentPage(pageNumber);

//   return (
//     <div className='container mt-5'>
//       <h1 className='text-primary mb-3'>My Blog</h1>
//       <Posts posts={currentPosts} loading={loading} />
//       <Pagination
//         postsPerPage={postsPerPage}
//         totalPosts={posts.length}
//         paginate={paginate}
//       />
//     </div>
//   );
// };
// export default App;