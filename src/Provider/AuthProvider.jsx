import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';

import { createContext, useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../Auth/Auth.init';
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);

  const [loader, setLoader] = useState(true);
  const handleGoogleBUtton = () => {
    setLoader(true);
    return signInWithPopup(auth, GoogleProvider).then((res) =>
      setUser(res.user),
    );
  };

  const handleLogin = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const handleRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const LogOut = () => {
    setLoader(true);
    return signOut(auth);
  };

  const ForgotPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  const ManageProfile = (name, image, email) => {
    setLoader(true);
    updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
      email: email,
    })
      .then(() => {
        setUser((prevUser) => ({
          ...prevUser,
          displayName: name,
          photoURL: image,
          email: email,
        }));
      })
      .finally(() => {
        setLoader(false);
      });
  };

  useEffect(() => {
    const Observer = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      Observer();
    };
  }, []);

  const AuthInfo = {
    handleGoogleBUtton,
    handleRegister,
    setUser,
    LogOut,
    user,
    handleLogin,
    ManageProfile,
    loader,
    ForgotPassword,
  };
  return (
    <div>
      <AuthContext.Provider value={AuthInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
