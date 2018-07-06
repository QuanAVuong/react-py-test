export default class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {greetings: "Welcome " + this.props.name};

        this.getPythonGreetings = this.getPythonGreetings.bind(this); // makes "this" work in the callback
    }

    personalize() {
        this.setState({
            greetings: greetings + " " + this.props.name + "!"
        });
    }
}