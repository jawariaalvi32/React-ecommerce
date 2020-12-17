import React from 'react'

function Success() {
    const {email,
         password,
         handleLogin,
         handleSignup,
         hasAccount,
         setHasAccount,
         emailError,
         passwordError,
        }=props;
    React.useEffect(() => {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {
            // Signed in 
            // ...
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            // ..
        });
    })
    return (
        <div>
            
        </div>
    )
}

export default Success
