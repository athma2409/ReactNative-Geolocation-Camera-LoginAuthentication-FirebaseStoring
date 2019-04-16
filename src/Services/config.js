//creating one config object to store details from firebase.//We will get all ready inside firebase > ProjectOverView > < />
import Firebase from 'firebase';
var config = {

    apiKey: "AIzaSyCi9Rme_TzP7UH5qjWmYolXP9Pvo-ixGuc", //  Firebase > settings > Project settings
   
    projectId: "fir-demo-8a194",

    authDomain: "fir-demo-8a194.firebaseapp.com", //Firebase > authentication > sign-in-method > Authorized domain

    databaseURL: "https://fir-demo-8a194.firebaseio.com", // Firebase > Database > Realtime Database > Link 

    storageBucket: "fir-demo-8a194.appspot.com",

    messagingSenderId: "913930738807" // Firebase > settings > cloud messaging

};
let app = Firebase.initializeApp(config); //To initializeApp

export const db = app.database(); //For Database operations

export const firebaseApp=app.auth();