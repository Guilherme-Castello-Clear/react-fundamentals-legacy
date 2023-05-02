import React, {Component} from "react";

export default class Contador extends Component{

    state = {
        numero: this.props.numero || 0
    }

    maisUm = () => {
        this.setState({numero: this.state.numero + 1})
    }

    menosUm = () => {
        this.setState({numero: this.state.numero - 1})
    }

    alterarNumero = (diferenca) => {
        this.setState({numero: this.state.numero + diferenca})
    }

    render(){
        return(
            <div>
                <div>Número: {this.state.numero}</div>
                <button onClick={this.menosUm}>-1</button>
                <button onClick={() => this.alterarNumero(-10)}>-10</button>
                <button onClick={() => this.alterarNumero(10)}>+10</button>
                <button onClick={this.maisUm}>+1</button>

            </div>
        )
    }
}

    // constructor(props){
    //     super(props)
    //     this.maisUm = this.maisUm.bind(this)
    // }