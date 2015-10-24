const Fila = require("./Fila.jsx");


var Tablero = React.createClass({
  render: function(){
    return (
      <div>
        <Fila/>
        <Fila/>
        <Fila/>
      </div>
    );
  }
});

module.exports = Tablero;