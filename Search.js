
// import React from 'react';
// import "./Search.css";

// function Searchh() {
//   return (
//     <div className="searchBar">
//       <input type="text" placeholder="Search" />
//       <button type='submit'>search</button>
//       </div>
//   )
// }
// export default Searchh


import React from "react";
import { Form, FormControl,Button} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchBar = () => {
  return (
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

export default SearchBar;