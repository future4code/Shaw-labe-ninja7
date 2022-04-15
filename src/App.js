import React from "react";
import  PaginaInicial  from "./components/PaginaIncial";
import {linkApi} from './constants/Constantes'
import {aut} from './constants/Constantes'
import Cadastro from "./components/Cadastro";
import Servicos from "./components/Servicos";
import Card from "./components/Card";
import CarrinhoPage from "./components/CarrinhoPage";
import DetalhesDoServico from './components/DetalhesDoServico'


export default class extends React.Component{

	state = {
		paginaAtual:""
	}

	trocaTela = (tela) =>{
		this.setState({paginaAtual:tela})
	} 

	

	render(){

		// fazendo a troca das paginas

		let pagina 

		switch(this.state.paginaAtual){
			case "inicial":
				pagina = <PaginaInicial trocar={this.trocaTela}/>
				break;
			case "cadastro" :
				pagina = <Cadastro trocaTela={this.trocaTela} />
				break;
			case "carrinho" :
				pagina = <CarrinhoPage trocaTela={this.trocaTela} />
				break;
			case "detalhes" :
				pagina = <DetalhesDoServico />
				break;
			case "serviços" :
				pagina = <Servicos trocaTela={this.trocaTela}/>
				break;
			default:
				pagina = <PaginaInicial trocar={this.trocaTela}/>
				break;
		}
		
		return(
			<div>
				<header trocar={this.trocaTela}/>
				{pagina}
			</div>
		)
	}
}