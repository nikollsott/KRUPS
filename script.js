const gameData = {
    // ------------------------------------------
    // MODO: PERSONA
    // ------------------------------------------
    person: {
        title: "¿QUÉ BEBIDA ERES?",
        intro: "",
        buttonText: "Iniciar",
        introImage: "assets/images/tazamisterio.png",
        questions: [
            {
                question: "Cuando algo pasa de repente…",
                answers: [
                    { text: "Reacciono de una", result: "ESP" },
                    { text: "Observo primero", result: "FIL" },
                    { text: "Me adapto y sigo", result: "CB" },
                    { text: "Veo si me siento bien", result: "ORA" },
                    { text: "Le saco el lado divertido", result: "SOD" },
                    { text: "Mantengo la calma", result: "TON" }
                ]
            },
            {
                question: "Tu plan perfecto es…",
                answers: [
                    { text: "Algo intenso", result: "ESP" },
                    { text: "Mi lugar favorito", result: "FIL" },
                    { text: "Salir a explorar", result: "CB" },
                    { text: "Cozy, pero a mi manera", result: "ORA" },
                    { text: "Gente, risas y plan", result: "SOD" },
                    { text: "Algo cool y tranquilo", result: "TON" }
                ]
            },
            {
                question: "En un grupo nuevo tú…",
                answers: [
                    { text: "Entro con toda", result: "ESP" },
                    { text: "Primero observo", result: "FIL" },
                    { text: "Me integro fácil", result: "CB" },
                    { text: "Conecto si hay química", result: "ORA" },
                    { text: "Hablo con todo el mundo", result: "SOD" },
                    { text: "Pocas palabras, mucha presencia", result: "TON" }
                ]
            },
            {
                question: "Tu vibe es más…",
                answers: [
                    { text: "Impulsiva", result: "ESP" },
                    { text: "Auténtica", result: "FIL" },
                    { text: "Activa pero chill", result: "CB" },
                    { text: "Dulce con carácter", result: "ORA" },
                    { text: "Social y juguetona", result: "SOD" },
                    { text: "Intensa y elegante", result: "TON" }
                ]
            }
        ],
        results: {
            ESP: {
                title: "ERES ESPRESSO",
                description: "Vas directo, reaccionas rápido y vives las cosas con intensidad. Cuando quieres algo, se nota.",
                rewardText: "Hoy tu match es un Espresso.",
                claimBtnText: "QUIERO MI ESPRESSO",
                color: "var(--espresso-color)",
                image: "assets/images/espresso.png"
            },
            FIL: {
                title: "ERES CAFÉ FILTRADO",
                description: "Seguro, auténtico y muy tú. Observas antes de actuar y sabes perfectamente cuál es tu espacio.",
                rewardText: "Hoy tu match es un Café Filtrado.",
                claimBtnText: "QUIERO MI FILTRADO",
                color: "var(--filtrado-color)",
                image: "assets/images/filtrado.png"
            },
            CB: {
                title: "ERES COLD BREW",
                description: "Tranquilo, activo y siempre listo para un buen plan. Tienes energía, pero también sabes cuándo bajarle.",
                rewardText: "Hoy tu match es un Cold Brew.",
                claimBtnText: "QUIERO MI COLD BREW",
                color: "var(--coldbrew-color)",
                image: "assets/images/coldbrew.png"
            },
            ORA: {
                title: "ERES COFFEE ORANGE",
                description: "Dulce, cercano y con personalidad. Das mucho, pero también sabes decir: “hasta aquí”.",
                rewardText: "Hoy tu match es un Coffee Orange.",
                claimBtnText: "QUIERO MI COFFEE ORANGE",
                color: "var(--orange-color)",
                image: "assets/images/orange.png"
            },
            SOD: {
                title: "ERES COFFEE SODA",
                description: "Fresco, juguetón y social. Llegas a un lugar nuevo y en cinco minutos ya conoces a alguien.",
                rewardText: "Hoy tu match es un Coffee Soda.",
                claimBtnText: "QUIERO MI COFFEE SODA",
                color: "var(--soda-color)",
                image: "assets/images/soda.png"
            },
            TON: {
                title: "ERES ESPRESSO TONIC",
                description: "Intenso, despierto e independiente. Tienes carácter y una presencia que no necesita presentación.",
                rewardText: "Hoy tu match es un Espresso Tonic.",
                claimBtnText: "QUIERO MI ESPRESSO TONIC",
                color: "var(--tonic-color)",
                image: "assets/images/tonic.png"
            }
        }
    },

    // ------------------------------------------
    // MODO: PELUDO
    // ------------------------------------------
    pet: {
        title: "¿QUÉ BEBIDA ES TU PELUDO?",
        intro: "",
        buttonText: "EMPEZAR",
        introImage: "assets/images/tazamisterio.png",
        questions: [
            {
                question: "¿Algo le llama la atención y…?",
                answers: [
                    { text: "Reacciona de una", result: "ESP" },
                    { text: "Mira antes de moverse", result: "FIL" },
                    { text: "Va a explorar", result: "CB" },
                    { text: "Se acerca… si quiere", result: "ORA" },
                    { text: "Va a saludar", result: "SOD" },
                    { text: "Observa sin hacer ruido", result: "TON" }
                ]
            },
            {
                question: "Su plan favorito sería…",
                answers: [
                    { text: "Acción, ya", result: "ESP" },
                    { text: "Su lugar, su calma", result: "FIL" },
                    { text: "Pasear y explorar", result: "CB" },
                    { text: "Mimos + su espacio", result: "ORA" },
                    { text: "Parque y nuevos amigos", result: "SOD" },
                    { text: "Salir y mirar todo", result: "TON" }
                ]
            },
            {
                question: "Con alguien nuevo…",
                answers: [
                    { text: "Se hace notar", result: "ESP" },
                    { text: "Primero lo analiza", result: "FIL" },
                    { text: "Se acerca tranquilo", result: "CB" },
                    { text: "Cariño… con límites", result: "ORA" },
                    { text: "Ya quiere ser su amigo", result: "SOD" },
                    { text: "Mira, mide y decide", result: "TON" }
                ]
            },
            {
                question: "Su vibe es más…",
                answers: [
                    { text: "Explosivo", result: "ESP" },
                    { text: "Seguro", result: "FIL" },
                    { text: "Aventurero", result: "CB" },
                    { text: " Tierno con carácter", result: "ORA" },
                    { text: " Súper social", result: "SOD" },
                    { text: " Intenso y elegante", result: "TON" }
                ]
            }
        ],
        results: {
            ESP: {
                title: "TU PELUDO ES PURO ESPRESSO",
                description: "Intenso, impulsivo y cero filtro. Siente todo al máximo y reacciona igual de rápido.",
                rewardText: "Te ganaste un Espresso.",
                claimBtnText: "QUIERO MI ESPRESSO",
                color: "var(--espresso-color)",
                image: "assets/images/espresso.png"
            },
            FIL: {
                title: "TU PELUDO ES CAFÉ FILTRADO",
                description: "Seguro, observador y muy auténtico. Sabe cuál es su espacio y no necesita demostrar nada.",
                rewardText: "Te ganaste un Café Filtrado.",
                claimBtnText: "QUIERO MI FILTRADO",
                color: "var(--filtrado-color)",
                image: "assets/images/filtrado.png"
            },
            CB: {
                title: "TU PELUDO ES COLD BREW",
                description: "Tranqui, pero siempre listo para el próximo plan. Explora, juega y también sabe cuándo bajar revoluciones.",
                rewardText: "Te ganaste un Cold Brew.",
                claimBtnText: "QUIERO MI COLD BREW",
                color: "var(--coldbrew-color)",
                image: "assets/images/coldbrew.png"
            },
            ORA: {
                title: "TU PELUDO ES COFFEE ORANGE",
                description: "Dulce y cariñoso, pero con carácter. Da amor cuando quiere y sabe perfectamente dónde están sus límites.",
                rewardText: "Te ganaste un Coffee Orange.",
                claimBtnText: "QUIERO MI COFFEE ORANGE",
                color: "var(--orange-color)",
                image: "assets/images/orange.png"
            },
            SOD: {
                title: "TU PELUDO ES COFFEE SODA",
                description: "Fresco, juguetón y súper sociable. Ve un desconocido y ya está pensando: “nuevo amigo”.",
                rewardText: "Te ganaste un Coffee Soda.",
                claimBtnText: "QUIERO MI COFFEE SODA",
                color: "var(--soda-color)",
                image: "assets/images/soda.png"
            },
            TON: {
                title: "TU PELUDO ES ESPRESSO TONIC",
                description: "Intenso, independiente y siempre alerta. Tiene presencia sin necesidad de hacer mucho ruido.",
                rewardText: "Te ganaste un Espresso Tonic.",
                claimBtnText: "QUIERO MI ESPRESSO TONIC",
                color: "var(--tonic-color)",
                image: "assets/images/tonic.png"
            }
        }
    }
};

