import React from "react";
import styled from 'styled-components'


const Cards =styled.div`
  display: flex;
  flex-direction: column;
  border-style: solid;
  border-width: 2px;
  width: 200px;
  height: 300px;
` 

export default class Card extends React.Component{

    render(){


        return(
            <Cards>
                <h3>{this.props.titulo}</h3>
                <p>{this.props.preco}</p>
                <p>{this.props.data}</p>
                <button>Add Carrinho</button> 
                <button>Detalhes</button>   
                
            </Cards>
        )
    }
}