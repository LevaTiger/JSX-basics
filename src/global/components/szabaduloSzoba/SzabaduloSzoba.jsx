import { useEffect, useState } from "react";
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn";
import './szabadulo.css'
import Felvetel from "./ujFelvetel";
const SzabaduloSzoba =()=>{

const [foglalasok, setFoglalasok] = useState([]);

useEffect(()=>{
    const fetchData = async () =>{
        try{
            const response = await fetch('/assets/foglalasok.json');
            const responseData = await response.json();
            
            setFoglalasok(responseData);
        } catch(error){
            console.error('Hiba történt az adatok lkérdezésekor', error)
        }
    };
    fetchData();
    
}, []);

    return( 
        <div className="container" style={paddingStyle}>
            <div style={backButtonStyle} onClick={goBack}>Back</div>
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
                <Felvetel />
        </div>
    )
}

export default SzabaduloSzoba;