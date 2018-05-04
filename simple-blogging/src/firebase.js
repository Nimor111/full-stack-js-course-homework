import firebase from "firebase";

const config = {
  apiKey: "AIzaSyCMKUCTz3b6-NoiCw89TbDmNHJ3sdW_RMU",
  authDomain: "simple-blogging-df6ab.firebaseapp.com",
  databaseURL: "https://simple-blogging-df6ab.firebaseio.com",
  projectId: "simple-blogging-df6ab",
  storageBucket: "simple-blogging-df6ab.appspot.com",
  messagingSenderId: "777633398262"
};

firebase.initializeApp(config);

export default firebase;
