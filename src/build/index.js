(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var casillaStyle = {
  height: '100px',
  width: '100px'
};

var Casilla = React.createClass({
  displayName: 'Casilla',

  manejadorClick: function manejadorClick() {
    this.props.manejadorClick(this.props.indiceFila);
  },
  render: function render() {
    return React.createElement(
      'button',
      { style: casillaStyle, onClick: this.manejadorClick },
      this.props.valor
    );
  }
});
module.exports = Casilla;

},{}],2:[function(require,module,exports){
'use strict';

var Casilla = require("./Casilla.jsx");

var Fila = React.createClass({
  displayName: 'Fila',

  getInitialState: function getInitialState() {
    return {
      clicks: 0,
      valoresFila: ['-', '-', '-']
    };
  },
  manejadorClick: function manejadorClick(indice) {
    var nuevoValor = 'X';
    if (this.state.clicks % 2 === 0) {
      nuevoValor = 'O';
    }
    var valoresFila = this.state.valoresFila;
    valoresFila[indice] = nuevoValor;
    this.setState({
      valoresFila: valoresFila,
      clicks: this.state.clicks + 1
    });
  },
  render: function render() {
    var casillas = this.state.valoresFila.map((function (valor, indice) {
      return React.createElement(Casilla, { valor: valor, key: indice, indiceFila: indice, manejadorClick: this.manejadorClick });
    }).bind(this));
    return React.createElement(
      'div',
      null,
      casillas
    );
  }
});

module.exports = Fila;

},{"./Casilla.jsx":1}],3:[function(require,module,exports){
"use strict";

var Fila = require("./Fila.jsx");

var Tablero = React.createClass({
  displayName: "Tablero",

  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(Fila, null),
      React.createElement(Fila, null),
      React.createElement(Fila, null)
    );
  }
});

module.exports = Tablero;

},{"./Fila.jsx":2}],4:[function(require,module,exports){
"use strict";

var Tablero = require("./Tablero.jsx");

ReactDOM.render(React.createElement(Tablero, null), document.getElementById('contenedor'));

},{"./Tablero.jsx":3}]},{},[4]);
