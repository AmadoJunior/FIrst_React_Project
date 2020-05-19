import React from "react";
import Person from "./Person/Person";

function PersonList(props){
    return(
        <div>
        {
        props.personsArr.map((person, index) => {
            return (
            <Person 
            name={person.name}
            age={person.age}
            key={index}
            click={props.clickHandler.bind(this, index)}
            changed={(event) => props.changedHandler(event, person.id)}
            />
            )
        })
        }
        </div>
        )
}

export default PersonList;