/* ==================================================
   LÓGICA DEL JUEGO
================================================== */

const INACTIVITY_MS = 60000;
const ANSWER_TRANSITION_MS = 560;
const REVEAL_DELAY_MS = 2500;
const LOCK_TRANSITION_MS = 650;



const LEAD_ENDPOINT_URL = 'https://script.google.com/macros/s/AKfycbzKcOcXybxMrLeXp-1ExN21SYa1oP8nVWlE3jV-JfckBuBabMdqOOoYAF0eQHcpg1t8gg/exec';
const LEAD_ENDPOINT_TOKEN = 'KRUPSALCUBO-2026';

function sendLeadData(action, payload) {
    if (!LEAD_ENDPOINT_URL || LEAD_ENDPOINT_URL.startsWith('PEGA_AQUI')) {
        console.warn('LEAD_ENDPOINT_URL no está configurado todavía. No se envió:', action, payload);
        return;
    }

   
    fetch(LEAD_ENDPOINT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: JSON.stringify({ token: LEAD_ENDPOINT_TOKEN, action, ...payload })
    }).catch(error => {
        console.error('No se pudo enviar la información al backend:', error);
    });
}

let gameState = {
    mode: null,
    currentQuestionIndex: 0,
    scores: { ESP: 0, FIL: 0, CB: 0, ORA: 0, SOD: 0, TON: 0 },
    selectedAnswers: [],
    finalResult: null,
    inactivityTimer: null,
    revealTimer: null,
    isProcessingAnswer: false,
    activeScreen: 'home',
    leadData: { name: '', email: '', phone: '' }
};

