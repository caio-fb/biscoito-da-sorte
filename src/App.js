import React, {Component} from "react"

import Biscoito from './assets/biscoito.png';
import Botao from "./components/Botao"
import './style.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      textoFrases: ""
    }
    this.frases = 
    ['Siga os bons e aprenda com eles', 'O bom-senso vale mais do que muito conhecimento', 
    'O riso é a menor distância entre duas pessoas', 
    'Deixe de lado as preocupações e seja feliz',
    'Realize o óbvio, pense no improvável e conquiste o impossível',
    'Acredite em milagres, mas não dependa deles',
    'A maior barreira para o sucesso é o medo do fracasso'];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrases = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render(){
    return(
      <div className="container">
        <img src={Biscoito}/>
          <Botao acaoBTN={this.quebraBiscoito} nome="Quebrar biscoito"/>
          <h3 className="textoFrase">{this.state.textoFrases}</h3>
      </div>
    );
  }
};

export default App;
