module.exports = async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido' });
  }

  const { message } = req.body;

  try {
    // Simular una respuesta fija para probar
    let reply = "¡Perfecto! Ahora te presento tres posibles identidades para tu personaje. Elige la que más te guste o propón tu propio sobrenombre.";

    // Si el usuario dice "hola", responder con una identidad
    if (message.toLowerCase().includes("hola") || message.toLowerCase().includes("hello")) {
      reply = "¡Hola! Soy el Director de Juego de Héroes en la Sombra. ¿Cuál es el nombre de tu personaje?";
    }

    // Si el usuario da un nombre, generar identidades
    if (message.toLowerCase().includes("raul") || message.toLowerCase().includes("marcos") || message.toLowerCase().includes("samuel")) {
      reply = `
      ¡Perfecto, ${message}!

      Aquí tienes tres identidades posibles:

      1. **Origen**: Mutación inducida por fusión nuclear  
         **Poderes**: Control del Fuego + Volar  
         **Sobrenombre sugerido**: "Fénix de las Sombras"

      2. **Origen**: Tecnología  
         **Poderes**: Telekinesia + Invisibilidad  
         **Sobrenombre sugerido**: "El Fantasma de Códigos"

      3. **Origen**: Sobrenatural  
         **Poderes**: Regeneración + Rayos  
         **Sobrenombre sugerido**: "Trueno Silencioso"

      Elige una o propón tu propio sobrenombre.
      `;
    }

    res.status(200).json({ reply });
  } catch (error) {
    console.error("Error en la IA:", error.message);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};
