module.exports = async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' });

  const { message } = req.body;
  if (!message) return res.status(400).json({ error: 'Falta mensaje' });

  console.log("Key:", process.env.OPENROUTER_API_KEY);

  try {
    const r = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${process.env.OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: "qwen/qwen2-7b-instruct",
        messages: [{ role: "user", content: "Hola" }]
      })
    });

    console.log("Status:", r.status);
    const data = await r.json();
    console.log("Response:", data);

    res.json({ reply: JSON.stringify(data) });
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
