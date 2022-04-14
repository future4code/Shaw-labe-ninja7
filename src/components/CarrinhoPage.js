import React from 'react'
import CarrinhoCard from './CarrinhoCard'

class CarrinhoPage extends React.Component {

  render() {
      //map do carrinho
      const itensDoCarrinho = this.props.produtosOrdenadosCarrinhoPage && this.props.produtosOrdenadosCarrinhoPage.map((item) => {
          return <CarrinhoCard
              quantidade={item.quantidade}
              nome={item.name}
              onClick={() => console.log("fununcia")}
          />
      })
          return (
                <div>
                    <h2>Carrinho</h2>
                    <div>
                        {itensDoCarrinho}
                    </div>
                    <p>
                        Valor Total: R$ {this.props.valorTotal}
                    </p>
                </div>
            )
    }    
  }
export default CarrinhoPage