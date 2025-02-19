import MadeGoal from "./MadeGoal";
import MissedGoal from "./MissedGoal";

const TernaryGoal =({isGoalTwo, scoreT, tryScoreT})=>{

    return(
        <div>
            <h1>Rendering GOALS page with Ternary Operator</h1>
            {
                isGoalTwo? <MadeGoal /> : <MissedGoal />
            }
                <button onClick={tryScoreT}>Miss</button>
                <button onClick={scoreT}>Goal</button>

        </div>
        
    )
}

export default TernaryGoal;