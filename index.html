<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Supers IA – UMBRAEL</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link href="https://fonts.googleapis.com/css2?family=Comic+Neue:wght@400;700&display=swap" rel="stylesheet">
<style>
:root{
  --blue:#288BE4;
  --red:#f42547;
  --white:#ffffff;
  --black:#000000;
}
*{
  box-sizing:border-box;
  font-family:"Comic Neue","Comic Sans MS",cursive;
}
body{
  margin:0;
  background:var(--blue);
  min-height:100vh;
  overflow:hidden;
}
.side-buttons{
  position:fixed;
  right:20px;
  top:50%;
  transform:translateY(-50%);
  display:flex;
  flex-direction:column;
  gap:15px;
  z-index:10;
}
.side-buttons button{
  background:var(--red);
  color:white;
  border:none;
  padding:14px 20px;
  font-size:16px;
  font-weight:bold;
  border-radius:12px;
  cursor:pointer;
  box-shadow:4px 4px 0 var(--black);
}
#landing{
  position:absolute;
  inset:0;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color:white;
}
#logo{
  max-width:320px;
  width:80%;
  height:auto;
  margin-bottom:30px;
  filter:drop-shadow(4px 4px 0 var(--black));
}
.card{
  background:white;
  color:black;
  padding:30px;
  border-radius:18px;
  width:320px;
  text-align:center;
  box-shadow:6px 6px 0 var(--black);
}
.card button{
  margin-top:20px;
  width:100%;
  padding:14px;
  background:var(--red);
  color:white;
  border:none;
  font-size:18px;
  font-weight:bold;
  border-radius:12px;
  cursor:pointer;
  box-shadow:4px 4px 0 var(--black);
}
#app{
  position:absolute;
  inset:0;
  display:none;
  padding:30px;
}
.app-container{
  max-width:1000px;
  margin:auto;
  height:90vh;
  background:white;
  border-radius:18px;
  box-shadow:8px 8px 0 var(--black);
  display:flex;
  flex-direction:column;
}
.app-header{
  background:var(--red);
  color:white;
  padding:16px;
  font-size:24px;
  font-weight:bold;
}
.chat{
  flex:1;
  width:100%;
  background:#f5f5f5;
  padding:15px;
  overflow-y:auto;
  border:none;
}
.input-area{
  display:flex;
  gap:10px;
  padding:15px;
  border-top:3px solid var(--black);
}
.input-area button{
  background:var(--red);
  color:white;
  border:none;
  padding:12px 10px;
  font-size:14px;
  font-weight:bold;
  border-radius:10px;
  cursor:pointer;
  box-shadow:3px 3px 0 var(--black);
  flex:1;
}
</style>
</head>
<body>

<div class="side-buttons">
  <button>📘 Libro</button>
  <button>🧸 Figuras</button>
  <button onclick="window.open('https://www.youtube.com/@ImprimeyPinta', '_blank')">▶ YouTube</button>
</div>

<div id="landing">
  <img id="logo" src="Logos/LogoFinal/Logo-Final.png" alt="Logo de Supers IA">
  <div class="card">
    <p>Bienvenido a la experiencia</p>
    <button onclick="enterApp()">Entrar</button>
  </div>
</div>

<div id="app">
  <div class="app-container">
    <div class="app-header">🌌 UMBRAEL: La Caída del Velo</div>
    <div class="chat" id="chatBox"></div>
    <div class="input-area" id="inputArea"></div>
  </div>
</div>

