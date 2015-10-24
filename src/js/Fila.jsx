const Casilla = require("./Casilla.jsx");

var Fila = React.createClass({
  render: function(){
    return (
      <div>
        <Casilla/>
        <Casilla/>
        <Casilla/>
      </div>
    );
  }  
});

module.exports = Fila;