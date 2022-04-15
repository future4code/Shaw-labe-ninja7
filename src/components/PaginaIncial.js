import React from 'react'
import { Box, Header, Contaneir, Main, Logo, Tags, Left,Fotodescricao,Descricao, Right } from "./styled";



export default class PaginaInicial extends React.Component {
  render() {
    return (
      <Contaneir>
      <Header>
        <Logo>
            <img src="https://i.ibb.co/XStqr9q/Logotipo-Geom-trico-Cosm-ticos-1-removebg-preview.png"/>
        </Logo>

        <Tags>
          <h3>Cadastre seu serviço</h3>
          <h3>Página Inicial</h3>
        </Tags>
      </Header>
      

      <div>
        <h3>O talento certo no momento certo</h3>
        <button 
        onClick= {()=>this.props.trocar("cadastro")}
        >Cadastre seu serviço</button>
        <button
        onClick= {()=>this.props.trocar("servicos")}
        >Contratar um serviço</button>
        </div>
    
    </Contaneir>
    )
  }
}