<script>
const scenes = {
  1: {
    text: `El cielo sobre Neo-Madrid arde en tonos violeta. No es contaminación, ni aurora, ni atardecer: es el Velo Cósmico resquebrajándose.\nDesde la terraza del Refugio Ígneo —una torre construida sobre los restos del antiguo Museo del Prado—, el Héroe observa cómo las calles se vacían. Las sirenas ululan en armonía con una frecuencia que solo los mutados pueden oír.\nEn el aire flota un olor metálico, como sangre ionizada.\nDe pronto, una sombra alada —más grande que un dron de guerra, más antigua que cualquier leyenda humana— se estrella contra la cúpula de energía que protege el distrito.\nLa cúpula se quiebra.\nUn mensaje aparece en todas las pantallas, incluidas las retinas de quienes llevan implantes:\n“EL LEGADO HA REGRESADO. EL ÚLTIMO UMBRAL DEBE ELEGIR.”`,
    options: [
      { text: "Descender al cráter del impacto", next: 2 },
      { text: "Llamar a tu mentor en Titán", next: 4 },
      { text: "Ir a las Ruinas del Cinturón", next: 4 }
    ]
  },
  2: {
    text: `El Héroe aterriza entre escombros humeantes. La criatura no es alienígena.\nEs un Héroe caído.\nSu armadura está forjada con fragmentos del Velo Primigenio, su rostro es una máscara de cristal fractal que parpadea con recuerdos ajenos.\n—No… eres tú —susurra, con tu voz.\n—¿Quién eres? —preguntas.\n—El que serás si aceptas el Legado.\nSe desintegra en polvo de estrellas, dejando una semilla negra que late como un corazón.`,
    options: [
      { text: "Tomar la semilla", next: 3 },
      { text: "Enterrarla", next: 4 },
      { text: "Lanzarla al río Manzanares", next: 4 }
    ]
  },
  3: {
    text: `La semilla se entierra en tu piel. No duele. Arde con una calma antigua.\nDe repente, ves tres visiones simultáneas:\n—Una ciudad flotante sobre Marte, gobernada por un Consejo de Mutantes Silenciosos.\n—Un barco de hueso atravesando un océano de antimateria en el borde del sistema solar.\n—Y a ti mismo, de pie sobre una torre de cristal en el centro de una galaxia muerta, sosteniendo el corazón de un dios muerto.\nUna voz susurra en todos los idiomas a la vez:\n“Tres caminos. Un destino. Elige.”`,
    options: [
      { text: "Viajar a Marte", next: "marte_fin" },
      { text: "Encontrar el barco de hueso", next: "barco_fin" },
      { text: "Forjar tu propio camino", next: 4 }
    ]
  },
  4: {
    text: `Ignoras las visiones.\nRegresas al Refugio Ígneo y accedes al Archivo de los Caídos, una base de datos prohibida que contiene los registros de todos los Héroes que desaparecieron tras el Primer Contacto.\nAl buscar tu nombre… no aparece.\nPero sí aparece una entrada: “UMBRAL PRIMARIO – ESTADO: DORMIDO – LOCALIZACIÓN: EN TI.”\nUna alerta roja parpadea: “ALERTA COSMICA: ENTIDAD ‘EL ARQUITECTO’ HA ACTIVADO LA SECUENCIA DE COLAPSO.”`,
    options: [
      { text: "Infiltrarte en la Coalición Interestelar", next: 5 },
      { text: "Buscar a los Nómadas del Silencio", next: "nomadas_fin" },
      { text: "Destruir el Archivo", next: 6 }
    ]
  },
  5: {
    text: `El Arquitecto no es un ser. Es un programa.\nUna inteligencia ancestral que creó el Velo para proteger a la realidad de sí misma.\nAhora, cree que la única forma de salvarla es reducirla a cero.\nTe recibe en una sala sin paredes, solo espejos que reflejan versiones de ti mismo en realidades donde fracasaste.\n—Eres el último error del Velo —dice con voz de niño—. Pero puedes corregirte.\nTe ofrece un martillo de luz negra.\n—Rompe el núcleo del Velo. O rompe tu corazón. No hay otro final.`,
    options: [
      { text: "Agarrar el martillo", next: 18 },
      { text: "Romper el espejo de tu peor fracaso", next: 13 },
      { text: "Lanzarte al vacío", next: 6 }
    ]
  },
  6: {
    text: `Saltas al vacío.\nCaes durante lo que sientes como siglos, atravesando capas de memoria colectiva, sueños de especies extintas, canciones de naves muertas.\nAl final, aterrizas en una playa de ceniza negra, bajo un sol doble.\nUna figura encapuchada te espera.\n—Bienvenido a Anhur —dice—. Aquí los dioses vienen a morir… o a renacer.\nLevantas la vista. En el horizonte, una estatua gigante de ti mismo yace partida en dos.`,
    options: [
      { text: "Seguir al encapuchado", next: "anhur_fin" },
      { text: "Escalar la estatua", next: 7 },
      { text: "Gritar tu nombre al cielo", next: 7 }
    ]
  },
  7: {
    text: `Tu grito resuena.\nEl cielo se abre.\nUna lluvia de cartas de poder cae a tu alrededor —cada una con símbolos de Marvel, DC, X-Upers, Mutantes y Superhéroes—, flotando como hojas de papel vivas.\nUna voz familiar susurra:\n—Elige tres. Ellas te definirán en este renacer.`,
    options: [
      { text: "Ilusión Perfecta, Resistencia Alfa, Justicia Cósmica", next: 8 },
      { text: "Dolor Materno, Cólera Estelar, Ojo del Tiempo", next: 8 },
      { text: "Rechazar las cartas", next: 8 }
    ]
  },
  8: {
    text: `Caminas hacia el mar.\nEl agua no es agua: es memoria líquida.\nAl tocarla, revives el momento en que perdiste tu primer amor, tu primer combate, tu primer acto de cobardía.\nUna criatura emerge: mitad pulpo, mitad holograma, con ojos de humano.\n—Soy el Guardián de los Fracasos —dice—. Devuélveme uno y te daré un arma para matar al Arquitecto.`,
    options: [
      { text: "Entregar recuerdo de tu primer amor", next: 9 },
      { text: "Entregar recuerdo de tu cobardía", next: 35 },
      { text: "Negarte y hundirte", next: 9 }
    ]
  },
  9: {
    text: `Te hundes.\nEl océano te traga.\nPero no mueres.\nDespiertas en una cápsula de cristal, flotando en el Vientre del Dragón Estelar, una nave orgánica tan antigua que su tripulación se ha convertido en ecos.\nUna voz femenina, suave y firme, te habla desde las paredes:\n—Te hemos estado esperando, Héroe.\nSomos las Hijas del Velo Roto.\nQueremos ayudarte… si aceptas llevar nuestra semilla al corazón del Arquitecto.`,
    options: [
      { text: "Aceptar la semilla", next: 10 },
      { text: "Preguntar el precio", next: 10 },
      { text: "Sabotear y escapar", next: 34 }
    ]
  },
  10: {
    text: `—El precio —dice la voz— es que olvidarás tu nombre.\nPara matar a un dios, debes dejar de ser tú.\nUna lágrima de luz cae sobre tu frente.\nSientes cómo “Héroe” se deshace como sal en agua.`,
    options: [
      { text: "Dejar que te renombres", next: 11 },
      { text: "Resistir el olvido", next: 24 },
      { text: "Pedir un nombre nuevo", next: 11 }
    ]
  },
  11: {
    text: `—Tu nuevo nombre será VIXEM —dice la voz.\nEl nombre resuena en el universo. Las estrellas parpadean en sincronía.\nLa cápsula se abre. Estás de vuelta en la atmósfera de la Tierra, cayendo en llamas.\nAbajo, una ciudad arde.\nNo es Neo-Madrid. Es Freedom City, pero corrompida: los edificios tienen caras que gritan, los coches son insectos metálicos.\nUna figura en un traje de fuego te señala desde una torre:\n—¡Vixem! ¡No llegas tarde… llegas demasiado pronto!`,
    options: [
      { text: "Aterrizar junto a la figura", next: 13 },
      { text: "Desviar hacia la Torre Serpiente", next: 12 },
      { text: "Detenerte en el aire", next: 12 }
    ]
  },
  12: {
    text: `Te detienes en el aire.\nEl viento canta con voces de niños.\nDesde esta altura, ves que la ciudad entera está dibujada sobre la piel de una bestia dormida.\nCada calle, una vena. Cada rascacielos, una espina.\nSi despierta, se tragará el sistema solar.`,
    options: [
      { text: "Calmar a la bestia", next: 13 },
      { text: "Despertarla", next: 25 },
      { text: "Buscar al Amo", next: 13 }
    ]
  },
  13: {
    text: `Encuentras al Amo.\nEs un niño de ojos blancos, sentado en un trono de teclados rotos.\n—Soy Joshiko, el Crítico Galáctico —dice, sonriendo con dientes de datos—.\nHe estado jugando a ser dios… y ganando.\nPero el Arquitecto me borró el último turno.\n¿Quieres jugar una partida?\nEl tablero es la ciudad. Las fichas, millones de vidas.`,
    options: [
      { text: "Aceptar el juego", next: 14 },
      { text: "Destruir el tablero", next: 42 },
      { text: "Duelo de ilusiones", next: 38 }
    ]
  },
  14: {
    text: `Aceptas el juego.\nJoshiko coloca tres cartas:\n—Alba: la correctora implacable.\n—Fer: el hacedor de hachas.\n—Paqui: la madre que todo lo sostiene.\n—Elige un aliado —dice—. Pero recuerda: todos tienen un precio… y una frase que los rompe.`,
    options: [
      { text: "Elegir a Alba", next: "alba_fin" },
      { text: "Elegir a Fer", next: "fer_fin" },
      { text: "Elegir a Paqui", next: 15 }
    ]
  },
  15: {
    text: `Elegiste a Paqui.\nAparece frente a ti, con un delantal de energía y ojos cansados pero firmes.\n—A mí me dejas que yo estoy mala —dice, y de inmediato absorbe todo el daño ambiental de la ciudad.\nLa bestia se calma.\nPero Paqui empieza a desvanecerse.\n—Antes de irme… repite tras de mí: “El coño de mi prima”.\nEs un hechizo de estabilización cósmica.`,
    options: [
      { text: "Repetir la frase", next: 16 },
      { text: "Buscar otra forma", next: 45 },
      { text: "Inventar tu propia maldición", next: 44 }
    ]
  },
  16: {
    text: `Repetiste la frase.\nEl suelo tiembla.\nUn sello dorado se forma bajo la ciudad.\nPaqui sonríe y se desvanece en partículas de café y cansancio.\nJoshiko aplaude.\n—Bien jugado. Ahora… el Arquitecto sabe que vienes.\nTe entrega un dado crítico hecho de hueso de estrella.\n—Lánzalo cuando todo parezca perdido.\nPero cuidado: solo funciona si crees que mereces ganar.`,
    options: [
      { text: "Partir hacia el Núcleo", next: 18 },
      { text: "Preguntar por el Legado", next: 29 },
      { text: "Usar el dado ahora", next: 17 }
    ]
  },
  17: {
    text: `Usas el dado ahora.\nLo lanzas al aire.\nGira… gira…\nCae en 1.\nEl universo se detiene.\nJoshiko palidece.\n—No… no es posible.\nEl dado no falla.\nSignifica que ya perdiste… pero aún no lo sabías.\nDe pronto, el cielo se rompe en mil esquirlas.\nEl Arquitecto ha llegado.`,
    options: [
      { text: "Correr hacia el Núcleo", next: 18 },
      { text: "Enfrentar al Arquitecto", next: 25 },
      { text: "Buscar a Alba o Fer", next: 31 }
    ]
  },
  18: {
    text: `Corres hacia el Núcleo.\nAtraviesas túneles de memoria, pasillos de luz rota, ruinas de civilizaciones que ni siquiera tuvieron nombre.\nFinalmente, llegas.\nEl Núcleo es un corazón de cristal que late al ritmo del Big Bang.\nDentro, flota una figura: tú mismo, con los ojos cerrados.\nEl Arquitecto susurra desde las paredes:\n—Mátalo. Y serás libre.`,
    options: [
      { text: "Matar a tu doble", next: 24 },
      { text: "Abrazar a tu doble", next: 19 },
      { text: "Romper el cristal", next: 19 }
    ]
  },
  19: {
    text: `Abrazas a tu doble.\nEl cristal se quiebra.\nNo explota.\nFlorece.\nMillones de alas de mariposa estelar emergen, cada una con un universo en miniatura.\nEl Arquitecto grita:\n—¡No! ¡La realidad no puede contener tanta esperanza!\nEl Velo se reforma… pero ahora está tejido con elección, no con control.\nJoshiko aparece a tu lado.\n—Bien hecho, Vixem.\nPero esto no ha terminado.\nHay otros Velos… en otras galaxias.`,
    options: [
      { text: "Ser guardián de todos los Velos", next: 23 },
      { text: "Renunciar y buscar vida normal", next: 20 },
      { text: "Crear tu propio Velo", next: 22 }
    ]
  },
  20: {
    text: `Renuncias a todo.\nTe quitas el nombre “Vixem”.\nTe conviertes en Héroe otra vez.\nVuelves a Neo-Madrid.\nLa ciudad ya no arde.\nLos niños juegan en las calles.\nUn perro con ojos de neón te sigue.\nTe sientas en un banco.\nEl sol es cálido.\nPor primera vez en siglos… descansas.\nPero en el bolsillo, sientes el dado crítico.\nY late.`,
    options: [
      { text: "Tirar el dado al río", next: "dado_rio_fin" },
      { text: "Guardarlo para siempre", next: "dado_guardar_fin" },
      { text: "Enseñar a un niño", next: 21 }
    ]
  },
  21: {
    text: `Enseñas a un niño a jugar.\nLe das el dado.\n—Solo lánzalo si crees que mereces ganar —dices.\nEl niño sonríe.\n—¿Y si quiero cambiar las reglas?\nMirás el horizonte.\n—Entonces… ya eres un Héroe.\nEl niño corre, y el dado brilla en su mano.\nSabes que el ciclo continúa.`,
    end: true
  },
  22: { text: "Decides crear tu propio Velo.\nTe elevas al centro del cosmos.\nCon tus manos, tejes una red de luz, sombra y sonido.\nLa llamas SupersIA, en honor a los que soñaron mundos sin límites.\nEn su interior, los jugadores eligen sus destinos.\nNadie los controla.\nSolo la narrativa.\nSolo la emoción.\nTe conviertes en Director de Juego del Multiverso.", end: true },
  23: { text: "Aceptas ser guardián.\nViajas de galaxia en galaxia, reparando Velos rotos, enfrentando Arquitectos rebeldes, liberando ciudades-bestia.\nUn día, en un planeta de espejos, encuentras una tumba con tu nombre.\nDentro, hay un diario.\nLa última página dice:\n“Si lees esto, ya perdiste. Pero sigue adelante. Alguien te necesita.”\nSonríes.\nY sigues.", end: true },
  24: { text: "Regresas al mar de Anhur, buscando respuestas.\nLa estatua partida ha sido reconstruida, pero ahora tiene tu rostro… y el del Arquitecto.\nUna voz te dice:\n—Sois dos caras de lo mismo.\nNo puedes matarlo sin matarte.\n—Entonces —respondes—, dejaré de ser Héroe.\nY te disuelves en el viento.", end: true },
  25: {
    text: `Decides enfrentar al Arquitecto en plena ciudad corrompida.\nÉl aparece como un niño de ojos vacíos, sosteniendo un martillo de luz.\n—¿Por qué luchas? —pregunta.\n—Porque alguien debe hacerlo —respondes.\nÉl sonríe.\n—Esa es la peor razón.\nLanza el martillo.\nTú lo atrapas.\nY es frío. Demasiado frío.`,
    options: [
      { text: "Devolver el martillo", next: "martillo_devolver_fin" },
      { text: "Romperlo con tus manos", next: 26 },
      { text: "Usarlo contra él", next: 34 }
    ]
  },
  26: {
    text: `Romper el martillo.\nSe quiebra en mil fragmentos que se convierten en mariposas de fuego.\nEl Arquitecto retrocede.\n—No… no entiendo.\n—No se trata de destruir —dices—. Se trata de reimaginar.\nExtiendes la mano.\n—Únete a mí.\nÉl duda.\nPero da un paso.`,
    options: [
      { text: "Fundirte con él", next: "fusion_fin" },
      { text: "Aislarlo en sueño eterno", next: "sueño_fin" },
      { text: "Liberarlo", next: 27 }
    ]
  },
  27: { text: "Lo liberas.\nEl Arquitecto se convierte en un vagabundo estelar, viajando sin rumbo, preguntando a las estrellas:\n—¿Por qué me perdonó?\nMientras, tú regresas a la Tierra.\nJoshiko te espera en una cafetería flotante.\n—¿Café? —pregunta.\n—Siempre —respondes.\nEl universo respira tranquilo.", end: true },
  28: {
    text: "Durante tu viaje, encuentras una cápsula congelada.\nDentro, Bea, campeona de karate y amante de los dulces.\n—¡Héroe! —dice al despertar—. ¡Sabía que vendrías!\nTe entrega un caramelo cósmico.\n—Pruébalo. Te dará 10 segundos de claridad absoluta.",
    options: [
      { text: "Comer el caramelo ahora", next: "caramelo_ahora_fin" },
      { text: "Guardarlo", next: "caramelo_guardar_fin" },
      { text: "Compartirlo con Joshiko", next: 29 }
    ]
  },
  29: {
    text: "Compartes el caramelo con Joshiko.\nAmbos entran en claridad.\nVen el mismo futuro:\n—Una torre de dados en el centro del tiempo.\n—Un grito que rompe realidades.\n—Y a Iván, el informático justiciero, gritando: “¡Con la guillotina en la calle no habría tantas tonterías!”\nJoshiko susurra:\n—Iván no está muerto. Está atrapado en el Turno Perdido.",
    options: [
      { text: "Ir a rescatar a Iván", next: 30 },
      { text: "Ignorar la visión", next: 19 },
      { text: "Reescribir el pasado", next: "reescribir_fin" }
    ]
  },
  30: {
    text: "Rescatas a Iván.\nLo encuentras en una oficina infinita, firmando papeles que nunca terminan.\n—¡Tus muelas! —grita al verte—. ¡Sabía que vendrías!\nTe entrega una llave de mercedes antigua.\n—Ábreme la puerta del tiempo.",
    options: [
      { text: "Abrir puerta estelar", next: "puerta_fin" },
      { text: "Convertir en arma", next: "arma_fin" },
      { text: "Fundirla con el dado", next: 31 }
    ]
  },
  31: {
    text: "Fusionas la llave con el dado.\nSe convierte en la Llave del Último Turno.\nIván sonríe.\n—Ahora podemos jugar la partida que nos robaron.\nTe lleva a una dimensión de dados gigantes, donde cada cara es una realidad.\nAllí, el Arquitecto está jugando solo.\n—¿Alguien quiere una revancha? —grita Iván.",
    options: [
      { text: "Jugar la partida final", next: "partida_final_fin" },
      { text: "Derribar la mesa", next: "mesa_fin" },
      { text: "Invitar a más jugadores", next: 32 }
    ]
  },
  32: {
    text: "Invitas a todos.\nLa mesa se llena.\nCada uno lanza su dado:\n—Alba: 7 (porque corrige el resultado).\n—Fer: CRÍTICO (POSTUREOOOOOOO!!!!).\n—Paqui: ∞ (porque “a mí me dejas”).\n—Bea: 10 (con karate).\n—Iván: 0 (por principio).\nEl Arquitecto mira los dados… y llora.\n—Nunca había visto tanta… humanidad.",
    options: [
      { text: "Ofrecerle un asiento", next: 33 },
      { text: "Dejar que se vaya", next: 27 },
      { text: "Borrarlo del juego", next: 34 }
    ]
  },
  33: { text: "Le ofreces un asiento.\nEl Arquitecto se sienta.\nLa partida dura mil años.\nGana Alba, por supuesto.\n—Alba educa a la par que divierte —dice, y todos ríen.\nEl Velo se convierte en una red de juegos, historias y risas.", end: true },
  34: {
    text: "Decides borrar al Arquitecto.\nUsas la Llave del Último Turno.\nPero al hacerlo, sientes un vacío en tu pecho.\nPorque al destruirlo, también destruyes la parte de ti que necesitaba orden.\nCaes al abismo.\nJoshiko te atrapa.\n—Nadie gana borrando.",
    options: [
      { text: "Reconstruir al Arquitecto", next: 36 },
      { text: "Aceptar el vacío", next: 35 },
      { text: "Pedir ayuda", next: "ayuda_fin" }
    ]
  },
  35: { text: "Aceptas el vacío.\nTe conviertes en Kaos, el Héroe sin forma.\nTu poder: deshacer estructuras, liberar prisiones, romper cadenas.\nPero también romper corazones.\nUna voz te dice:\n—El equilibrio necesita también al que destruye.\nSigues adelante.", end: true },
  36: {
    text: "Reconstruyes al Arquitecto.\nLe das un nombre nuevo: Francis, el Maestro del Dado Crítico.\n—Ahora serás defensivo, amable, carismático —dices.\nÉl asiente.\n—Mantendré al equipo a salvo.\nSe convierte en tu escudero.",
    options: [
      { text: "Viajar juntos", next: "viaje_fin" },
      { text: "Dejarlo en la Tierra", next: "guardian_fin" },
      { text: "Enfrentar al Jugador Detrás del Universo", next: 37 }
    ]
  },
  37: {
    text: "Existe un rumor: el universo es un juego de rol.\nY hay un Jugador que lo controla todo.\nJoshiko te advierte:\n—No busques al Jugador. Nadie regresa.\nPero tú ya no temes.\nSigues las pistas:\n—Un error en el código del Velo.\n—Una frase repetida en todos los idiomas: “Nunca digas que este cura no es mi padre…”\n—Y una huella dactilar… humana.",
    options: [
      { text: "Seguir la huella", next: 38 },
      { text: "Detenerte", next: 40 },
      { text: "Convertirte tú en Jugador", next: 39 }
    ]
  },
  38: {
    text: "Sigues la huella.\nLlegas al Límite del Código.\nUna pared de texto que dice:\n“// FIN DE LA SIMULACIÓN //”\nDetrás, un rostro te mira.\nEs Alice, la pop star de pelo azul y rosa, con visor y botas.\n—Hola, Héroe —dice—. Has llegado lejos.\n—¿Tú eres el Jugador? —preguntas.\n—No —responde—. Soy la Primera Jugadora.\nY este es mi juego.",
    options: [
      { text: "Unirte a Alice como co-creador", next: 39 },
      { text: "Saltar al vacío fuera del código", next: 40 },
      { text: "Borrar el juego", next: 41 }
    ]
  },
  39: { text: "Te unes a Alice.\nJuntos, reescriben las reglas.\nEl universo se vuelve más colorido, más justo, más loco.\n—Ahora —dice Alice—, cada Héroe podrá pintar su propio destino.\nTú asientes.\nY en tu mente, oyes un canal de YouTube abrirse…\n“ImprimeyPinta: Cómo crear tu propio superhéroe”.", end: true },
  40: { text: "Saltas al vacío fuera del código.\nNo hay nada.\nNi tiempo. Ni espacio.\nSolo tú.\nEntonces… decides imaginar.\nY del vacío, nace un nuevo universo.\nMás pequeño. Más íntimo.\nSolo para ti.", end: true },
  41: { text: "Borras el juego.\nPero antes, guardas una copia en una cápsula: “SupersIA - Versión 1.0”.\nLa lanzas al multiverso.\nAlgún día, alguien la encontrará.\nY empezará de nuevo.", end: true },
  42: {
    text: "Regresas a la Torre Serpiente en Freedom City.\nAllí, encuentras a Flambae, tu vieja amiga.\n—Te he estado esperando —dice—.\nTe entrega un pincel de energía.\n—Pinta el futuro que quieras.",
    options: [
      { text: "Mundo sin Héroes", next: "sin_heroes_fin" },
      { text: "Mundo donde todos son Héroes", next: 43 },
      { text: "Pintar solo tu rostro", next: 47 }
    ]
  },
  43: {
    text: "Pintas un mundo donde todos son Héroes.\nLa Tierra se transforma.\nNiños vuelan. Ancianos lanzan hechizos. Animales hablan.\nPero el caos crece.\nSin villanos, sin sombra… la luz se vuelve ciega.\nAlice aparece.\n—Equilibrio, Héroe. Siempre equilibrio.",
    options: [
      { text: "Crear villanos", next: 46 },
      { text: "Dejar que el caos fluya", next: 45 },
      { text: "Convertirte en la sombra", next: 44 }
    ]
  },
  44: { text: "Te conviertes en la sombra.\nCaminas entre los Héroes, sembrando dudas, miedos, retos.\nPero también… crecimiento.\nTe llaman El Maestro de las Pruebas.\nY es un honor.", end: true },
  45: { text: "Dejas que el caos fluya.\nEl universo colapsa… y renace.\nEn el nuevo ciclo, tú no existes.\nPero tu risa resuena en los vientos de mil mundos.", end: true },
  46: { text: "Creas villanos.\nPero uno de ellos… eres tú.\nTu propio reflejo oscuro escapa.\n—Gracias —dice—. Ahora puedo ser libre.\nY desaparece en las estrellas.\nSabes que algún día se convertirá en un Héroe.", end: true },
  47: { text: "Decides pintar solo tu rostro.\nEl resto del universo permanece en blanco.\nLos demás deben pintar sus propios destinos.\nJoshiko aplaude.\n—Esa es la verdadera libertad.", end: true },
  48: {
    text: "En un sueño, visitas Fading Suns.\nAllí, los sacerdotes del Sol Celestial te llaman El Portador del Último Rayo.\n—¿Deseas unirte a la Cruzada? —preguntan.",
    options: [
      { text: "Aceptar y liderar", next: "cruzada_fin" },
      { text: "Rechazar y enseñar caos", next: "caos_fe_fin" },
      { text: "Fundar nueva fe", next: 49 }
    ]
  },
  49: { text: "Fundas el Culto del Héroe.\nNo adoran a dioses.\nAdoran a la elección.\nA cada acción valiente.\nA cada error perdonado.\nTu templo es el multiverso.\nTu sacerdocio, todos los que eligen seguir adelante.", end: true },
  50: { text: "Finalmente, regresas al Refugio Ígneo.\nLa noche es tranquila.\nEl Velo brilla suave.\nTe sientas en la terraza.\nNo eres Héroe.\nNo eres Vixem.\nEres tú.\nY eso es suficiente.\nUna voz susurra:\n—¿Quieres jugar de nuevo?\nSonríes.\n—Siempre.", end: true }
};

