import FooterDasboard from "../../components/FooterDasboard";
import BerandaDashboardComponent from "../../components/BerandaDashboardComponent";
import NavbarDashboard from "../../components/NavbarDashboard";

const DashboardPenulis = () => {
  return (
    <div>
      <NavbarDashboard dashboardType="penulis" />
      <BerandaDashboardComponent showSaveButton={false} />
      <FooterDasboard />
    </div>
  );
};

export default DashboardPenulis;
