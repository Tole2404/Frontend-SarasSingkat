import { Container } from "react-bootstrap";

import "../styles/css/Footer.css";

const FooterDasboard = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <Container>
        <div className="copyright text-center">
          <p>&copy; {currentYear} SarasSingkat. All rights reserved.</p>
        </div>
      </Container>
    </div>
  );
};

export default FooterDasboard;
