
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

var trainName="";
var destination="";
var firstTrainTime="";
var frequencyMin="";

var time= moment().format('LTS')
$("#tic-toc").html(time);

//event listener
$(".btn").on("click", function(event){
    event.preventDefault();

    trainName=$("#train-name").val().trim();
    destination=$("#destination").val().trim();
    firstTrainTime=$("#first-train-time").val().trim();
    frequencyMin=$("#frequency").val().trim();
   

    $("#row").append('<tr>'+ '<td>'+ trainName+ '</td>'+ '<td>'+ destination+ '</td>'+ '<td>'+ frequencyMin+ '</td>'+ '<td>'+ firstTrainTime+ '</td>'+ '<td>'+ " " + '</td>'+'</tr>')

    database.ref().push({
        trainName,
        destination,
        firstTrainTime,
        frequencyMin
    })
})


//add rows via user input 

//push rows to firebase database.ref