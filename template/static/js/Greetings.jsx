import React from "react";
import { Button } from "react-bootstrap";

var $ = require("jquery");

export default class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.state = {greeting: "Welcome " + this.props.name};

        // binding functions not called with () to avoid getting this == undefined
        this.getPythonGreetings = this.getPythonGreetings.bind(this); 
    }

    personalize(greeting) {
        this.setState({
            greeting: greeting + " " + this.props.name + "!"
        });
    }

    getPythonGreetings() {
        $.get(window.location.href + "greetings",
            (data) => {
                console.log(data);
                this.personalize(data);
            }
        )
    }

    render() {
        return (
            <div>
                <h1> { this.state.greeting } </h1>
                <hr/>
                <Button bsSize="large" bsStyle="danger" onClick={this.getPythonGreetings} >
                    More Greetings!
                </Button>                
            </div>
        )
    }
}