import ChildPropFunction from "./ChildPropFunction";
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"


const PropFunction =()=>{

    const handleClickBtn=()=>{
        alert('Gomb megnyomva!')
    }

    const handleClickBtnTwo=()=>{
        alert('másik gomb megnyomva!')
    }
    const hr ={
        borderBottom: '5px solid black'
    }

    const marginCenter ={
        marign:'0 auto',
        backgroundColor: 'white',
        width: '90%',
        padding: '.5rem'
    }

    return(
        <div className="container" style={paddingStyle}>
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <div style={hr}>
            <h1>Szülő rész</h1>
            <p>ez a rész teljesen a szülő komponenshez tartozik, ami átad egy onlick függvényt</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iusto eveniet rem repellendus, velit minus distinctio optio alias. Ipsam nihil cupiditate aspernatur, sit voluptatum modi veritatis accusamus unde temporibus maiores reiciendis voluptas magnam quae velit minus quia labore ex deleniti dicta saepe, recusandae dolore. Beatae consequatur mollitia corrupti impedit ipsam.</p>
            </div>
          
            <h2>Gyermek rész:</h2>
            <ChildPropFunction onClick={handleClickBtn} margin={marginCenter} onClickTwo={handleClickBtnTwo} />
        </div>
    )
}

export default PropFunction;