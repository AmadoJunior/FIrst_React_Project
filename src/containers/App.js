import React, { Component } from 'react';
//CSS import
import './App.css';
//Components
import PersonList from "../components/PersonList/PersonList";
import Main from "../components/Main/Main";

//Context
import AuthContext from "./../context/auth-context";

class App extends Component {
  /**
   * Inside class based components we have a special property named state.
   * State is managed inside a component.
   * It is good practice to use function based componets as often as possible
   */
  state = {
    persons: [ //persons is an array of objects
      {
        id: 1,
        name: "Amado",
        age: 22
      },
      {
        id: 2,
        name: "Max",
        age: 28
      },
      {
        id: 4,
        name: "Joselyn",
        age: 23
      }
    ],
    showPersons: false,
    title: "Hello World",
    authenticated: false
  }

  //The event object is passed automatically by React
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const personsArrayCopy = [...this.state.persons];
    personsArrayCopy[personIndex] = person;

    this.setState({
      persons: personsArrayCopy
    })
  }

  togglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons]; //Makes a copy of the array using spread operator
    persons.splice(personIndex, 1);//here we splice that copy
    this.setState({persons: persons});//then we apply changes
  }

  loginHandler = () => {
    this.setState((prevState) => {
      return {authenticated: !prevState.authenticated}
    })
  }

  //Inside this render method we input our JSX in order to render it using React.
  render() {
    /**
     * We can use a javascript objects as our inline style, in order to Scope certain styles:
     * One restriction is we cannot add hover effects or any other css sudo selectors
     */

    let personsList = null;

    if(this.state.showPersons) {
      personsList = (
        <div>
          <PersonList 
          clickHandler={this.deletePersonHandler}
          changedHandler={this.nameChangedHandler}
          personsArr={this.state.persons}
          />
        </div> 
      )
    }

    return (
        <div className="App">
          <AuthContext.Provider 
          value={
              {
                authenticated: this.state.authenticated,
                login: this.loginHandler
              }
            }>
            <Main
            personsArr={this.state.persons}
            title={this.state.title}
            showPersons={this.state.showPersons}
            togglePersonsHandler={this.togglePersonsHandler}
            />
          {personsList}
          </AuthContext.Provider>
        </div>
    );

    /**
     * In the background React is running this code in order to render the JSX Code above.
     * return React.createElement("div", {className: "App"}, React.createElement("h1", null, "Hello World));
     */
  }
}

/**
 * JSX Limitations
 * ~ClassName is used instead of class because "class" is a javascript keyword.
 * ~Our JSX expression must have one element only, in this case "App" is our root element
 */

export default App;
