
import { motion } from "framer-motion";

function ActividadItem({
  actividad,
  completada,
  onCompletar,
  guardando
}) {
  return (
    <motion.article
      whileHover={{ y: -6, scale: 1.015 }}
      transition={{ duration: 0.2 }}
      style={{
        backgroundColor: completada ? "#e5f8f1" : "white",
        border: completada ? "2px solid #36b58b" : "1px solid #e1e8ed",
        borderTop: `6px solid ${completada ? "#36b58b" : "#f4a340"}`,
        borderRadius: "17px",
        padding: "20px",
        boxShadow: "0 6px 16px rgba(30,60,80,0.08)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "18px",
        minHeight: "230px"
      }}
    >
      <div>
        <span style={{
          backgroundColor: completada ? "#c7f0df" : "#fff0d6",
          color: completada ? "#167653" : "#a65b12",
          padding: "6px 11px",
          borderRadius: "20px",
          fontSize: "12px",
          fontWeight: "bold"
        }}>
          {completada ? "✓ COMPLETADA" : `ACTIVIDAD ${actividad.numero}`}
        </span>

        <h3 style={{
          color: "#174c67",
          margin: "16px 0 9px",
          fontSize: "18px"
        }}>
          {actividad.titulo}
        </h3>

        <p style={{
          color: "#5c6972",
          lineHeight: "1.6",
          margin: 0,
          fontSize: "14px"
        }}>
          {actividad.descripcion}
        </p>
      </div>

      <button
        onClick={onCompletar}
        disabled={completada || guardando}
        style={{
          background: completada
            ? "#36b58b"
            : "linear-gradient(90deg, #f4a340, #f27b50)",
          color: "white",
          border: "none",
          padding: "12px",
          borderRadius: "10px",
          fontWeight: "bold",
          cursor: completada || guardando ? "default" : "pointer",
          opacity: guardando ? 0.7 : 1
        }}
      >
        {guardando
          ? "Guardando..."
          : completada
            ? "✓ Trabajo registrado"
            : "Marcar como completada"}
      </button>
    </motion.article>
  );
}

export default ActividadItem;
