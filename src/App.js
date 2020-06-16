import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image, Tabs, Tab } from "react-bootstrap";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);
  const [data, setData] = useState({});
  const [picture, setPicture] = useState("");

  const responseFacebook = (response) => {
    console.log(response);
    setData(response);
    setPicture(response.picture.data.url);
    console.log(response);
    if (response.accessToken) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  };
  return (
    <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home"></Tab>
      <Tab eventKey="profile" title="Profile">
        <div
          className="contrainer"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "25vh",
          }}
        >
          <Card>
            <Card.Header>
              {!login && (
                <FacebookLogin
                  appId="299957667850567"
                  autoLoad={false}
                  fields="name,email,picture"
                  scope="email,public_profile,user_friends"
                  callback={responseFacebook}
                  icon="fa-facebook"
                />
              )}
              {login && <Image src={picture} roundedCircle />}
            </Card.Header>
            {login && (
              <Card.Body>
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.email}</Card.Text>
              </Card.Body>
            )}
          </Card>
        </div>
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled></Tab>
    </Tabs>
  );
}

export default App;
