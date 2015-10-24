const Casilla = require("./Casilla.jsx");

var Fila = React.createClass({  
  manejadorClick: function(indiceFila){
    this.props.manejadorClick(this.props.indiceTablero, indiceFila);   
  },
  render: function(){
    var casillas = this.props.valoresFila.map(function(valor, indice){
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