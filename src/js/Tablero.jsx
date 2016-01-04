const Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
  getInitialState: function(){
    return {
      clicks: 0,
      valores: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
  },
  tableroClick: function(indiceFila, indiceColumna){
    var valores = this.state.valores;
    var nuevoValor = 'X';
    if(this.state.clicks % 2 === 0){
      nuevoValor = 'O';
    }
    valores[indiceFila][indiceColumna] = nuevoValor;
    this.setState({
      clicks: this.state.clicks + 1,
      valores: this.state.valores
    });
  },
  render: function(){
    let casillas = this.state.valores.map(function(valoresFila, indiceFila){
      let fila = valoresFila.map(function(valor, indiceColumna){
          let mykey = ""+indiceFila+indiceColumna;
          return (
              <Casilla valor={valor} indiceFila={indiceFila} indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
              )
          }.bind(this));
      return (
        <div key={"fila"+indiceFila}>
          {fila}
        </div>
      )
    }.bind(this));

    return (
      <div>
        {casillas}
      </div>
    );
  }
});


module.exports = Tablero;
