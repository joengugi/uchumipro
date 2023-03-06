import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,db,
  createUserWithEmailAndPassword,
  
} from "../../../Firebase/Firebase";
import { addDoc, collection } from 'firebase/firestore';

const Authentication = () => {

  const [email, setEmail] = useState("");
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const navigate = useNavigate();
  const [ loading, error] = useAuthState(auth);


  const Register = async (event) => {
    event.preventDefault();

    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth,email, password);
      const  {user}  = userCredential;

      // Save user details to Firestore
      const userRef = addDoc(collection(db ,'entrepreneur',),{
        uid:user.uid,
        email,
        firstName:firstName,
        lastName:lastName,

       });

      // Log success
      console.log('User registered:', user);
      navigate("/entrepreneur")
    } catch (error) {
      // Log error
      console.error('Error registering user:', error);
    }
  }; 


  
  return (
    <div>
      <input
          type="text"
          className="register__textBox"
          value={firstName}
          onChange={(e) => setfirstName(e.target.value)}
          placeholder="First Name"
        />

        <input
          type="text"
          className="register__textBox"
          value={lastName}
          onChange={(e) => setlastName(e.target.value)}
          placeholder="Last Name"
        />

        <input
          type="text"
          className="register__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"

        />

        <input
          type="text"
          className="register__textBox"
          value={password}
          onChange={(e) => setpassword(e.target.value)}
          placeholder="Password"
        />

        <input
          type="text"
          className="register__textBox"
          value={confirmPassword}
          onChange={(e) => setconfirmPassword(e.target.value)}
          placeholder="Repeat password"
        />

        <button className="register__btn" onClick={Register}>
          Register
        </button>

        <div>
          Already have an account? <Link to="/EntrepreneurLogin">Login</Link> now.
        </div>
    </div>
  )
}

export default Authentication































// import React, { useState, useEffect } from 'react';
// import { Avatar, Container, Paper, Grid, Typography, Button } from "@material-ui/core";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// // import { useDispatch } from 'react-redux';
// import {  useNavigate } from "react-router-dom"
// import {useAuthState} from "react-firebase-hooks/auth"
// import { addDoc, collection } from 'firebase/firestore'
// import useStyles from './Styles';
// import Input from './Input';

// import {
//   auth,
//   signIn,
//   db,
// } from "../../../Firebase/Firebase"

// const Auth = () => {
//   const classes = useStyles();
//   // const initialState = {selectedOption:'', firstName: '', lastName: '', email: '', password: '', confirmPassword: ''};
//   // const [formData, setFormData] = useState(initialState)
//   const [ showPassword, setShowPassword ] = useState(false);
//   const [isSignedUp, setIsSignedUp] = useState(false);
//   const [selectedOption, setSelectedOption] = useState('');
//   const [user,loading] = useAuthState(auth);
//   const history = useNavigate();

//   const [firstName, setFirstName ] = useState("");
//   const [lastName, setLastName ] = useState("");
//   const [email, setEmail ] = useState("");
//   const [password, setPassword ] = useState("");
//   const [confirmPassword, setConfirmPassword ] = useState("");



//   const handleShowPassword = () =>setShowPassword((prevShowPassword) => !prevShowPassword); 

//   const handleSubmit = (e) => {
//     e.preventDefault();
//   }

//   // const handleChange = (e) => {
//   //   setFormData({...formData, [e.target.name]: e.target.value });
//   // }

//   const switchMode = () => {
//     setIsSignedUp((prevIsSignedUp) => !prevIsSignedUp);
//     setShowPassword(false);
//   }

  

//   function handleOptionChange(event) {
//     setSelectedOption(event.target.value);
//   }

//   const SignIn = (e) =>{
//     e.preventDefault();
//     const signIn = async (name,email, password ) => {
//           try{
//               const res = await createUserWithEmailAndPassword(auth, name, email, password);
//               const user = res.user;
              
          
//             .then((user) => {
//                 if (selectedOption === "investor") {
//                    addDoc(collection(db, "investors")).add({
//                     email: user.email,
//                     firstName: user.firstName,
//                     lastName: user.lastName,
//                     selectedOption: user.selectedOption,
//                     password: user.password
//                     }) 
//                     .then(() => { console.log("user has been registered as:", selectedOption);})
//                     .catch((error) => {console.error(error)});
//                 } else if(selectedOption === "entrepreneur") {
//                     addDoc(collection(db, "users")).add({
//                       email: user.email,
//                       firstName: user.firstName,
//                       lastName: user.lastName,
//                       selectedOption: user.selectedOption,
//                       password: user.password
//                     })
//                     .then(() => { console.log("user has been registered as:", selectedOption);})
//                     .catch((error) => {console.error(error)});
//                 }
//                 user.updateProfile({selectedOption: selectedOption})
                
               
//             })
//             // .catch((error) => {console.error(error)})
//   }

//   useEffect(() => {
//     if(loading) return;
//     if(user && selectedOption === "entrepreneur") {history("/Ehome")} else if (user && selectedOption === "investor") {history("/investorHome")};
// }, [user,history, selectedOption, loading]);

//   return (
//     <Container component="main" maxWidth = "xs">
//       <Paper className={classes.Paper} elevation ={3}>
//         <Avatar className={classes.Avatar}>
//           <LockOutlinedIcon />
//         </Avatar>
//         <Typography variant='h5'> {isSignedUp? "Sign Up" : "Sign In"} </Typography>
//         <form className={classes.form} onSubmit = {handleSubmit} />
//           <Grid container spacing={1}>
//             {
//               isSignedUp && (
//                 <>
//                   <label> Select account type </label>
//                   <select value={selectedOption} onChange={handleOptionChange}>
//                     <option value="investor"> investor </option>
//                     <option value="entrepreneur"> entrepreneur </option>
//                   </select>
//                   <Input value={firstName} label="First Name" onChange =  {(e) => setFirstName(e.target.value)} autoFocus half/>
//                   <Input value={lastName} label="Last Name" onChange =  {(e) => setLastName(e.target.value)} set half/>
//                 </>
//               )
//             }  
//             {/* <select value={selectedOption} onChange={handleOptionChange}>
//               <option value="">Select an option</option>
//               <option value="investor"> investor </option>
//               <option value="entrepreneur"> entrepreneur </option>
//             </select>           */}
//             <Input name="email" value = {email} label="Email Address"  onChange =  {(e) => setEmail(e.target.value)} type= "email"/>
//             <Input name="password" value = {password} label="Enter password"  onChange =  {(e) => setPassword(e.target.value)} type= {showPassword ? "text" : "password"} handleShowPassword={handleShowPassword}/>
//             {isSignedUp && <Input name="confirmPassword" value = {confirmPassword} label = "Repeat Password" onChange =  {(e) => setConfirmPassword(e.target.value)} type= "password"/> } 
//           </Grid>

//           <Button type='submit' fullWidth variant='contained' color='primary' onClick={SignIn} Link to = "/Ehome" className={classes.submit}>
//             {isSignedUp ? "Sign up" : 'Sign in'}
//           </Button>
//           <Grid container justifyContent="flex-end">
//             <Grid item>
//               <Button onClick={switchMode}>
//                 {isSignedUp ? "Already have an account? Sign In" : "Don't have an account? Sign up"}
//               </Button>
//             </Grid>
//           </Grid>
//       </Paper>
//     </Container>
//   )
// }

// export default Auth