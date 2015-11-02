(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var casillaStyle = {
  height: '100px',
  width: '100px'
};

var Casilla = React.createClass({
  displayName: 'Casilla',

  casillaClick: function casillaClick() {
    this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
  },
  render: function render() {
    return React.createElement(
      'button',
      { style: casillaStyle, onClick: this.casillaClick },
      this.props.valor
    );
  }
});

module.exports = Casilla;

},{}],2:[function(require,module,exports){
'use strict';

var Casilla = require("./Casilla.jsx");

var Tablero = React.createClass({
  displayName: 'Tablero',

  getInitialState: function getInitialState() {
    return {
      clicks: 0,
      valores: [['-', '-', '-'], ['-', '-', '-'], ['-', '-', '-']]
    };
  },
  tableroClick: function tableroClick(indiceFila, indiceColumna) {
    var valores = this.state.valores;
    var nuevoValor = 'X';
    if (this.state.clicks % 2 === 0) {
      nuevoValor = 'O';
    }
    valores[indiceFila][indiceColumna] = nuevoValor;
    this.setState({
      clicks: this.state.clicks + 1,
      valores: this.state.valores
    });
  },
  render: function render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'div',
        null,
        React.createElement(Casilla, { valor: this.state.valores[0][0], indiceFila: 0, indiceColumna: 0, manejadorClick: this.tableroClick }),
        React.createElement(Casilla, { valor: this.state.valores[0][1], indiceFila: 0, indiceColumna: 1, manejadorClick: this.tableroClick }),
        React.createElement(Casilla, { valor: this.state.valores[0][2], indiceFila: 0, indiceColumna: 2, manejadorClick: this.tableroClick })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(Casilla, { valor: this.state.valores[1][0], indiceFila: 1, indiceColumna: 0, manejadorClick: this.tableroClick }),
        React.createElement(Casilla, { valor: this.state.valores[1][1], indiceFila: 1, indiceColumna: 1, manejadorClick: this.tableroClick }),
        React.createElement(Casilla, { valor: this.state.valores[1][2], indiceFila: 1, indiceColumna: 2, manejadorClick: this.tableroClick })
      ),
      React.createElement(
        'div',
        null,
        React.createElement(Casilla, { valor: this.state.valores[2][0], indiceFila: 2, indiceColumna: 0, manejadorClick: this.tableroClick }),
        React.createElement(Casilla, { valor: this.state.valores[2][1], indiceFila: 2, indiceColumna: 1, manejadorClick: this.tableroClick }),
        React.createElement(Casilla, { valor: this.state.valores[2][2], indiceFila: 2, indiceColumna: 2, manejadorClick: this.tableroClick })
      )
    );
  }
});

module.exports = Tablero;

},{"./Casilla.jsx":1}],3:[function(require,module,exports){
"use strict";

var Tablero = require("./Tablero.jsx");

ReactDOM.render(React.createElement(Tablero, null), document.getElementById('contenedor'));

},{"./Tablero.jsx":2}]},{},[3]);
