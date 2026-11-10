import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import HeaderClase from "./components/HeaderClase";
import ObjetivosCard from "./components/ObjetivosCard";
import ActividadItem from "./components/ActividadItem";
import Ejemplos from "./components/Ejemplos";
import EvaluacionForm from "./components/EvaluacionForm";

const URL_NOCODB = import.meta.env.VITE_NOCODB_URL;
const TOKEN_NOCODB = import.meta.env.VITE_NOCODB_TOKEN;
const TABLE_ID = import.meta.env.VITE_NOCODB_TABLE_ID;

const actividadesPorSemana = [
  {
    semana: 1,
    titulo: "Del producto",
    descripcion: "Construcción de la idea y características del producto.",
    actividades: [
      {
        numero: 1,
        titulo: "Elección del producto y empresa",
        descripcion: "Elegir un producto innovador, asignarle un concepto, elegir el nombre de la empresa, indicar qué tipo de empresa es y a qué se dedica."
      },
      {
        numero: 2,
        titulo: "Identidad visual",
        descripcion: "Crear el logotipo, eslogan y etiqueta del producto, además de decidir qué tipo de envase utilizarán."
      },
      {
        numero: 3,
        titulo: "Descripción de la identidad visual",
        descripcion: "Describir el logotipo, el eslogan, la etiqueta y el envase, explicando las decisiones tomadas."
      },
      {
        numero: 4,
        titulo: "Proceso de producción",
        descripcion: "Describir la receta, los ingredientes y el procedimiento para elaborar el producto."
      },
      {
        numero: 5,
        titulo: "Público objetivo",
        descripcion: "Identificar las características del público al que estará dirigido el producto, utilizando el formato proporcionado por el docente."
      },
      {
        numero: 6,
        titulo: "Impactos esperados",
        descripcion: "Redactar cinco impactos que esperan alcanzar con la creación y comercialización del producto."
      },
      {
        numero: 7,
        titulo: "Análisis FODA",
        descripcion: "Realizar un análisis FODA del producto, incluyendo dos fortalezas, dos oportunidades, dos debilidades y dos amenazas."
      }
    ]
  },
  {
    semana: 2,
    titulo: "De la empresa",
    descripcion: "Organización e identidad empresarial.",
    actividades: [
      {
        numero: 1,
        titulo: "Modelo CANVAS",
        descripcion: "Desarrollar el modelo CANVAS para explicar cómo funcionará la empresa."
      },
      {
        numero: 2,
        titulo: "Historia de la empresa",
        descripcion: "Redactar la historia de la empresa, con una extensión máxima de dos páginas."
      },
      {
        numero: 3,
        titulo: "Objetivos empresariales",
        descripcion: "Establecer un objetivo general y dos objetivos específicos para la empresa."
      },
      {
        numero: 4,
        titulo: "Misión y visión",
        descripcion: "Redactar la misión y visión de la empresa de acuerdo con su propósito y proyección."
      },
      {
        numero: 5,
        titulo: "Ubicación de la empresa",
        descripcion: "Indicar dónde estará ubicada la empresa y explicar por qué eligieron ese lugar."
      },
      {
        numero: 6,
        titulo: "Organigrama",
        descripcion: "Diseñar el organigrama de la empresa, mostrando los puestos y niveles de organización."
      }
    ]
  },
  {
    semana: 3,
    titulo: "De los métodos publicitarios",
    descripcion: "Selección y diseño de estrategias para dar a conocer el producto.",
    actividades: [
      {
        numero: 1,
        titulo: "Métodos publicitarios",
        descripcion: "Describir al menos dos métodos publicitarios que utilizarán para promocionar el producto."
      },
      {
        numero: 2,
        titulo: "Diseño de publicidad",
        descripcion: "Diseñar materiales publicitarios para promocionar el producto. Se utilizará Canva para elaborar anuncios digitales y publicaciones para redes sociales."
      },
      {
        numero: 3,
        titulo: "Objetivos publicitarios",
        descripcion: "Redactar un objetivo para cada uno de los métodos publicitarios seleccionados."
      }
    ]
  },
  {
    semana: 4,
    titulo: "De los aspectos financieros",
    descripcion: "Planificación de los recursos y determinación del precio.",
    actividades: [
      {
        numero: 1,
        titulo: "Presupuesto de producción",
        descripcion: "Elaborar un presupuesto para producir como mínimo 25 unidades del producto, incluyendo el listado de ingredientes y sus costos."
      },
      {
        numero: 2,
        titulo: "Fuentes de financiamiento",
        descripcion: "Identificar las fuentes de financiamiento que utilizarán, como ahorros, rifas, financiamiento propio o patrocinios."
      },
      {
        numero: 3,
        titulo: "Determinación del precio",
        descripcion: "Determinar el precio de venta del producto aplicando la fórmula explicada por el docente en clase."
      }
    ]
  },
  {
    semana: 5,
    titulo: "Impacto social y ambiental",
    descripcion: "Reflexión sobre la responsabilidad y el trabajo realizado.",
    actividades: [
      {
        numero: 1,
        titulo: "Prácticas responsables",
        descripcion: "Redactar dos prácticas responsables que el grupo haya realizado durante el desarrollo del proyecto, relacionadas con el impacto social y ambiental."
      },
      {
        numero: 2,
        titulo: "Anexos fotográficos",
        descripcion: "Incluir un mínimo de ocho fotografías con la descripción del trabajo realizado en grupo, incluyendo la elaboración de publicidad."
      }
    ]
  }
];

