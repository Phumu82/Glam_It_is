import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        {/* Logo */}
        <Link to="/" style={styles.logoWrap}>
          <img
            src="/glam-it-is-logo.jpeg"
            alt="Glam It Is Logo"
            style={styles.logo}
          />
          <span style={styles.brand}>Glam It Is</span>
        </Link>

        {/* Navigation */}
        <nav style={styles.nav}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/masterclass">Masterclass</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: "#fff",
    borderBottom: "1px solid #f2c1d1",
    position: "sticky" as const,
    top: 0,
    zIndex: 1000,
  },
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "12px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  logoWrap: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    textDecoration: "none",
  },
  logo: {
    height: "45px",
  },
  brand: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#d63384", // pink
  },
  nav: {
    display: "flex",
    gap: "20px",
  },
};

export default Header;
