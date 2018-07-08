import React from "react";
import Greetings from "./Greetings";
import { PageHeader } from "react-bootstrap";


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