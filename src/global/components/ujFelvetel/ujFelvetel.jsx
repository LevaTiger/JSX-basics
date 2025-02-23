import { useEffect, useState } from "react";


const Felvetel =()=>{

    const [uj, setUj] = useState({
        cim: "",
        datum: "",
        fo: "",
        iranyitoszam: "",
        nev: ""
    });
    const [data, setData] =useState([])

    const handleChange=(e)=>{
        const {name, value} = e.target;
        setUj({
            ...uj, [name]: value
        });
    };

    const handleSubmit = async (e)=>{
        e.preventDefault();


        try {
                const response = await fetch('/assets/foglalasok.json',{
                    method: 'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(uj)
                });

                if(response.ok){
                    const newData = await response.json();
                    setData((prevData)=>[...prevData, newData]);
                    setUj({cim:'', datum: '', fo: '', iranyitoszam: '', nev: ''})
                } else{
                    console.error('Hiba történt a posztolás során')
                }
            }catch (error){
                console.error('Hálózati hiba:', error);
            }
            
          

        }
    

   
    return(
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="cimEl">Cím: </label>
                <input type="text" name="cim" value={uj.cim} id="cimEl" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="datumEl">Dátum: </label>
                <input type="date" name="datum" value={uj.datum} id="datumEl" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="foEl">Fő: </label>
                <input type="number" name="fo" value={uj.fo} id="foEl" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="iranyitoszamEl">IRSZ: </label>
                <input type="number" name="iranyitoszam" value={uj.iranyitoszam} id="iranyitoszamEl" onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="nevEl">Név: </label>
                <input type="text" name="nev" value={uj.nev} id="nevEl" onChange={handleChange} />
            </div>
            <button type="submit">Beküldés</button>
        </form>
    )
}

export default Felvetel;