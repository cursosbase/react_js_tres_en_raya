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
    return (
      <div>
        <div>
          <Casilla valor={this.state.valores[0][0]} indiceFila={0} indiceColumna={0} manejadorClick={this.tableroClick}/>
          <Casilla valor={this.state.valores[0][1]} indiceFila={0} indiceColumna={1} manejadorClick={this.tableroClick}/>
          <Casilla valor={this.state.valores[0][2]} indiceFila={0} indiceColumna={2} manejadorClick={this.tableroClick}/>
        </div>
        <div>
          <Casilla valor={this.state.valores[1][0]} indiceFila={1} indiceColumna={0} manejadorClick={this.tableroClick}/>
          <Casilla valor={this.state.valores[1][1]} indiceFila={1} indiceColumna={1} manejadorClick={this.tableroClick}/>
          <Casilla valor={this.state.valores[1][2]} indiceFila={1} indiceColumna={2} manejadorClick={this.tableroClick}/>
        </div>
        <div>
          <Casilla valor={this.state.valores[2][0]} indiceFila={2} indiceColumna={0} manejadorClick={this.tableroClick}/>
          <Casilla valor={this.state.valores[2][1]} indiceFila={2} indiceColumna={1} manejadorClick={this.tableroClick}/>
          <Casilla valor={this.state.valores[2][2]} indiceFila={2} indiceColumna={2} manejadorClick={this.tableroClick}/>
        </div>

      </div>
    );
  }
});


module.exports = Tablero;