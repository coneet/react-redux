import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increase, decrease } from '../redux/Count';

class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <>
                <h3>Count : {this.props.total}</h3>
                <button onClick={this.props.add}>+</button>
                <button onClick={this.props.minus}>-</button>
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        total: state.total
    }
}

const mapDispatchToProps = (distach) => {
    return {
        add: () => { distach(increase())},
        minus: () => {distach(decrease())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
