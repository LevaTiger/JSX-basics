import getFirebaseApp from "../firebaseApp/getFirebaseApp";
import { getFirestore } from "firebase/firestore";
let appDb = null;

export default function getAppDb(){
    if(!appDb){
        appDb = getFirestore( getFirebaseApp() )
    }

    return appDb;
}