import React from 'react'
import Card from './Card'
import axios from 'axios'
import {linkApi} from '../constants/Constantes'
import { aut } from '../constants/Constantes'
import { Box, Header, Contaneir, Main, Logo, Tags, Left,Fotodescricao,Descricao, Right, GridBoxServices, BarraDePesquisa } from "./styled";
import Button from '@material-ui/core/Button';

export default class Servicos extends React.Component {

  state ={
    servicos:[],
    ordenacao: ''
  }

  componentDidMount = () =>{
    this.ImportarServicos()
  }

  ImportarServicos = () =>{
    axios.get(`${linkApi}jobs`,aut).then((res)=>{
      this.setState({servicos:res.data.jobs})
    }).catch((err)=>{
      console.log(err.response)
    })
  }

  trocarOrdenacao = (event) =>{
    const tipo = event.target.value
    this.setState({ordenacao:tipo})
  }

  render() {
    
    
    this.ImportarServicos()

    switch (this.state.ordenacao){
      case 'titulo':
      this.state.servicos.sort((x,y)=>{
         let a = x.title.toUpperCase()
         let b = y.title.toUpperCase()

         return a === b ? 0 : a > b ? 1 : -1
      })
      break;
      case 'precocres':
        this.state.servicos.sort((x,y)=>{
           let a = x.price
           let b = y.price
  
           return a === b ? 0 : a > b ? 1 : -1
        })
        break;
        case 'precodec':
        this.state.servicos.sort((x,y)=>{
           let a = x.price
           let b = y.price
  
           return a === b ? 0 : a > b ? -1 : 1
        })
        break;
        case 'prazo':
          this.state.servicos.sort((x,y)=>{
            let a = x.dueDate
            let b = y.dueDate
   
            return a === b ? 0 : a > b ? 1 : -1
         })
         break;
      default :
      this.state.servicos.sort((x,y)=>{
        let a = x.title.toUpperCase()
        let b = y.title.toUpperCase()

        return a === b ? 0 : a > b ? 1 : -1
     })
     break;

    }

    const listaDosProdutos = this.state.servicos.map((elemento)=>{
       return <Card titulo={elemento.title} preco={elemento.price} data={elemento.dueDate} />
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
            <Button onClick={() => this.props.trocaTela("serviço")}>Serviço</Button>
            <Button onClick={() => this.props.trocaTela("carrinho")}>Carrinho</Button>
            
        </Tags>
      </Header>
      
        <BarraDePesquisa>
         
         
          <select
            value={this.state.ordenacao}
            onChange={this.trocarOrdenacao}
          >
            <option value="titulo">titulo</option>
            <option value="precocres">Preço Crescente</option>
            <option value="precodec">Preço Decrescente</option>
            <option value="prazo">Prazo</option>
          </select>
          

          <GridBoxServices>
            {listaDosProdutos}
          </GridBoxServices>
        </BarraDePesquisa>
        </Contaneir>
    )
  }
}