import { motion } from "framer-motion";

function Ejemplos() {
  const ejemplos = [
    {
      titulo: "Producto innovador",
      descripcion:
        "Una bebida natural con una combinación diferente de sabores y una presentación atractiva."
    },
    {
      titulo: "Identidad de empresa",
      descripcion:
        "Una empresa de alimentos puede utilizar un nombre fácil de recordar, un logotipo llamativo y un eslogan relacionado con su producto."
    },
    {
      titulo: "Publicidad digital",
      descripcion:
        "Crear en Canva una publicación que muestre el producto, sus características, el nombre de la empresa y un mensaje que motive a comprar."
    },
    {
      titulo: "Redes sociales",
      descripcion:
        "Compartir anuncios digitales en redes sociales para dar a conocer el producto y llegar al público objetivo."
    }
  ];

  return (
    <section style={{
      marginBottom: "25px"
    }}>
      <h2 style={{ color: "#183b56" }}>
        Ideas y ejemplos para el proyecto
      </h2>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px"
      }}>
        {ejemplos.map((ejemplo, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.12 }}
            whileHover={{ scale: 1.02 }}
            style={{
              backgroundColor: "#eef6f8",
              borderRadius: "12px",
              padding: "18px",
              flex: "1 1 220px",
              borderTop: "4px solid #e9a23b"
            }}
          >
            <h3 style={{
              color: "#176b87",
              marginTop: 0
            }}>
              {ejemplo.titulo}
            </h3>

            <p style={{
              color: "#4d5b63",
              lineHeight: "1.6",
              marginBottom: 0
            }}>
              {ejemplo.descripcion}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Ejemplos;