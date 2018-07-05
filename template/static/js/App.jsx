import React from "react";
import Greetings from "./Greetings";
import { PageHeader } from "react-bootstrap";


export default class App extends React.Component {
    render(){
        return (
            <PageHeader>
                <div className="header-contents">
                    <Greetings name="Quan" />
                </div>
            </PageHeader>
        );
    }
}