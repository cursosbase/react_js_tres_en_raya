const casillaStyle = {
  height: '100px',
  width: '100px'
};

let Casilla = React.createClass({
    getInitialState: function(){
      return {
        valor: 'X'
      }
    },
    render: function() {
        return (
          <button style={casillaStyle}>
            {this.state.valor}
          </button>
        );
    }
});
module.exports = Casilla;