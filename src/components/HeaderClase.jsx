
import { motion } from "framer-motion";

function HeaderClase({ tituloTema, descripcion }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        background: "linear-gradient(120deg, #173f5f, #206a8a, #28a6a1)",
        color: "white",
        padding: "45px 25px",
        borderRadius: "24px",
        textAlign: "center",
        marginBottom: "28px",
        boxShadow: "0 12px 30px rgba(23,63,95,0.2)"
      }}
    >
      <div style={{ fontSize: "42px", marginBottom: "8px" }}>
        🛍️ 🎨 📢
      </div>

      <p style={{
        color: "#ffe082",
        fontWeight: "bold",
        letterSpacing: "3px",
        fontSize: "13px"
      }}>
        PROYECTO DE MERCADOTECNIA
      </p>

      <h1 style={{
        fontSize: "clamp(32px, 6vw, 48px)",
        margin: "10px 0",
        fontWeight: "900"
      }}>
        {tituloTema}
      </h1>

      <p style={{
        maxWidth: "720px",
        margin: "auto",
        lineHeight: "1.7",
        fontSize: "16px",
        color: "#eafafa"
      }}>
        {descripcion}
      </p>

      <div style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px",
        marginTop: "25px"
      }}>
        {["4to. Diversificado", "Mercadotecnia", "5 semanas"].map((dato) => (
          <span key={dato} style={{
            backgroundColor: "white",
            color: "#174c67",
            padding: "9px 16px",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "13px"
          }}>
            {dato}
          </span>
        ))}
      </div>
    </motion.header>
  );
}

export default HeaderClase;
