
import { useState } from "react";
import { motion } from "framer-motion";

const criterios = [
  "El anuncio identifica claramente el producto y la empresa.",
  "El mensaje publicitario es claro y está dirigido al público objetivo.",
  "El diseño utiliza adecuadamente imágenes, colores y textos.",
  "El estudiante utiliza Canva para elaborar su anuncio digital.",
  "El estudiante explica las decisiones tomadas en su diseño.",
];

function GuiaMediacion() {
  const [evaluaciones, setEvaluaciones] = useState({});
  const [nombre, setNombre] = useState("");

  const cumplidos = criterios.filter(
    (_, index) => evaluaciones[index] === true
  ).length;

  function cambiarCriterio(index) {
    setEvaluaciones((anterior) => ({
      ...anterior,
      [index]: !anterior[index],
    }));
  }

  function limpiarEvaluacion() {
    setEvaluaciones({});
    setNombre("");
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        marginTop: "30px",
        marginBottom: "30px",
        background: "#ffffff",
        borderRadius: "18px",
        padding: "clamp(18px, 4vw, 28px)",
        boxShadow: "0 5px 20px rgba(0,0,0,0.07)",
        border: "1px solid #cbd5e1",
      }}
    >
      <div
        style={{
          background: "linear-gradient(135deg, #0f766e, #0f4c81)",
          color: "#ffffff",
          borderRadius: "14px",
          padding: "22px",
          marginBottom: "22px",
        }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#facc15",
            color: "#713f12",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "0.8rem",
            fontWeight: "bold",
            marginBottom: "12px",
          }}
        >
          💻 TECNOLOGÍA · 20 MINUTOS
        </span>

        <h2 style={{ margin: "0 0 8px", fontSize: "1.5rem" }}>
          Guía de Mediación y Evaluación
        </h2>

        <p style={{ margin: 0, lineHeight: 1.6 }}>
          Diseñando la publicidad digital de nuestro producto
        </p>
      </div>

      <div style={{ marginBottom: "22px", lineHeight: 1.7 }}>
        <h3 style={{ color: "#0f4c81" }}>
          📚 Ficha de trabajo
        </h3>

        <p>
          <strong>Nivel:</strong> Cuarto diversificado
        </p>

        <p>
          <strong>Área:</strong> Mercadotecnia
        </p>

        <p>
          <strong>Duración:</strong> 20 minutos
        </p>

        <p>
          <strong>Herramienta digital:</strong> Canva
        </p>

        <p>
          <strong>Propósito:</strong> Aplicar conocimientos de
          mercadotecnia mediante la elaboración de un anuncio
          publicitario digital para promocionar el producto
          desarrollado durante la Feria del Producto.
        </p>
      </div>

      <h3 style={{ color: "#0f4c81" }}>
        📝 Desarrollo de la actividad
      </h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns:
            "repeat(auto-fit, minmax(210px, 1fr))",
          gap: "14px",
          marginBottom: "25px",
        }}
      >
        {[
          {
            tiempo: "5 minutos",
            titulo: "1. Planificación",
            texto:
              "Selecciona el producto que deseas promocionar e identifica a qué público estará dirigido el anuncio.",
            color: "#eff6ff",
            borde: "#60a5fa",
          },
          {
            tiempo: "10 minutos",
            titulo: "2. Diseño en Canva",
            texto:
              "Crea un anuncio digital que incluya nombre de la empresa, imagen del producto, eslogan y un mensaje publicitario.",
            color: "#fff7ed",
            borde: "#fb923c",
          },
          {
            tiempo: "5 minutos",
            titulo: "3. Presentación",
            texto:
              "Presenta tu anuncio y explica por qué elegiste esos colores, imágenes y mensajes para atraer a tu público objetivo.",
            color: "#f0fdf4",
            borde: "#4ade80",
          },
        ].map((paso, index) => (
          <motion.article
            key={index}
            whileHover={{ y: -5 }}
            style={{
              background: paso.color,
              borderLeft: `5px solid ${paso.borde}`,
              borderRadius: "12px",
              padding: "17px",
            }}
          >
            <strong style={{ color: "#334155" }}>
              ⏱️ {paso.tiempo}
            </strong>

            <h4 style={{ color: "#0f4c81" }}>
              {paso.titulo}
            </h4>

            <p
              style={{
                color: "#475569",
                lineHeight: 1.6,
                marginBottom: 0,
              }}
            >
              {paso.texto}
            </p>
          </motion.article>
        ))}
      </div>

      <div
        style={{
          background: "#f8fafc",
          padding: "17px",
          borderRadius: "12px",
          marginBottom: "25px",
          lineHeight: 1.6,
        }}
      >
        <strong>📌 Evidencia de aprendizaje:</strong>
        <p style={{ marginBottom: 0 }}>
          Anuncio publicitario elaborado en Canva, presentado
          al docente e incorporado posteriormente como
          evidencia en la guía física de la Feria del Producto.
        </p>
      </div>

      <div
        style={{
          borderTop: "2px solid #e2e8f0",
          paddingTop: "22px",
        }}
      >
        <h3 style={{ color: "#0f4c81" }}>
          ✅ Instrumento de evaluación: Lista de cotejo
        </h3>

        <p style={{ color: "#475569", lineHeight: 1.6 }}>
          El docente verificará el cumplimiento de los siguientes
          cinco criterios. Cada criterio cumplido equivale a
          un punto. Esta lista sirve como apoyo para la
          evaluación del anuncio publicitario.
        </p>

        <label
          htmlFor="nombre-estudiante"
          style={{
            display: "block",
            fontWeight: "bold",
            marginBottom: "8px",
            color: "#334155",
          }}
        >
          Nombre del estudiante o grupo:
        </label>

        <input
          id="nombre-estudiante"
          type="text"
          value={nombre}
          onChange={(evento) => setNombre(evento.target.value)}
          placeholder="Escribe el nombre"
          style={{
            width: "100%",
            maxWidth: "450px",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #cbd5e1",
            marginBottom: "20px",
            fontSize: "1rem",
            boxSizing: "border-box",
          }}
        />

        <div style={{ display: "grid", gap: "10px" }}>
          {criterios.map((criterio, index) => (
            <motion.label
              key={index}
              whileHover={{ x: 3 }}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
                padding: "14px",
                background: evaluaciones[index]
                  ? "#dcfce7"
                  : "#f8fafc",
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                cursor: "pointer",
                lineHeight: 1.5,
              }}
            >
              <input
                type="checkbox"
                checked={evaluaciones[index] || false}
                onChange={() => cambiarCriterio(index)}
                style={{
                  width: "19px",
                  height: "19px",
                  marginTop: "2px",
                  accentColor: "#059669",
                  flexShrink: 0,
                }}
              />

              <span style={{ color: "#334155" }}>
                <strong>{index + 1}.</strong> {criterio}
              </span>
            </motion.label>
          ))}
        </div>

        <div
          style={{
            marginTop: "20px",
            padding: "20px",
            background: "#eff6ff",
            borderRadius: "12px",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 8px",
              color: "#475569",
            }}
          >
            Resultado de la lista de cotejo
          </p>

          <strong
            style={{
              fontSize: "2rem",
              color: "#0f4c81",
            }}
          >
            {cumplidos} / 5
          </strong>

          <p
            style={{
              color: "#475569",
              fontSize: "0.9rem",
              marginBottom: 0,
            }}
          >
            {cumplidos === 5
              ? "Todos los criterios se han cumplido."
              : "Marca los criterios que se hayan cumplido."}
          </p>
        </div>

        <button
          type="button"
          onClick={limpiarEvaluacion}
          style={{
            background: "#e2e8f0",
            color: "#334155",
            border: "none",
            borderRadius: "10px",
            padding: "12px 18px",
            marginTop: "15px",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          Limpiar evaluación
        </button>

        <p
          style={{
            color: "#64748b",
            fontSize: "0.85rem",
            lineHeight: 1.6,
            marginTop: "18px",
          }}
        >
          Nota: esta evaluación se realiza de manera local en
          la página. No se guarda automáticamente en NocoDB.
          El docente puede registrar el resultado en la guía
          física del estudiante.
        </p>
      </div>
    </motion.section>
  );
}

export default GuiaMediacion;
