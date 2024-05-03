import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateCurrentUser } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase.config";

export const AuthContext = createContext(null)

const ContextComponent = ({children}) => {
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState(null)


    const createUser = (email,password)=> {
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const login = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        setLoading(true)
        return signOut(auth)
    }
    
    const updatePerson = (name,photo) => {
        setLoading(true)
        return updateCurrentUser(auth.currentUser,{
            displayName:name,
            photoURL:photo
        })
    }

   useEffect(()=>{
    const unSubcribe = onAuthStateChanged(auth,currentUser =>{
        if(currentUser){
            setUser(currentUser)
            setLoading(false)
        }
        else{
            setUser(null)
            setLoading(false)
        }
    })
    return () => unSubcribe()
   },[])
    

    const info = {createUser,login,user,loading,updatePerson,logout}
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default ContextComponent;