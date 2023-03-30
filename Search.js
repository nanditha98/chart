
// // import React from 'react';
// // import "./Search.css";

// // function Searchh() {
// //   return (
// //     <div className="searchBar">
// //       <input type="text" placeholder="Search" />
// //       <button type='submit'>search</button>
// //       </div>
// //   )
// // }
// // export default Searchh


// import React from "react";
// import { Form, FormControl,Button} from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

// const SearchBar = () => {
//   return (
//     <Form className="d-flex">
//       <FormControl
//         type="search"
//         placeholder="Search"
//         className="mr-2"
//         aria-label="Search"
//       />
//       <Button variant="outline-success">Search</Button>
//     </Form>
//   );
// };

// export default SearchBar;











import React, { useState } from 'react';

function SearchBar() {
  const [ipAddress, setIPAddress] = useState('');
  const [isValidIPAddress, setIsValidIPAddress] = useState(true);

  function validateIPAddress(ipAddress) {
    const pattern = /^([0-9]{1,3}\.){3}[0-9]{1,3}$/;
    return pattern.test(ipAddress);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (validateIPAddress(ipAddress)) {
      // The IP address is valid, so do something with it
      setIsValidIPAddress(true);
    } else {
      // The IP address is not valid, so show an error message
      setIsValidIPAddress(false);
    }
  }

  function handleIPAddressChange(event) {
    setIPAddress(event.target.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        IP Address:
        <input type="text" value={ipAddress} onChange={handleIPAddressChange} />
      </label>
      <button type="submit">Submit</button>
      {!isValidIPAddress && <div className="error-message">Please enter a valid IP address</div>}
    </form>
  );
}

export default SearchBar;