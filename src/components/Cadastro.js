import React from "react";
import axios from "axios";
import { Box, Header, Contaneir, Main, Logo, Tags, Left,Fotodescricao,Descricao, Right, TextsHomePage } from "./styled";
import styled from "styled-components";
import Button from '@material-ui/core/Button';

export default class Cadastro extends React.Component {
  state = {
    titulo: "",
    descricao: "",
    preço: 0,
    formasDePagamento: [],
    data: "",
  };

  criaTrabalho = () => {
    const url = `https://labeninjas.herokuapp.com/jobs`;
    const body = {
      title: this.state.titulo,
      description: this.state.descricao,
      price: Number(this.state.preço),
      paymentMethods: this.state.formasDePagamento,
      dueDate: this.state.data,
    };
    axios
      .post(url, body, {
        headers: {
          Authorization: "206a72be-784b-4c8c-8597-4bec26b55fd3",
        },
      })

      .then((res) => {
        alert("Serviço criado com sucesso");
        this.setState({
          titulo: "",
          descricao: "",
          preço: "",
          data: "",
          formasDePagamento: [],
        });
      })
      .catch((err) => {
        alert("Erro ao cadastrar, tente novamente");
      });
  };

  onChangeTitulo = (ev) => {
    this.setState({ titulo: ev.target.value });
  };

  onChangeDescricao = (ev) => {
    this.setState({ descricao: ev.target.value });
  };

  onChangePreco = (ev) => {
    this.setState({ preço: ev.target.value });
  };

  onChangeData = (ev) => {
    this.setState({ data: ev.target.value });
  };

  formaPagamento = (e) => {
    let value = Array.from(e.target.selectedOptions, (option) => option.value);
    this.setState({ formasDePagamento: value });
  };

  render() {
    return (
      <Contaneir>
        <Header>
          <Logo>
              <img src="https://i.ibb.co/XStqr9q/Logotipo-Geom-trico-Cosm-ticos-1-removebg-preview.png"/>
          </Logo>

          <Tags>
            <Button onClick={() => this.props.trocaTela("inicial")}>Página Inicial</Button>
            <Button onClick={() => this.props.trocaTela("cadastro")}>Cadastre seu serviço</Button>
            <Button onClick={() => this.props.trocaTela("serviço")}>Serviço</Button>
            <Button onClick={() => this.props.trocaTela("carrinho")}>Carrinho</Button>
            
          </Tags>
        </Header>

        <Main>
          <Left>
            <Descricao>
              <h1>Complete Os Campos Ao Lado</h1> 
              <h1> Para Cadastrar Seu Serviço</h1>
            </Descricao>

            <Fotodescricao>
            <img src="https://i.ibb.co/xssNccq/woman-in-t-shirt-jeans-hold-hand-on-hip-pointing-upper-left-corner-give-advice-asking-question-about.png" />
            </Fotodescricao>
          </Left>

          {/* <div>
            <img src='https://cdn-icons-png.flaticon.com/128/7280/7280854.png'/>
        </div> */}
          <Right>
          <Box>
            <h2>Cadastre seu Serviço</h2>
            <input
              placeholder="Título"
              onChange={this.onChangeTitulo}
              value={this.state.titulo}
            ></input>
            <input
              placeholder=" Descrição"
              onChange={this.onChangeDescricao}
              value={this.state.descricao}
            ></input>

            <input
              placeholder="Preço"
              type="number"
              onChange={this.onChangePreco}
              value={this.state.preço}
            ></input>
            <input
              placeholder="Prazo do serviço"
              type="date"
              onChange={this.onChangeData}
              value={this.state.data}
            ></input>
           
            <select
              multiple
              value={this.state.formasDePagamento}
              onChange={this.formaPagamento}
            >
              <option>Cartão de Crédito</option>
              <option>Cartão de Débito</option>
              <option>Paypal</option>
              <option>Boleto</option>
              <option>Pix</option>
            </select>
            <button onClick={this.criaTrabalho}>Cadastrar</button>
          </Box>
          </Right>
        </Main>
      </Contaneir>
    );
  }
}
