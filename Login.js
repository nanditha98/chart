// import {
// 	Container,
// 	Button,
// 	Grid,
// 	Paper,
// 	TextField,
// 	IconButton,
// 	InputAdornment,
// } from "@mui/material";
// import VisibilityIcon from "@mui/icons-material/Visibility";
// import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
// import React, { useState,useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";


// const Login = () => {
// const navigate = useNavigate();
// const [values, setValues] = useState({
// 	email: "",
// 	pass: "",
// 	showPass: false,
// });

// // function handleChange(event) {
// //     const { name, value } = event.target;
// //     setInputValue({ ...values, [name]: value });
// //   }

//   const checkValidation = () => {
//     let errors = values;


//     // email validation
//     const emailCond =
//       "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
//     if (!values.email.trim()) {
//       errors.email = "Email is required";
//     } else if (!values.email.match(emailCond)) {
//       errors.email = "Please ingress a valid email address";
//     } else {
//       errors.email = "";
//     }

//     //password validation
//     const cond1 = "/^(?=.*[a-z]).{6,20}$/";
//     const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
//     const cond3 = "/^(?=.*[0-9]).{6,20}$/";
//     const password = values.password;
//     if (!password) {
//       errors.password = "password is required";
//     } else if (password.length < 6) {
//       errors.password = "Password must be longer than 6 characters";
//     } else if (password.length >= 20) {
//       errors.password = "Password must shorter than 20 characters";
//     } else if (!password.match(cond1)) {
//       errors.password = "Password must contain at least one lowercase";
//     } else if (!password.match(cond2)) {
//       errors.password = "Password must contain at least one capital letter";
//     } else if (!password.match(cond3)) {
//       errors.password = "Password must contain at least a number";
//     } else {
//       errors.password = "";
//     }
//     setValues(errors);
//   };

//   useEffect(() => {
//     checkValidation();
//   }, [values]);


// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	axios
// 		.post("https://reqres.in/api/login", {
// 			email: values.email,
// 			password: values.pass,
// 		})
// 		.then((res) => {
// 			localStorage.setItem("token", res.data.token);
//             navigate("/home")
// 		})
// 		.catch((err) => console.error(err));
// };
// const handlePassVisibilty = () => {
// 	setValues({
// 		...values,
// 		showPass: !values.showPass,
// 	});
// };



// 	return (
// 		<div>
// <Container maxWidth="sm">
// <Grid
// 	container
// 	spacing={2}
// 	direction="column"
// 	justifyContent="center"
// 	style={{ minHeight: "100vh" }}
// >
// <Paper elelvation={2} sx={{ padding: 5 }}>
// <form onSubmit={handleSubmit}>
// <Grid container direction="column" spacing={2}>

// 	<Grid item>
		
// 		<TextField
// 			type="email"
// 			fullWidth
// 			label="Enter your email"
// 			placeholder="Email Address"
// 			variant="outlined"
// 			required
// 			onChange={(e) => setValues({ ...values, email: e.target.value })}
// 		/>
// 		{values.email && <p>{values.email}</p>}
	
// 	</Grid>

// 	<Grid item>
    	
// 	<TextField
// 		type={values.showPass ? "text" : "password"}
// 		fullWidth
// 		label="Password"
// 		placeholder="Password"
// 		variant="outlined"
// 		required
		
// 		onChange={(e) => setValues({ ...values, pass: e.target.value })}
// 		InputProps={{
// 			endAdornment: (
// 				<InputAdornment position="end">
// 					<IconButton
// 						onClick={handlePassVisibilty}
// 						aria-label="toggle password"
// 						edge="end"
// 					>
// 						{values.showPass ? <VisibilityOffIcon /> : <VisibilityIcon />}
// 					</IconButton>
// 				</InputAdornment>
// 			),
// 		}}		
// 	/>
// 		{values.password && <p>{values.password}</p>}
// 	</Grid>
// 	<Grid item>
// 	<Button type="submit" fullWidth variant="contained">
// 	 Sign In
// 	</Button>
// 	</Grid>
// </Grid>
// </form>
// </Paper>
// </Grid>
// </Container>
// </div>
// 	);
// };

// export default Login;










// import { useRef, useState, useEffect, useContext } from 'react';
// import AuthContext from '../Context/AuthProvider';

// import axios from 'axios';


// const Login = () => {
//     const { setAuth } = useContext(AuthContext);
//     const userRef = useRef();
//     const errRef = useRef();

//     const [user, setUser] = useState('');
//     const [pwd, setPwd] = useState('');
//     const [errMsg, setErrMsg] = useState('');
//     const [success, setSuccess] = useState(false);

//     useEffect(() => {
//         userRef.current.focus();
//     }, [])

