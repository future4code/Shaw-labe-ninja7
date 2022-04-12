import React from 'react'
import axios from 'axios'

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
        price: this.state.preço,
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
        // console.log(err.res)
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


  handlePaymentMethods = (e) => {
    let value = Array.from(e.target.selectedOptions, option => option.value)
    this.setState({ formasDePagamento: value })
}

//   onClickCriar = () =>{
//       this.criaTrabalho()
//   }

//   formaPagamento = (ev) =>{
//     const pagamento = []
//     pagamento.push(ev.target.value)
//     this.setState({formasDePagamento: pagamento})
//   }
  render() {
    return (
      <div>
            
      <div>
       <input placeholder="Título" onChange={this.onChangeTitulo} value={this.state.titulo}></input>  
       <input placeholder=" Descrição" onChange={this.onChangeDescricao} value={this.state.descricao}></input>
       <input placeholder="Preço" type="number"  onChange={this.onChangePreco} value={this.state.preço}></input>  
       <select multiple value={this.state.formasDePagamento} onChange={this.handlePaymentMethods}>
            <option>Cartão de Crédito</option>
           <option>Cartão de Débito</option>
           <option>Paypal</option>
           <option>Boleto</option>
           <option>Pix</option> 

           {/* <option>
               {this.state.formasDePagamento[0]}
           </option> */}
       </select>  
        <input placeholder="Prazo do serviço" type="date" onChange={this.onChangeData} value={this.state.data}></input> 
        <button onClick={this.criaTrabalho} >Cadastrar</button>
     </div> 
      
 </div>
    )
  }
}