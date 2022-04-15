import React from 'react'
import CarrinhoCard from './CarrinhoCard'
import { Box, Header, Contaneir, Main, Logo, Tags, Left,Fotodescricao,Descricao, Right } from "./styled";
import Button from '@material-ui/core/Button';

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
            <Contaneir>
      <Header>
        <Logo>
            <img src="https://i.ibb.co/XStqr9q/Logotipo-Geom-trico-Cosm-ticos-1-removebg-preview.png"/>
        </Logo>

        <Tags>
            <Button onClick={() => this.props.trocaTela("inicial")}>Página Inicial</Button>
            <Button onClick={() => this.props.trocaTela("cadastro")}>Cadastre seu serviço</Button>
            <Button onClick={() => this.props.trocaTela("serviços")}>Serviços</Button>
            <Button onClick={() => this.props.trocaTela("carrinho")}>Carrinho</Button>
            
        </Tags>
      </Header>
      
                <div>
                    <h2>Carrinho</h2>
                    <div>
                        {itensDoCarrinho}
                    </div>  
                    <p>
                        Valor Total: R$ {this.props.valorTotal}
                    </p>
                </div>
                </Contaneir>
            )
    }    
  }
export default CarrinhoPage