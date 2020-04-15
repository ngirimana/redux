import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTpyes from '../../store/actions';
import { act } from 'react-dom/test-utils';

class Counter extends Component {
    state = {
        counter: 0,
        results:[]
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:

        }

    }

    render() {
        return (
            <div>
                <CounterOutput value={ this.props.ctr } />
                <CounterControl label="Increment" clicked={ this.props.onIncrementCounter } />
                <CounterControl label="Decrement" clicked={ this.props.onDecrementCounter } />
                <CounterControl label="Add 10" clicked={ this.props.onAddCounter } />
                <CounterControl label="Subtract - 15" clicked={ this.props.onSubtractCounter } />
                <hr/>
                <button onClick={this.props.onStoreResult}>Store Ressult</button>
                <ul>
                    {this.props.storedResults.map(strResult=>(
                        <li key={strResult.id}onClick={()=>this.props.onDeleteResult(strResult.id)}>{strResult.value}</li>
                    ))}
                    
                    
                </ul>
            </div>
        );
    }
}
// add mapStateToProps
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        storedResults:state.results
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: actionTpyes.INCREMENT}),
        onAddCounter: () => dispatch({ type: actionTpyes.ADD,val:10 }),
        onDecrementCounter: () => dispatch({ type: actionTpyes.DECREMENT }),
        onSubtractCounter: () => dispatch({ type: actionTpyes.SUBTRACT,val:15 }),
        onStoreResult:()=>dispatch({type:actionTpyes.STORE_RESULT}),
        onDeleteResult:(id)=>dispatch({type:actionTpyes.DELETE_RESULT,resultElId:id})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);