
import { motion } from "framer-motion";

function Ejemplos({ ejemplos = [] }) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      style={{
        background: "#fff7ed",
        border: "2px solid #fed7aa",
        borderRadius: "16px",
        padding: "22px",
        marginTop: "25px",
        marginBottom: "25px",
      }}
    >
      <h2
        style={{
          color: "#9a3412",
          fontSize: "1.4rem",
          marginTop: 0,
          marginBottom: "8px",
        }}
      >
        💡 Ejemplos para desarrollar las actividades
      </h2>

      <p style={{ color: "#7c2d12", marginBottom: "20px" }}>
        Estos ejemplos sirven como orientación para comprender mejor el
        trabajo de cada semana. Pueden utilizarlos como inspiración para
        desarrollar sus propias ideas.
      </p>

      {ejemplos.length > 0 ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "15px",
          }}
        >
          {ejemplos.map((ejemplo, index) => (
            <motion.article
              key={`${ejemplo.titulo}-${index}`}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.2 }}
              style={{
                background: "#ffffff",
                borderRadius: "12px",
                padding: "17px",
                border: "1px solid #fed7aa",
                boxShadow: "0 3px 10px rgba(0,0,0,0.05)",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: "8px" }}>
                {ejemplo.icono || "📌"}
              </div>

              <h3
                style={{
                  color: "#c2410c",
                  fontSize: "1.05rem",
                  margin: "0 0 8px 0",
                }}
              >
                {ejemplo.titulo}
              </h3>

              <p
                style={{
                  color: "#44403c",
                  fontSize: "0.95rem",
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {ejemplo.descripcion}
              </p>
            </motion.article>
          ))}
        </div>
      ) : (
        <p style={{ color: "#7c2d12" }}>
          No hay ejemplos disponibles para esta semana.
        </p>
      )}
    </motion.section>
  );
}

export default Ejemplos;
