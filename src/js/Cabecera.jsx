var React = require('react');
var ReactDOM = require('react-dom');

var Cabecera = React.createClass({
  render: function(){
    return (
      <header className="cabecera">
        {this.props.texto}
      </header>
    )
  }
});
module.exports = Cabecera;
