import { Link } from 'react-router';
import './js-projects.css'


const JsProjects =()=>{

 
    return(
        <div className='container'>
            <div className='nav-buttons-div'>
                <div>

                    <Link to={'/functions'}>Functions</Link>
                </div>
                <div>
                    <Link to={"/variables"}>Variables</Link>
                </div>
                <div>
                    <Link to={"/arrays"}>Arrays</Link>
                </div>
                <div>
                    <Link to={"/destructuring"}>Destructuring</Link>
                </div>
                <div>
                    <Link to={"/spreadOperator"}>SpreadOperator</Link>
                </div>
                <div>
                    <Link to={"/JsModule"}>JsModule</Link>
                </div>
                <div>
                    <Link to={"/ternary-operator"}>TernaryOperator</Link>
                </div>
                <div>
                    <Link to={"/props"}>Props</Link>
                </div>
                <div>
                    <Link to={"/propfunction"}>Prop a Function</Link>
                </div>
                <div>
                    <Link to={"/onclick"}>Events</Link>
                </div>
                <div>
                    <Link to={"/conditional-rendering"}>Conditional</Link>
                </div>
                <div>
                    <Link to={"lists"}>Lists</Link>
                </div>
                <div>
                    <Link to={"forms"}>Forms</Link>
                </div>
                <div>
                    <Link to={"hooks"}>Hooks</Link>
                </div>
                <div>
                    <Link to={"szabaduloSzoba"}>Szabaduló - Gyakorlás</Link>
                </div>
            </div>
            <div className="article">
                <h1>Szevasz olvasó!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate consectetur dicta repellendus veniam. Libero odio accusamus sunt officia sed ducimus aspernatur ipsum perferendis aliquam rem. Reprehenderit, inventore! Ad officia cum aut deserunt consequatur optio architecto tempora asperiores harum. Perferendis id qui eos debitis, illo quam minima! Blanditiis dolores voluptatem iste?</p>
            </div>
        </div>
    )
}

export default JsProjects;