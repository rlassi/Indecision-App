class ToggleVisibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false,
            details: 'some details to show!'
        }
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            }
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggleVisibility}>
                    {this.state.visibility ? 'Hide Details' : 'Show Details'}
                </button>
                {
                    this.state.visibility && <p key="1">{this.state.details}</p>
                }
            </div>
        )
    }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app'))