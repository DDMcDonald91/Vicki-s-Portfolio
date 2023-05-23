import { useContext, createContext, useState, useEffect } from "react";


const PortfolioContext = createContext(null)

export function PortfolioContextProvider({ children }) {
    // global user states

    // Fake Data Start
    const data = [
        {
        'project_title': "project 1",
        'project_description': "blah blah",
        'project_image': 'https://images.unsplash.com/photo-1549980384-d61217e50c4b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=654&q=80',
        'project_id': '0'
        },
        {
        'project_title': "project 2",
        'project_description': "blah blah 2",
        'project_image': 'https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80',
        'project_id': '1'
        },
    ]
    const [loading, setLoading] = useState(false)

    // Fake Data End

/*
---------------------------------
    // Real Data
    const auth = getAuth();
    const [loading, setLoading] = useState(false)
    const [currentUser, setCurrentUser] = useState(null);

    
    // check for Firebase user on load
    useEffect(() => {
        setLoading(true)
        const userCheck = async () => {
            const unsubscribe = auth.onAuthStateChanged(user => {
                setCurrentUser(user)
            })
    
            if(currentUser){
               retrieveUser()
            }

            return unsubscribe
        }
        userCheck()
    }, [currentUser])

    // login user
    const login = (email, password) => {

        // login user w/ firebase function then sets the user
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        setCurrentUser(user)
        console.log(currentUser)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log("Login error:", errorCode, errorMessage)
            alert("Sorry, try entering your credentials again.")
            return
        });
    }

    // logout user
    const logout = async () => {
       await signOut(auth)
        .then(() => {
          // logout successful.
          console.log("User signed out")
          setCurrentUser(null)
          setDocSnap(null)
          setSessionID(null)
          setEventSnap(null)
          setAccountStatus(null)
          setAccountActive(false)
        }).catch((error) => {
          // An error happened.
          console.log("Logout error:", error)
          alert('There seems to be an issue logging out. Refresh your page and try again.')
        });
    }

    // update user password
    const updateUserPassword = async (newPassword) => {
      // checks for a user before attempting password update
      if(!currentUser){
        alert('No user signed in.')
        return
      }
      // run reset password function from firebase
      await updatePassword(currentUser, newPassword).then(() => {
        alert("Password was updated successfully.")
      }).catch((error) => {
        // An error ocurred
        console.log(error)
        alert("Sorry, there seems to be an error. Try refreshing the page and try again.")
        return
      });
    }

    // reset user password
    const resetUserPassword = async (email) => {
      // run update password function from firebase
      await sendPasswordResetEmail(auth, email).then(() => {
        alert("Password reset link sent to your email.")
      }).catch((error) => {
        // An error ocurred
        console.log(error)
        alert("Sorry, there seems to be an error. Try refreshing the page and try again.")
        return
      });
    }

    --------------------------------
    */

    return (
        <PortfolioContext.Provider value={
            {
            //currentUser,
            //login,
            //logout,
            //updateUserPassword,
            //resetUserPassword,
            data,
            loading,
            }
        }>{children}</PortfolioContext.Provider>
    )
}

export const PortfolioContextData = () => {
    return useContext(PortfolioContext)
}