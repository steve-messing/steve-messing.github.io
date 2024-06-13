import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/style.css";
import Name from "../components/name";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";

const h3Style = {
  color: "white",
  fontWeight: "bold",
  fontSize: "24px",
  marginBottom: "15px",
  textAlign: "center",
};

function handleSubmit(event) {
  event.preventDefault();
  const name = event.target.formBasicName.value;
  const email = event.target.formBasicEmail.value;
  const message = event.target.formBasicMessage.value;

  console.log(name, email, message);
}

function Home() {
  return (
    <>
      <div className="container">
        <Name />
        <Card className="blue box" style={{ display: "flex" }}>
          <h3 style={h3Style}>Links</h3>
          <Button
            href="https://github.com/steve-messing"
            variant="warning"
            className="mb-3"
          >
            Github
          </Button>
          <Button
            href="https://www.linkedin.com/in/steve-messing-a3b40264/"
            variant="warning"
          >
            LinkedIn
          </Button>
        </Card>

        <Card className="red box" border="none">
          <h3 style={h3Style}>Trans Resources Page</h3>
          <Button href="https://realself.com/trans-resources" variant="warning">
            RealSelf
          </Button>
        </Card>

        <Card className="red box">
          <h3 style={h3Style}>Altarfy</h3>
          <Button
            href="https://www.youtube.com/watch?v=FzYQIi99va0"
            variant="warning"
          >
            AR Altar Building App (iOS)
          </Button>
        </Card>

        <Card className="green box">
          <h3 style={h3Style}>Contact</h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Control type="name" placeholder="Your Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="email" placeholder="Email Address" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicMessage">
              <Form.Control
                as="textarea"
                type="message"
                rows={3}
                placeholder="Message"
              />
            </Form.Group>
              <Button variant="warning" type="submit">
                Submit
              </Button>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default Home;
