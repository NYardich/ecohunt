import firebase from 'firebase';
var config = {
        apiKey: "AIzaSyA8-UfjKKKrpdRtBUkdnKTmp7yJkPR9GWk",
        authDomain: "ecohunt-hackgt.firebaseapp.com",
        databaseURL: "https://ecohunt-hackgt.firebaseio.com",
        projectId: "ecohunt-hackgt",
        storageBucket: "ecohunt-hackgt.appspot.com",
        messagingSenderId: "139378866810",
        appId: "1:139378866810:web:7c8562ff03ddb3409499c3"
      };
  var firebaseConfig = firebase.initializeApp(config);
  export default firebaseConfig;