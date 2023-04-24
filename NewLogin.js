// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import '../NewLogin/NewLogin.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Card } from 'react-bootstrap';


// function Main() {
//   return (
//     <Card className='container-md w-50 my-5'>
//     <Container id="main-container" className="d-grid h-100">
//       <Form id="sign-in-form" className="text-center p-3 w-100">
//         <img className="mb-1 text-center p-3 w-100 bootstrap-logo" 
//               src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" 
//               alt="Bootstrap 5" />
//         <h1 className="mb-3 fs-3 fw-normal">Please sign in</h1>       
//         <Form.Group controlId="sign-in-email-address">
//           <Form.Control type="email" size="lg" placeholder="Email address" autoComplete="username" className="position-relative" />
//         </Form.Group>
//         <Form.Group className="mb-3 my-3" controlId="sign-in-password">
//           <Form.Control type="password" size="lg" placeholder="Password" autoComplete="current-password" className="position-relative" />
//         </Form.Group>
//         {/* <Form.Group className="d-flex justify-content-center mb-4" controlId="remember-me">
//           <Form.Check label="Remember me" />
//         </Form.Group> */}
//         <div className="d-grid">
//           <Button variant="primary" size="lg">Sign in</Button>
//         </div>
//       </Form>    
//     </Container>
//     </Card>
   
//   );
// }

// export default Main;


import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Records = ({data}) => {
    
  return (  
    <table className="table">
        <thead>
            <tr>
                <th scope='col'>ID</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>City</th>

            </tr>
        </thead>
        <tbody>
            {data.map(item => (
                <tr>
                    <td>{item.id} </td>
                    <td>{item.first_name} </td>
                    <td>{item.last_name} </td>
                    <td>{item.city} </td>
                </tr>
            ))}
        </tbody>
    </table>
  ) 
}

export default Records  