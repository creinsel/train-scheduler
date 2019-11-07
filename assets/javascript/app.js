
//initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyDYo_bP8YkUF3S8XXWT7orHZTMxEhWrJy8",
    authDomain: "train-scheduler-42498.firebaseapp.com",
    databaseURL: "https://train-scheduler-42498.firebaseio.com",
    projectId: "train-scheduler-42498",
    storageBucket: "train-scheduler-42498.appspot.com",
    messagingSenderId: "634416690527",
    appId: "1:634416690527:web:23e022877210c3673eb2ea",
    measurementId: "G-8SLE8SG7Z2"
};


firebase.initializeApp(firebaseConfig);


//variable to use firebase database
var database= firebase.database();

//add rows via user input 

//push rows to firebase database.ref