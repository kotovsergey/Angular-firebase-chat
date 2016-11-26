var config = {
    apiKey: "AIzaSyBuwgK2-_dXDtL8g40GP-Xx9_N5PW4jK8g",
    authDomain: "cbschat-4d10f.firebaseapp.com",
    databaseURL: "https://cbschat-4d10f.firebaseio.com",
    storageBucket: "cbschat-4d10f.appspot.com",
    messagingSenderId: "595291995378"
  };
firebase.initializeApp(config);

angular.module('chatApp', ['firebase'])
