import React from "react";
import Person from "./Person/Person";
import {TransitionGroup, CSSTransition} from "react-transition-group";
import "./PersonList.css";

function PersonList(props){
    return(
            <TransitionGroup >
                {
                props.personsArr.map((person, index) => {
                    return (
                        <CSSTransition
                        key={person.id}
                        classNames="listTransition"
                        timeout={{ enter: 500, exit: 300}}>
                            <Person 
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            click={props.clickHandler.bind(this, index)}
                            changed={(event) => props.changedHandler(event, person.id)}
                            />
                        </CSSTransition>
                    )
                })
                }
            </TransitionGroup>
        )
}

export default PersonList;