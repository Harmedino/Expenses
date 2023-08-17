import React, { useEffect, useState } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import {auth} from '../Firebase'


function AuthCheck() {
    const [authUser,setAuthUser] = useState(null)
    
    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                
            }
        })
    },[])
    return (
        <div></div>
    )
}

export default AuthCheck