import React from 'react';
import './ExtraQuestion.css';

const ExtraQuestion = () => {
    return (
        <div>
            <div>
            <br /> <br />
            <hr class="dashed"></hr>
            <br /><br />
            </div>
            <h1>Question & Answer Section</h1>
            <div>
                <div className='question-box'>
                    <h2>How React Work</h2>
                   <p>React just maintains a tree for us and it will do efficient diff computations on the nodes.Our HTML code is pretty much a tree, or at least that’s how our browser treats it. It constructs what is called the Document Object Model or DOM as it’s often referred to.  <br />                

                    ReactDOM recursively creates nodes depending on their ‘type’ property and appends them finally to the DOM. It receives two arguments, first is what to append and the second is what to append to.React needs just one actual div created in HTML file so that it can target that div and sort of hanging his total node tree onto that. That’s why, when we look at React applications, we would most likely see one parent div, onto which the rest of the tree is sort of attached to.</p>
                </div>
                <div className='question-box'>
                    <h2>Difference Between Props and State </h2>
                    <p>
                    # For PROPS, data can be passed from one component to another but for STATE data can be passed within the component only.
                    </p>
                    <p>
                    # While Props is Immutable (cannot be modified), State is Mutable ( can be modified).
                    </p>
                    <p> # Props are read-only but State is both read and write.   </p>
                </div>
                <div className='question-box'>
                    <h2>Use of useEffect</h2>
                    <p>What does useEffect do? By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed , and call it later after performing the DOM updates. In this effect, we set the document title, but we could also perform data fetching or call some other imperative API.
                    Placing useEffect inside the component lets us access the count state variable (or any props) right from the effect. We don’t need a special API to read it — it’s already in the function scope. Hooks embrace JavaScript closures and avoid introducing React-specific APIs where JavaScript already provides a solution.

                    useEffect lets us express different kinds of side effects after a component renders. Some effects might require cleanup so they return a function.Other effects might not have a cleanup phase, and don’t return anything.</p>
                </div>
            </div>
        </div>

    );
};

export default ExtraQuestion;