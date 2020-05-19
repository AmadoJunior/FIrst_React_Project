import React from "react";
import styles from "./Main.module.css";

function Main(props){
    
    let classList = [];
    let buttonStyle = null;

    if(props.personsArr.length <= 2){
        classList.push("red");
    }
    if(props.personsArr.length <= 1){
        classList.push("bold");
    }

    if(props.showPersons){
        buttonStyle = styles.buttonGreen;
    } else {
        buttonStyle = styles.buttonRed;
    }

    return (
        <div>
            <h1>{props.title}</h1>

            <p className={classList.join(" ")}>Dynamic Classes</p>

            <button className={styles.button + " " + buttonStyle} alt={props.showPersons} onClick={props.togglePersonsHandler}>
                Hide/Show
            </button>
        </div>
    )
}

export default Main;