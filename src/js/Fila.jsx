const Casilla = require("./Casilla.jsx");

var Fila = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      valoresFila: ['-', '-', '-'] 
    };
  },
  manejadorClick: function(indice){
    var nuevoValor = 'X';
    if(this.state.clicks % 2 === 0){
      nuevoValor = 'O';
    }
    var valoresFila = this.state.valoresFila;
    valoresFila[indice] = nuevoValor;
    this.setState({
      valoresFila: valoresFila,
      clicks: this.state.clicks + 1
    });
  },
  render: function(){
    var casillas = this.state.valoresFila.map(function(valor, indice){
      return (
        <Casilla valor={valor} key={indice} indiceFila={indice} manejadorClick={this.manejadorClick} />
      );
    }.bind(this));
    return (
      <div>
        {casillas}
      </div>
    );
  }  
});

module.exports = Fila;