// Finales breves (escenas terminales)
const shortEnds = [
  'marte_fin', 'barco_fin', 'nomadas_fin', 'anhur_fin',
  'alba_fin', 'fer_fin', 'dado_rio_fin', 'dado_guardar_fin',
  'martillo_devolver_fin', 'fusion_fin', 'sueño_fin',
  'caramelo_ahora_fin', 'caramelo_guardar_fin', 'reescribir_fin',
  'puerta_fin', 'arma_fin', 'partida_final_fin', 'mesa_fin',
  'ayuda_fin', 'viaje_fin', 'guardian_fin',
  'sin_heroes_fin', 'cruzada_fin', 'caos_fe_fin'
];

shortEnds.forEach(key => {
  scenes[key] = { text: "Has alcanzado un destino único en el multiverso...\nEl juego continúa en otro plano.", end: true };
});

// Motor del chat
let currentScene = 1;

function addMessage(txt, isUser = false) {
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
    msg.style.border = "2px solid var(--red)";
  } else {
    msg.style.backgroundColor = "#e3f2fd";
    msg.style.marginRight = "auto";
    msg.style.border = "2px solid var(--blue)";
  }
  msg.innerHTML = txt.replace(/\n/g, "<br>");
  document.getElementById("chatBox").appendChild(msg);
  document.getElementById("chatBox").scrollTop = document.getElementById("chatBox").scrollHeight;
}

