import { motion } from "framer-motion";

function ObjetivosCard({ competencia, indicador }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      style={{
        backgroundColor: "#fff7e6",
        borderLeft: "6px solid #f4a261",
        padding: "22px",
        borderRadius: "14px",
        marginBottom: "25px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.07)"
      }}
    >
      <h2 style={{ color: "#9a4f16", marginTop: 0 }}>
        Objetivos de aprendizaje
      </h2>

      <h3 style={{ color: "#333" }}>Competencia</h3>
      <p style={{ lineHeight: "1.6" }}>{competencia}</p>

      <h3 style={{ color: "#333" }}>Indicador de logro</h3>
      <p style={{ lineHeight: "1.6", marginBottom: 0 }}>{indicador}</p>
    </motion.section>
  );
}

export default ObjetivosCard;