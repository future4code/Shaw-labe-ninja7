import React from "react";
import  PaginaInicial  from "./components/PaginaIncial";
// importando o link base da api e a autorização
import {linkApi} from './constants/Constantes';
import {aut} from './constants/Constantes';
import Cadastro from "./components/Cadastro";
import Servicos from "./components/Servicos";
import Carrinho from "./components/Carrinho";
import Card from "./components/Card";
import { ThemeProvider } from "react-jss"

export default class extends React.Component{

	state = {
		telaAtual: ""
	}
	escolheTela = () =>{
		switch(this.state.telaAtual){
			case "cadastro":
				return <Cadastro irParaCadastro={this.irParaCadastro}/>
			case "servicos":
				return <Servicos irParaServicos={this.irParaServicos}/>
			case "carrinho":
				return <Carrinho irParaCarrinho={this.irParaCarrinho}/>
			case "home":
				return <PaginaInicial irParaHome={this.irParaHome}/>
			default: 
			return <PaginaInicial irParaHome={this.irParaHome}  irParaCarrinho={this.irParaCarrinho} irParaCadastro={this.irParaCadastro} irParaServicos={this.irParaServicos}/>
		}
	}
	irParaCadastro = () =>{
		this.setState({telaAtual: "cadastro"})
	}

	irParaServicos = () =>{
		this.setState({telaAtual: "servicos"})
	}

	irParaCarrinho = () =>{
		this.setState({telaAtual: "carrinho"})
	}

	irParaHome = () =>{
		this.setState({telaAtual: "home"})
	}

	
	render(){	
		return(
			<div>
			 {this.escolheTela()}
			</div>
		)
	}
}