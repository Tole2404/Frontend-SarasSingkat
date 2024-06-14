import FooterComponents from "./Footer";
import KomunitasComponent from "./KomunitasComponent";
import NavbarDashboard from "./NavbarDashboard"; // Ganti import ini

const KomunitasPenulis = () => {
  return (
    <div>
      <NavbarDashboard dashboardType="penulis" />
      <KomunitasComponent />
      <FooterComponents />
    </div>
  );
};

export default KomunitasPenulis;
