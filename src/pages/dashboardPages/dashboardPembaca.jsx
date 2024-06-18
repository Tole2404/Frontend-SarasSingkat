import "../../styles/css/dashboardPenulis.css";
import FooterDasboard from "../../components/FooterDasboard";
import BerandaDashboardComponent from "../../components/BerandaDashboardComponent";
import NavbarDashboard from "../../components/NavbarDashboard";

const DashboardPembaca = ({ savedBooks, setSavedBooks }) => {
  return (
    <div>
      <NavbarDashboard dashboardType="pembaca" />
      <BerandaDashboardComponent savedBooks={savedBooks} setSavedBooks={setSavedBooks} showSaveButton={true} />
      <FooterDasboard />
    </div>
  );
};

export default DashboardPembaca;
