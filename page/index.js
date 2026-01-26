import Head from 'next/head';

export default function Home() {
  function enterApp() {
    document.getElementById("landing").style.display = "none";
    document.getElementById("app").style.display = "block";
    addMessage("¿Cuál es el nombre de tu personaje?");
  }

  async function sendMessage() {
    const input = document.getElementById("userInput");
    const message = input.value.trim();
    if (!message) return;

    addMessage(message, true);
    input.value = "";

    try {
      const response = await fetch(''https://supersia.onrender.com/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message })
      });

      const data = await response.json();
      if (data.reply) {
        addMessage(data.reply);
      } else {
        addMessage("La IA no respondió.");
      }
    } catch (error) {
      addMessage("Error al conectar con la IA.");
    }
  }

  function addMessage(text, isUser = false) {
    const chatBox = document.getElementById("chatBox");
    const msg = document.createElement("div");
    msg.style.padding = "12px 16px";
    msg.style.margin = "10px";
    msg.style.borderRadius = "12px";
    msg.style.maxWidth = "80%";
    msg.style.wordBreak = "break-word";
    msg.style.lineHeight = "1.4";
    if (isUser) {
      msg.style.backgroundColor = "#ffecec";
      msg.style.marginLeft = "auto";
      msg.style.textAlign = "right";
      msg.style.border = "2px solid #f42547";
    } else {
      msg.style.backgroundColor = "#e3f2fd";
      msg.style.marginRight = "auto";
      msg.style.border = "2px solid #288be4";
    }
    msg.innerHTML = text.replace(/\n/g, "<br>");
    chatBox.appendChild(msg);
    chatBox.scrollTop = chatBox.scrollHeight;
  }

  return (
    <>
      <Head>
        <title>Supers IA – LEGADO</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet" />
        <style>{`
          :root{--blue:#288BE4;--red:#f42547;--white:#ffffff;--black:#000000;}
          *{box-sizing:border-box;font-family:"Comic Neue","Comic Sans MS",cursive;}
          body{margin:0;background:var(--blue);min-height:100vh;overflow:hidden;}
          .side-buttons{position:fixed;right:20px;top:50%;transform:translateY(-50%);display:flex;flex-direction:column;gap:15px;z-index:10;}
          .side-buttons button{background:var(--red);color:white;border:none;padding:14px 20px;font-size:16px;font-weight:bold;border-radius:12px;cursor:pointer;box-shadow:4px 4px 0 var(--black);}
          #landing{position:absolute;inset:0;display:flex;flex-direction:column;justify-content:center;align-items:center;color:white;}
          #logo{max-width:320px;width:80%;height:auto;margin-bottom:30px;filter:drop-shadow(4px 4px 0 var(--black));}
          .card{background:white;color:black;padding:30px;border-radius:18px;width:320px;text-align:center;box-shadow:6px 6px 0 var(--black);}
          .card button{margin-top:20px;width:100%;padding:14px;background:var(--red);color:white;border:none;font-size:18px;font-weight:bold;border-radius:12px;cursor:pointer;box-shadow:4px 4px 0 var(--black);}
          #app{position:absolute;inset:0;display:none;padding:30px;}
          .app-container{max-width:1000px;margin:auto;height:90vh;background:white;border-radius:18px;box-shadow:8px 8px 0 var(--black);display:flex;flex-direction:column;}
          .app-header{background:var(--red);color:white;padding:16px;font-size:24px;font-weight:bold;}
          .chat{flex:1;width:100%;background:#f5f5f5;padding:15px;overflow-y:auto;border:none;}
          .input-area{display:flex;gap:10px;padding:15px;border-top:3px solid var(--black);}
          .input-area input{flex:1;padding:12px;border:2px solid var(--black);border-radius:10px;font-size:16px;}
          .input-area button{background:var(--red);color:white;border:none;padding:12px 20px;font-size:16px;font-weight:bold;border-radius:10px;cursor:pointer;box-shadow:3px 3px 0 var(--black);}
        `}</style>
      </Head>

      <div className="side-buttons">
        <button>📘 Libro</button>
        <button>🧸 Figuras</button>
        <button onClick={() => window.open('https://www.youtube.com/@ImprimeyPinta', '_blank')}>▶ YouTube</button>
      </div>

      <div id="landing">
        <img src="/img/Logo.png" alt="Logo SupersIA" id="logo" />
        <div className="card">
          <p>Bienvenido a la experiencia</p>
          <button onClick={enterApp}>Entrar</button>
        </div>
      </div>

      <div id="app">
        <div className="app-container">
          <div className="app-header">🌌 Legado: Mundo de Héroes</div>
          <div className="chat" id="chatBox"></div>
          <div className="input-area">
            <input type="text" id="userInput" placeholder="Escribe tu mensaje..." onKeyPress={(e) => e.key === 'Enter' && sendMessage()} />
            <button onClick={sendMessage}>Enviar</button>
          </div>
        </div>
      </div>
    </>
  );
}
