const cardsData = [
  {
    id: 1,
    question: "¿Cuál es la idea principal de un micromundo?",
    options: [
      "Memorizar teorías y manuales administrativos.",
      "Aprender y equivocarse sin riesgos ni costos reales.",
      "Reemplazar por completo a los trabajadores humanos.",
      "Crear videojuegos comerciales de alto presupuesto."
    ],
    correctIndex: 1,
    imgSrc: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Aprendizaje mediante tecnología"
  },
  {
    id: 2,
    question: "¿En los micromundos se aprende leyendo o haciendo?",
    options: [
      "Leyendo libros teóricos y resúmenes de casos.",
      "Observando pasivamente cómo otros toman decisiones.",
      "Haciendo (tomando decisiones directas).",
      "Escuchando conferencias magistrales sin práctica."
    ],
    correctIndex: 2,
    imgSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Personas aprendiendo y trabajando en equipo"
  },
  {
    id: 3,
    question: "¿En qué sector se utiliza el ejemplo clásico de los simuladores para explicar el aprendizaje sin riesgos?",
    options: [
      "Con los aviones / simuladores de aviación.",
      "En la industria gastronómica y hotelera.",
      "En el comercio minorista de ropa.",
      "En la agricultura tradicional."
    ],
    correctIndex: 0,
    imgSrc: "https://education.okstate.edu/site-files/images/aviation-space/avi-space-minors.jpg",
    imgAlt: "Simulador de vuelo"
  },
  {
    id: 4,
    question: "¿Los micromundos son solo juegos o también enseñan?",
    options: [
      "Son únicamente juegos para pasar el tiempo libre.",
      "Son exámenes escritos sin ningún componente lúdico.",
      "Son software exclusivo para niños de primaria.",
      "Enseñan (combinan entretenimiento con aprendizaje)."
    ],
    correctIndex: 3,
    imgSrc: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Tecnología de videojuegos y entretenimiento"
  },
  {
    id: 5,
    question: "Menciona los 4 casos seleccionados de micromundos internacionales presentados en la exposición.",
    options: [
      "Grand Theft Auto, Minecraft, Sims o Fortnite.",
      "Beer Game, People Express, Oil Producers o BBC World Service.",
      "Microsoft Excel, SAP, Oracle o Trello.",
      "Mercado Libre, Amazon, Uber o Airbnb."
    ],
    correctIndex: 1,
    imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Simulación y administración empresarial"
  },
  {
    id: 6,
    question: "¿De qué país es el simulador de energía llamado ENERBIZ?",
    options: [
      "De Estados Unidos.",
      "De España.",
      "De Colombia.",
      "De Alemania."
    ],
    correctIndex: 2,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREMrlDN0DenV09lRqJJKhdg6UkYhNH5olAgRJAocGIeA&s=10",
    imgAlt: "Bandera de Colombia"
  },
  {
    id: 7,
    question: "En el simulador colombiano ENERBIZ, ¿qué servicio se compra y se vende?",
    options: [
      "Energía / Electricidad.",
      "Agua potable y alcantarillado.",
      "Telecomunicaciones e internet móvil.",
      "Transporte público y carga terrestre."
    ],
    correctIndex: 0,
    imgSrc: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Infraestructura de energía"
  },
  {
    id: 8,
    question: "¿Para qué sector fue diseñado el simulador ENERBIZ?",
    options: [
      "Para el sector bancario y de seguros.",
      "Para el sector aeronáutico internacional.",
      "Para el sector salud y hospitalario.",
      "Para el sector eléctrico / Mercado de Energía Mayorista."
    ],
    correctIndex: 3,
    imgSrc: "https://lirp.cdn-website.com/d2f0e919/dms3rep/multi/opt/Labour%2BPower%2BCompany%2B%28LPC%29%2Bversterkt%2Bpositie%2Bin%2BNoord-Nederland%2Bmet%2Bovername%2Bvan%2BVedaflex-1920w.jpg",
    imgAlt: "Central de generación eléctrica"
  },
  {
    id: 9,
    question: "¿Qué simulador colombiano permite entrenar la compra y venta de electricidad sin arriesgar dinero real?",
    options: [
      "Beer Game.",
      "ENERBIZ.",
      "People Express.",
      "Cities: Skylines."
    ],
    correctIndex: 1,
    imgSrc: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Gestión y análisis empresarial"
  },
  {
    id: 10,
    question: "¿Qué sucede dentro de un micromundo cuando tomas una mala decisión?",
    options: [
      "Se borra el programa y pierdes dinero real de tu cuenta.",
      "El sistema bloquea el acceso para siempre sin explicación.",
      "Observas la consecuencia (pérdidas o errores) y aprendes a corregirla en el siguiente intento.",
      "No ocurre ningún cambio porque las variables son fijas."
    ],
    correctIndex: 2,
    imgSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Análisis y toma de decisiones"
  },
  {
    id: 11,
    question: "En los simuladores de empresas, ¿qué le pasa a una compañía si aumentan sus ventas pero no contrata suficiente personal?",
    options: [
      "Puede caer en quiebra / colapsar el servicio.",
      "Sus ganancias se multiplican indefinidamente sin costos.",
      "Los clientes esperan indefinidamente sin quejarse.",
      "El sistema contrata empleados automáticamente gratis."
    ],
    correctIndex: 0,
    imgSrc: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Industria de la aviación"
  },
  {
    id: 12,
    question: "¿Cómo cambiaron las pantallas de los simuladores desde los años 80 hasta hoy?",
    options: [
      "Pasaron de pantallas 3D a hojas de papel impresas.",
      "No han tenido ningún cambio visual desde 1980.",
      "Pasaron de gráficos simples en 2D con números a entornos 3D y Realidad Virtual.",
      "Se eliminaron los gráficos para usar solo comandos de voz."
    ],
    correctIndex: 2,
    imgSrc: "https://fauzanmaverick.files.wordpress.com/2010/08/ibm-pc-1980.jpg",
    imgAlt: "Computador de los años 80"
  },
  {
    id: 13,
    question: "¿Qué permite practicar la realidad virtual en profesiones como la medicina antes de atender a un paciente?",
    options: [
      "Facturación y cobro de seguros médicos.",
      "Procedimientos y técnicas médicas en un entorno simulado, sin poner en riesgo al paciente.",
      "Redacción de recetas farmacéuticas en papel.",
      "Limpieza y mantenimiento de ambulancias."
    ],
    correctIndex: 1,
    imgSrc: "https://storage.googleapis.com/medvarsity-ai/assimilate/banner/learning_beyond_the_scalpel%253A_the_future_of_cardiac_surgical_training.webp",
    imgAlt: "Entrenamiento de pilotos en simulador"
  },
  {
    id: 14,
    question: '¿Qué aparatos en la cabeza se usan hoy para sentir que estás "dentro" de un juego?',
    options: [
      "Audífonos con cancelación de ruido pasiva.",
      "Teclados mecánicos y ratones ópticos.",
      "Gafas o visores de Realidad Virtual (VR).",
      "Monitores curvos de escritorio."
    ],
    correctIndex: 2,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHND2tKHHGFlXmURdRCjDiCxSPPRht8hR-qEqGeAuD1A&s=10",
    imgAlt: "Experiencia de realidad virtual"
  },
  {
    id: 15,
    question: "Menciona una profesión de la salud que entrena con realidad virtual antes de tocar un paciente.",
    options: [
      "Los médicos / cirujanos.",
      "Los contadores de clínicas.",
      "Los guardias de seguridad hospitalaria.",
      "Los recepcionistas de urgencias."
    ],
    correctIndex: 0,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDMKC2_GE2VVHs7GO5Ql2nn19k25o5KucG7hrHESckw&s=10",
    imgAlt: "Simulación quirúrgica con realidad virtual"
  },
  {
    id: 16,
    question: "¿Qué construyes y administras en el juego Cities: Skylines?",
    options: [
      "Una granja agrícola.",
      "Una aerolínea comercial.",
      "Una estación espacial.",
      "Una ciudad."
    ],
    correctIndex: 3,
    imgSrc: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Ciudad vista desde el aire"
  },
  {
    id: 17,
    question: "¿Qué videojuego de construcción de ciudades penaliza las decisiones impulsivas de tráfico o impuestos? (Se menciona en la exposición)",
    options: [
      "American Truck Simulator.",
      "Cities: Skylines.",
      "Age of Empires.",
      "The Sims."
    ],
    correctIndex: 1,
    imgSrc: "https://elcomercio.pe/resizer/v2/ZFADTLJRNJENTFBD4MZH4MJKKA.jpg?auth=1ed33cc21bbd65138c283439b508a344b33e9f3ed84b6cb0eff8944335b0706d&height=1600&quality=75&smart=true&width=2400",
    imgAlt: "Tráfico y planificación de una ciudad"
  },
  {
    id: 18,
    question: "¿Cuáles son los 3 retos que enfrentan los micromundos en el futuro?",
    options: [
      "El precio del monitor, la falta de ratones y cables de red.",
      "La velocidad del procesador y la falta de internet móvil.",
      "La sobre-simplificación, la brecha de acceso y la transferencia real.",
      "El peso de las computadoras y el almacenamiento en disquetes."
    ],
    correctIndex: 2,
    imgSrc: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Tecnología inmersiva del futuro"
  },
  {
    id: 19,
    question: "¿Qué ventaja tiene aprender mediante micromundos en lugar de limitarse a leer manuales?",
    options: [
      "Ahorrar tinta de impresión exclusivamente.",
      "Acelerar el aprendizaje práctico y evitar cometer errores costosos en la vida real.",
      "No requerir ningún tipo de concentración mental.",
      "Garantizar que nadie pueda fallar nunca en una prueba."
    ],
    correctIndex: 1,
    imgSrc: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Capacitación y trabajo en equipo"
  },
  {
    id: 20,
    question: "¿Para qué sirven los micromundos en general?",
    options: [
      "Para reemplazar a los docentes por robots físicos.",
      "Para eliminar los exámenes finales en las escuelas.",
      "Para entrenar la toma de decisiones sin arriesgar nada.",
      "Para sustituir el uso de computadoras en las empresas."
    ],
    correctIndex: 2,
    imgSrc: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80",
    imgAlt: "Planificación y toma de decisiones"
  }
];

