import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBJf4cJOGKqE-BOOQscwVMSvyWzyEC8gZU",
    authDomain: "whatsppclone-63d04.firebaseapp.com",
    projectId: "whatsppclone-63d04",
    storageBucket: "whatsppclone-63d04.appspot.com",
    messagingSenderId: "532313347320",
    appId: "1:532313347320:web:723373e041c54dc0d6570d",
    measurementId: "G-P3WP0HZTV8"
  };

  const app = initializeApp(firebaseConfig);
  export const firebaseAuth = getAuth(app);