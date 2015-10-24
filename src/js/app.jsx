var Casilla = React.createClass({
	render: function() {
		return (
			<div>
			{this.props.valor}
			</div>
			);
	}
});
ReactDOM.render(<Casilla valor="X" />, document.getElementById('contenedor'));