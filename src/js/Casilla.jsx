const casillaStyle = {
  height: '100px',
  width: '100px'
};

let Casilla = React.createClass({    
    getInitialState: function(){
      return {
        valor: '-'
      }
    },
    casillaClick: function(){
      var valorAntiguo = this.state.valor;
      if(valorAntiguo==="-") {
        var valorNuevo = Math.random() < 0.5 ? 'O': 'X';
      } else {
        var valorNuevo = valorAntiguo === 'X' ? 'O': 'X';
      }
      this.setState({
        valor: valorNuevo
      });
    }, 
    render: function(){
      return (
        <button style={casillaStyle} onClick={this.casillaClick}>
          {this.state.valor}
        </button>
      )
    }   
});

module.exports = Casilla;