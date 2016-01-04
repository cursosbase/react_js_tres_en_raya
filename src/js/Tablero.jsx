const Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({

  tableroClick: function(numeroFila, numeroColumna){
    this.props.manejadorTableroClick(numeroFila, numeroColumna);
  },

  render: function(){
    let casillas = this.props.valores.map(function(valoresFila, indiceFila){
      let fila = valoresFila.map(function(valor, indiceColumna){
        let mykey = ""+indiceFila+indiceColumna;
        return (
          <Casilla valor={valor} indiceFila={indiceFila}
            indiceColumna={indiceColumna} key={mykey} manejadorClick={this.tableroClick}/>
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
