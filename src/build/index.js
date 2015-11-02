(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var casillaStyle = {
  height: '100px',
  width: '100px'
};

var Casilla = React.createClass({
  displayName: 'Casilla',

  getInitialState: function getInitialState() {
    return {
      valor: '-'
    };
  },
  casillaClick: function casillaClick() {
    var valorAntiguo = this.state.valor;
    if (valorAntiguo === "-") {
      var valorNuevo = Math.random() < 0.5 ? 'O' : 'X';
    } else {
      var valorNuevo = valorAntiguo === 'X' ? 'O' : 'X';
    }
    this.setState({
      valor: valorNuevo
    });
  },
  render: function render() {
    return React.createElement(
      'button',
      { style: casillaStyle, onClick: this.casillaClick },
      this.state.valor
    );
  }
});

module.exports = Casilla;

},{}],2:[function(require,module,exports){
"use strict";

var Casilla = require("./Casilla.jsx");

ReactDOM.render(React.createElement(Casilla, null), document.getElementById('contenedor'));

},{"./Casilla.jsx":1}]},{},[2]);
