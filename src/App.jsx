
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
    numero: 1,
    titulo: "Del producto",
    descripcion: "Diseño y desarrollo de la idea de producto.",
    actividades: [
      {
        numero: 1,
        titulo: "Elección del producto",
        descripcion:
          "Elegir un producto innovador, asignarle un concepto, elegir el nombre de la empresa e indicar qué tipo de empresa es y a qué se dedica.",
      },
      {
        numero: 2,
        titulo: "Identidad visual",
        descripcion:
          "Crear el logotipo, eslogan y etiqueta del producto. También decidir qué tipo de envase utilizarán.",
      },
      {
        numero: 3,
        titulo: "Descripción de la identidad visual",
        descripcion:
          "Describir el logotipo, el eslogan, la etiqueta y el envase seleccionado, explicando las decisiones del grupo.",
      },
      {
        numero: 4,
        titulo: "Proceso de producción",
        descripcion:
          "Describir la receta, los ingredientes y el procedimiento que utilizarán para elaborar el producto.",
      },
      {
        numero: 5,
        titulo: "Público objetivo",
        descripcion:
          "Identificar las características de las personas a quienes estará dirigido el producto, utilizando el formato proporcionado por el docente.",
      },
      {
        numero: 6,
        titulo: "Impactos esperados",
        descripcion:
          "Elaborar un listado de cinco impactos que esperan alcanzar con la creación y comercialización del producto.",
      },
      {
        numero: 7,
        titulo: "Análisis FODA",
        descripcion:
          "Realizar un análisis FODA del producto, identificando dos fortalezas, dos oportunidades, dos debilidades y dos amenazas.",
      },
    ],
    ejemplos: [
      {
        icono: "🍪",
        titulo: "Producto innovador",
        descripcion:
          "Un grupo decide elaborar galletas de chocolate rellenas de crema de maní y las presenta como un producto artesanal.",
      },
      {
        icono: "🎨",
        titulo: "Identidad visual",
        descripcion:
          "La empresa crea un logotipo con colores café y dorado, un eslogan atractivo y una etiqueta que identifica los ingredientes del producto.",
      },
      {
        icono: "🏭",
        titulo: "Proceso de producción",
        descripcion:
          "El grupo describe los ingredientes, las cantidades y los pasos necesarios para preparar sus galletas.",
      },
      {
        icono: "🎯",
        titulo: "Público objetivo",
        descripcion:
          "El producto está dirigido a jóvenes y adultos que disfrutan de los postres y buscan opciones artesanales.",
      },
      {
        icono: "📊",
        titulo: "Análisis FODA",
        descripcion:
          "Fortaleza: sabor original. Oportunidad: interés por productos artesanales. Debilidad: poca capacidad de producción. Amenaza: competencia de otras marcas.",
      },
    ],
  },

  {
    numero: 2,
    titulo: "De la empresa",
    descripcion: "Organización e identidad de la empresa.",
    actividades: [
      {
        numero: 1,
        titulo: "Modelo CANVAS",
        descripcion:
          "Desarrollar el modelo CANVAS para describir cómo funcionará la empresa y cómo generará valor.",
      },
      {
        numero: 2,
        titulo: "Historia de la empresa",
        descripcion:
          "Redactar la historia de la empresa, explicando cómo surgió la idea y cómo se desarrolló. Extensión máxima de dos páginas.",
      },
      {
        numero: 3,
        titulo: "Objetivos empresariales",
        descripcion:
          "Redactar un objetivo general y dos objetivos específicos para la empresa.",
      },
      {
        numero: 4,
        titulo: "Misión y visión",
        descripcion:
          "Definir la misión y la visión de la empresa, tomando en cuenta su propósito y lo que desea alcanzar en el futuro.",
      },
      {
        numero: 5,
        titulo: "Ubicación de la empresa",
        descripcion:
          "Determinar dónde estará ubicada la empresa y explicar las razones por las que eligieron ese lugar.",
      },
      {
        numero: 6,
        titulo: "Organigrama",
        descripcion:
          "Diseñar un organigrama que muestre los puestos y las responsabilidades de los integrantes de la empresa.",
      },
    ],
    ejemplos: [
      {
        icono: "🧩",
        titulo: "Modelo CANVAS",
        descripcion:
          "Una empresa de galletas identifica como clientes a jóvenes y familias, como canales de venta las redes sociales y como propuesta de valor sus sabores originales.",
      },
      {
        icono: "📖",
        titulo: "Historia empresarial",
        descripcion:
          "La empresa nació cuando tres estudiantes identificaron la oportunidad de ofrecer postres artesanales en su comunidad.",
      },
      {
        icono: "🎯",
        titulo: "Objetivos",
        descripcion:
          "Objetivo general: comercializar postres artesanales de calidad. Objetivo específico: dar a conocer la marca mediante publicaciones digitales.",
      },
      {
        icono: "💬",
        titulo: "Misión y visión",
        descripcion:
          "Misión: ofrecer postres artesanales de calidad. Visión: convertirse en una marca reconocida en la comunidad.",
      },
      {
        icono: "📍",
        titulo: "Ubicación",
        descripcion:
          "La empresa decide ubicarse cerca del centro de la comunidad porque es un lugar accesible para sus posibles clientes.",
      },
      {
        icono: "👥",
        titulo: "Organigrama",
        descripcion:
          "La empresa organiza sus puestos en dirección general, producción, ventas, finanzas y publicidad.",
      },
    ],
  },

  {
    numero: 3,
    titulo: "De los métodos publicitarios",
    descripcion: "Selección y diseño de estrategias publicitarias.",

    tecnologia: {
      titulo: "Aplicación de TECNOLOGÍA",
      descripcion:
        "En esta etapa se utilizará Canva como herramienta digital para diseñar anuncios publicitarios. Los estudiantes crearán publicaciones gráficas para promocionar su producto y podrán compartirlas en redes sociales.",
      herramienta: "Canva",
      actividad:
        "Diseñar en Canva al menos una pieza publicitaria digital para promocionar el producto de la empresa.",
    },

    actividades: [
      {
        numero: 1,
        titulo: "Métodos publicitarios",
        descripcion:
          "Describir al menos dos métodos publicitarios que utilizará la empresa para dar a conocer su producto.",
      },
      {
        numero: 2,
        titulo: "Diseño de publicidad digital en Canva",
        descripcion:
          "Utilizar Canva para diseñar al menos un anuncio publicitario digital de la empresa. La pieza debe incluir el nombre de la marca, imágenes del producto y un mensaje promocional. Al finalizar, guardar el diseño para utilizarlo en la promoción del producto mediante redes sociales.",
      },
      {
        numero: 3,
        titulo: "Objetivos publicitarios",
        descripcion:
          "Establecer un objetivo para cada uno de los métodos publicitarios seleccionados.",
      },
    ],

    ejemplos: [
      {
        icono: "📱",
        titulo: "Redes sociales",
        descripcion:
          "La empresa publica fotografías de sus galletas en Facebook e Instagram para presentar el producto y atraer posibles compradores.",
      },
      {
        icono: "🖨️",
        titulo: "Publicidad impresa",
        descripcion:
          "El grupo diseña volantes con el nombre de la empresa, una fotografía del producto y la información necesaria para realizar pedidos.",
      },
      {
        icono: "🎨",
        titulo: "Diseño en Canva",
        descripcion:
          "Los estudiantes utilizan Canva para crear anuncios digitales, agregar fotografías, textos promocionales y elementos gráficos relacionados con su marca.",
      },
      {
        icono: "🎯",
        titulo: "Objetivo publicitario",
        descripcion:
          "Aumentar el reconocimiento de la marca mediante publicaciones digitales dirigidas a jóvenes de la comunidad.",
      },
    ],
  },

  {
    numero: 4,
    titulo: "De los aspectos financieros",
    descripcion: "Organización de los recursos económicos del proyecto.",
    actividades: [
      {
        numero: 1,
        titulo: "Presupuesto de producción",
        descripcion:
          "Elaborar un presupuesto para producir un mínimo de 25 unidades, incluyendo el listado de ingredientes y sus costos.",
      },
      {
        numero: 2,
        titulo: "Fuentes de financiamiento",
        descripcion:
          "Identificar las fuentes de financiamiento que utilizará la empresa, como ahorros, rifas, financiamiento propio o patrocinios.",
      },
      {
        numero: 3,
        titulo: "Determinación del precio",
        descripcion:
          "Determinar el precio de venta del producto aplicando la fórmula explicada por el docente en clase.",
      },
    ],
    ejemplos: [
      {
        icono: "🧾",
        titulo: "Presupuesto",
        descripcion:
          "El grupo prepara un listado de los ingredientes y materiales que necesita para elaborar al menos 25 unidades de su producto.",
      },
      {
        icono: "💰",
        titulo: "Financiamiento",
        descripcion:
          "Los integrantes aportan una cantidad de dinero de sus ahorros y organizan una rifa para reunir los recursos necesarios.",
      },
      {
        icono: "🏷️",
        titulo: "Precio de venta",
        descripcion:
          "El grupo identifica el costo de producción y utiliza la fórmula de precio de venta que el docente explicó durante la clase.",
      },
    ],
  },

  {
    numero: 5,
    titulo: "Impacto social y ambiental",
    descripcion: "Responsabilidad y presentación del trabajo realizado.",
    actividades: [
      {
        numero: 1,
        titulo: "Prácticas responsables",
        descripcion:
          "Redactar dos prácticas responsables que el grupo haya realizado durante el desarrollo del proyecto, relacionadas con el impacto social o ambiental.",
      },
      {
        numero: 2,
        titulo: "Anexos y evidencias",
        descripcion:
          "Incluir un mínimo de ocho fotografías con una descripción del trabajo realizado en grupo, incluyendo las actividades de publicidad.",
      },
    ],
    ejemplos: [
      {
        icono: "♻️",
        titulo: "Responsabilidad ambiental",
        descripcion:
          "La empresa utiliza envases reciclables y evita el uso innecesario de bolsas plásticas durante la presentación de sus productos.",
      },
      {
        icono: "🤝",
        titulo: "Responsabilidad social",
        descripcion:
          "Los integrantes distribuyen las tareas de manera equitativa y mantienen un ambiente de respeto y colaboración.",
      },
      {
        icono: "📸",
        titulo: "Evidencias del proyecto",
        descripcion:
          "El grupo incluye fotografías de la elaboración del producto, reuniones de trabajo, diseño de publicidad y preparación para la feria.",
      },
    ],
  },
];

