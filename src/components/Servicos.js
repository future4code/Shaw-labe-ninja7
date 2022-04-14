import React from 'react'
import Card from './Card'
import axios from 'axios'
import styled from 'styled-components'
import {linkApi} from '../constants/Constantes'
import { aut } from '../constants/Constantes'

const ExibeProdutos = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #145a80;

    .busca{
      display: flex;
      background-color:#122335;
      height: 5em;
      width: 100%;
      align-items: center;
      justify-content: space-around;

    }

    .cards{
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      flex-wrap: wrap;
      width: 80%;
      margin: 0 auto;
      

    }
`

export default class Servicos extends React.Component {

  state ={
    servicos:[],
    ordenacao: '',
    busca: "",      
    precoMin: "",  
    precoMax: "1000000",

  }

  
  componentDidMount = () =>{
    this.ImportarServicos()
    this.retornarBusca()
    
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

  //

  atualizaBusca = (event) => {
    this.setState({ busca: event.target.value })
    this.setState({setBusca: !this.state.setBusca})
  }
  atualizaMinPreco = (event) => {
    this.setState({ precoMin: event.target.value })
    
  }
  atualizaMaxPreco = (event) => {
    this.setState({ precoMax: event.target.value })
   
    
  }
  retornarBusca = () =>{
  
      this.setState({setBusca:false})
    
  }


  render() {
    
    if (this.state.precoMax === "" ) {
      this.setState({precoMax:"10000000000000000"})
    }
    
   

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

   

    

    const listaDosProdutos = this.state.servicos.filter((elemento) =>{
      return elemento.price >= this.state.precoMin && elemento.price <= this.state.precoMax
    }).filter((job)=>{
      return job.title.toLowerCase().includes(this.state.busca.toLowerCase()) || job.description.toLowerCase().includes(this.state.busca.toLowerCase())
    }).map((elemento)=>{
      return <Card titulo={elemento.title} preco={elemento.price} data={elemento.dueDate} />
    })
    
    
    
    

    return (
        <ExibeProdutos>
         
          <div className='busca'>

          <input 
          placeholder='Buscar'
          value={this.state.busca}
          onChange={this.atualizaBusca}
          />

          <input 
          placeholder='Valor Minimo'
          value={this.state.precoMin}
          onChange={this.atualizaMinPreco}
          />
           <input 
          placeholder='Valor Maximo'
          value={this.state.preco}
          onChange={this.atualizaMaxPreco}
          />

          <select
            value={this.state.ordenacao}
            onChange={this.trocarOrdenacao}
          >
            <option value="titulo">titulo</option>
            <option value="precocres">Preço Crescente</option>
            <option value="precodec">Preço Decrescente</option>
            <option value="prazo">Prazo</option>
          </select>
          </div>
          <div className='cards'>
          {listaDosProdutos}
          </div>
        </ExibeProdutos>
    )
  }
}