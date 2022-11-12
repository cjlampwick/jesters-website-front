import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import background from "../../assets/background-video.webm";

import "../../styles/home.css";
import "../../styles/generic.css";
import "../../styles/footer.css";

import Button from 'react-bootstrap/Button';
import Spacing from "../../components/Spacing";
import Cookies from "universal-cookie";

const cookies = new Cookies();

class Coworking extends React.Component {

    checkSession() {
        if (cookies && cookies.get("email")) {
            window.location.href = "/coworking/scheduler";
        } else {
            window.location.href = "/login?goto=coworking-scheduler";
        }
    }

    render() {
        return (
            <div>
                <video autoPlay muted loop id="myVideo">
                    <source src={background} type="video/mp4" />
                </video>

                <div
                    className="App"
                >
                    <Spacing />
                    <div className="text-center" >
                        <Button onClick={this.checkSession} className='btn btn-secondary'>Agendar</Button>
                    </div>
                    <Spacing />
                </div>
            </div>
        );
    }
}

export default Coworking;