function App() {
  const [semanaSeleccionada, setSemanaSeleccionada] = useState(1);
  const [registros, setRegistros] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [guardando, setGuardando] = useState(false);
  const [error, setError] = useState("");
  const [mensaje, setMensaje] = useState("");

  const semanaActual = actividadesPorSemana.find(
    (semana) => semana.numero === semanaSeleccionada
  );

  useEffect(() => {
    cargarProgreso();
  }, []);

  async function cargarProgreso() {
    try {
      setCargando(true);
      setError("");

      if (!URL_NOCODB || !TOKEN_NOCODB || !TABLE_ID) {
        throw new Error(
          "Faltan datos de conexión con NocoDB. Revisa el archivo .env."
        );
      }

      const respuesta = await fetch(
        `${URL_NOCODB.replace(/\/$/, "")}/api/v2/tables/${TABLE_ID}/records?pageSize=1000`,
        {
          method: "GET",
          headers: {
            "xc-token": TOKEN_NOCODB,
          },
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo consultar el progreso en NocoDB.");
      }

      const resultado = await respuesta.json();
      setRegistros(resultado.list || []);
    } catch (err) {
      setError(err.message || "Ocurrió un error al cargar las actividades.");
    } finally {
      setCargando(false);
    }
  }

  function actividadEstaCompletada(semana, numeroActividad) {
    return registros.some(
      (registro) =>
        Number(registro.Semana) === Number(semana) &&
        Number(registro.Actividad_numero) === Number(numeroActividad) &&
        (
          registro.Completada === true ||
          registro.Completada === 1 ||
          registro.Completada === "true"
        )
    );
  }

  async function completarActividad(actividad) {
    if (actividadEstaCompletada(semanaSeleccionada, actividad.numero)) {
      return;
    }

    try {
      setGuardando(true);
      setError("");
      setMensaje("");

      const respuesta = await fetch(
        `${URL_NOCODB.replace(/\/$/, "")}/api/v2/tables/${TABLE_ID}/records`,
        {
          method: "POST",
          headers: {
            "xc-token": TOKEN_NOCODB,
            "Content-Type": "application/json",
          },
          body: JSON.stringify([
            {
              Semana: semanaSeleccionada,
              Actividad_numero: actividad.numero,
              Actividad_titulo: actividad.titulo,
              Completada: true,
              Fecha_completada: new Date().toISOString(),
            },
          ]),
        }
      );

      if (!respuesta.ok) {
        throw new Error("No se pudo guardar la actividad en NocoDB.");
      }

      setMensaje("¡Actividad completada y guardada correctamente!");
      await cargarProgreso();
    } catch (err) {
      setError(err.message || "Ocurrió un error al guardar la actividad.");
    } finally {
      setGuardando(false);
    }
  }

  const totalActividades = actividadesPorSemana.reduce(
    (total, semana) => total + semana.actividades.length,
    0
  );

  const actividadesCompletadas = actividadesPorSemana.reduce(
    (total, semana) => {
      const completadas = semana.actividades.filter((actividad) =>
        actividadEstaCompletada(semana.numero, actividad.numero)
      ).length;

      return total + completadas;
    },
    0
  );

  const porcentaje =
    totalActividades > 0
      ? Math.round((actividadesCompletadas / totalActividades) * 100)
      : 0;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f1f5f9",
        color: "#1e293b",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <HeaderClase
        tituloTema="Feria del Producto"
        descripcion="Plan de trabajo digital para desarrollar y presentar un producto."
      />

      <div
        style={{
          textAlign: "center",
          padding: "12px 15px",
          color: "#334155",
          fontWeight: "bold",
          background: "#ffffff",
          borderBottom: "1px solid #e2e8f0",
        }}
      >
        Lic. Sergio Orellana
      </div>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "25px 18px 45px",
        }}
      >
        <ObjetivosCard
          competencia="Desarrolla un proyecto empresarial mediante la aplicación de conocimientos de mercadotecnia, organización, publicidad y administración de recursos."
          indicador="Planifica y desarrolla una propuesta de producto, organiza una empresa, diseña estrategias publicitarias y presenta los resultados de su proyecto."
        />

        <motion.section
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: "#ffffff",
            borderRadius: "16px",
            padding: "22px",
            marginTop: "25px",
            marginBottom: "25px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
          }}
        >
          <h2 style={{ marginTop: 0, color: "#0f4c81" }}>
            📈 Progreso general del proyecto
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: "10px",
              flexWrap: "wrap",
              marginBottom: "10px",
            }}
          >
            <span>
              Actividades completadas: {actividadesCompletadas} de{" "}
              {totalActividades}
            </span>

            <strong style={{ color: "#0f766e" }}>{porcentaje}%</strong>
          </div>

          <div
            style={{
              width: "100%",
              height: "13px",
              background: "#e2e8f0",
              borderRadius: "20px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                width: `${porcentaje}%`,
                height: "100%",
                background: "linear-gradient(90deg, #0f766e, #38bdf8)",
                borderRadius: "20px",
                transition: "width 0.4s ease",
              }}
            />
          </div>
        </motion.section>

        <section style={{ marginTop: "30px" }}>
          <h2 style={{ color: "#0f4c81" }}>📚 Etapas del proyecto</h2>

          <p style={{ color: "#475569", lineHeight: 1.6 }}>
            Selecciona una semana para consultar sus actividades y ejemplos.
            Marca cada actividad cuando hayas terminado de realizarla.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(145px, 1fr))",
              gap: "12px",
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            {actividadesPorSemana.map((semana) => (
              <motion.button
                key={semana.numero}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSemanaSeleccionada(semana.numero);
                  setMensaje("");
                  setError("");
                }}
                style={{
                  border: "none",
                  borderRadius: "12px",
                  padding: "16px 10px",
                  cursor: "pointer",
                  fontWeight: "bold",
                  color:
                    semanaSeleccionada === semana.numero
                      ? "#ffffff"
                      : "#334155",
                  background:
                    semanaSeleccionada === semana.numero
                      ? "#0f4c81"
                      : "#ffffff",
                  boxShadow: "0 3px 10px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "1.3rem", marginBottom: "5px" }}>
                  {`0${semana.numero}`}
                </div>
                Semana {semana.numero}
              </motion.button>
            ))}
          </div>
        </section>

        {cargando ? (
          <p style={{ textAlign: "center", padding: "25px" }}>
            Cargando actividades...
          </p>
        ) : (
          <>
            {semanaActual && (
              <motion.section
                key={semanaActual.numero}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  style={{
                    background: "#0f4c81",
                    color: "#ffffff",
                    padding: "22px",
                    borderRadius: "15px",
                    marginBottom: "20px",
                  }}
                >
                  <h2 style={{ margin: "0 0 8px 0" }}>
                    Semana {semanaActual.numero}: {semanaActual.titulo}
                  </h2>

                  <p style={{ margin: 0, opacity: 0.9 }}>
                    {semanaActual.descripcion}
                  </p>
                </div>

                {semanaActual.tecnologia && (
                  <motion.aside
                    initial={{ opacity: 0, scale: 0.97 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      background: "#ecfdf5",
                      border: "2px solid #10b981",
                      borderLeft: "8px solid #059669",
                      borderRadius: "14px",
                      padding: "20px",
                      marginBottom: "22px",
                      boxShadow: "0 4px 12px rgba(5,150,105,0.10)",
                    }}
                  >
                    <div
                      style={{
                        display: "inline-block",
                        background: "#059669",
                        color: "#ffffff",
                        padding: "7px 13px",
                        borderRadius: "20px",
                        fontSize: "0.85rem",
                        fontWeight: "bold",
                        letterSpacing: "1px",
                        marginBottom: "12px",
                      }}
                    >
                      💻 COMPONENTE TIC
                    </div>

                    <h3
                      style={{
                        color: "#065f46",
                        margin: "0 0 10px 0",
                        fontSize: "1.35rem",
                      }}
                    >
                      {semanaActual.tecnologia.titulo}
                    </h3>

                    <p
                      style={{
                        color: "#064e3b",
                        lineHeight: 1.6,
                        margin: "0 0 14px 0",
                      }}
                    >
                      {semanaActual.tecnologia.descripcion}
                    </p>

                    <div
                      style={{
                        background: "#ffffff",
                        borderRadius: "10px",
                        padding: "13px",
                        marginBottom: "12px",
                      }}
                    >
                      <strong style={{ color: "#047857" }}>
                        Herramienta digital:
                      </strong>
                      <span style={{ color: "#334155" }}>
                        {" "}
                        {semanaActual.tecnologia.herramienta}
                      </span>
                    </div>

                    <div
                      style={{
                        background: "#d1fae5",
                        borderRadius: "10px",
                        padding: "13px",
                        color: "#064e3b",
                        lineHeight: 1.6,
                      }}
                    >
                      <strong>Actividad tecnológica:</strong>
                      <p style={{ margin: "5px 0 0 0" }}>
                        {semanaActual.tecnologia.actividad}
                      </p>
                    </div>
                  </motion.aside>
                )}

                <div style={{ display: "grid", gap: "15px" }}>
                  {semanaActual.actividades.map((actividad) => (
                    <ActividadItem
                      key={`${semanaActual.numero}-${actividad.numero}`}
                      actividad={actividad}
                      completada={actividadEstaCompletada(
                        semanaActual.numero,
                        actividad.numero
                      )}
                      onCompletar={() => completarActividad(actividad)}
                      guardando={guardando}
                    />
                  ))}
                </div>

                <Ejemplos ejemplos={semanaActual.ejemplos} />
              </motion.section>
            )}
          </>
        )}

        {mensaje && (
          <p
            style={{
              background: "#dcfce7",
              color: "#166534",
              padding: "12px 15px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            {mensaje}
          </p>
        )}

        {error && (
          <p
            style={{
              background: "#fee2e2",
              color: "#991b1b",
              padding: "12px 15px",
              borderRadius: "10px",
              marginTop: "20px",
            }}
          >
            {error}
          </p>
        )}

        <EvaluacionForm />

        <footer
          style={{
            textAlign: "center",
            marginTop: "45px",
            padding: "20px",
            color: "#64748b",
            borderTop: "1px solid #cbd5e1",
          }}
        >
          <p style={{ margin: 0 }}>
            Feria del Producto | Lic. Sergio Orellana
          </p>
          <p style={{ fontSize: "0.85rem", marginBottom: 0 }}>
            Proyecto educativo de Mercadotecnia
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
