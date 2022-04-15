import React from "react";
import  Cards from './Card'

export class CarrinhoCard extends React.Component {
    render() {
        return (
            
            <Cards>
                <p>{this.props.quantidade}</p>
                <p>{this.props.titulo}</p>
                <button onClick={() => this.props.onClick}>Remover</button>
            </Cards>
        )
    }
}

export default CarrinhoCard
