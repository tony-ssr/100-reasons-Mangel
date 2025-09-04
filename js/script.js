// Todas las 100 razones organizadas por categorías
const reasons = [
    { number: 1, text: "Porque eres increíblemente inteligente. Me enorgullece verte sacar 5 en un parcial y ser la única, y me encanta cuando hablamos de temas profundos, aunque me dejes sin argumentos.", category: "connection" },
    { number: 2, text: "Por tu dedicación y lo juiciosa que eres con tus estudios. Admiro la pasión que le pones a tu carrera de Trabajo Social y cómo te esfuerzas en tus trabajos, aunque a veces te estresen un montón.", category: "connection" },
    { number: 3, text: "Porque tienes una forma única de ver el mundo. Me dijiste que tu labor es mejorar el bienestar de las personas, y eso me parece admirable. Quieres salvar la vida de algunas personas, y eso sonó profundo y real.", category: "connection" },
    { number: 4, text: "Porque eres auténtica. Me gusta que seas tú misma, que me digas las cosas como son, incluso cuando estás 'emputada' o te sientes vulnerable y necesitas afecto.", category: "connection" },
    { number: 5, text: "Por tu sentido del humor y tu lado 'random'. Me haces reír con tus ocurrencias, como cuando hablamos de convertirte en ardilla o de tus sueños extraños.", category: "details" },
    { number: 6, text: "Porque eres fuerte y resiliente. A pesar del estrés de la universidad y los problemas, siempre sigues adelante. Eres una mujer fuerte y cabezona.", category: "connection" },
    { number: 7, text: "Porque eres mi 'pequeña hibernadora'. Me da ternura y risa lo mucho que te gusta dormir, y aunque me meta contigo por eso, es una de las cosas que me encantan de ti.", category: "details" },
    { number: 8, text: "Por tu dualidad. Eres tierna y a la vez una 'pequeña diabla', una mezcla que me encanta.", category: "connection" },
    { number: 9, text: "Porque eres perfeccionista. Aunque te frustres cuando las cosas no salen como quieres, esa dedicación por hacer todo bien es algo que admiro.", category: "connection" },
    { number: 10, text: "Porque eres genuina. Contigo siento que no hay mentiras; me gusta tu sinceridad.", category: "connection" },
    { number: 11, text: "Porque conectamos de una manera muy bonita. Desde el primer día sentí que podíamos hablar de cualquier cosa y que había una 'muy bonita vibe' entre nosotros.", category: "connection" },
    { number: 12, text: "Porque me siento completamente cómodo siendo yo mismo contigo. Puedo ser tonto, serio, romántico o un fastidio, y sé que contigo todo está bien.", category: "connection" },
    { number: 13, text: "Porque me entiendes sin que tenga que explicarlo todo. Siento que a veces no necesito palabras para que sepas cómo me siento.", category: "connection" },
    { number: 14, text: "Porque me haces sentir importante. El simple hecho de que me pidas que te despierte o que te preocupes si no te contesto me hace sentir valorado.", category: "connection" },
    { number: 15, text: "Porque nuestras conversaciones son lo mejor. Podemos pasar de hablar de tonterías y memes a tener debates filosóficos sobre Marx o la vida.", category: "connection" },
    { number: 16, text: "Porque me haces sentir que no estoy solo en mis locuras.", category: "connection" },
    { number: 17, text: "Porque me das paz. Estar contigo, incluso en silencio, me da una tranquilidad que no encuentro en otro lado.", category: "connection" },
    { number: 18, text: "Porque me haces querer ser mejor. Me inspiras a ser más responsable y a esforzarme.", category: "connection" },
    { number: 19, text: "Porque siento que esto es recíproco. Cuando me dices que me extrañas o que te hago falta, sé que no soy el único que siente esta conexión tan fuerte.", category: "connection" },
    { number: 20, text: "Porque superamos los malos entendidos. Aunque a veces tengamos momentos raros, siempre terminamos hablando y aclarando las cosas, y eso fortalece lo que tenemos.", category: "connection" },
    { number: 21, text: "Porque me encantan tus besos. Desde los 'piquitos' que me curan el dolor de cabeza hasta los que nos damos bajo la lluvia.", category: "love" },
    { number: 22, text: "Porque tu sonrisa ilumina mis días más grises y me hace olvidar cualquier problema.", category: "love" },
    { number: 23, text: "Porque me encanta abrazarte y estar 'acuchiparrado' contigo.", category: "love" },
    { number: 24, text: "Porque me gusta hasta cuando te enojas. Tienes una forma particular de mostrar tu molestia que, aunque no lo creas, también me parece tierna.", category: "details" },
    { number: 25, text: "Porque me 'shockeas la cabeza'. Me haces pensar y sentir cosas que no esperaba, y me encanta ese desorden que traes a mi vida.", category: "love" },
    { number: 26, text: "Porque me haces sonrojar. Con las cosas que dices o haces, logras que me ponga nervioso y hasta me sonroje, y eso no me pasa con cualquiera.", category: "love" },
    { number: 27, text: "Porque me siento atraído por tu inteligencia. Que seas una mujer tan pila y dedicada te hace aún más atractiva para mí.", category: "connection" },
    { number: 28, text: "Porque me gusta tu risa. Es contagiosa y me mejora cualquier mal día.", category: "details" },
    { number: 29, text: "Por la forma en que me miras. Esos ojitos tienen algo especial que me atrapa por completo.", category: "love" },
    { number: 30, text: "Porque me haces sentir querido. Tus mensajes de buenos días, tu preocupación y tu cariño constante significan muchísimo para mí.", category: "love" },
    { number: 31, text: "Por nuestra primera cita. La lluvia, el beso, el frío... todo fue perfecto y romántico, como de película.", category: "moments" },
    { number: 32, text: "Por el día que pasamos en mi casa por mi cumpleaños. Fue increíble tenerte aquí, compartir contigo, y que cocinaras para mí. Fue uno de mis momentos favoritos.", category: "moments" },
    { number: 33, text: "Por las noches que nos quedamos hablando por llamada hasta dormirnos. Esas conversaciones son especiales.", category: "moments" },
    { number: 34, text: "Por cada 'pijamada real'. Ya sea en mi casa o en la tuya, esos momentos son únicos.", category: "moments" },
    { number: 35, text: "Por el día que fuimos al motel. La adrenalina, la novedad y estar juntos de esa manera fue una experiencia que no olvidaré.", category: "moments" },
    { number: 36, text: "Por todas las veces que te he recogido en la moto. Sentir que vas conmigo, abrazándome, es de las mejores sensaciones.", category: "moments" },
    { number: 37, text: "Por nuestro picnic improvisado en el parque. Ese sándwich y ese momento sencillo fue perfecto.", category: "moments" },
    { number: 38, text: "Por las veces que hemos visto series juntos. Compartir esos momentos, aunque sea a la distancia, nos conecta.", category: "moments" },
    { number: 39, text: "Por las 'salchipapas' que nos debemos y las que hemos comido. Es nuestro plan por excelencia.", category: "details" },
    { number: 40, text: "Porque me dejaste entrar a tu vida y a tu casa. Y me hiciste sentir bienvenido desde el primer momento.", category: "connection" },
    { number: 41, text: "Porque me haces sentir en casa, incluso cuando estoy en la tuya. Me sentí gratamente recibido desde el primer día que fui, y que tu mamá y tu hermana me trataran tan bien fue increíble.", category: "connection" },
    { number: 42, text: "Porque te preocupas por mí. Siempre me pides que te avise cuando llego a casa, y esa preocupación tuya significa muchísimo para mí.", category: "details" },
    { number: 43, text: "Porque me tienes paciencia. Aguantas mis tonterías, mi lado 'random' jugando con la IA y hasta cuando me pongo a debatir cosas que ni yo entiendo.", category: "connection" },
    { number: 44, text: "Porque me retas y me haces mejor. Cuando me acusas de 'parlero' o me dices 'tontico', me haces reír y me mantienes con los pies en la tierra.", category: "connection" },
    { number: 45, text: "Porque eres la única a la que quiero besar tan apasionadamente. Y te lo he dicho, eres la única mujer que he besado bajo la lluvia.", category: "love" },
    { number: 46, text: "Porque me pides afecto. Me encanta cuando me dices que necesitas un abrazo o que te de mimos, porque me hace sentir que de verdad me necesitas a tu lado.", category: "details" },
    { number: 47, text: "Porque me haces sentir valiente. Contigo me atrevo a todo, hasta a decirle a mi mamá lo mucho que te quiero y lo importante que eres para mí.", category: "connection" },
    { number: 48, text: "Porque me cuidas. Incluso a la distancia, cuando estoy enfermo o cansado, siempre estás pendiente de mí.", category: "details" },
    { number: 49, text: "Porque confías en mí, hasta para pedirme ayuda con tus trabajos de la u, aunque a veces me hagas transcribir mil hojas.", category: "connection" },
    { number: 50, text: "Porque me 'buggeas la cabeza'. Me haces pensar de más, me haces sentir cosas que no esperaba y desordenas mi mundo de la forma más perfecta.", category: "love" },
    { number: 51, text: "Porque no te da miedo tomar la iniciativa, como la primera vez que me invitaste a salir.", category: "connection" },
    { number: 52, text: "Porque te pones celosa o te sientes rara con mi pasado. Aunque no me guste que te sientas mal, me demuestra que lo nuestro te importa de verdad. Por tus detalles y nuestras pequeñas cosas", category: "details" },
    { number: 53, text: "Porque me encanta descubrir nueva música contigo. Tienes un gusto increíble y cada canción que me muestras se convierte en parte de la banda sonora de lo nuestro.", category: "details" },
    { number: 54, text: "Porque me llamas 'corazón de melocotón'.", category: "details" },
    { number: 55, text: "Porque me envías fotos tuyas. Incluso cuando te sientes 'demacrada y cansada', para mí siempre te ves hermosa.", category: "details" },
    { number: 56, text: "Porque me hiciste un espacio en tu vida. El simple hecho de que me invitaras a tu casa y me presentaras a tu familia es algo que valoro muchísimo.", category: "connection" },
    { number: 57, text: "Por la forma en que tus ojos brillan cuando algo te apasiona. Sea hablando de tu carrera, de un libro o de una idea loca, ver esa luz en tu mirada me contagia tu energía.", category: "details" },
    { number: 58, text: "Por estresarte pensando qué ponerte para verme. Es una tontería, pero me parece adorable que le pongas tanto empeño.", category: "details" },
    { number: 59, text: "Porque me pides que te despierte. Es un pequeño gesto que me hace sentir que soy lo primero en lo que piensas.", category: "details" },
    { number: 60, text: "Por el sonido de tu voz al despertar. Escucharte medio dormida en un audio de buenos días es mi forma favorita de empezar el día.", category: "moments" },
    { number: 61, text: "Por nuestro amor compartido a las salchipapas. Es nuestro plan infalible y me encanta.", category: "details" },
    { number: 62, text: "Porque te enojas cuando tu hermana te coge las cosas. Me da entre risa y ternura, y me encanta ver esa fuerza tuya.", category: "details" },
    { number: 63, text: "Por cómo te ves con mi ropa. Te presté mi camisa y me encanta cómo te queda.", category: "details" },
    { number: 64, text: "Porque eres mi 'pequeña diabla'. Tienes ese lado travieso y sensual que me vuelve loco.", category: "love" },
    { number: 65, text: "Porque me llamas 'mi amor', 'mi vida', 'guapo'. Cada vez que lo dices, se me alborota todo.", category: "details" },
    { number: 66, text: "Por el futuro que imagino contigo. Pensar en los planes, viajes y metas que podemos cumplir juntos me llena de una ilusión que nunca antes había sentido.", category: "connection" },
    { number: 67, text: "Porque me mandaste la invitación para la fusión en Spotify, queriendo compartir tu música conmigo. Por nuestros momentos y recuerdos", category: "details" },
    { number: 68, text: "Porque me encanta tu lado competitivo. Ya sea en un juego de mesa o debatiendo una tontería, esa chispa tuya me parece fascinante.", category: "moments" },
    { number: 69, text: "Por cómo te concentras cuando lees o escribes. Me puedo quedar mirándote por horas, viendo cómo te sumerges en tu propio mundo.", category: "moments" },
    { number: 70, text: "Por la confianza que me das para hablar de mis miedos e inseguridades. Contigo no tengo que fingir que soy fuerte todo el tiempo.", category: "moments" },
    { number: 71, text: "Porque sabes exactamente qué decir para calmarme cuando estoy estresado o de mal humor. Tienes un súper poder para darme paz.", category: "moments" },
    { number: 72, text: "Por la playlist que compartimos en Spotify. Es como un diario secreto de nuestra relación, lleno de canciones que nos recuerdan momentos juntos.", category: "moments" },
    { number: 73, text: "Por la primera vez que cocinaste para mí. Todavía recuerdo el sabor y lo mucho que significó ese gesto.", category: "moments" },
    { number: 74, text: "Por la forma en que te preocupas por los demás. Tu vocación por el trabajo social no es solo una carrera, es una parte esencial de quién eres.", category: "moments" },
    { number: 75, text: "Por aguantar mis nervios de la primera vez, mis manos sudorosas y mi torpeza. Fuiste muy tierna.", category: "moments" },
    { number: 76, text: "Por el día que dormimos juntos toda la tarde porque tenías cita en el odontólogo. Amo esos momentos de calma contigo.", category: "moments" },
    { number: 77, text: "Por la vez que te llevé a conocer a mi familia. Aunque me ponía nervioso, quería que fueran parte de lo nuestro.", category: "moments" },
    { number: 78, text: "Por el día que casi me muero por un perro en la carretera y mi primer pensamiento fue que tenía que contártelo.", category: "moments" },
    { number: 79, text: "Por cada vez que me has acompañado en mis momentos de estrés, como con las exposiciones o los trabajos de la u.", category: "connection" },
    { number: 80, text: "Por la vez que te asustaste porque pensaste que habías dejado tu espejo de Melody en el motel. Me dio risa tu pánico, pero también me enterneció. Y porque simplemente te quiero", category: "details" },
    { number: 81, text: "Porque hasta tus imperfecciones me parecen perfectas. Cada pequeño detalle, cada 'defecto' que tú ves, es una parte de ti que adoro.", category: "love" },
    { number: 82, text: "Porque quiero un futuro contigo. Aunque a veces me de 'wewencha' decirlo, pienso en nosotros más allá del ahora.", category: "love" },
    { number: 83, text: "Porque aprendo de ti constantemente. No solo de temas académicos, sino de tu forma de ver la vida, de tu empatía y de la manera en que tratas a los demás.", category: "connection" },
    { number: 84, text: "Porque me haces sentir que lo nuestro es recíproco, y eso me da una paz inmensa.", category: "connection" },
    { number: 85, text: "Porque eres la única con la que quiero tener una 'pijamada real'.", category: "love" },
    { number: 86, text: "Porque me haces querer ser mejor persona y un hombre responsable afectivamente.", category: "connection" },
    { number: 87, text: "Porque me complementas. Eres la Kuromi para mi My Melody, aunque a veces no sepas cuál soy yo.", category: "love" },
    { number: 88, text: "Porque me haces sentir que, contigo, todo va a estar bien, incluso en los momentos difíciles.", category: "connection" },
    { number: 89, text: "Porque me encanta la complicidad que tenemos. A veces basta una mirada o un gesto para entendernos a la perfección, como si tuviéramos un lenguaje secreto.", category: "connection" },
    { number: 90, text: "Porque cada momento contigo es mi favorito. Desde una salida elegante hasta estar acostados sin hacer nada.", category: "love" },
    { number: 91, text: "Porque no imagino esto con nadie más. Lo que tenemos es único y especial.", category: "love" },
    { number: 92, text: "Porque eres la mujer que quiero en mi vida. Así de simple y así de complicado.", category: "love" },
    { number: 93, text: "Porque cuando estoy contigo, siento que puedo conquistar el mundo, o al menos, sobrevivir a la tesis.", category: "connection" },
    { number: 94, text: "Porque eres mi persona. Mi compañera, mi amiga, mi todo.", category: "love" },
    { number: 95, text: "Porque me haces sentir el hombre más afortunado del mundo.", category: "love" },
    { number: 96, text: "Porque me retas a ser más abierto con mis sentimientos, y aunque me cueste, lo intento por ti.", category: "connection" },
    { number: 97, text: "Porque me encanta nuestro equipo, como Batman y My Melody, listos para lo que sea.", category: "connection" },
    { number: 98, text: "Porque eres mi cable a tierra cuando me estoy volviendo loco con la universidad o el trabajo.", category: "connection" },
    { number: 99, text: "Porque llenas mi vida de risas, ternura y un poquito de caos.", category: "love" },
    { number: 100, text: "Porque te quiero muchísimo, Mariangel. Simplemente te quiero, con todo lo que eres y todo lo que somos juntos. Y eso es más que suficiente.", category: "love" }
];

