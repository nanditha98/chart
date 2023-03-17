// import { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import './Login.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import { Login } from "@mui/icons-material"
import userEvent from "@testing-library/user-event"

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div className="LoginForm">
//       <Form onSubmit={handleFormSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginForm;


// login username and password validation
// import { useState } from 'react';
// import { Form, Button, Alert } from 'react-bootstrap';

// const LoginForm = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [showAlert, setShowAlert] = useState(false);

//   const handleFormSubmit = (event) => {
//     event.preventDefault();

//     // Check if email and password are valid
//     if (email === 'example@example.com' && password === 'password') {
//       console.log('Login successful');
//     } else {
//       setShowAlert(true);
//     }
//   };

//   return (
//     <div>
//       {showAlert && (
//         <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
//           <Alert.Heading>Invalid credentials</Alert.Heading>
//           <p>Please check your email and password and try again.</p>
//         </Alert>
//       )}
//       <Form onSubmit={handleFormSubmit}>
//         <Form.Group className="mb-3" controlId="formBasicEmail">
//           <Form.Label>Email address</Form.Label>
//           <Form.Control
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(event) => setEmail(event.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group className="mb-3" controlId="formBasicPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             placeholder="Password"
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Submit
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default LoginForm;


// ........ user exist Code....


// async function handleSubmit(event) {
//   event.preventDefault();

//   try {
//     const response = await fetch('/api/checkUserExists', {
//       method: 'POST',
//       body: JSON.stringify({ email: formData.email }),
//       headers: { 'Content-Type': 'application/json' }
//     });

//     const data = await response.json();

//     if (data.exists) {
//       setFormErrors({ email: 'User already exists' });
//     } else {
//       // Submit the form data to the server
//     }
//   } catch (error) {
//     console.error(error);
//   }
// }

// register form

// import React, { useState } from 'react';

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const newErrors = validate(formData);
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       // submit the form
//     }
//   };

//   const validate = data => {
//     const errors = {};
//     if (!data.firstName) {
//       errors.firstName = 'First name is required';
//     }
//     if (!data.lastName) {
//       errors.lastName = 'Last name is required';
//     }
//     if (!data.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!data.password) {
//       errors.password = 'Password is required';
//     } else if (data.password.length < 8) {
//       errors.password = 'Password must be at least 8 characters long';
//     }
//     if (data.password !== data.confirmPassword) {
//       errors.confirmPassword = 'Passwords do not match';
//     }
//     return errors;
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="firstName">First Name:</label>
//         <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} />
//         {errors.firstName && <div className="error">{errors.firstName}</div>}
//       </div>
//       <div>
//         <label htmlFor="lastName">Last Name:</label>
//         <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} />
//         {errors.lastName && <div className="error">{errors.lastName}</div>}
//       </div>
//       <div>
//         <label htmlFor="email">Email:</label>
//         <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//         {errors.email && <div className="error">{errors.email}</div>}
//       </div>
//       <div>
//         <label htmlFor="password">Password:</label>
//         <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//         {errors.password && <div className="error">{errors.password}</div>}
//       </div>
//       <div>
//         <label htmlFor="confirmPassword">Confirm Password:</label>
//         <input type="password" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} />
//         {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//       </div>
//       <button type="submit">Register</button>
//     </form>
//   );
// };

// export default RegisterForm;


// password validtion

// const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// if (!passwordRegex.test(values.password)) {
//    setError('Password must contain at least 8 characters, including at least one uppercase letter, one lowercase letter, one number, and one special character');
//   return;
// }

// ...phone number validation..
// function PhoneNumberForm() {
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [errors, setErrors] = useState({});

//   function handleSubmit(e) {
//     e.preventDefault();

//     const errors = validatePhoneNumber();

//     if (Object.keys(errors).length === 0) {
//       // Submit form
//     } else {
//       setErrors(errors);
//     }
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label>Phone Number:</label>
//         <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         {errors.phoneNumber && <span>{errors.phoneNumber}</span>}
//       </div>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// ..register useRes.register
// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const newErrors = validate(formData);
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       axios.post('/api/check-user', formData)
//         .then(response => {
//           if (response.data.exists) {
//             // user exists, redirect to dashboard or perform other actions
//           } else {
//             // show error message that user is not registered
//             setErrors({ login: 'This user is not registered.' });
//           }
//         })
//         .catch(error => console.log(error));
//     }
//   };

//   const validate = data => {
//     const errors = {};
//     if (!data.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!data.password) {
//       errors.password = 'Password is required';
//     }
//     return errors;
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {errors.login && <div className="error">{errors.login}</div>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
//           {errors.email && <div className="error">{errors.email}</div>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;


// ....already username exist userEvent

// import React, { useState } from 'react';
// import axios from 'axios';
// import './Login.css';

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });

//   const [errors, setErrors] = useState({});

//   const handleChange = event => {
//     setFormData({
//       ...formData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();
//     const newErrors = validate(formData);
//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//     } else {
//       axios.post('/api/check-user', formData)
//         .then(response => {
//           if (response.data.exists) {
//             // user exists, redirect to dashboard or perform other actions
//           } else {
//             // show error message that user is not registered
//             setErrors({ login: 'This user is not registered.' });
//           }
//         })
//         .catch(error => console.log(error));
//     }
//   };

//   const validate = data => {
//     const errors = {};
//     if (!data.email) {
//       errors.email = 'Email is required';
//     } else if (!/\S+@\S+\.\S+/.test(data.email)) {
//       errors.email = 'Email is invalid';
//     }
//     if (!data.password) {
//       errors.password = 'Password is required';
//     }
//     return errors;
//   };

//   const handleBlur = event => {
//     const { name, value } = event.target;
//     if (value && name === 'email') {
//       axios.post('/api/check-email', { email: value })
//         .then(response => {
//           if (response.data.exists) {
//             setErrors({ ...errors, email: 'This email is already registered.' });
//           }
//         })
//         .catch(error => console.log(error));
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         {errors.login && <div className="error">{errors.login}</div>}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} onBlur={handleBlur} />
//           {errors.email && <div className="error">{errors.email}</div>}
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
//           {errors.password && <div className="error">{errors.password}</div>}
//         </div>
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

// ..search bar 
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const Home = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       {searchTerm.length > 0 ? (
//         // Render search results here
//         <p>Search Results for "{searchTerm}"</p>
//       ) : (
//         // Render home page content here
//         <p>Welcome to the Home Page</p>
//       )}
//       {searchTerm.length > 0 ? null : (
//         <Link to="/other-page">Go to other page</Link>
//       )}
//     </div>
//   );
// };

// export default Home;

// ....responsive Login
// import React from 'react';
// import { Container, Row, Col, Form, Button } from 'react-bootstrap';

// const Login = () => {
//   return (
//     <Container>
//       <Row className="justify-content-center">
//         <Col xs={12} md={6}>
//           <h1>Login</h1>
//           <Form>
//             <Form.Group controlId="formBasicEmail">
//               <Form.Label>Email address</Form.Label>
//               <Form.Control type="email" placeholder="Enter email" />
//             </Form.Group>

//             <Form.Group controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control type="password" placeholder="Password" />
//             </Form.Group>

//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default Login;