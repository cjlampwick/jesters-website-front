import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import Cookies from "universal-cookie";

const cookies = new Cookies();

const baseUrl = process.env.REACT_APP_BASE_URL + "/coworking/";

class JSModalEvents extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      show: true,
    };

    // axios
    //   .get(baseUrl)
    //   .then((result) => {
    //     let dateFrom = moment(element.dateFrom).add(3, "hour");
    //     let dateTo = moment(element.dateTo).add(3, "hour");
    //   })

    if (props.onCloseModalEvent) {
      this.eventData = props.eventData;
      this.onCloseModalEvent = props.onCloseModalEvent;
      this.deleteSuccess = props.deleteSuccess;

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
        console.log(this.eventData);
        // window.location.href = "/coworking/scheduler"
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
          <Modal.Title style={{ color: "#626262" }}> Desea eliminar el evento del dia ?</Modal.Title>
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
