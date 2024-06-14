import FooterComponents from "../../components/Footer";
import BerandaDashboardComponent from "../../components/BerandaDashboardComponent";
import NavbarDashboard from "../../components/NavbarDashboard";

const DashboardPenulis = () => {
  return (
    <div>
      <NavbarDashboard dashboardType="penulis" />
      <BerandaDashboardComponent showSaveButton={false} />
      <FooterComponents pageType="penulis" />
    </div>
  );
};

export default DashboardPenulis;
