import { Modal, Button } from 'react-bootstrap';

var React = require('react');
var ReactDOM = require('react-dom');

let MiModal = React.createClass({
    render: function(){
      return (
        <Modal show={this.props.show} onHide={this.props.close}>
          <Modal.Header closeButton>
            <Modal.Title>Hay un ganador!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h4>{this.props.texto}</h4>
          </Modal.Body>
          <Modal.Footer>
            <Button bsStyle="danger" onClick={this.props.close}>Cerrar</Button>
          </Modal.Footer>
        </Modal>
      )
    }
});

module.exports = MiModal;
