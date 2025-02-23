import { useState } from "react";
import { goBack, backButtonStyle, paddingStyle } from "../../features/goBackBtn";
const Variables = ()=>{

    // const paddingStyle = {
    //     padding: '2rem',
    //     backgroundColor: 'lightgray',
    //     display: 'flex',
    //     flexDirection: 'column',
    //     alignItems: 'center',
    // };

    const whitespace ={
        whiteSpace: "pre",
        fontSize: "12px"
    }

    let numA = 0;
    console.log(`let NumA= ${numA}`)
    const updateNumA =()=>{
        const numA = 1
        console.log(` const NumA = ${numA}`)
    }
    updateNumA();


    const [array, setArray] = useState([1, 2, 3]);
    const [newArray, setNewArray] = useState([]);
    const object = {
        name: 'John',
        age: 50
    }

    const changeArrayValues =()=>{
        const updatedArray = [...array, 4, 5]
        setNewArray(updatedArray);
        changeArrayValues();
    }
    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}> back</div>
            <h4>Változók alapjai:</h4>
            <section>
                <h5>A változóknak három fajtája van:</h5>
                <ul>
                    <li>var</li>
                    <li>let</li>
                    <li>const</li>
                </ul>
                <p><i><b>var:</b></i> A <u>var</u> -nak egy függvény szkópja van, ami azt jelenti, hogy ha függvényen belül hívod meg, akkor csak a függvényen belül érhető el, de ha egy másik blokkon belül akkor a blokkon kívül is elérhető, illetve ha globálisan van meghívva, akkor pedig globálisan lesz elérhető.</p>
                <p><i><b>let: </b></i>A <u>let</u> a blokk szkóp verziója a <u>var</u>-nak. A var-ral ellentétben, a let blokkokon belül vagy globálisan érthető el, mitán deklraláltuk azt. Tehát az adott kód blokkon kívül nem érhető el, míg a <u>var</u> elérhető. <br />PLUSZ: a <u>let</u> bármikor újradekralálható, azaz megkaphat új értéket, amennyiben NEM egy blokkon belül helyezkedik el.</p>
                <p><i><b>const: </b></i>A <u>const</u> egy olyan érték/változó, amit étrehozása után nem tudunk megváltoztatni. A <u>const</u>-nak is blokk szkópja van. <br />A <u>const</u> egy kicsit félrevezető, mert nem tudsz újradefiniálni egy constant értéket, constant tömböt, vagy egy constant objektum-ot, tehát nem tudsz egy constant objectből mást csinálni, pl egy számot belerakni. <br />De a constant tömb és constant objektum ELEMEIT meg tudod változtatni!</p>
            </section>
            <section>
                <h5>Példa: let numA és const numA függvényben:</h5>
                <p><b>Alapértelmezett let numA:</b> <u><i>{numA}</i></u></p>
                <p><b>Frissített const numA:</b> <u><i>{`${updateNumA}`}</i></u></p>
            </section>
            <section>
                <h4>Példa: Tömb és objektum TARTALMÁNAK megváltoztatása:</h4>
                <p>Eredeti "array": {array}</p>
                <p>Eredeti "object": {`{${object.name}, ${object.age}}`}</p>
                <p>Új frissített "newArray" <sup>ehhez useState kell</sup>: {newArray}</p>
            </section>
            <summary>
                <details style={whitespace}>
                    {`npm i firebase

Firebase mappa:
config mappa:
firebaseConfig.js:
{
    "apiKey": "AIzaSyBVSnxIJHlvQxLl6RgRtueOSc8K3lt5EN8",
    "authDomain": "jsx-basics.firebaseapp.com",
    "projectId": "jsx-basics",
    "storageBucket": "jsx-basics.firebasestorage.app",
    "messagingSenderId": "67550982438",
    "appId": "1:67550982438:web:57f2ac648468df22de51e7",
    "measurementId": "G-HRJ34GJ34H"
}

firebaseApp almappa:
getFirebaseApp.js:
import { initializeApp } from "firebase/app";
import firebaseConfig from '../config/firebaseConfig.json'


let firebaseApp = null;

//singleton
export default function getFirebaseApp(){

    if(!firebaseApp){
        firebaseApp= initializeApp(firebaseConfig);
    }

    return firebaseApp;
}

firestoreDb almappa:
appDb.js: import getFirebaseApp from "../firebaseApp/getFirebaseApp";
import { getFirestore } from "firebase/firestore";
let appDb = null;

export default function getAppDb(){
    if(!appDb){
        appDb = getFirestore( getFirebaseApp() )
    }

    return appDb;
}

fő firebase mappába ne felejtsd az index.js-t az exportáláshoz


firebase useEffect:
useEffect(() => {
    const fetchData = async () => {
        const db = getAppDb();
        const foglalasokFire = collection(db, 'foglalasok');
        try {
            const foglalasokSnapshot = await getDocs(foglalasokFire);
            const foglalasokData = foglalasokSnapshot.docs.map(item => item.data());
            console.log(foglalasokData);
            setFoglalasok(foglalasokData);
        } catch (error) {
            console.error('Hiba történt az adatok lekérdezésekor', error);
        }
    };

    fetchData();
}, []); 


form felépítése:

  <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text"
                    id="name"
                    name="username"
                    value={inputValues.username}
                    onChange={handleChange}
                />

                <label htmlFor="age">Age</label>
                <input 
                    type="number"
                    id="age"
                    name="age"
                    value={inputValues.age}
                    onChange={handleChange}
                />

                <label htmlFor="city">City/Village</label>
                <input 
                    type="text"
                    id="city"
                    name="city"
                    value={inputValues.city}
                    onChange={handleChange}
                />

                <button type="submit">Beküldés</button>
            </form>


form adatok kinyerése: 

const [inputValues, setInputValues] = useState({
            username: '',
            age: '',
            city:''
        })

    const handleChange=(event)=>{

        const name = event.target.name;
        const value = event.target.value;
        setInputValues(values=>({...values,[name]:value} ))
    }
    
    const handleSubmit = async (event)=>{
        event.preventDefault();
        const newUser= {username: inputValues.username, age: inputValues.age, city: inputValues.city};

        const response = await fetch('/assets/usersData',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
        });

        if(response.ok){
            const data =await response.json();
            console.log(data)
        } else {
            console.error('Hiba történt a felhasználó hozzáadása során')
        }
    }


form data kiynerése:

 const onSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formValues = Array.from(formData.entries());

           formObj = { ...formObj, sections: campaign.sections };

        addQueryCampaign(formObj)
 }

 ehhez firebaseQuery-t kell létrehozni:
 import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getAppDb } from "../../firebase";

export default async function addQueryCampaign({ title, slug, setting, heroImg, releaseDate, sections }) {

    const db = getAppDb();
    const collCampaigns = collection(db, 'campaigns');

    const dbObj = {
        title,
        slug,
        setting,
        heroImg,
        sections,
        releaseDate: Timestamp.fromDate( new Date(releaseDate) )
    };

    const newDoc = await addDoc( collCampaigns, dbObj );

    console.log(newDoc);
}
`}
                </details>
            </summary>
        </div>
    )
}

export default Variables;