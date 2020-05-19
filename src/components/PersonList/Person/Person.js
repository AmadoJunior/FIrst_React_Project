/* 
    We will create a function based component.
    We are also able to create class based componets(shown in App cmp).
    Instead of extending the Component class like we did in our "App" component.
*/

//We need to import React in order for the JSX to be read.
import React from "react";
//CSS
import styles from "./PersonStyles.module.css";

/**
 * I can pass props to our function from our Parent components
 * Shown bellow:
 * ~When using class-based components, its this.props
 * "props.children refers to any elements between the opening and closing tag
 * of our components"
 * ~Not only can we pass variables as props we can also pass functions as props
 */

const Person = (props) => {

    return (
        <div className={styles.Person}>
            <p onClick={props.click}>My name is: {props.name}</p>
            <p>My age is: {props.age}</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
        /**
         * Anything inside {curlyBrackets} will be run as javascript.
         * We can only execute simple on line expression inside the brackets.
         * Ex. Simple calculations, function calls, variables.
         */
    )

}

export default Person;