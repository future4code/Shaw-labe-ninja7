import React from 'react'

export default class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1>labeNinjas</h1>
        <button onClick={()=>this.props.trocar("home")}>Home</button>
        <button onClick={()=>this.props.trocar("carrinho")}>Carrinho</button>
      </header>

      <main>
        <h3>O talento certo no momento certo</h3>
        <button 
        onClick= {()=>this.props.trocar("cadastro")}
        >Quero ser um ninja</button>
        <button
        onClick= {()=>this.props.trocar("servicos")}
        >Contratar um ninja</button>
        </main>

        <footer></footer>
    </div>
    )
  }
}