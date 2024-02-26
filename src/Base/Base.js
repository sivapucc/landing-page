import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Signup from "../Components/Signup";
import IconCard from "../Components/IconCard";
import Cardscompnent from "../Components/Cardscomp";
import People from "../Components/Peoples";

function Base() {
  return (
    <div>
      <header className="">
        <Navbar expand="lg" className="bg-body-tertiary ">
          <Container fluid className="head-con">
            <Navbar.Brand href="#" className="title">
              Start Bootstrap
            </Navbar.Brand>
            <Button variant="primary" className="titles">
              Sign Up
            </Button>
          </Container>
        </Navbar>
      </header>
      <main>
        <Signup
          headtext={[
            <h1>Generate More Leads With a Professional landing Page!</h1>,
          ]}
          clsname="signup-container first-con"
        />
        <IconCard />
        <Cardscompnent />
        <People />
        <Signup
          headtext={[<h2>Ready to get started? Sign up now!</h2>]}
          clsname="signup-container second-con"
        />
      </main>
      <footer>
        <div className="footers">
          <div className="nav-con">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link className="text-decoration-underline">About</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-decoration-underline">
                  Contact
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-decoration-underline">
                  Terms of Use
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="text-decoration-underline">
                  Privacy Policy
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <p className="copy-right">
              <i class="fa-regular fa-copyright"></i> Your Website 2024. All
              Rights Reserved.
            </p>
          </div>
          <div className="icon-set">
            <i className="fa-brands fa-facebook fa-2x"></i>
            <i class="fa-brands fa-twitter fa-2x"></i>
            <i class="fa-brands fa-instagram fa-2x"></i>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default Base;
