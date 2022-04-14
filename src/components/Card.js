import React from "react";
import styled from 'styled-components'
import moment from "moment";


const Cards =styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  width: 200px;
  height: 250px;
  background-color: #122335;
  color: white;
  align-items: center;
  border-radius: 20px;
  margin: 0.5em;
    div{
      display: flex;
      flex-direction: column;
      align-self: stretch;
    }
` 

export default class Card extends React.Component{

    render(){
         

        return(
            <Cards>
                <h3>{this.props.titulo}</h3>
                <p>valor : {this.props.preco}</p>
                <p>Validade : {moment(this.props.data).format('DD / MM / YY')}</p>
            
                <div>
                <button>Adicionar ao Carrinho</button> 
                <button>Detalhes</button>   
                </div>
            </Cards>
        )
    }
}