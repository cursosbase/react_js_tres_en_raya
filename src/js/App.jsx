const Tablero = require('./Tablero.jsx');
const Cabecera = require('./Cabecera.jsx');
const JUGADORX = "jugador 1 - las X";
const JUGADOR0 = "jugador 2 - los 0";

var App = React.createClass({

  getInitialState: function(){
    return {
      turno: JUGADORX,
      valores: [
        ['-', '-', '-'],
        ['-', '-', '-'],
        ['-', '-', '-']
      ]
    };
  },

  appClick: function(numeroFila, numberoColumna){
    if(!this.state.hayGanador){
      let valores = this.state.valores;
      let nuevoValor = this.state.turno === JUGADORX ? 'X':'0';
      valores[numeroFila][numberoColumna] = nuevoValor;

      let hayGanador = this.comprobarGanador(valores, nuevoValor);
      if(hayGanador){
        alert("Ha ganado: " + this.state.turno);
      }
      this.setState({
        turno: this.state.turno === JUGADORX ? JUGADOR0:JUGADORX,
        valores: this.state.valores,
        hayGanador: hayGanador ? this.state.turno:false
      });
    }
  },

  comprobarGanador: function(vals, newVal){
		var nRow, nCol;
		// comprobar filas
		for (nRow = 0; nRow < 3; nRow++) {
		    for (nCol = 0; nCol < 3; nCol++) {
			    if (vals[nRow][nCol]!=newVal) {
			        break;
			    }
			    if (nCol == 2) {
			        return true;
			    }
		  }
		}

		// comprobar columnas
		for (nCol = 0; nCol < 3; nCol++) {
		    for (nRow = 0; nRow < 3; nRow++) {
			    if (vals[nRow][nCol]!=newVal) {
			        break;
			    }
			    if (nRow == 2) {
			        return true;
			    }
		  }
		}

		// Comprobar diagonal
	  if (vals[0][0]==newVal && vals[1][1]==newVal && vals[2][2]==newVal) {
	    return true;
	  }
		// Comprobar anti-diagonal
	  if (vals[0][2]==newVal && vals[1][1]==newVal && vals[2][0]==newVal) {
	    return true;
	  }

		return false;
  	},

  render: function(){
    var texto;
    texto = "Turno del " + this.state.turno;
    return (
      <div>
        <Cabecera texto={texto}/>
        <Tablero valores={this.state.valores}
          manejadorTableroClick={this.appClick}/>
      </div>
    )
  }

});

module.exports = App;
