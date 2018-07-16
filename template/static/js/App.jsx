import React from "react";
import Greetings from "./Greetings";
import { PageHeader } from "react-bootstrap";

require('../css/fullstack.css');

// import HeaderBackgroundImage from '../images/header2.jpg';
import HeaderBackgroundImage from '../images/1.gif';

export default class App extends React.Component {

    addHeaderImg() {
        let headerBg = new Image();
        headerBg.src = HeaderBackgroundImage;
    }

    render(){
        return (
            <PageHeader>
                <div className="header-contents">
                    <p>App.jsx</p>
                    {this.addHeaderImg()}
                    <Greetings name="World" />
                </div>
            </PageHeader>
        );
    }
}