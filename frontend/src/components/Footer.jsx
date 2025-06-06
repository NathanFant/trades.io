export default function Footer() {
  return (
    <footer style={{ color: "white", padding: "0.4rem", textAlign: "center" }}>
      <p style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        Real Work. Real Workers. Right now.
      </p>
      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center", gap: "2rem", flexWrap: "wrap", paddingBottom: "1.5rem" }}>
        <a href="https://www.linkedin.com/in/nathanfant/" target="_blank" rel="noreferrer" style={linkStyle}>Nathan Fant</a>
        <a href="https://www.linkedin.com/in/trent-wilkins/" target="_blank" rel="noreferrer" style={linkStyle}>Trent Wilkins</a>
        <a href="https://www.linkedin.com/in/ryanbrowndev/" target="_blank" rel="noreferrer" style={linkStyle}>Ryan Brown</a>
        <a href="https://www.linkedin.com/in/daniel-jump/" target="_blank" rel="noreferrer" style={linkStyle}>Dan Jump</a>
        <a href="https://www.linkedin.com/in/vincent-gallo-51a3b3152/" target="_blank" rel="noreferrer" style={linkStyle}>Vince Galio</a>
      </div>
    </footer>
  );
}

const linkStyle = {
  textDecoration: "none",
  fontWeight: "200",
  cursor: "pointer"
};
