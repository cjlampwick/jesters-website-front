import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Cookies from "universal-cookie";
import moment from "moment";

const cookies = new Cookies();

const baseUrl = process.env.REACT_APP_BASE_URL + "/coworking/";

class JSModalEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
      dia,
      dateFromStr,
    };

    if (props.onCloseModalEvent) {
      this.eventData = props.eventData;
      this.onCloseModalEvent = props.onCloseModalEvent;
      this.deleteSuccess = props.deleteSuccess;

      dia = props.eventData.dateFrom;
      dateFromStr = dia.format("DD/MM/YYYY");

      this.handleCloseEvent = this.handleCloseEvent.bind(this);
      this.handleShowEvent = this.handleShowEvent.bind(this);
    }
  }

  handleShowEvent() {
    alert(this.state.show);
  }

  handleCloseEvent() {
    this.onCloseModalEvent();
  }

  removeEvent = async () => {
    await axios.delete(baseUrl + this.eventData.id)
      .then((response) => {
        console.log(response);
        this.handleCloseEvent();
        window.location.href = "/coworking/scheduler"
      })

  };

  render() {
    return (
      <Modal
        style={{ marginTop: "120px" }}
        show={this.state.show}
        onHide={this.onCloseModalEvent}
      >
        <Modal.Header closeButton>
          <Modal.Title style={{ color: "#626262" }}> Desea eliminar el evento del dia {this.state.dateFromStr}?</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button variant="outline-danger" onClick={this.removeEvent}>
            Eliminar evento
          </Button>{" "}
          <Button variant="outline-primary" onClick={this.handleCloseEvent}>
            Cancelar
          </Button>{" "}
        </Modal.Footer>
      </Modal>
    );
  }
}

export default JSModalEvents;
