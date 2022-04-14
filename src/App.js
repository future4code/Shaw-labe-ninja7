import React from "react";
import  PaginaInicial  from "./components/PaginaIncial";
import {linkApi} from './constants/Constantes'
import {aut} from './constants/Constantes'
import Cadastro from "./components/Cadastro";
import Servicos from "./components/Servicos";
import Card from "./components/Card";
import CarrinhoPage from "./components/CarrinhoPage";
import DetalhesDoServico from './components/DetalhesDoServico'
import Cabecalho from "./components/Cabecalho";

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
				pagina = <Cadastro />
				break;
			case "carrinho" :
				pagina = <CarrinhoPage />
				break;
			case "detalhes" :
				pagina = <DetalhesDoServico />
				break;
			case "servicos" :
				pagina = <Servicos />
				break;
			default:
				pagina = <PaginaInicial trocar={this.trocaTela}/>
				break;
		}
		
		return(
			<div>
				<Cabecalho trocar={this.trocaTela}/>
				{pagina}
			</div>
		)
	}
}