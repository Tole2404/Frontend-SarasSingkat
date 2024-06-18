import FooterDasboard from "./FooterDasboard";
import KomunitasComponent from "./KomunitasComponent";
import NavbarDashboard from "./NavbarDashboard";

const KomunitasPenulis = () => {
  return (
    <div>
      <NavbarDashboard dashboardType="penulis" />
      <KomunitasComponent />
      <FooterDasboard />
    </div>
  );
};

export default KomunitasPenulis;
