import { initializeApp } from "firebase/app";
import "firebase/analytics";

const firebaseConfig = {
	apiKey: process.env.REACT_APP_APIKEY,
	authDomain: process.env.REACT_APP_AUTH_DOMAIN,
	databaseURL: process.env.REACT_APP_DATABASE_URL,
	projectId: process.env.REACT_APP_PROJECT_ID,
	storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
	messagingSenderId: process.env.REACT_APP_MESSSAGING_SENDER_ID,
	appId: process.env.REACT_APP_APP_ID,
};


const app = initializeApp(firebaseConfig);


export default app;
