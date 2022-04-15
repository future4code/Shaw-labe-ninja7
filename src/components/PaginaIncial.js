import React from 'react'
import { Box, Header, Contaneir, Main, Logo, Tags, Left,Fotodescricao,Descricao, Right, TextsHomePage } from "./styled";
import Button from '@material-ui/core/Button';



export default class PaginaInicial extends React.Component {
  render() {
    return (
      <Contaneir>
      <Header>
        <Logo>
            <img src="https://i.ibb.co/XStqr9q/Logotipo-Geom-trico-Cosm-ticos-1-removebg-preview.png"/>
        </Logo>

        <Tags>
            <Button onClick={() => this.props.trocar("inicial")}>Página Inicial</Button>
            <Button  onClick={() => this.props.trocar("cadastro")}>Cadastre seu serviço</Button>
            <Button onClick={() => this.props.trocar("serviços")}>serviços</Button>
            <Button onClick={() => this.props.trocar("carrinho")}>Carrinho</Button>
            
        </Tags>
      </Header>
      

      <TextsHomePage>
        <h3>O talento certo no momento certo</h3>
        <button 
        onClick= {()=>this.props.trocar("cadastro")}
        >Cadastre seu serviço</button>
        <button
        onClick= {()=>this.props.trocar("serviços")}
        >Contratar um serviço</button>
      </TextsHomePage>
    
    </Contaneir>
    )
  }
}