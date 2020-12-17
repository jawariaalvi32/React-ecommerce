import firebase from '../../config/firebase';

const Signup = (data) => {
    console.log("DAta", data)
    firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
    .then((user) => {
        console.log(user)
        return dispatch => {  
            dispatch({
                type:"SIGNEDUP",
                payload: true
            })
        }        
    })
    .catch((error) => {
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

const Login = (data) => {
    console.log("DAta", data)
    firebase.auth().signInWithEmailAndPassword(data.email, data.password)
    .then((user) => {
        let createUser = {
            email: user.email,
            uid:user.uid
        }
        return dispatch => {  
            dispatch({
                type:"SETUSER",
                payload: createUser
            })
        }   
    })
    .catch((error) => {
        console.log(error)
        var errorCode = error.code;
        var errorMessage = error.message;
    });
}

export {
    Signup,
    Login
}