// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.6.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAtuWsrjByIaTCxEh3WC3aasdTEeidR3n4",
    authDomain: "signup-form-81b01.firebaseapp.com",
    projectId: "signup-form-81b01",
    storageBucket: "signup-form-81b01.appspot.com",
    messagingSenderId: "241029541836",
    appId: "1:241029541836:web:3b4279281b4bad0d58b769"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

var firstname = document.getElementById("firstname");
var lastname = document.getElementById("lastname");
var email = document.getElementById("Email");
var passwords = document.getElementById("password");

window.signup = function (e) {
    e.preventDefault();
    var obj = {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        passwords: passwords.value,
    };

    createUserWithEmailAndPassword(auth, obj.email, obj.passwords)
        .then(function (userCredential) {
            // After successful signup, you can access the user information from userCredential.user
            var user = userCredential.user;
            console.log("Signup Successful. User UID:", user.uid);

            // Redirect to the home page or any other desired page
            window.location.href = "index.html"; // Replace "index.html" with your actual home page URL
        })
        .catch(function (error) {
            // Handle signup errors
            console.error("Signup failed:", error.message);
            alert("Signup failed. Please check your information and try again.");
        });
};