// Variables globales
let currentFilter = 'all';
const reasonsGrid = document.getElementById('reasonsGrid');
const navButtons = document.querySelectorAll('.nav-btn');

// Función para crear una tarjeta de razón
function createReasonCard(reason) {
    const card = document.createElement('div');
    card.className = 'reason-card fade-in';
    card.innerHTML = `
        <div class="reason-number">${reason.number}</div>
        <p class="reason-text">${reason.text}</p>
    `;
    return card;
}

// Función para mostrar las razones filtradas
function displayReasons(filter = 'all') {
    reasonsGrid.innerHTML = '';
    
    let filteredReasons = reasons;
    if (filter !== 'all') {
        filteredReasons = reasons.filter(reason => reason.category === filter);
    }
    
    filteredReasons.forEach((reason, index) => {
        setTimeout(() => {
            const card = createReasonCard(reason);
            reasonsGrid.appendChild(card);
            
            // Agregar animación de entrada
            setTimeout(() => {
                card.classList.add('bounce-in');
            }, 50);
        }, index * 100); // Delay progresivo para efecto cascada
    });
}

// Función para manejar el cambio de filtro
function handleFilterChange(filter) {
    currentFilter = filter;
    
    // Actualizar botones activos
    navButtons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.category === filter) {
            btn.classList.add('active');
        }
    });
    
    // Mostrar razones filtradas
    displayReasons(filter);
}

