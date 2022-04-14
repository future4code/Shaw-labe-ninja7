import React from 'react'

export default class PaginaInicial extends React.Component {
  render() {
    return (
      <div>
      <header>
        <h1>labeNinjas</h1>
        <button onClick={this.props.irParaHome}>Home</button>
        <button onClick={this.props.irParaCarrinho}>Carrinho</button>
      </header>

      <main>
        <h3>O talento certo no momento certo</h3>
        <button onClick={this.props.irParaCadastro}>Quero ser um ninja</button>
        <button onClick={this.props.irParaServicos}>Contratar um serviço</button>
        </main>

        <footer></footer>
    </div>
    )
  }
}