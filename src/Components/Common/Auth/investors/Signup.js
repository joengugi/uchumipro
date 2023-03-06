import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  auth,db,
  createUserWithEmailAndPassword,
  
} from "../../../../Firebase/Firebase";
import { addDoc, collection } from 'firebase/firestore';

const Signup = () => {

    const [email, setEmail] = useState("");
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const Register = async (event) => {
        event.preventDefault();
    
        try {
          // Create user with email and password
          const userCredential = await createUserWithEmailAndPassword(auth,email, password);
          const { user } = userCredential;
    
          // Save user details to Firestore
          const userRef = addDoc(collection(db ,'investors',),{
            uid:user.uid,
            email,
            firstName:firstName,
            lastName:lastName,
    
           });
    
          // Log success
          console.log('User registered:', user);
          navigate("/investor")
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
          Already have an account? <Link to="/investorLogin">Login</Link> now.
        </div>
    </div>
  )
}

export default Signup