// Event listeners para los botones de navegación
navButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        handleFilterChange(category);
    });
});

// Función para agregar efectos de hover a las imágenes de la galería
function initializeGallery() {
    const galleryImages = document.querySelectorAll('.gallery-image');
    
    galleryImages.forEach(image => {
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1) rotate(3deg)';
        });
        
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1) rotate(0deg)';
        });
    });
}

// Función para crear efectos de partículas (corazones flotantes)
function createFloatingHearts() {
    const heartsContainer = document.createElement('div');
    heartsContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1000;
    `;
    document.body.appendChild(heartsContainer);
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = Math.random() > 0.5 ? '💞' : '💕';
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 20 + 15}px;
            left: ${Math.random() * 100}%;
            top: 100%;
            animation: floatUp ${Math.random() * 3 + 4}s linear forwards;
            opacity: 0.7;
        `;
        
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 7000);
    }
    
    // Crear corazones cada cierto tiempo
    setInterval(createHeart, 3000);
}

// CSS para la animación de corazones flotantes
const style = document.createElement('style');
style.textContent = `
    @keyframes floatUp {
        0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.7;
        }
        50% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Función para agregar efectos de scroll suave
function initializeSmoothScroll() {
    // Scroll suave para navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Función para agregar efectos de aparición al hacer scroll
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos que deben animarse
    document.querySelectorAll('.reason-card, .gallery-item').forEach(el => {
        observer.observe(el);
    });
}

// Función para agregar mensajes especiales aleatorios
function addSpecialMessages() {
    const specialMessages = [
        "Mi preciosa Mangel 💖",
        "Mi niña hermosa 💕",
        "Mi amor, mi cielito 💖",
        "Eres mi amorcito, Mariangel 💕"
    ];
    
    const reasonCards = document.querySelectorAll('.reason-card');
    
    // Agregar mensajes especiales a algunas tarjetas aleatorias
    const specialIndices = [10, 25, 50, 75, 99]; // Razones especiales
    
    specialIndices.forEach(index => {
        if (reasonCards[index]) {
            const message = specialMessages[Math.floor(Math.random() * specialMessages.length)];
            const messageElement = document.createElement('div');
            messageElement.style.cssText = `
                text-align: center;
                font-style: italic;
                color: #ff99cc;
                font-weight: 600;
                margin-top: 10px;
                font-size: 0.9rem;
            `;
            messageElement.textContent = message;
            reasonCards[index].appendChild(messageElement);
        }
    });
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    // Mostrar todas las razones inicialmente
    displayReasons('all');
    
    // Inicializar efectos
    initializeGallery();
    initializeSmoothScroll();
    
    // Agregar efectos especiales después de un delay
    setTimeout(() => {
        createFloatingHearts();
        initializeScrollAnimations();
    }, 2000);
    
    // Agregar mensajes especiales después de que se carguen las razones
    setTimeout(() => {
        addSpecialMessages();
    }, 3000);
});

// Función para manejar el redimensionamiento de ventana
window.addEventListener('resize', () => {
    // Reajustar elementos si es necesario
    const reasonCards = document.querySelectorAll('.reason-card');
    reasonCards.forEach(card => {
        card.style.transition = 'all 0.3s ease';
    });
});

// Agregar efectos de teclado para navegación
document.addEventListener('keydown', (e) => {
    const categories = ['all', 'connection', 'moments', 'details', 'love'];
    const currentIndex = categories.indexOf(currentFilter);
    
    if (e.key === 'ArrowRight' && currentIndex < categories.length - 1) {
        handleFilterChange(categories[currentIndex + 1]);
    } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        handleFilterChange(categories[currentIndex - 1]);
    }
});