// Elementos del DOM
const board = document.getElementById("board");
const modal = document.getElementById("card-modal");
const modalQuestion = document.getElementById("modal-question-text");
const modalImg = document.getElementById("modal-img");
const modalCloseBtn = document.getElementById("modal-close-btn");
const timerDisplay = document.getElementById("timer-display");
const btnStartTimer = document.getElementById("btn-start-timer");
const optionsGrid = document.getElementById("options-grid");
const feedbackMessage = document.getElementById("feedback-message");

// Estado del juego / modal
let currentCardButton = null;
let currentCard = null;
let timerInterval = null;
let timeLeft = 30;
let isTimerRunning = false;
let hasAnswered = false;

const letters = ["A", "B", "C", "D"];

// Renderizar las 20 cartas en el tablero (5x4)
cardsData.forEach((card, index) => {
  const btn = document.createElement("button");
  btn.classList.add("card-btn", "animate-deal");
  btn.style.animationDelay = `${index * 0.05}s`;
  btn.textContent = card.id;

  btn.addEventListener("animationend", () => {
    btn.classList.remove("animate-deal");
    btn.style.animationDelay = "";
  });

  btn.addEventListener("click", () => openCardModal(card, btn));
  board.appendChild(btn);
});

// Abrir modal con la carta seleccionada
function openCardModal(card, buttonElement) {
  currentCardButton = buttonElement;
  currentCard = card;
  hasAnswered = false;

  // Limpiar temporizador previo por seguridad
  resetTimer();

  // Pregunta e imagen
  modalQuestion.textContent = card.question;
  if (card.imgSrc) {
    modalImg.src = card.imgSrc;
    modalImg.alt = card.imgAlt || "Imagen de la carta";
    modalImg.style.display = "block";
  } else {
    modalImg.src = "";
    modalImg.alt = "";
    modalImg.style.display = "none";
  }

  // Ocultar feedback previo
  feedbackMessage.className = "feedback-message";
  feedbackMessage.textContent = "";

  // Renderizar las 4 opciones (inicialmente deshabilitadas hasta iniciar tiempo)
  renderOptions(card);

  // Habilitar botón de iniciar temporizador
  btnStartTimer.disabled = false;
  btnStartTimer.textContent = "Iniciar Tiempo";

  modal.showModal();
}

