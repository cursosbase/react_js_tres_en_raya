const casillaStyle = {
  height: '100px',
  width: '100px'
};

let Casilla = React.createClass({    
    casillaClick: function(){
      this.props.manejadorClick(this.props.indiceFila, this.props.indiceColumna);   
    },
    render: function(){
      return (
        <button style={casillaStyle} onClick={this.casillaClick}>
          {this.props.valor}
        </button>
      )
    }   
});

module.exports = Casilla;