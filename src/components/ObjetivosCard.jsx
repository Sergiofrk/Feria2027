
import { motion } from "framer-motion";

function ObjetivosCard({ competencia, indicador }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      style={{
        background: "linear-gradient(135deg, #fff3d6, #ffe5c2)",
        border: "2px solid #ffc66d",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "28px",
        boxShadow: "0 7px 18px rgba(210,140,50,0.12)"
      }}
    >
      <h2 style={{ color: "#a64b16", marginTop: 0 }}>
        🎯 ¿Qué aprenderemos?
      </h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "18px"
      }}>
        <div style={{
          backgroundColor: "rgba(255,255,255,0.75)",
          padding: "17px",
          borderRadius: "14px"
        }}>
          <h3 style={{ color: "#176b87", marginTop: 0 }}>
            Competencia
          </h3>

          <p style={{ lineHeight: "1.6", marginBottom: 0 }}>
            {competencia}
          </p>
        </div>

        <div style={{
          backgroundColor: "rgba(255,255,255,0.75)",
          padding: "17px",
          borderRadius: "14px"
        }}>
          <h3 style={{ color: "#176b87", marginTop: 0 }}>
            Indicador de logro
          </h3>

          <p style={{ lineHeight: "1.6", marginBottom: 0 }}>
            {indicador}
          </p>
        </div>
      </div>
    </motion.section>
  );
}

export default ObjetivosCard;