// Renderizar botones de opciones
function renderOptions(card) {
  optionsGrid.innerHTML = "";
  card.options.forEach((optText, idx) => {
    const optBtn = document.createElement("button");
    optBtn.classList.add("option-btn");
    optBtn.disabled = true; // Bloqueadas hasta que inicie el temporizador
    optBtn.dataset.index = idx;

    const letterSpan = document.createElement("span");
    letterSpan.classList.add("option-letter");
    letterSpan.textContent = letters[idx];

    const textSpan = document.createElement("span");
    textSpan.classList.add("option-text");
    textSpan.textContent = optText;

    optBtn.appendChild(letterSpan);
    optBtn.appendChild(textSpan);

    optBtn.addEventListener("click", () => handleSelectOption(idx));
    optionsGrid.appendChild(optBtn);
  });
}

// Activar opciones cuando corre el reloj
function enableOptions(enable) {
  const optionButtons = optionsGrid.querySelectorAll(".option-btn");
  optionButtons.forEach((btn) => {
    btn.disabled = !enable;
  });
}

// Iniciar cuenta regresiva
function startCountdown() {
  if (isTimerRunning || hasAnswered) return;

  isTimerRunning = true;
  btnStartTimer.disabled = true;
  enableOptions(true);

  timerInterval = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      handleTimeExpired();
    }
  }, 1000);
}

