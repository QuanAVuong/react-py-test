import React from "react";
import Greetings from "./Greetings";
import { PageHeader } from "react-bootstrap";

// not having this line prevented bundling of fullstack.css to dist/styles.css
require('../css/fullstack.css');

export default class App extends React.Component {
    render(){
        return (
            <PageHeader>
                <div className="header-contents">
                    <p>App.jsx</p>
                    <Greetings name="World" />
                </div>
            </PageHeader>
        );
    }
}