//     useEffect(() => {
//         setErrMsg('');
//     }, [user, pwd])

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post("https://www.melivecode.com/api/login",
			
//                 JSON.stringify({ user, pwd }),
//                 {
//                     headers: { 'Content-Type': 'application/json' },
//                     withCredentials: true
//                 }
//             );
// 			console.log("response",response);
//             console.log(JSON.stringify(response?.data));
//             //console.log(JSON.stringify(response));
//             // const accessToken = response?.data?.accessToken;
//             // const roles = response?.data?.roles;
//             setAuth({ user, pwd});
//             setUser('');
//             setPwd('');
//             setSuccess(true);
//         } catch (err) {
//             if (!err?.response) {
//                 setErrMsg('No Server Response');
//             } else if (err.response?.status === 400) {
//                 setErrMsg('Missing Username or Password');
//             } else if (err.response?.status === 401) {
//                 setErrMsg('Unauthorized');
//             } else {
//                 setErrMsg('Login Failed');
//             }
//             errRef.current.focus();
//         }
//     }

//     return (
//         <>
//             {success ? (
//                 <section>
//                     <h1>You are logged in!</h1>
//                     <br />
//                     <p>
//                         <a href="#">Go to Home</a>
//                     </p>
//                 </section>
//             ) : (
//                 <section>
//                     <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
//                     <h1>Sign In</h1>
//                     <form onSubmit={handleSubmit}>
//                         <label htmlFor="username">Username:</label>
//                         <input
//                             type="email"
//                             id="username"
//                             ref={userRef}
//                             autoComplete="off"
//                             onChange={(e) => setUser(e.target.value)}
//                             value={user}
//                             required
//                         />

//                         <label htmlFor="password">Password:</label>
//                         <input
//                             type="password"
//                             id="password"
//                             onChange={(e) => setPwd(e.target.value)}
//                             value={pwd}
//                             required
//                         />
//                         <button>Sign In</button>
//                     </form>
//                     <p>
//                         Need an Account?<br />
//                         <span className="line">
//                             {/*put router link here*/}
//                             <a href="#">Sign Up</a>
//                         </span>
//                     </p>
//                 </section>
//             )}
//         </>
//     )
// }

// export default Login

// import React,{useState} from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// export default function Form() {
// const [values, setValues] = useState({
// 	 	email: "", 
// 	    pass: "", 
// 		showPass: false,
//  });
//   const {
//     register,
//     formState: { errors },
//   } = useForm();
// const navigate=useNavigate();
// const handleSubmit = (e) => {
// 	e.preventDefault();
// 	axios
// 		.post("https://reqres.in/api/login", {
// 			email: values.email,
// 			password: values.pass,
// 		})
// 		.then((res) => {
// 			localStorage.setItem("token", res.data.token);
//             navigate("/home")
// 		})
// 		.catch((err) => console.error(err));
// };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <h1>Registration</h1>
//         </div>
//         {/* <div>
//           <label>Name</label>
//           <input
//             placeholder="Enter person name"
//             {...register("name", { required: true })}
//           />
//           <error>
//             {errors.name?.type === "required" && "Name is required"}
//           </error>
//         </div> */}
//         <div>
//           <label>Email</label>
//           <input
//             placeholder="Enter primary email"
//             {...register("email", {
//               required: true,
//               pattern: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/i,
//             })}
//           />
//           <error>
//             {errors.email?.type === "required" && "Email is required"}
//             {errors.email?.type === "pattern" &&
//               "Entered email is in wrong format"}
//           </error>
//         </div>
//         <div>
//           <label>Password</label>
//           <input
//             placeholder="Enter password"
//             {...register("password", {
//               required: true,
//               minLength: 5,
//               maxLength: 20,
//             })}
//           />
//           <error>
//             {errors.password?.type === "minLength" &&
//               "Entered password is less than 5 characters"}
//             {errors.password?.type === "maxLength" &&
//               "Entered password is more than 20 characters"}
//           </error>
//         </div>
//         <div>
//           <input className="button" type="submit" />
//         </div>
//       </form>
//     </div>
//   );
// }

// /









import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function RegistrationView() {
	const navigate=useNavigate();
  const [inputValues, setInputValue] = useState({
    email:"",
    password: "",
   
  });

  const [validation, setValidation] = useState({
	email:"",
    password: "",
  });

  //handle submit updates
  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }

  const checkValidation = () => {
    let errors = validation;


    // email validation
    const emailCond =
      "/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)*$/";
    if (!inputValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!inputValues.email.match(emailCond)) {
      errors.email = "Please ingress a valid email address";
    } else {
      errors.email = "";
    }

    //password validation
    const cond1 = "/^(?=.*[a-z]).{6,20}$/";
    const cond2 = "/^(?=.*[A-Z]).{6,20}$/";
    const cond3 = "/^(?=.*[0-9]).{6,20}$/";
    const password = inputValues.password;
    if (!password) {
      errors.password = "password is required";
    } else if (password.length < 6) {
      errors.password = "Password must be longer than 6 characters";
    } else if (password.length >= 20) {
      errors.password = "Password must shorter than 20 characters";
    } else if (!password.match(cond1)) {
      errors.password = "Password must contain at least one lowercase";
    } else if (!password.match(cond2)) {
      errors.password = "Password must contain at least one capital letter";
    } else if (!password.match(cond3)) {
      errors.password = "Password must contain at least a number";
    } else {
      errors.password = "";
    }

   
    setValidation(errors);
  };

  useEffect(() => {
    checkValidation();
  }, [inputValues]);

  const handleSubmit = (e) => {
    e.preventDefault();
		axios
		.post("https://www.melivecode.com/api/login", {
			email: validation.email,
			password: validation.pass,
		})
		.then((res) => {
			localStorage.setItem("token", res.data.token);
            navigate("/home")
		})
		.catch((err) => console.error(err));
  };

  return (
    <div>
      <div className="sign-up-form">
        <form
          id="registrationForm"
          action="/"
          method="POST"
          onSubmit={handleSubmit}
        >
        
       
          <div className="form-control">
            <input
              placeholder="email"
              type="email"
              name="email"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.email}
            />
          </div>
          {validation.email && <p>{validation.email}</p>}

          <div className="form-control">
            <input
              placeholder="password"
              type="password"
              name="password"
              className="input-field"
              onChange={(e) => handleChange(e)}
              value={inputValues.password}
              required
            />
            {validation.password && <p>{validation.password}</p>}
          </div>
          <button type="submit" id="submit-button">
            submit
          </button>
          <span className="form-input-login">
            Already have an account? Login <a href="#">here</a>
          </span>
        </form>
      </div>
    </div>
  );
}

export default RegistrationView;