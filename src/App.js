import React from "react";
import  PaginaInicial  from "./components/PaginaIncial";
// importando o link base da api e a autorização
import {linkApi} from './constants/Constantes'
import {aut} from './constants/Constantes'
import Cadastro from "./components/Cadastro";
import Servicos from "./components/Servicos";
import Card from "./components/Card";

export default class extends React.Component{

	render(){

		// utilizando o link base e a autorização
		console.log(linkApi)
		console.log(aut)
		return(
			<div>
			 <Servicos />
			</div>
		)
	}
}