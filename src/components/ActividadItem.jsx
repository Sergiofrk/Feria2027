import { motion } from "framer-motion";

function ActividadItem({ actividad, completada, onCompletar, guardando }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: "white",
        border: completada ? "2px solid #2a9d8f" : "1px solid #e1e5e8",
        borderRadius: "14px",
        padding: "18px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "15px"
      }}
    >
      <div>
        <span style={{
          color: "#176b87",
          fontSize: "13px",
          fontWeight: "bold"
        }}>
          ACTIVIDAD {actividad.numero}
        </span>

        <h3 style={{
          color: "#183b56",
          margin: "8px 0"
        }}>
          {actividad.titulo}
        </h3>

        <p style={{
          color: "#5c6770",
          lineHeight: "1.5",
          margin: 0
        }}>
          {actividad.descripcion}
        </p>
      </div>

      <button
        onClick={onCompletar}
        disabled={completada || guardando}
        style={{
          backgroundColor: completada ? "#2a9d8f" : "#176b87",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "9px",
          fontWeight: "bold",
          cursor: completada || guardando ? "default" : "pointer",
          opacity: guardando ? 0.7 : 1
        }}
      >
        {guardando
          ? "Guardando..."
          : completada
            ? "✓ Actividad completada"
            : "Marcar como completada"}
      </button>
    </motion.article>
  );
}

export default ActividadItem;