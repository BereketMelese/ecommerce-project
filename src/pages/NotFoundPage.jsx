import { Link } from "react-router";
import Header from "../components/Header";

import "./NotFoundPage.jsx";

function NotFoundPage({ cart }) {
  const styles = {
    container: {
      maxWidth: "850px",
      marginTop: "90px",
      marginBottom: "100px",
      paddingLeft: "30px",
      paddingRight: "30px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      minHeight: "calc(100vh - 250px)",
    },
    notFoundContent: {
      width: "100%",
      padding: "40px",
      borderRadius: "20px",
      backgroundColor: "rgba(255, 255, 255, 0.95)",
      boxShadow: "0 10px 30px rgba(0, 100, 0, 0.08)",
      position: "relative",
      overflow: "hidden",
    },
    codeWrapper: {
      position: "relative",
      display: "inline-block",
      marginBottom: "20px",
    },
    code: {
      fontSize: "8rem",
      margin: "0",
      fontWeight: "800",
      color: "#2e7d32",
      textShadow: "3px 3px 0 rgba(46, 125, 50, 0.1)",
      position: "relative",
      zIndex: "2",
    },
    codeDecoration: {
      position: "absolute",
      width: "120%",
      height: "40px",
      backgroundColor: "rgba(46, 125, 50, 0.1)",
      borderRadius: "50%",
      bottom: "15px",
      left: "-10%",
      zIndex: "1",
    },
    errorMessage: {
      marginBottom: "40px",
    },
    text: {
      fontSize: "1.5rem",
      marginBottom: "1rem",
      color: "#333",
      lineHeight: "1.6",
    },
    highlight: {
      fontWeight: "700",
      color: "#2e7d32",
    },
    subtext: {
      fontSize: "1.1rem",
      color: "#666",
      marginTop: "10px",
      lineHeight: "1.5",
    },
    actionSection: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginBottom: "40px",
      position: "relative",
      zIndex: "2",
    },
    homeButton: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      backgroundColor: "#2e7d32",
      color: "white",
      padding: "14px 32px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "1.1rem",
      transition: "all 0.3s ease",
      boxShadow: "0 4px 15px rgba(46, 125, 50, 0.3)",
      marginBottom: "20px",
    },
    helpText: {
      fontSize: "1rem",
      color: "#666",
      marginTop: "10px",
    },
    backLink: {
      color: "#2563eb",
      textDecoration: "underline",
      fontWeight: "600",
      cursor: "pointer",
    },
  };

  return (
    <>
      <Header cart={cart} />
      <div style={styles.container}>
        <div style={styles.notFoundContent}>
          <div style={styles.codeWrapper}>
            <h1 style={styles.code}>404</h1>
            <div style={styles.codeDecoration}></div>
          </div>
          <div style={styles.errorMessage}>
            <p style={styles.text}>
              <span style={styles.highlight}>Oops!</span> The page you're
              looking for seems to have wandered off into the digital
              wilderness.
            </p>
            <p style={styles.subtext}>
              It might have been moved, deleted, or never existed in the first
              place.
            </p>
          </div>
          <div style={styles.actionSection}>
            <Link to="/" style={styles.homeButton}>
              <span>🏠</span>
              <span>Return to Homepage</span>
            </Link>
            <p style={styles.helpText}>
              Or{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.history.back();
                }}
                style={styles.backLink}
              >
                go back
              </a>{" "}
              to where you came from
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default NotFoundPage;
