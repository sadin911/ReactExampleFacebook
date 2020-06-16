import React, { useState } from "react";
import FacebookLogin from "react-facebook-login";
import { Card, Image, Tabs, Tab, Container, Row, Col } from "react-bootstrap";
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
    <div>
      <div
        style={{
          // backgroundImage:
          //   "url(" +
          //   "https://image.freepik.com/free-vector/flat-labour-day-concept_52683-35514.jpg" +
          //   ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#cccccc55",
          height: 200,
        }}
      >
        <h1 className="text-center" style={{ color: "red" }}>
          Happy Labor
        </h1>

        <Image
          src={picture}
          roundedCircle
          className="rounded mx-auto d-block"
        />

        <h2 style={{ color: "black", textAlign: "center" }}> {data.name}</h2>
        <h4 style={{ color: "black", textAlign: "center" }}> {data.email}</h4>
      </div>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" style={{display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexrap: "wrap",
    padding: "10px",}}>
        <Tab eventKey="home" title="Home">
          <Container>
            <Row className="justify-content-md-center">
              <Col md="auto">
                <Card className="mt-5" style={{ width: "auto" }}>
                  <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      Card Subtitle
                    </Card.Subtitle>
                    <Card.Text>
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </Card.Text>
                    <Card.Link href="#">Card Link</Card.Link>
                    <Card.Link href="#">Another Link</Card.Link>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Container>
        </Tab>
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
                    autoLoad={true}
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
    </div>
  );
}

export default App;
