import "../../styles/css/dashboardPenulis.css";
import FooterComponents from "../../components/Footer";
import BerandaDashboardComponent from "../../components/BerandaDashboardComponent";
import NavbarDashboard from "../../components/NavbarDashboard"; // Import NavbarDashboard

const DashboardPembaca = ({ savedBooks, setSavedBooks }) => {
  return (
    <div>
      <NavbarDashboard dashboardType="pembaca" />
      <BerandaDashboardComponent savedBooks={savedBooks} setSavedBooks={setSavedBooks} showSaveButton={true} />
      <FooterComponents />
    </div>
  );
};

export default DashboardPembaca;
