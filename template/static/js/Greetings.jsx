var $ = requrie("jquery");

export default class Greetings extends React.Component {
    constructor(props) {
        super(props);
        this.setState = {greeting: "Welcome " + this.props.name};

        this.getPythonGreetings = this.getPythonGreetings.bind(this); // makes "this" work in the callback
    }

    personalize() {
        this.setState({
            greeting: greeting + " " + this.props.name + "!"
        });
    }

    render() {
        return (
            <h1> { this.state.greeting } </h1>
            <hr/>
            <Button bsSize="large" bsStyle="danger" onClick={this.getPythonGreetings} >
                More Greetings!
            </Button>
        )
    }
}