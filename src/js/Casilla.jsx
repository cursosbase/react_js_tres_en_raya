const casillaStyle = {
  height: '100px',
  width: '100px'
};

let Casilla = React.createClass({    
    manejadorClick: function(){
      this.props.manejadorClick(this.props.indiceFila);
    },    
    render: function(){
      return (
        <button style={casillaStyle} onClick={this.manejadorClick}>
          {this.props.valor}
        </button>
      )
    }   
});
module.exports = Casilla;