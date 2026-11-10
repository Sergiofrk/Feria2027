import { useState } from "react";
import { motion } from "framer-motion";

function EvaluacionForm() {
  const [respuestas, setRespuestas] = useState({
    participacion: "",
    aprendizaje: "",
    mejora: ""
  });

  const [enviado, setEnviado] = useState(false);

  function manejarCambio(evento) {
    setRespuestas({
      ...respuestas,
      [evento.target.name]: evento.target.value
    });

    setEnviado(false);
  }

  function manejarEnvio(evento) {
    evento.preventDefault();
    setEnviado(true);
  }

  const estiloInput = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #ccd5dc",
    boxSizing: "border-box",
    marginTop: "8px",
    fontSize: "15px"
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        backgroundColor: "white",
        padding: "22px",
        borderRadius: "14px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
        marginBottom: "25px"
      }}
    >
      <h2 style={{ color: "#183b56", marginTop: 0 }}>
        Autoevaluación
      </h2>

      <p style={{ color: "#5c6770" }}>
        Reflexiona sobre tu participación en el proyecto Feria del Producto.
      </p>

      <form onSubmit={manejarEnvio}>
        <label style={{ fontWeight: "bold" }}>
          ¿Cómo consideras que fue tu participación?
          <select
            name="participacion"
            value={respuestas.participacion}
            onChange={manejarCambio}
            required
            style={estiloInput}
          >
            <option value="">Selecciona una respuesta</option>
            <option value="Excelente">Excelente</option>
            <option value="Buena">Buena</option>
            <option value="Regular">Regular</option>
            <option value="Necesito mejorar">Necesito mejorar</option>
          </select>
        </label>

        <label style={{
          display: "block",
          fontWeight: "bold",
          marginTop: "18px"
        }}>
          ¿Qué aprendiste durante el proyecto?
          <textarea
            name="aprendizaje"
            value={respuestas.aprendizaje}
            onChange={manejarCambio}
            required
            rows="3"
            placeholder="Escribe tu respuesta..."
            style={estiloInput}
          />
        </label>

        <label style={{
          display: "block",
          fontWeight: "bold",
          marginTop: "18px"
        }}>
          ¿Qué aspecto consideras que puedes mejorar?
          <textarea
            name="mejora"
            value={respuestas.mejora}
            onChange={manejarCambio}
            required
            rows="3"
            placeholder="Escribe tu respuesta..."
            style={estiloInput}
          />
        </label>

        <button
          type="submit"
          style={{
            backgroundColor: "#e9a23b",
            color: "#183b56",
            border: "none",
            padding: "12px 20px",
            borderRadius: "9px",
            fontWeight: "bold",
            marginTop: "18px",
            cursor: "pointer"
          }}
        >
          Enviar autoevaluación
        </button>
      </form>

      {enviado && (
        <p style={{
          color: "#21867a",
          fontWeight: "bold",
          marginBottom: 0
        }}>
          ¡Gracias! Tu autoevaluación ha sido registrada en esta sesión.
        </p>
      )}
    </motion.section>
  );
}

export default EvaluacionForm;