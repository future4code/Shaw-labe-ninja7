import React from 'react'
import axios from 'axios'
import styled from 'styled-components'

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #145a80;



`

const Box = styled.div`
display: flex;
height: 50%;
width: 30%;
justify-content: center;
align-items: center;
flex-direction: column;
border: 1px solid black;
background-color:#122335;

input{
    width: 50%;
    margin-bottom: 20px;
    text-align: center;
}

select{
    margin-bottom: 20px;
}

h2{
    color: white;
}

`

export default class Cadastro extends React.Component {

  state = {
    titulo: "",
    descricao: "",
    preço: 0,
    formasDePagamento: [],
    data: ""
}


criaTrabalho = ()=>{
    const url = `https://labeninjas.herokuapp.com/jobs`
    const body = {
        title: this.state.titulo,
        description: this.state.descricao,
        price: Number(this.state.preço),
        paymentMethods: this.state.formasDePagamento,
        dueDate: this.state.data

    }
    axios.post (url, body,{
        headers:{
            Authorization: "206a72be-784b-4c8c-8597-4bec26b55fd3"
        }
    })

    .then ((res)=>{
        alert("Serviço criado com sucesso")
        this.setState({titulo:"", descricao:"",  preço:"" , data:"", formasDePagamento:[] })
    })
    .catch((err) =>{
        alert("Erro ao cadastrar, tente novamente")
        
    })
  }


  onChangeTitulo = (ev)=>{
      this.setState({titulo: ev.target.value})
  }


  onChangeDescricao = (ev)=>{
      this.setState({descricao: ev.target.value})
  }


  onChangePreco = (ev)=>{
      this.setState({preço: ev.target.value})
  }


  onChangeData = (ev)=>{
      this.setState({data: ev.target.value})
  }


  formaPagamento = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({ formasDePagamento: value })
}


  render() {
    return (
      <Container>
            
      <Box>
       <h2>Cadastre seu Serviço</h2>
       <input placeholder="Título" onChange={this.onChangeTitulo} value={this.state.titulo}></input>  
       <input placeholder=" Descrição" onChange={this.onChangeDescricao} value={this.state.descricao}></input>
       
       <input placeholder="Preço" type="number"  onChange={this.onChangePreco} value={this.state.preço}></input>  
       <select multiple value={this.state.formasDePagamento} onChange={this.formaPagamento}>
            <option>Cartão de Crédito</option>
           <option>Cartão de Débito</option>
           <option>Paypal</option>
           <option>Boleto</option>
           <option>Pix</option> 

           
       </select>  
        <input placeholder="Prazo do serviço" type="date" onChange={this.onChangeData} value={this.state.data}></input> 
        <button onClick={this.criaTrabalho} >Cadastrar</button>
     </Box> 
      
 </Container>
    )
  }
}