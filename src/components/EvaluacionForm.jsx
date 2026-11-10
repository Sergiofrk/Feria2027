
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
    borderRadius: "9px",
    border: "1px solid #d5e0e5",
    boxSizing: "border-box",
    marginTop: "8px",
    fontSize: "15px",
    backgroundColor: "#f8fbfc"
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      style={{
        background: "linear-gradient(135deg, #fff0e7, #fff8e9)",
        border: "1px solid #f3d4bd",
        padding: "25px",
        borderRadius: "20px",
        marginBottom: "28px",
        boxShadow: "0 6px 18px rgba(30,60,80,0.06)"
      }}
    >
      <h2 style={{ color: "#a64b16", marginTop: 0 }}>
        📝 Autoevaluación
      </h2>

      <p style={{ color: "#687781", lineHeight: "1.6" }}>
        Reflexiona sobre tu participación y los aprendizajes obtenidos durante
        el desarrollo de la Feria del Producto.
      </p>

      <form onSubmit={manejarEnvio}>
        <label style={{ display: "block", fontWeight: "bold" }}>
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
          marginTop: "20px"
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
          marginTop: "20px"
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
            background: "linear-gradient(90deg, #f4a340, #f27b50)",
            color: "white",
            border: "none",
            padding: "13px 22px",
            borderRadius: "10px",
            fontWeight: "bold",
            marginTop: "20px",
            cursor: "pointer"
          }}
        >
          Enviar autoevaluación
        </button>
      </form>

      {enviado && (
        <div style={{
          backgroundColor: "#fff3d6",
          color: "#925019",
          padding: "13px",
          borderRadius: "10px",
          marginTop: "18px"
        }}>
          <strong>¡Gracias por completar tu autoevaluación!</strong>
          <p style={{ marginBottom: 0 }}>
            Tus respuestas se mantienen solamente en esta sesión y no se han
            enviado a una base de datos.
          </p>
        </div>
      )}
    </motion.section>
  );
}

export default EvaluacionForm;
