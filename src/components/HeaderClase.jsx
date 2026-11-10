import { motion } from "framer-motion";

function HeaderClase({ tituloTema, descripcion }) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        background: "linear-gradient(135deg, #102a43, #176b87)",
        color: "white",
        padding: "35px 25px",
        borderRadius: "18px",
        textAlign: "center",
        marginBottom: "25px"
      }}
    >
      <p style={{
        color: "#ffd166",
        fontWeight: "bold",
        letterSpacing: "2px",
        margin: "0 0 10px"
      }}>
        PROYECTO EDUCATIVO
      </p>

      <h1 style={{
        fontSize: "clamp(28px, 5vw, 42px)",
        margin: "0 0 12px"
      }}>
        {tituloTema}
      </h1>

      <p style={{
        maxWidth: "750px",
        margin: "auto",
        lineHeight: "1.6",
        fontSize: "16px"
      }}>
        {descripcion}
      </p>

      <div style={{
        marginTop: "22px",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "10px"
      }}>
        <span style={etiqueta}>4to. Diversificado</span>
        <span style={etiqueta}>Mercadotecnia</span>
        <span style={etiqueta}>5 semanas</span>
      </div>
    </motion.header>
  );
}

const etiqueta = {
  backgroundColor: "rgba(255,255,255,0.15)",
  padding: "8px 14px",
  borderRadius: "20px",
  fontSize: "13px",
  fontWeight: "bold"
};

export default HeaderClase;