const screens = {
    lock: document.getElementById('screen-lock'),
    home: document.getElementById('screen-home'),
    intro: document.getElementById('screen-intro'),
    question: document.getElementById('screen-question'),
    loading: document.getElementById('screen-loading'),
    result: document.getElementById('screen-result')
};

const leadModal = document.getElementById('lead-modal');

function showLeadModal() {
    if (leadModal) leadModal.classList.add('visible');
}

function hideLeadModal() {
    if (leadModal) leadModal.classList.remove('visible');
}

// Modo kiosk: evitar acciones accidentales del navegador.
document.addEventListener('contextmenu', event => event.preventDefault());
document.addEventListener('dragstart', event => event.preventDefault());

function clearPendingTimers() {
    clearTimeout(gameState.inactivityTimer);
    clearTimeout(gameState.revealTimer);
    gameState.inactivityTimer = null;
    gameState.revealTimer = null;
}

function showScreen(screenId) {
    Object.entries(screens).forEach(([id, screen]) => {
        if (!screen) return;
        screen.classList.toggle('active', id === screenId);
    });

    gameState.activeScreen = screenId;


    // volver al inicio después del tiempo definido.
    if (screenId === 'home' || screenId === 'lock') {
        clearTimeout(gameState.inactivityTimer);
        gameState.inactivityTimer = null;
    } else {
        startInactivityTimer();
    }
}

function unlockScreen() {
    if (gameState.activeScreen !== 'lock') return;

    const lockScreen = screens.lock;
    const homeScreen = screens.home;
    if (!lockScreen || !homeScreen) return;

    // El home queda visible debajo mientras la pantalla de bloqueo se desliza hacia arriba.
    homeScreen.classList.add('active');
    lockScreen.classList.add('unlocking');

    // OJO: "unlocking" se deja puesto a propósito (no se quita aquí). Si se
    // quitara ahora, al mismo tiempo que showScreen() le retira "active",
    // el navegador animaría el regreso a su posición normal (transform)
    // mientras se desvanece (opacity), y por un instante volvería a verse
    // encima del home. Se limpia de forma controlada en resetGame().
    setTimeout(() => {
        showScreen('home');
        // El modal de datos/cookies bloquea el menú hasta que se guarde.
        showLeadModal();
    }, LOCK_TRANSITION_MS);
}

function resetLockScreenTransform() {
    const lockScreen = screens.lock;
    if (!lockScreen) return;

    // Quita el desplazamiento sin animar (para no ver un "slide-down" no
    // deseado) y fuerza un reflow antes de permitir transiciones de nuevo.
    lockScreen.classList.add('no-transition');
    lockScreen.classList.remove('unlocking');
    void lockScreen.offsetWidth;
    lockScreen.classList.remove('no-transition');
}

function handleLeadFormSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const nameInput = document.getElementById('field-name');
    const emailInput = document.getElementById('field-email');
    const phoneInput = document.getElementById('field-phone');
    const consentInput = document.getElementById('field-consent');
    const errorEl = document.getElementById('form-error');

    [nameInput, emailInput, phoneInput, consentInput].forEach(input => input.classList.add('touched'));

    if (!form.checkValidity()) {
        errorEl.textContent = consentInput.checkValidity()
            ? 'Revisa que el nombre, correo y teléfono estén completos y sean válidos.'
            : 'Debes aceptar el uso de cookies y el tratamiento de datos para continuar.';
        return;
    }

    errorEl.textContent = '';

    gameState.leadData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim()
    };

    sendLeadData('register', gameState.leadData);

    resetInactivityTimer();
    hideLeadModal();
}

