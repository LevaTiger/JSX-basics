import { useState } from "react"
import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"
import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";
import CarsAndOperator from "./carsAndOperator";
import TernaryGoal from "./ternaryGoal";

const Conditionals =()=>{

  const [isGoal, setIsGoal] = useState(true);
  const [isGoalTwo, setIsGoalTwo] = useState(true);

  const borderbtm={
    borderBottom: '1px solid black',
    width: '95%',
    padding: '1rem',
    textAlign: 'center'
  }
    let content
    if(isGoal){
        content = <MadeGoal />
    }
    else {
        content = <MissedGoal />
    }

    const tryScore =()=>{
        setIsGoal(false)
    }
    const score=()=>{
        setIsGoal(true)
    }
    const tryScoreT=()=>{
        setIsGoalTwo(false)
    }
    const scoreT=()=>{
        setIsGoalTwo(false)
    }

    return(
        <div className="container" style={paddingStyle}>
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <div style={borderbtm}>
                {content}
                <button onClick={tryScore}>Miss</button>
                <button onClick={score}>Goal</button>

            </div>
            <div style={borderbtm}>

                <h2 style={borderbtm}>Further codes:</h2>
                <CarsAndOperator />
            </div>
            <div style={borderbtm}>
                <TernaryGoal isGoalTwo={isGoalTwo} tryScoreT={tryScoreT} scoreT={scoreT} />
            </div>
        </div>
    )

}


export default Conditionals

/**Ezt sokal egyszerűbben meg lehet oldani a ternary operátorral:
 * fogod és beírod ezt:     
 * return (
        <div>
            {isGoal ? <MadeGoal /> : <MissedGoal />}
        </div>
    );
 */