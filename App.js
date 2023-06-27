// import React from 'react';
// import './App.css';
// import { BrowserRouter } from 'react-router-dom';
// // import SideNav from './Main/SideNav/SideNav';
// // import Reg from './components/Monitor';
// import Main from './New/NewLogin/NewLogin';
// import Hel from './Hey/Hom/Hom';

// function App() {
//   return (
//     <div className="App">
//      <BrowserRouter>
//       {/* <SideNav/> */}
//       {/* <Reg/> */}
//       {/* <Main/> */}
//       <Hel/>
//      </BrowserRouter>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from 'react'
// import axios from 'axios'
// import Records from './New/NewLogin/NewLogin';
// import NewPagination from './New/NewLogin/NewPagination';

// function App() {

//     // To hold the actual data
//     const [data, setData] = useState([])
//     const [loading, setLoading] = useState(true);

//     const [currentPage, setCurrentPage] = useState(1);
//     const [recordsPerPage] = useState(10);


//     useEffect(() => {
//         axios.get('MOCK_DATA.json')
//             .then(res => {
//                     setData(res.data);
//                     setLoading(false);
//                 })
//                 .catch(() => {
//                     alert('There was an error while retrieving the data')
//                 })
//     }, [])

//     const indexOfLastRecord = currentPage * recordsPerPage;
//     // console.log("indexOfLastRecord",indexOfLastRecord);
//     const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
//     // console.log("indexOfFirstRecord",indexOfFirstRecord);
//     const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
//     // console.log("currentRecords",currentRecords);
//     const nPages = Math.ceil(data.length / recordsPerPage)
//     // console.log("nPages",nPages);

//     return (
//         <div className='container mt-5'>
//             <h2> Simple Pagination Example in React </h2>
//             <Records data={currentRecords}/>
//             <NewPagination
//                 nPages={nPages}
//                 currentPage={currentPage}
//                 setCurrentPage={setCurrentPage}
//             />
//         </div>
//     );
// }

// export default App;

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



// import "./App.css";
// import { FiSearch } from "react-icons/fi";
// import { useEffect, useRef, useState } from "react";
// import axios from "axios";

// const App = () => {
//   // fetching data
//   const [users, setusers] = useState([]);

//   const fetchUsers = async () => {
//     const response = await axios.get(
//       "https://jsonplaceholder.typicode.com/users"
//     );
//     setusers(response.data);
//   };
//   useEffect(() => {
//     fetchUsers();
//   }, []);

//   // filter users

//   const [filtered, setfiltered] = useState([]);
//   const [search, setsearch] = useState("");

//   const searchRef = useRef();

//   useEffect(() => {
//     setfiltered(
//       users.filter((item) =>
//         item.name.toLowerCase().includes(search.toLowerCase())
//       )
//     );
//   }, [search]);

//   return (
//     <div className="app">
//       <div className="serach">
//         <div className="searchbox">
//           <input
//             type="text"
//             placeholder="search"
//             onChange={(e) => setsearch(e.target.value)}
//             ref={searchRef}
//           />
//           <FiSearch />
//         </div>
//         {search.length > 0 && (
//           <div className="dropdown">
//             {filtered.length > 0 ? (
//               filtered.map((item, index) => {
//                 return (
//                   <div
//                     className="card"
//                     key={index}
//                     onClick={(e) => {
//                       searchRef.current.value = item.name;
//                       setsearch("");
//                     }}>
//                     <p>{item.name}</p>
//                   </div>
//                 );
//               })
//             ) : (
//               <p>no match</p>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default App;



import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactPaginate from "react-paginate";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [pageCount, setpageCount] = useState(0);

  let limit = 10;

  useEffect(() => {
    const getComments = async () => {
      const res = await fetch(
        // `http://localhost:3004/comments?_page=1&_limit=${limit}`
        `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
      );
      const data = await res.json();
      const total = res.headers.get("x-total-count");
      setpageCount(Math.ceil(total / limit));
      // console.log(Math.ceil(total/12));
      setItems(data);
    };

    getComments();
  }, [limit]);

  const fetchComments = async (currentPage) => {
    const res = await fetch(
      // `http://localhost:3004/comments?_page=${currentPage}&_limit=${limit}`
      `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
    );
    const data = await res.json();
    return data;
  };

  const handlePageClick = async (data) => {
    console.log(data.selected);

    let currentPage = data.selected + 1;

    const commentsFormServer = await fetchComments(currentPage);

    setItems(commentsFormServer);
    // scroll to the top
    window.scrollTo(0, 0)
  };
  return (
    <div className="container">
      <div className="row m-2">
        {items.map((item) => {
          return (
            <div key={item.id} className="col-sm-6 col-md-4 v my-2">
              <div className="card shadow-sm w-100" style={{ minHeight: 225 }}>
                <div className="card-body">
                  <h5 className="card-title text-center h2">Id :{item.id} </h5>
                  <h6 className="card-subtitle mb-2 text-muted text-center">
                    {item.email}
                  </h6>
                  <p className="card-text">{item.body}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
      />
    </div>
  );
}

export default App;