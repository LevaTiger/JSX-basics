import { backButtonStyle, goBack, paddingStyle } from "../../features/goBackBtn"


import { name, age } from "./person.js"
import messageExported from './message.js'
const JsModule =()=>{

    console.log(name, age)
    console.log(messageExported())
    return(
        <div style={paddingStyle} className="container">
            <div style={backButtonStyle} onClick={goBack}>Back</div>
            <h3>Check console for further information about moduels</h3>
            <p>Basically: modules are used to store functions or variables in external JS files.
                Then you can import them: <span><b><i>import {`{name, age}`}</i> from "./person.js"</b></span>
            </p>
        </div>
    )
}


export default JsModule;