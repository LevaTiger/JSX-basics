import { useEffect, useState } from "react";
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn";
import './szabadulo.css'
import { getAppDb } from "../../features/firebase";
import { collection, getDocs } from "firebase/firestore";
const SzabaduloSzoba =()=>{

const [foglalasok, setFoglalasok] = useState([]);

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



    return( 
        <div className="container" style={paddingStyle}>
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <h1>PLS WORK</h1>
            <div>
                <table className="table-layout">
                    <thead>
                        <tr>
                            <th>Dátum</th>
                            <th>Név</th>
                            <th>Fő</th>
                            <th>Cím</th>
                            <th>Irányítószám</th>
                        </tr>
                    </thead>
                    <tbody>
                    {foglalasok
                        .slice() // hogy ne módosítsuk az eredeti tömböt
                        .sort((a, b) => new Date(b.datum) - new Date(a.datum)) // Dátum szerint csökkenő sorrend
                        .map(({ datum, nev, fo, cim, iranyitoszam }, index) => (
                    <tr key={index}>
                        <td>{datum}</td>
                        <td>{nev}</td>
                        <td>{fo}</td>
                        <td>{cim}</td>
                        <td>{iranyitoszam}</td>
                    </tr>
                        ))}
                    </tbody>

                </table>
            </div>
                
        </div>
    )
}

export default SzabaduloSzoba;