function App() {
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(null);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const [semanaSeleccionada, setSemanaSeleccionada] = useState(1);

  const semanaActual = actividadesPorSemana.find(
    (semana) => semana.semana === semanaSeleccionada
  );

  const totalActividades = actividadesPorSemana.reduce(
    (total, semana) => total + semana.actividades.length,
    0
  );

  const actividadesCompletadas = registros.filter(
    (registro) => registro.Completada === true
  ).length;

  const porcentaje = Math.round(
    (actividadesCompletadas / totalActividades) * 100
  );

  function actividadEstaCompletada(semana, numero) {
    return registros.some(
      (registro) =>
        Number(registro.Semana) === semana &&
        Number(registro.Actividad_numero) === numero &&
        registro.Completada === true
    );
  }

  // READ: consultar los registros guardados en NocoDB.
  async function cargarProgreso() {
    try {
      setCargando(true);
      setError("");

      if (!URL_NOCODB || !TOKEN_NOCODB || !TABLE_ID) {
        throw new Error("Faltan los datos de conexión de NocoDB en el archivo .env.");
      }

      const respuesta = await fetch(
        `${URL_NOCODB}/api/v2/tables/${TABLE_ID}/records?limit=1000`,
        {
          method: "GET",
          headers: {
            "xc-token": TOKEN_NOCODB,
            "Content-Type": "application/json"
          }
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudieron consultar los registros de NocoDB.");
      }

      const datos = await respuesta.json();

      setRegistros(datos.list || []);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  }

  // CREATE: guardar una actividad completada en NocoDB.
  async function completarActividad(semana, actividad) {
    const yaCompletada = actividadEstaCompletada(
      semana,
      actividad.numero
    );

    if (yaCompletada) return;

    try {
      setGuardando(`${semana}-${actividad.numero}`);
      setError("");
      setMensaje("");

      const respuesta = await fetch(
        `${URL_NOCODB}/api/v2/tables/${TABLE_ID}/records`,
        {
          method: "POST",
          headers: {
            "xc-token": TOKEN_NOCODB,
            "Content-Type": "application/json"
          },
          body: JSON.stringify([
            {
              Semana: semana,
              Actividad_numero: actividad.numero,
              Actividad_titulo: actividad.titulo,
              Completada: true,
              Fecha_completada: new Date().toISOString()
            }
          ])
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo guardar la actividad en NocoDB.");
      }

      setMensaje("¡Actividad guardada correctamente!");

      await cargarProgreso();
    } catch (err) {
      setError(err.message);
    } finally {
      setGuardando(null);
    }
  }

  useEffect(() => {
    cargarProgreso();
  }, []);

  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#f3f6f8",
      padding: "20px",
      fontFamily: "Arial, sans-serif",
      color: "#263746"
    }}>
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto"
      }}>

        <HeaderClase
          tituloTema="Feria del Producto"
          descripcion="Plan de clase digital interactivo para desarrollar una propuesta empresarial, desde la creación del producto hasta su promoción y presentación."
        />

        <ObjetivosCard
          competencia="Desarrolla una propuesta de producto mediante la aplicación de conocimientos de mercadotecnia, organización empresarial, publicidad y planificación financiera."
          indicador="Organiza y desarrolla las etapas de un proyecto empresarial, presenta una propuesta de producto y utiliza herramientas digitales para apoyar su promoción."
        />

        <section style={{
          backgroundColor: "white",
          padding: "22px",
          borderRadius: "14px",
          marginBottom: "25px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)"
        }}>
          <h2 style={{ color: "#183b56", marginTop: 0 }}>
            Progreso general del proyecto
          </h2>

          <div style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            <strong>{actividadesCompletadas} de {totalActividades} actividades completadas</strong>
            <strong style={{ color: "#176b87" }}>{porcentaje}%</strong>
          </div>

          <div style={{
            height: "13px",
            backgroundColor: "#e5ebef",
            borderRadius: "20px",
            overflow: "hidden",
            marginTop: "12px"
          }}>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${porcentaje}%` }}
              transition={{ duration: 0.7 }}
              style={{
                height: "100%",
                backgroundColor: "#2a9d8f",
                borderRadius: "20px"
              }}
            />
          </div>

          <button
            onClick={cargarProgreso}
            style={{
              backgroundColor: "#edf3f6",
              color: "#176b87",
              border: "1px solid #cbd9e0",
              padding: "9px 14px",
              borderRadius: "8px",
              marginTop: "15px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            Actualizar progreso
          </button>
        </section>

        {cargando && (
          <p style={{ textAlign: "center" }}>
            Consultando información de NocoDB...
          </p>
        )}

        {error && (
          <p style={{
            backgroundColor: "#fdecea",
            color: "#a52822",
            padding: "12px",
            borderRadius: "8px"
          }}>
            {error}
          </p>
        )}

        {mensaje && (
          <p style={{
            backgroundColor: "#e4f5ef",
            color: "#176b55",
            padding: "12px",
            borderRadius: "8px"
          }}>
            {mensaje}
          </p>
        )}

        <section style={{ marginBottom: "25px" }}>
          <h2 style={{ color: "#183b56" }}>
            Etapas del proyecto
          </h2>

          <div style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px"
          }}>
            {actividadesPorSemana.map((semana) => (
              <button
                key={semana.semana}
                onClick={() => setSemanaSeleccionada(semana.semana)}
                style={{
                  flex: "1 1 150px",
                  backgroundColor:
                    semanaSeleccionada === semana.semana
                      ? "#176b87"
                      : "white",
                  color:
                    semanaSeleccionada === semana.semana
                      ? "white"
                      : "#176b87",
                  border: "1px solid #176b87",
                  borderRadius: "10px",
                  padding: "14px 10px",
                  fontWeight: "bold",
                  cursor: "pointer"
                }}
              >
                Semana {semana.semana}
              </button>
            ))}
          </div>
        </section>

        <motion.section
          key={semanaSeleccionada}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35 }}
          style={{
            backgroundColor: "#eaf2f5",
            padding: "22px",
            borderRadius: "14px",
            marginBottom: "25px"
          }}
        >
          <h2 style={{
            color: "#176b87",
            marginTop: 0
          }}>
            Semana {semanaActual.semana}: {semanaActual.titulo}
          </h2>

          <p style={{ lineHeight: "1.6" }}>
            {semanaActual.descripcion}
          </p>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(230px, 1fr))",
            gap: "15px"
          }}>
            {semanaActual.actividades.map((actividad) => (
              <ActividadItem
                key={`${semanaActual.semana}-${actividad.numero}`}
                actividad={actividad}
                completada={actividadEstaCompletada(
                  semanaActual.semana,
                  actividad.numero
                )}
                guardando={
                  guardando === `${semanaActual.semana}-${actividad.numero}`
                }
                onCompletar={() =>
                  completarActividad(semanaActual.semana, actividad)
                }
              />
            ))}
          </div>
        </motion.section>

        <Ejemplos />

        <EvaluacionForm />

        <footer style={{
          backgroundColor: "#102a43",
          color: "white",
          padding: "22px",
          borderRadius: "14px",
          textAlign: "center",
          marginTop: "25px"
        }}>
          <h3 style={{ marginTop: 0 }}>
            Feria del Producto
          </h3>
          <p style={{ marginBottom: 0 }}>
            Aprender, crear y emprender.
          </p>
        </footer>

      </div>
    </div>
  );
}

export default App;