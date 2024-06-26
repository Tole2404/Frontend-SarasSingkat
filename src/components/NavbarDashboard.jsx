import { useState, useEffect } from "react";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";
import { useNavigate, NavLink, Link } from "react-router-dom";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { navLinksDashboard } from "../data/index";
import logo from "../assets/logo.svg";
import default1 from "../assets/img/testimonial/default.jpg";
import { useAuth } from "../components/UserContext";

const NavbarDashboard = ({ dashboardType }) => {
  const { logout } = useAuth();
  const [changeColor, setChangeColor] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener("scroll", changeBgColor);
    return () => window.removeEventListener("scroll", changeBgColor);
  }, []);

  useEffect(() => {}, []);

  const changeBgColor = () => {
    if (window.scrollY > 10) {
      setChangeColor(true);
    } else {
      setChangeColor(false);
    }
  };

  const basePath = dashboardType === "penulis" ? "/dashboard-penulis" : "/dashboard-pembaca";
  const profilePath = `${basePath}/profil`;

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div>
      <Navbar expand="lg" className={changeColor ? "color-active" : ""}>
        <Container>
          <Navbar.Brand href={"/"}>
            <div className="logo">
              <img src={logo} alt="SarasSingkat" />
              <div className="nameLogo ">SarasSingkat</div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-container">
              {navLinksDashboard.map((link) => (
                <div className="nav-link" key={link.id}>
                  <NavLink to={link.path} className={({ isActive, isPending }) => (isPending ? "pending" : isActive ? "active" : "")} end>
                    {link.text}
                  </NavLink>
                </div>
              ))}
            </Nav>
            <div className="name-profile fw-bold"></div>
            <Dropdown align="end">
              <Dropdown.Toggle variant="success" id="dropdown-basic" style={{ backgroundColor: "transparent", borderColor: "transparent" }}>
                <img src={default1} alt="profile" style={{ borderRadius: "50%", width: "40px", height: "40px" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <div className="dropdown-header text-center">
                  <img src={default1} alt="profile" style={{ borderRadius: "50%", width: "60px", height: "60px" }} />
                  <div className="fw-bold"></div>
                  <div className="text-muted"></div>
                </div>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to={profilePath}>
                  <FaUser className="me-2" /> Profil
                </Dropdown.Item>
                <Dropdown.Item onClick={handleLogout}>
                  <FaSignOutAlt className="me-2" /> Keluar
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarDashboard;