function resetLeadForm() {
    const form = document.getElementById('lead-form');
    if (!form) return;

    form.reset();
    ['field-name', 'field-email', 'field-phone', 'field-consent'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.classList.remove('touched');
    });

    const errorEl = document.getElementById('form-error');
    if (errorEl) errorEl.textContent = '';

    const submitBtn = document.getElementById('form-submit-btn');
    if (submitBtn) submitBtn.disabled = false;

    hideLeadModal();
}

function selectGameMode(mode) {
    clearTimeout(gameState.revealTimer);
    gameState.revealTimer = null;
    gameState.mode = mode;

    const modeData = gameData[mode];
    const introBg = document.getElementById('intro-bg-image');

    if (introBg) {
        introBg.src = mode === 'pet'
            ? 'assets/images/pet.png'
            : 'assets/images/bloqueo.png';
    }

    document.getElementById('intro-visual').innerHTML = `
        <img src="${modeData.introImage}" alt="Bebida sorpresa">
    `;
    document.getElementById('intro-title').innerText = modeData.title;
    document.getElementById('intro-text').innerText = modeData.intro;
    document.getElementById('intro-btn-text').innerText = modeData.buttonText;

    showScreen('intro');
}

function startGame() {
    if (!gameState.mode) return;

    clearTimeout(gameState.revealTimer);
    gameState.revealTimer = null;
    gameState.currentQuestionIndex = 0;
    gameState.scores = { ESP: 0, FIL: 0, CB: 0, ORA: 0, SOD: 0, TON: 0 };
    gameState.selectedAnswers = [];
    gameState.finalResult = null;
    gameState.isProcessingAnswer = false;

    renderQuestion();
    showScreen('question');
}

function renderQuestion() {
    const modeData = gameData[gameState.mode];
    const qData = modeData.questions[gameState.currentQuestionIndex];
    const questionContent = document.getElementById('question-content');

    const questionNum = gameState.currentQuestionIndex + 1;
    document.getElementById('current-question-num').innerText = questionNum;

    const percentage = (questionNum / modeData.questions.length) * 100;
    document.getElementById('progress-fill').style.width = `${percentage}%`;

    document.getElementById('question-text').innerText = qData.question;

    const grid = document.getElementById('answers-grid');
    grid.innerHTML = '';

    qData.answers.forEach((ans, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-card';
        btn.type = 'button';
        btn.style.animation = `slideUp 0.4s ${index * 0.075}s forwards`;
        btn.style.opacity = '0';
        btn.setAttribute('aria-label', `${String.fromCharCode(65 + index)}. ${ans.text}`);
        btn.onclick = () => selectAnswer(ans.result, btn);

        const optionLetter = String.fromCharCode(65 + index);
        btn.innerHTML = `
            <span class="answer-index" aria-hidden="true">${optionLetter}</span>
            <span class="answer-text">${ans.text}</span>
        `;
        grid.appendChild(btn);
    });

    // Entrada de la nueva pregunta.
    questionContent.classList.remove('question-leaving', 'question-entering');
    void questionContent.offsetWidth;
    questionContent.classList.add('question-entering');
    setTimeout(() => questionContent.classList.remove('question-entering'), 520);
}

function selectAnswer(resultCode, btnElement) {
    if (gameState.isProcessingAnswer) return;

    gameState.isProcessingAnswer = true;
    resetInactivityTimer();

    const allButtons = [...document.querySelectorAll('.answer-card')];
    allButtons.forEach(button => {
        button.disabled = true;
        if (button !== btnElement) button.classList.add('is-dimmed');
    });

    btnElement.classList.add('selected');
    gameState.scores[resultCode]++;
    gameState.selectedAnswers.push(resultCode);

    // Primero dejamos que la elección responda visualmente;
    // luego la escena sale y entra la siguiente pregunta.
    const questionContent = document.getElementById('question-content');
    setTimeout(() => questionContent.classList.add('question-leaving'), 230);

    setTimeout(() => {
        gameState.currentQuestionIndex++;
        const totalQuestions = gameData[gameState.mode].questions.length;

        if (gameState.currentQuestionIndex < totalQuestions) {
            gameState.isProcessingAnswer = false;
            renderQuestion();
            resetInactivityTimer();
        } else {
            gameState.isProcessingAnswer = false;
            questionContent.classList.remove('question-leaving');
            processResults();
        }
    }, ANSWER_TRANSITION_MS);
}