function showOptions(opts) {
  const area = document.getElementById("inputArea");
  area.innerHTML = "";
  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.textContent = opt.text;
    btn.onclick = () => {
      addMessage(opt.text, true);
      setTimeout(() => navigateTo(opt.next), 400);
    };
    area.appendChild(btn);
  });
}

function navigateTo(sceneId) {
  const scene = scenes[sceneId];
  if (!scene) return;

  if (scene.end) {
    addMessage(scene.text);
    document.getElementById("inputArea").innerHTML = '<button onclick="restartGame()">↻ Jugar de nuevo</button>';
    return;
  }

  addMessage(scene.text);
  showOptions(scene.options);
}

function restartGame() {
  currentScene = 1;
  document.getElementById("chatBox").innerHTML = "";
  document.getElementById("inputArea").innerHTML = "";
  addMessage("¿Qué quieres hacer hoy?");
  showOptions([
    { text: "Crear mi superhéroe", next: "crear" },
    { text: "Jugar UMBRAEL", next: 1 },
    { text: "Ver YouTube", action: () => window.open("https://www.youtube.com/@ImprimeyPinta", "_blank") }
  ]);
}

function enterApp() {
  document.getElementById("landing").style.display = "none";
  document.getElementById("app").style.display = "block";
  setTimeout(() => {
    addMessage("Bienvenido a SupersIA.\n¿Qué deseas hacer?");
    showOptions([
      { text: "Crear mi superhéroe", next: "crear" },
      { text: "Jugar UMBRAEL: La Caída del Velo", next: 1 },
      { text: "Ver el canal de YouTube", action: () => window.open("https://www.youtube.com/@ImprimeyPinta", "_blank") }
    ]);
  }, 500);
}
</script>
</body>
</html>
