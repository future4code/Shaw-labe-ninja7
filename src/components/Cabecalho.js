import React from 'react'

export default class Cabecalho extends React.Component {
  render() {
    return (
        <div>
        <button onClick={()=>this.props.trocar("inicial")}>Home</button>
        <button onClick={()=>this.props.trocar("carrinho")}>Carrinho</button>
     
        </div>
    )
  }
}