// Actualizar indicador visual de tiempo
function updateTimerDisplay() {
  timerDisplay.textContent = `${timeLeft}s`;
  if (timeLeft <= 10) {
    timerDisplay.classList.add("warning");
  } else {
    timerDisplay.classList.remove("warning");
  }
}

// Reiniciar y detener temporizador
function resetTimer() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  isTimerRunning = false;
  timeLeft = 30;
  updateTimerDisplay();
}

// Manejo cuando el tiempo llega a 0
function handleTimeExpired() {
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  isTimerRunning = false;
  hasAnswered = true;

  // Bloquear opciones
  enableOptions(false);

  // Mensaje claro de tiempo agotado
  feedbackMessage.className = "feedback-message incorrect visible";
  feedbackMessage.textContent = "¡Se acabó el tiempo! Respuesta incorrecta.";

  // Resaltar en verde la opción correcta
  highlightCorrectOption();
}

// Manejo al seleccionar una opción
function handleSelectOption(selectedIndex) {
  if (!isTimerRunning || hasAnswered) return;

  // Detener temporizador de inmediato
  if (timerInterval) {
    clearInterval(timerInterval);
    timerInterval = null;
  }
  isTimerRunning = false;
  hasAnswered = true;

  // Deshabilitar todos los botones para evitar clics posteriores
  enableOptions(false);

  const optionButtons = optionsGrid.querySelectorAll(".option-btn");
  const selectedBtn = optionButtons[selectedIndex];
  const isCorrect = selectedIndex === currentCard.correctIndex;

  if (isCorrect) {
    selectedBtn.classList.add("correct-option");
    feedbackMessage.className = "feedback-message correct visible";
    feedbackMessage.textContent = "¡Excelente! Respuesta correcta.";
  } else {
    selectedBtn.classList.add("wrong-option");
    feedbackMessage.className = "feedback-message incorrect visible";
    feedbackMessage.textContent = "¡Respuesta incorrecta!";
    highlightCorrectOption();
  }
}

// Resaltar la opción correcta en verde
function highlightCorrectOption() {
  if (!currentCard) return;
  const optionButtons = optionsGrid.querySelectorAll(".option-btn");
  const correctBtn = optionButtons[currentCard.correctIndex];
  if (correctBtn) {
    correctBtn.classList.add("correct-option");
  }
}

// Event Listeners
btnStartTimer.addEventListener("click", () => {
  startCountdown();
});

modalCloseBtn.addEventListener("click", () => {
  resetTimer();
  modal.close();
  if (currentCardButton) {
    currentCardButton.disabled = true;
  }
});

// Cerrar con Escape en dialog nativo
modal.addEventListener("cancel", () => {
  resetTimer();
  if (currentCardButton) {
    currentCardButton.disabled = true;
  }
});