function calculateFinalResult() {
    const maxScore = Math.max(...Object.values(gameState.scores));
    const tiedResults = Object.keys(gameState.scores)
        .filter(key => gameState.scores[key] === maxScore);

    if (tiedResults.length === 1) {
        return tiedResults[0];
    }

    // Desempate: manda la respuesta de la pregunta 4.
    const q4Answer = gameState.selectedAnswers[3];
    return tiedResults.includes(q4Answer) ? q4Answer : tiedResults[0];
}

function processResults() {
    gameState.finalResult = calculateFinalResult();

    document.getElementById('loading-text').innerText = gameState.mode === 'pet'
        ? 'DESCUBRIENDO SU VIBE...'
        : 'DESCUBRIENDO TU MATCH...';

    showScreen('loading');

    clearTimeout(gameState.revealTimer);
    gameState.revealTimer = setTimeout(() => {
        gameState.revealTimer = null;
        showResultScreen();
    }, REVEAL_DELAY_MS);
}

function showResultScreen() {
    if (!gameState.mode || !gameState.finalResult) return;

    const resultData = gameData[gameState.mode].results[gameState.finalResult];

    document.getElementById('result-ambient').style.backgroundColor = resultData.color;
    document.getElementById('result-title').innerText = resultData.title;
    document.getElementById('result-description').innerText = resultData.description;

    const btnClaim = document.getElementById('btn-claim');
    const btnClaimText = document.getElementById('btn-claim-text');
    btnClaimText.innerText = resultData.claimBtnText;
    btnClaim.classList.remove('claimed');
    btnClaim.style.backgroundColor = 'var(--text-primary)';
    btnClaim.style.color = 'var(--brand-primary)';

    // Se dejan las rutas finales desde ahora. Solo será necesario reemplazar
    // los PNG de las cuatro bebidas en /assets/images cuando estén disponibles.
    const imgEl = document.getElementById('result-image');
    imgEl.src = resultData.image;
    imgEl.alt = resultData.title;

    showScreen('result');
}

function claimDrink() {
    const btn = document.getElementById('btn-claim');
    if (!btn.classList.contains('claimed')) {
        document.getElementById('btn-claim-text').innerText = 'BEBIDA DESBLOQUEADA';
        btn.classList.add('claimed');
        btn.style.backgroundColor = 'var(--brand-accent)';
        btn.style.color = 'var(--brand-primary)';

        const resultData = gameState.mode && gameState.finalResult
            ? gameData[gameState.mode].results[gameState.finalResult]
            : null;

        if (resultData && gameState.leadData.email) {
            sendLeadData('sendResult', {
                name: gameState.leadData.name,
                email: gameState.leadData.email,
                phone: gameState.leadData.phone,
                mode: gameState.mode,
                resultCode: gameState.finalResult,
                resultTitle: resultData.title,
                resultDescription: resultData.description,
                rewardText: resultData.rewardText
            });
        }
    }
    resetInactivityTimer();
}

function resetGame() {
    clearPendingTimers();

    gameState.mode = null;
    gameState.currentQuestionIndex = 0;
    gameState.scores = { ESP: 0, FIL: 0, CB: 0, ORA: 0, SOD: 0, TON: 0 };
    gameState.selectedAnswers = [];
    gameState.finalResult = null;
    gameState.isProcessingAnswer = false;
    gameState.leadData = { name: '', email: '', phone: '' };

    const questionContent = document.getElementById('question-content');
    if (questionContent) {
        questionContent.classList.remove('question-leaving', 'question-entering');
    }

    resetLeadForm();
    resetLockScreenTransform();

    showScreen('lock');
}

function startInactivityTimer() {
    clearTimeout(gameState.inactivityTimer);
    gameState.inactivityTimer = setTimeout(() => {
        resetGame();
    }, INACTIVITY_MS);
}

function resetInactivityTimer() {
    if (gameState.activeScreen !== 'home') {
        startInactivityTimer();
    }
}

// Cualquier interacción real durante el juego mantiene viva la sesión.
['pointerdown', 'touchstart', 'keydown'].forEach(eventName => {
    document.addEventListener(eventName, resetInactivityTimer, { passive: true });
});

const leadForm = document.getElementById('lead-form');
if (leadForm) {
    leadForm.addEventListener('submit', handleLeadFormSubmit);
}
['field-name', 'field-email', 'field-phone', 'field-consent'].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.addEventListener('blur', () => field.classList.add('touched'));
});

showScreen('lock');
