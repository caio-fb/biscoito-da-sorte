import React, {Component} from "react"

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBTN}>{this.props.nome}</button>
            </div>
        );
    }
};

export default Botao;