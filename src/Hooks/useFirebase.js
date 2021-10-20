import { getAuth, signOut, signInWithPopup, GoogleAuthProvider,  createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, updateProfile, getRedirectResult, onAuthStateChanged } from "firebase/auth";

import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.initilize";


initializeAuthentication()
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  const [name,setName]=useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [isLogin, setIsLogin] = useState(false)

  const auth = getAuth();
  const Googleprovider = new GoogleAuthProvider();

  // --------- using google to sign in---------
  const SignInUsingGoogle = () => {

    return signInWithPopup(auth, Googleprovider)

  }
  const handleRegistration = (e) => {
    e.preventDefault();
    // console.log(email, password);
    if (password.length < 6) {
      setError("Warning: Password must be 6 character long")
      return
    }

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please Enter at least 2 uppercase!")
      return

    }

    isLogin ? loginAccount(email, password) : registerNewAccount(email, password);



  }

  const registerNewAccount = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        console.log(user);
        setError('')
        verifyMail();
        setUserName();
      }).catch(error => {
        setError(error.message)
      })


  }
  const loginAccount = (email, password) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(result => {
        const user = result.user
        // console.log(user);
        setError('')
      }).catch(error => {
        setError(error.message)
      })

  }



  const handleName = (e) => {
    setName(e.target.value)

  }

  const setUserName = () => {
    updateProfile(auth.currentUser, { displayName: name })
      .then(result => { })
  }
  const handleEmail = (e) => {
    // e.preventDefault();
    setEmail(e.target.value);

  }

  const handlePassword = (e) => {
    // e.preventDefault();
    setPassword(e.target.value);

  }

  const toggleHandle = (e) => {
    setIsLogin(e.target.checked)

  }
  const verifyMail = () => {
    sendEmailVerification(auth.currentUser)
      .then(result => {
        console.log(result);
      })
  }


  const resetPassword = () => {
    sendPasswordResetEmail(auth, email)
      .then(result => { })
  }



  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user)
      }
      else {
        setUser({})
      }
      setIsLoading(false)
    })
  }, [])
  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})
      }, [])
  }

  return {
    user,
    error,
    SignInUsingGoogle,
    
    handleRegistration,
    registerNewAccount,
    loginAccount,
    handleName,
    setUserName,
    handleEmail,
    handlePassword,
    toggleHandle,
    verifyMail,
    resetPassword,
    isLogin,
    isLoading,
    logOut
  }




};

export default useFirebase;