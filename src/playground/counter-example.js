class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handlePlusOne = this.handlePlusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        };
    }
    componentDidMount() {
    
        try {
            const count = localStorage.getItem('count');
            const countNum = parseInt(count, 10);
            

            if (!isNaN(countNum)) {
                this.setState(() => ({ count: countNum }));
            } else {
                
            };
        } catch (e) {
            console.log('error')
        };
    }
    componentDidUpdate(prevProps, prevState) {
        // console.log('didUpdate')
        if (prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count)
        }
    }
    handlePlusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }
    handleReset() {
        this.setState(() => {
            return {
                count: 0
            }
        })
    }
    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={this.handlePlusOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))