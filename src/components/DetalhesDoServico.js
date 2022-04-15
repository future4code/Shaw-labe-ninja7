import React from 'react'
import { Box, Header, Contaneir, Main, Logo, Tags, Left,Fotodescricao,Descricao, Right } from "./styled";

export default class DetalhesDoServico extends React.Component {
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
          Detalhes do serviço
        </div>
        </Contaneir>
    )
  }
}