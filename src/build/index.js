(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var casillaStyle = {
  height: '100px',
  width: '100px'
};

var Casilla = React.createClass({
  displayName: 'Casilla',

  casillaClick: function casillaClick() {
    if (this.props.valor === "-") {
      this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);
    }
  },
  render: function render() {
    return React.createElement(
      'button',
      { style: casillaStyle, className: this.props.valor === "-" ? "clickable" : "no_clickable", onClick: this.casillaClick },
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
    var casillas = this.state.valores.map((function (valoresFila, indiceFila) {
      var fila = valoresFila.map((function (valor, indiceColumna) {
        var mykey = "" + indiceFila + indiceColumna;
        return React.createElement(Casilla, { valor: valor, indiceFila: indiceFila, indiceColumna: indiceColumna, key: mykey, manejadorClick: this.tableroClick });
      }).bind(this));
      return React.createElement(
        'div',
        { key: "fila" + indiceFila },
        fila
      );
    }).bind(this));

    return React.createElement(
      'div',
      null,
      casillas
    );
  }
});

module.exports = Tablero;

},{"./Casilla.jsx":1}],3:[function(require,module,exports){
"use strict";

var Tablero = require("./Tablero.jsx");

ReactDOM.render(React.createElement(Tablero, null), document.getElementById('contenedor'));

},{"./Tablero.jsx":2}]},{},[3]);
