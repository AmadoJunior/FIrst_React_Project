import React, {useEffect, useRef, useContext} from "react";
import styles from "./Main.module.css";
import AuthContext from "./../../context/auth-context";

function Main(props){

    const authContext = useContext(AuthContext);

    const toggleBtnRef = useRef(null);

    useEffect(() => {
        toggleBtnRef.current.click();

        return () => {
            console.log("Main cleanup work in useEffect");
        }
    }, []);
    
    let classList = [];
    let buttonStyle = null;

    if(props.personsArr.length <= 2){
        classList.push("red");
    }
    if(props.personsArr.length <= 1){
        classList.push("bold");
    }

    if(props.showPersons){
        buttonStyle = styles.buttonRed;
    } else {
        buttonStyle = styles.buttonGreen;
    }

    return (
        <div>
            <h1>{props.title}</h1>

            <p className={classList.join(" ")}>Dynamic Classes</p>

            <button ref={toggleBtnRef} 
            className={styles.button + " " + buttonStyle} 
            alt={props.showPersons} 
            onClick={props.togglePersonsHandler}>
                Hide/Show
            </button>
            <button 
                onClick={authContext.login} 
                className={styles.button + " " + styles.buttonGreen}>
            Log In</button>
        </div>
    )
}

export default Main;