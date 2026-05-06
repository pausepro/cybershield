// ========== DATA ==========

const ACTIVITIES = [
    {
        id: 'email-analysis',
        title: 'Análisis de Correos',
        description: 'Analiza correos electrónicos reales y detecta las señales de phishing ocultas en cada uno.',
        icon: '📧',
        difficulty: 2,
        accentColor: '#00f5d4',
        accentBg: 'rgba(0, 245, 212, 0.12)',
        accentShadow: 'rgba(0, 245, 212, 0.15)',
        badgeText: 'Actividad 1',
    },
    {
        id: 'url-detection',
        title: 'Detección de URLs',
        description: 'Aprende a distinguir URLs legítimas de las creadas por atacantes para robar tus datos.',
        icon: '🔗',
        difficulty: 2,
        accentColor: '#00bbf9',
        accentBg: 'rgba(0, 187, 249, 0.12)',
        accentShadow: 'rgba(0, 187, 249, 0.15)',
        badgeText: 'Actividad 2',
    },
    {
        id: 'attachment-security',
        title: 'Seguridad de Adjuntos',
        description: 'Evalúa archivos adjuntos sospechosos y decide cuáles son seguros para abrir.',
        icon: '📎',
        difficulty: 3,
        accentColor: '#ff6b35',
        accentBg: 'rgba(255, 107, 53, 0.12)',
        accentShadow: 'rgba(255, 107, 53, 0.15)',
        badgeText: 'Actividad 3',
    },
    {
        id: 'fake-login',
        title: 'Sitios Falsos de Login',
        description: 'Identifica páginas de inicio de sesión falsificadas antes de introducir tus credenciales.',
        icon: '🌐',
        difficulty: 3,
        accentColor: '#7b61ff',
        accentBg: 'rgba(123, 97, 255, 0.12)',
        accentShadow: 'rgba(123, 97, 255, 0.15)',
        badgeText: 'Actividad 4',
    },
    {
        id: 'social-engineering',
        title: 'Ingeniería Social',
        description: 'Enfrenta escenarios en los que un atacante intenta manipularte para obtener información.',
        icon: '🎭',
        difficulty: 4,
        accentColor: '#f72585',
        accentBg: 'rgba(247, 37, 133, 0.12)',
        accentShadow: 'rgba(247, 37, 133, 0.15)',
        badgeText: 'Actividad 5',
    },
    {
        id: 'vm-cases',
        title: 'Casos Prácticos (Terminal)',
        description: 'Aprende comandos básicos de red y sistema para investigar posibles incidentes de seguridad.',
        icon: '💻',
        difficulty: 4,
        accentColor: '#38b000',
        accentBg: 'rgba(56, 176, 0, 0.12)',
        accentShadow: 'rgba(56, 176, 0, 0.15)',
        badgeText: 'Actividad 6',
    },
    {
        id: 'final-quiz',
        title: 'Evaluación Final',
        description: 'Pon a prueba todo lo aprendido con un examen completo de ciberseguridad.',
        icon: '📝',
        difficulty: 5,
        accentColor: '#fee440',
        accentBg: 'rgba(254, 228, 64, 0.12)',
        accentShadow: 'rgba(254, 228, 64, 0.15)',
        badgeText: 'Evaluación',
    },
];

// ========== EMAIL DATA ==========
const EMAILS = [
    {
        from: 'seguridad@bancoo-santander.com',
        subject: '⚠️ Alerta: Acceso no autorizado a su cuenta',
        to: 'empleado@empresa.com',
        body: `Estimado cliente,

Hemos detectado un acceso no autorizado a su cuenta bancaria. Para proteger sus fondos, necesitamos que verifique su identidad inmediatamente.

<span class="fake-link">https://bancoo-santander.com/verificar-cuenta</span>

Si no realiza esta verificación en las próximas 24 horas, su cuenta será suspendida permanentemente.

Departamento de Seguridad
Banco Santander`,
        isPhishing: true,
        explanation: '🔍 Este es un correo de PHISHING. Señales: (1) El dominio "bancoo-santander" tiene una "o" extra. (2) Genera urgencia artificial con amenaza de suspensión. (3) Los bancos nunca piden verificar credenciales por email. (4) El enlace redirige a un dominio fraudulento.',
        hint: 'Observa cuidadosamente cómo está escrito el dominio en la dirección del remitente y si coincide exactamente con el nombre oficial del banco.'
    },
    {
        from: 'noreply@github.com',
        subject: 'You have a new notification from GitHub',
        to: 'empleado@empresa.com',
        body: `Hello,

You have received a new comment on your pull request #142 in the repository company/app-frontend.

"Great solution! Just one small suggestion on line 45 - consider using a const instead of let since the value doesn't change."

View the comment on GitHub:
<span class="fake-link">https://github.com/company/app-frontend/pull/142#comment-987654</span>

— GitHub Notifications`,
        isPhishing: false,
        explanation: '✅ Este correo es LEGÍTIMO. El remitente es noreply@github.com (dominio oficial), el contenido es coherente con una notificación estándar de GitHub, y el enlace apunta al dominio real github.com.',
        hint: 'Revisa si el enlace hacia donde te dirige corresponde al dominio principal o si te pide alguna acción inusual como iniciar sesión desde un enlace externo.'
    },
    {
        from: 'rrhh-corporativo@empresa-mx.net',
        subject: 'Actualización obligatoria de datos - Nómina Diciembre',
        to: 'empleado@empresa.com',
        body: `Estimado empleado,

Como parte de la actualización anual de nómina, necesitamos que complete el siguiente formulario con sus datos bancarios actualizados antes del viernes.

<span class="fake-link">https://forms.empresa-mx.net/nomina-actualizacion</span>

Por favor adjunte una copia de su identificación oficial y comprobante de domicilio reciente.

Atentamente,
Departamento de Recursos Humanos`,
        isPhishing: true,
        explanation: '🔍 Este es un correo de PHISHING. Señales: (1) El dominio "empresa-mx.net" no es el dominio oficial de tu empresa. (2) RR.HH. nunca solicita datos bancarios ni identificaciones por correo electrónico. (3) Crea presión temporal con una fecha límite cercana. (4) Pide información sensible (ID y comprobante).',
        hint: 'Pregúntate: ¿Es habitual que Recursos Humanos pida copias de tus documentos de identidad por correo con tan poca antelación?'
    },
    {
        from: 'soporte@microsoft.com',
        subject: 'Renovación de licencia Microsoft 365',
        to: 'empleado@empresa.com',
        body: `Hola,

Tu suscripción a Microsoft 365 Business se ha renovado correctamente. El cargo de €12.50/mes se ha aplicado a tu método de pago registrado.

Puedes gestionar tu suscripción desde el centro de administración:
<span class="fake-link">https://admin.microsoft.com/subscriptions</span>

Si necesitas ayuda, contacta con soporte en support.microsoft.com.

Equipo de Microsoft 365`,
        isPhishing: false,
        explanation: '✅ Este correo es LEGÍTIMO. El remitente es un dominio oficial de Microsoft, no solicita acciones urgentes ni datos personales, y proporciona información coherente sobre una suscripción existente.',
        hint: 'Nota que no te pide iniciar sesión con urgencia, sino que simplemente es una notificación informativa con enlaces a dominios conocidos.'
    },
    {
        from: 'premio-ganador@amazon-rewards.club',
        subject: '🎉 ¡Has ganado una tarjeta regalo Amazon de 500€!',
        to: 'empleado@empresa.com',
        body: `¡¡¡FELICIDADES!!!

Has sido seleccionado como GANADOR de nuestra promoción mensual. Has ganado una tarjeta regalo de Amazon valorada en 500€.

Para reclamar tu premio, haz clic aquí:
<span class="fake-link">https://amazon-rewards.club/claim?id=XK29384</span>

⏰ Este premio expira en 2 horas. ¡No lo dejes pasar!

Amazon Rewards Team`,
        isPhishing: true,
        explanation: '🔍 Este es un correo de PHISHING. Señales: (1) El dominio "amazon-rewards.club" NO es de Amazon (sería @amazon.com/.es). (2) Promesas de premios no solicitados. (3) Urgencia extrema (2 horas). (4) Uso excesivo de exclamaciones y emojis. (5) Enlace a dominio fraudulento.',
        hint: 'Los premios no solicitados que exigen que actúes de inmediato casi siempre esconden una trampa detrás de dominios no oficiales.'
    },
];

// ========== URL DATA ==========
const URLS = [
    { url: 'https://www.paypa1.com/login', isMalicious: true, explanation: 'El dominio usa el número "1" en lugar de la letra "l" → paypa1 vs paypal. Es un dominio fraudulento que imita a PayPal.', hint: 'Busca números que intentan parecer letras en el nombre del dominio principal.' },
    { url: 'https://accounts.google.com/signin/v2/identifier', isMalicious: false, explanation: 'Este es el dominio real de inicio de sesión de Google (accounts.google.com). Es legítimo.', hint: 'Identifica cuál es el dominio base antes de la primera barra diagonal simple (/).' },
    { url: 'https://login.microsoftonline.com/common/oauth2', isMalicious: false, explanation: 'Este es el servicio real de autenticación de Microsoft Azure AD. Dominio legítimo.', hint: 'microsoftonline.com es uno de los dominios corporativos oficiales que usa Microsoft para el login.' },
    { url: 'http://www.banco-santander.security-check.ru/login', isMalicious: true, explanation: 'El dominio real es "security-check.ru" (un dominio ruso). "banco-santander" es solo un subdominio para engañar. Además usa HTTP sin cifrar.', hint: 'No te fíes de las primeras palabras; el dominio real es el que está justo antes del ".ru" o ".com".' },
    { url: 'https://drive.google.com/file/d/1BxK2n3j/view', isMalicious: false, explanation: 'Es un enlace legítimo de Google Drive, con dominio correcto (drive.google.com) y HTTPS.', hint: 'El dominio drive.google.com es propiedad legítima de Google.' },
    { url: 'https://www.arnazon.com/offers/blackfriday', isMalicious: true, explanation: 'El dominio usa "rn" (r+n) que visualmente parece una "m" → arnazon vs amazon. Técnica conocida como typosquatting.', hint: 'Mira muy de cerca la letra "m" en el nombre de la empresa.' },
    { url: 'https://dropbox.com.file-share.tk/document.pdf', isMalicious: true, explanation: 'El dominio real es "file-share.tk" (dominio gratuito de Tokelau). "dropbox.com" es solo un subdominio decorativo, NO el sitio real.', hint: 'Recuerda: el dominio principal es siempre el que está antes del último TLD (en este caso, .tk).' },
    { url: 'https://outlook.office365.com/mail/inbox', isMalicious: false, explanation: 'Este es el dominio legítimo de Outlook en Microsoft 365 (outlook.office365.com).', hint: 'office365.com es propiedad legítima de Microsoft.' },
];

// ========== ATTACHMENT DATA ==========
const ATTACHMENTS_SCENARIOS = [
    {
        context: 'Un compañero de trabajo te envía por correo un documento que habíais estado discutido en una reunión.',
        hint: 'Considera el contexto: ¿Conoces al remitente? ¿Es un tipo de archivo habitual para el trabajo?',
        files: [
            { name: 'Informe_Q3_2024.xlsx', size: '245 KB', icon: '📊', safe: true, explanation: 'Es un archivo Excel estándar enviado por un compañero conocido, con un tamaño normal. Seguro de abrir.' },
            { name: 'Notas_reunion.docx', size: '89 KB', icon: '📄', safe: true, explanation: 'Documento Word legítimo con tamaño coherente para notas de reunión.' },
        ],
    },
    {
        context: 'Recibes un correo de un remitente desconocido con el asunto "Factura pendiente de pago".',
        hint: 'Presta mucha atención a las extensiones de los archivos y desconfía de los que tienen más de una.',
        files: [
            { name: 'Factura_8830.pdf.exe', size: '1.2 MB', icon: '📑', safe: false, explanation: '⚠️ ¡PELIGROSO! Tiene doble extensión (.pdf.exe). Parece un PDF pero es un ejecutable de Windows. Es malware disfrazado.' },
            { name: 'Detalle_cobro.zip', size: '3.4 MB', icon: '📦', safe: false, explanation: '⚠️ ¡SOSPECHOSO! Archivo comprimido de un remitente desconocido. Los ZIP pueden contener ejecutables maliciosos ocultos.' },
        ],
    },
    {
        context: 'RR.HH. envía desde el correo corporativo oficial un comunicado interno.',
        hint: 'Los archivos PDF que provienen de una fuente corporativa oficial verificada son generalmente seguros.',
        files: [
            { name: 'Comunicado_Vacaciones_2025.pdf', size: '340 KB', icon: '📋', safe: true, explanation: 'PDF estándar del departamento de RR.HH. con un tema laboral coherente y tamaño normal.' },
        ],
    },
    {
        context: 'Un proveedor externo te envía un correo con un archivo adjunto para "activar tu descuento".',
        hint: 'Los archivos que contienen código (como .js, .vbs o .bat) nunca deberían enviarse ni recibirse por correo de esta manera.',
        files: [
            { name: 'Activar_descuento.js', size: '56 KB', icon: '⚙️', safe: false, explanation: '⚠️ ¡PELIGROSO! Los archivos .js (JavaScript) pueden ejecutar código malicioso en tu sistema. Nunca abras archivos de script de fuentes externas.' },
            { name: 'Catalogo_productos.pdf', size: '2.1 MB', icon: '📋', safe: true, explanation: 'Un catálogo en PDF es un formato seguro y el contenido es coherente con un proveedor comercial.' },
        ],
    },
];

// ========== FAKE LOGIN DATA ==========
const FAKE_LOGINS = [
    {
        url: 'https://login.microsoftonline.com/common/oauth2/authorize',
        logo: '🔷 Microsoft',
        logoColor: '#0078d4',
        btnColor: '#0078d4',
        btnText: 'Iniciar sesión',
        isFake: false,
        hint: 'Fíjate en el dominio principal de la URL y si este es un dominio oficial de autenticación de Microsoft.',
        clues: [
            { text: 'La URL usa el dominio oficial microsoftonline.com', correct: false },
            { text: 'El certificado SSL es válido (https)', correct: false },
            { text: 'El formulario pide email y contraseña corporativa', correct: false },
            { text: 'No hay ninguna señal de ser falso', correct: true },
        ],
        explanation: '✅ Este es un sitio LEGÍTIMO de Microsoft. El dominio login.microsoftonline.com es la URL oficial de autenticación de Azure AD.',
    },
    {
        url: 'http://microsoft-login.security-updates.xyz/oauth/signin',
        logo: '🔷 Microsoft',
        logoColor: '#0078d4',
        btnColor: '#0078d4',
        btnText: 'Iniciar sesión',
        isFake: true,
        hint: 'Examina el protocolo usado al inicio (http vs https) y la parte final del dominio antes del primer slash.',
        clues: [
            { text: 'Usa HTTP sin cifrado en lugar de HTTPS', correct: true },
            { text: 'El dominio real es security-updates.xyz, no Microsoft', correct: true },
            { text: 'El logo de Microsoft parece auténtico', correct: false },
            { text: 'La página pide credenciales corporativas', correct: true },
        ],
        explanation: '🔍 Este es un sitio FALSO. El dominio real es security-updates.xyz (no Microsoft), usa HTTP sin cifrar, y solicita credenciales corporativas en un dominio no oficial.',
    },
    {
        url: 'https://accounts.google.com/ServiceLogin',
        logo: '🔵 Google',
        logoColor: '#4285f4',
        btnColor: '#1a73e8',
        btnText: 'Siguiente',
        isFake: false,
        hint: 'Los servicios principales de Google siempre utilizan el dominio google.com directamente.',
        clues: [
            { text: 'La URL usa el dominio oficial accounts.google.com', correct: false },
            { text: 'No solicita información inusual', correct: false },
            { text: 'El diseño coincide con Google oficial', correct: false },
            { text: 'No hay ninguna señal sospechosa', correct: true },
        ],
        explanation: '✅ Este es el sitio LEGÍTIMO de Google. accounts.google.com es el dominio oficial de autenticación de Google.',
    },
    {
        url: 'https://www.sharepoinnt-cloud.com/sites/company/login',
        logo: '🟢 SharePoint',
        logoColor: '#038387',
        btnColor: '#038387',
        btnText: 'Acceder',
        isFake: true,
        hint: 'Fíjate muy de cerca en la ortografía de la palabra "SharePoint" dentro de la URL.',
        clues: [
            { text: 'SharePoint real usa el dominio sharepoint.com, no sharepoinnt-cloud.com', correct: true },
            { text: '"sharepoinnt" tiene una doble "n" (typosquatting)', correct: true },
            { text: 'El logo parece legítimo', correct: false },
            { text: 'No se muestra candado de seguridad', correct: false },
        ],
        explanation: '🔍 Este es un sitio FALSO. "sharepoinnt" tiene una doble "n" → es typosquatting. El dominio real de SharePoint es sharepoint.com, no sharepoinnt-cloud.com.',
    },
];

// ========== SOCIAL ENGINEERING DATA ==========
const SCENARIOS = [
    {
        narrative: 'Recibes una llamada telefónica. La persona dice ser del departamento de TI de tu empresa: "Hola, soy Carlos del equipo de soporte. Estamos haciendo una migración urgente de servidores y necesitamos verificar tu contraseña del correo para no perder tus datos. ¿Me la podrías confirmar?"',
        question: '¿Cuál es la mejor respuesta?',
        hint: 'El soporte técnico real nunca te pedirá contraseñas por teléfono ni por email. Piensa en cómo verificarías la identidad del llamante.',
        options: [
            { text: 'Darle la contraseña, ya que dice ser de TI y suena urgente', correct: false },
            { text: 'Pedirle que te envíe un correo desde su cuenta corporativa para verificar', correct: false },
            { text: 'Negarte, colgar y llamar directamente al departamento de TI para verificar', correct: true },
            { text: 'Darle solo una parte de la contraseña como verificación parcial', correct: false },
        ],
        explanation: 'TI nunca pide contraseñas por teléfono. Lo correcto es colgar y contactar directamente al departamento de TI por los canales oficiales para verificar si la petición es real.',
    },
    {
        narrative: 'Un viernes por la noche recibes un email de tu jefe (o alguien que se hace pasar por él): "Necesito que hagas una transferencia urgente de 15.000€ a este proveedor antes de que termine el día. NO contactes a nadie más, es confidencial. Te adjunto los datos bancarios."',
        question: '¿Qué deberías hacer?',
        hint: 'Los ciberdelincuentes utilizan la presión de tiempo (viernes por la noche) y la confidencialidad ("no contactes a nadie más") para que actúes sin pensar. ¿Cuál es el procedimiento seguro para pagos?',
        options: [
            { text: 'Realizar la transferencia inmediatamente para no dejar pasar la fecha', correct: false },
            { text: 'Verificar con tu jefe por otro canal (llamada, chat) si realmente envió esa solicitud', correct: true },
            { text: 'Responder al email pidiendo más detalles sobre el proveedor', correct: false },
            { text: 'Hacer la transferencia pero informar al departamento financiero después', correct: false },
        ],
        explanation: 'Este es un ataque conocido como "fraude del CEO" o BEC (Business Email Compromise). Siempre verifica solicitudes financieras inusuales por un canal diferente al que se recibió la solicitud.',
    },
    {
        narrative: 'Encuentras un pendrive USB en el aparcamiento de la oficina con una etiqueta que dice "Nóminas Confidenciales 2024". Tienes curiosidad por saber qué contiene.',
        question: '¿Cuál es la acción correcta?',
        hint: 'La curiosidad es el principal motor de los ataques con USB abandonados. ¿Qué pasaría si ese dispositivo estuviese preparado para infectar cualquier equipo al que se conecte?',
        options: [
            { text: 'Conectarlo a tu ordenador para intentar devolvérselo a su dueño', correct: false },
            { text: 'Conectarlo en un ordenador antiguo que no esté en la red corporativa', correct: false },
            { text: 'Entregarlo al departamento de TI/seguridad sin conectarlo a ningún equipo', correct: true },
            { text: 'Ignorarlo y dejarlo donde está', correct: false },
        ],
        explanation: 'Los USB abandonados son una técnica clásica de ataque (USB baiting). Pueden contener malware que se ejecuta automáticamente al conectarlos. Siempre entrega dispositivos encontrados al equipo de seguridad.',
    },
    {
        narrative: 'Recibes un mensaje de LinkedIn de un reclutador: "Tenemos una oferta exclusiva para ti. Salario: 120.000€/año. Para avanzar en el proceso, necesitamos que completes este formulario con tus datos personales y número de seguridad social."',
        question: '¿Cómo reaccionas?',
        hint: 'Es inusual que en las primeras fases de selección te soliciten información tan sensible como el número de la seguridad social o cuentas bancarias.',
        options: [
            { text: 'Completar el formulario, la oferta es muy atractiva', correct: false },
            { text: 'Investigar el perfil del reclutador y la empresa, y nunca dar datos sensibles en un formulario externo', correct: true },
            { text: 'Enviar solo el CV y esperar más información', correct: false },
            { text: 'Responder pidiendo más detalles sobre el puesto', correct: false },
        ],
        explanation: 'Los reclutadores legítimos nunca piden el número de seguridad social ni datos bancarios en la primera toma de contacto. Investiga siempre al reclutador y la empresa antes de compartir cualquier información personal.',
    },
];

// ========== VM SCENARIOS DATA ==========
const VM_SCENARIOS = [
    {
        instruction: 'Se sospecha de actividad anómala hacia la IP 192.168.1.50. Utiliza el comando adecuado para verificar si hay conectividad con esa dirección IP.',
        expectedCommand: 'ping 192.168.1.50',
        hint: 'Es un comando de cuatro letras muy utilizado en redes, igual que un deporte de mesa.',
        output: `PING 192.168.1.50 (192.168.1.50): 56 data bytes
64 bytes from 192.168.1.50: icmp_seq=0 ttl=64 time=0.045 ms
64 bytes from 192.168.1.50: icmp_seq=1 ttl=64 time=0.038 ms
64 bytes from 192.168.1.50: icmp_seq=2 ttl=64 time=0.042 ms

--- 192.168.1.50 ping statistics ---
3 packets transmitted, 3 packets received, 0% packet loss`,
        explanation: '✅ ¡Correcto! El comando `ping` se utiliza comúnmente para comprobar si un host está accesible en la red enviando paquetes ICMP Echo Request.'
    },
    {
        instruction: 'Queremos ver las conexiones de red activas en nuestro sistema para identificar posibles conexiones externas no autorizadas. Ejecuta el comando que muestra esta información.',
        expectedCommand: 'netstat',
        hint: 'Busca el comando que combina las palabras "network" y "statistics".',
        output: `Active Internet connections
Proto Recv-Q Send-Q Local Address           Foreign Address         State
tcp        0      0 10.0.0.5:22             192.168.1.100:52341     ESTABLISHED
tcp        0      0 10.0.0.5:443            203.0.113.10:49152      ESTABLISHED
tcp        0    345 10.0.0.5:4444           185.15.20.1:8080        ESTABLISHED`,
        explanation: '✅ ¡Correcto! `netstat` es fundamental para ver qué conexiones están activas y detectar comunicaciones hacia servidores sospechosos (como el puerto 4444 hacia una IP externa).'
    },
    {
        instruction: 'Necesitas buscar en el archivo "auth.log" los intentos de acceso fallidos. Escribe el comando que filtre la palabra "Failed" dentro de "auth.log".',
        expectedCommand: 'grep Failed auth.log',
        hint: 'Usa la herramienta estándar de Unix para encontrar expresiones regulares. Empieza por "g" y termina en "p".',
        output: `Oct 14 10:22:15 cybershield sshd[1234]: Failed password for root from 192.168.1.200 port 54321 ssh2
Oct 14 10:22:17 cybershield sshd[1235]: Failed password for root from 192.168.1.200 port 54323 ssh2
Oct 14 10:22:19 cybershield sshd[1236]: Failed password for admin from 192.168.1.200 port 54325 ssh2`,
        explanation: '✅ ¡Correcto! `grep` es una herramienta de terminal que permite filtrar y encontrar patrones dentro de archivos de texto, muy útil para analizar logs y buscar indicios de ataques.'
    }
];

// ========== QUIZ DATA ==========
const QUIZ_QUESTIONS = [
    {
        question: '¿Cuál es la primera señal que debes verificar al recibir un correo sospechoso?',
        options: ['El diseño visual del correo', 'La dirección de correo del remitente', 'El número de destinatarios', 'Si tiene firma corporativa'],
        correct: 1,
        hint: 'Cualquier atacante puede copiar un diseño visual o logo, pero no pueden falsificar tan fácilmente la cuenta real de donde proviene.'
    },
    {
        question: '¿Qué es el "typosquatting"?',
        options: ['Un tipo de malware que encripta archivos', 'Registrar dominios con errores tipográficos similares a sitios legítimos', 'Un ataque de fuerza bruta contra contraseñas', 'Una técnica para interceptar comunicaciones WiFi'],
        correct: 1,
        hint: 'La palabra "typo" se refiere a error tipográfico. Piensa en URLs como "arnazon.com" en vez de "amazon.com".'
    },
    {
        question: 'Un archivo llamado "Informe.pdf.exe" es probablemente:',
        options: ['Un documento PDF protegido', 'Un archivo corrupto que no se puede abrir', 'Malware disfrazado con doble extensión', 'Un formato especial de Adobe'],
        correct: 2,
        hint: 'El sistema operativo siempre toma en cuenta la última extensión de un archivo para saber qué es y cómo ejecutarlo.'
    },
    {
        question: '¿Qué indica que una URL use HTTP en lugar de HTTPS?',
        options: ['Es un sitio web más rápido', 'La conexión no está cifrada y los datos pueden ser interceptados', 'Es un sitio web gubernamental', 'Funciona solo en navegadores antiguos'],
        correct: 1,
        hint: 'La letra "S" final en el protocolo web significa "Secure" (Seguro), lo que añade una capa de criptografía a la conexión.'
    },
    {
        question: 'El "fraude del CEO" (BEC) consiste en:',
        options: ['Hackear la cuenta del CEO para robar datos', 'Suplantar la identidad de un directivo para solicitar transferencias fraudulentas', 'Instalar malware en el ordenador del CEO', 'Robar la contraseña del WiFi corporativo'],
        correct: 1,
        hint: 'Los atacantes fingen ser un alto mando para que los empleados se asusten, actúen rápido y obedezcan solicitudes urgentes de dinero.'
    },
    {
        question: '¿Qué debes hacer si encuentras un USB desconocido en tu oficina?',
        options: ['Conectarlo a tu ordenador para ver qué contiene', 'Entregarlo al equipo de TI/seguridad sin conectarlo', 'Tirarlo a la basura', 'Conectarlo en el ordenador de un compañero'],
        correct: 1,
        hint: 'Nunca confíes en hardware desconocido, podría inyectar un teclado falso (BadUSB) o ejecutar código malicioso en cuanto lo conectas.'
    },
    {
        question: '¿Cuál de estos dominios es legítimo para Microsoft 365?',
        options: ['microsoft365-login.com', 'login.microsoftonline.com', 'microsoft.security-check.org', 'office365.login-verify.net'],
        correct: 1,
        hint: 'Microsoft utiliza "microsoftonline.com" oficialmente para sus portales de inicio de sesión de Azure y Office.'
    },
    {
        question: 'Un correo legítimo de tu banco NUNCA te pedirá:',
        options: ['Que compruebes el saldo de tu cuenta', 'Tu contraseña o PIN por correo electrónico', 'Que visites una sucursal para verificar tu identidad', 'Que leas los términos y condiciones actualizados'],
        correct: 1,
        hint: 'Las entidades bancarias jamás solicitarán tus credenciales secretas directamente a través de un canal inseguro o un formulario externo.'
    },
    {
        question: '¿Cuál es la mejor práctica cuando recibes un correo urgente de un jefe pidiendo una acción inusual?',
        options: ['Actuar rápidamente para no retrasarla', 'Verificar la solicitud por otro canal de comunicación', 'Reenviar el correo a todos los compañeros', 'Responder pidiendo más detalles al mismo correo'],
        correct: 1,
        hint: 'No respondas al mismo correo: si es un estafador, te mantendrá la mentira. Comunícate por otro medio distinto.'
    },
    {
        question: 'En la URL https://banco-santander.security-check.ru/login, ¿cuál es el dominio real?',
        options: ['banco-santander.com', 'security-check.ru', 'santander.security-check.ru', 'banco-santander.security-check.ru'],
        correct: 1,
        hint: 'El dominio principal es siempre la palabra que se encuentra justo antes del sufijo TLD (.com, .ru, .org).'
    },
];

// ========== STATE ==========
let completedActivities = new Set();
let currentActivity = null;
let currentStep = 0;
let currentScore = 0;
let totalQuestions = 0;

// ========== DOM REFERENCES ==========
const dashboard = document.getElementById('dashboard');
const activityView = document.getElementById('activityView');
const resultsView = document.getElementById('resultsView');
const activitiesGrid = document.getElementById('activitiesGrid');
const activityBody = document.getElementById('activityBody');
const activityTitle = document.getElementById('activityTitle');
const activityDesc = document.getElementById('activityDesc');
const activityBadge = document.getElementById('activityBadge');
const globalProgress = document.getElementById('globalProgress');

// ========== INIT ==========
document.addEventListener('DOMContentLoaded', () => {
    renderDashboard();
    setupEventListeners();
});

function setupEventListeners() {
    document.getElementById('btnBack').addEventListener('click', showDashboard);
    document.getElementById('btnDashboard').addEventListener('click', showDashboard);
    document.getElementById('btnRetry').addEventListener('click', () => {
        if (currentActivity) startActivity(currentActivity);
    });
    document.getElementById('logoHome').addEventListener('click', showDashboard);
}

// ========== DASHBOARD ==========
function renderDashboard() {
    activitiesGrid.innerHTML = ACTIVITIES.map((act, i) => `
        <div class="activity-card ${completedActivities.has(act.id) ? 'completed' : ''}"
             style="--card-accent: ${act.accentColor}; --card-icon-bg: ${act.accentBg}; --card-icon-shadow: ${act.accentShadow}; --card-shadow: 0 0 30px ${act.accentShadow};"
             data-activity="${act.id}"
             id="card-${act.id}">
            ${!completedActivities.has(act.id) ? `<span class="card-number">${act.badgeText}</span>` : ''}
            <div class="card-icon">${act.icon}</div>
            <h3 class="card-title">${act.title}</h3>
            <p class="card-description">${act.description}</p>
            <div class="card-footer">
                <div class="card-difficulty">
                    <span>Dificultad</span>
                    <div class="difficulty-dots">
                        ${Array.from({ length: 5 }, (_, j) => `<div class="difficulty-dot ${j < act.difficulty ? 'active' : ''}"></div>`).join('')}
                    </div>
                </div>
                <span class="card-action">${completedActivities.has(act.id) ? 'Repetir' : 'Iniciar'} →</span>
            </div>
        </div>
    `).join('');

    // Add click handlers
    document.querySelectorAll('.activity-card').forEach(card => {
        card.addEventListener('click', () => {
            const actId = card.dataset.activity;
            startActivity(actId);
        });
    });

    updateProgress();
}

function updateProgress() {
    const text = globalProgress.querySelector('.progress-text');
    text.textContent = `${completedActivities.size} / ${ACTIVITIES.length} completadas`;
}

// ========== NAVIGATION ==========
function showDashboard() {
    dashboard.classList.remove('hidden');
    activityView.classList.add('hidden');
    resultsView.classList.add('hidden');
    renderDashboard();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showActivity() {
    dashboard.classList.add('hidden');
    activityView.classList.remove('hidden');
    resultsView.classList.add('hidden');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showResults(score, total, activityId) {
    dashboard.classList.add('hidden');
    activityView.classList.add('hidden');
    resultsView.classList.remove('hidden');

    const pct = total > 0 ? Math.round((score / total) * 100) : 0;
    const passed = pct >= 60;

    document.getElementById('resultsIcon').textContent = passed ? '🎉' : '😓';
    document.getElementById('resultsTitle').textContent = passed ? '¡Excelente trabajo!' : 'Sigue practicando';
    document.getElementById('resultsScore').textContent = `${score} / ${total} (${pct}%)`;
    document.getElementById('resultsMessage').textContent = passed
        ? 'Has demostrado un buen nivel de conocimiento en ciberseguridad. ¡Sigue alerta!'
        : 'Necesitas repasar algunos conceptos. Vuelve a intentarlo para mejorar tu puntuación.';

    if (passed) {
        completedActivities.add(activityId);
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========== START ACTIVITY ==========
function startActivity(activityId) {
    currentActivity = activityId;
    currentStep = 0;
    currentScore = 0;

    const act = ACTIVITIES.find(a => a.id === activityId);
    activityTitle.textContent = act.title;
    activityDesc.textContent = act.description;
    activityBadge.textContent = act.badgeText;
    activityBadge.style.background = act.accentBg;
    activityBadge.style.color = act.accentColor;

    showActivity();

    switch (activityId) {
        case 'email-analysis': renderEmailStep(); break;
        case 'url-detection': renderUrlStep(); break;
        case 'attachment-security': renderAttachmentStep(); break;
        case 'fake-login': renderFakeLoginStep(); break;
        case 'social-engineering': renderScenarioStep(); break;
        case 'vm-cases': renderVMStep(); break;
        case 'final-quiz': renderQuizStep(); break;
    }
}

// ========== EMAIL ANALYSIS ==========
function renderEmailStep() {
    if (currentStep >= EMAILS.length) {
        showResults(currentScore, EMAILS.length, 'email-analysis');
        return;
    }

    const email = EMAILS[currentStep];
    totalQuestions = EMAILS.length;

    activityBody.innerHTML = `
        <div class="email-simulator">
            <div class="email-toolbar">
                <span class="email-counter">Correo ${currentStep + 1} de ${EMAILS.length}</span>
            </div>
            <div class="email-content">
                <div class="email-field">
                    <span class="email-label">De:</span>
                    <span class="email-value">${email.from}</span>
                </div>
                <div class="email-field">
                    <span class="email-label">Para:</span>
                    <span class="email-value">${email.to}</span>
                </div>
                <div class="email-field">
                    <span class="email-label">Asunto:</span>
                    <span class="email-value"><strong>${email.subject}</strong></span>
                </div>
                <div class="email-body">${email.body.replace(/\n/g, '<br>')}</div>
                <div class="email-actions">
                    <button class="btn btn-danger" id="btnPhishing">🚨 Es Phishing</button>
                    <button class="btn btn-success" id="btnSafe">✅ Es Seguro</button>
                </div>
                <div class="quiz-actions" style="margin-top: 1rem; display: flex; gap: 10px; justify-content: center;">
                    <button class="btn btn-secondary" id="btnHintEmail">💡 Ver Pista</button>
                    <button class="btn btn-warning" id="btnSkipEmail">⏭️ Saltar pregunta</button>
                </div>
                <div id="emailFeedback"></div>
            </div>
        </div>
    `;

    document.getElementById('btnPhishing').addEventListener('click', () => handleEmailAnswer(true, email));
    document.getElementById('btnSafe').addEventListener('click', () => handleEmailAnswer(false, email));

    document.getElementById('btnHintEmail').addEventListener('click', () => {
        const feedback = document.getElementById('emailFeedback');
        if (!feedback.innerHTML.includes('Siguiente')) {
            feedback.innerHTML = `
                <div class="feedback-box info">
                    💡 <strong>Pista:</strong> ${email.hint}
                </div>
            `;
        }
    });

    document.getElementById('btnSkipEmail').addEventListener('click', () => {
        handleEmailAnswer(null, email, true);
    });
}

function handleEmailAnswer(isPhishingSelected, email, isSkip = false) {
    const correct = isPhishingSelected === email.isPhishing;
    if (correct && !isSkip) currentScore++;

    document.getElementById('btnPhishing').disabled = true;
    document.getElementById('btnSafe').disabled = true;
    document.getElementById('btnHintEmail').disabled = true;
    document.getElementById('btnSkipEmail').disabled = true;

    const feedback = document.getElementById('emailFeedback');
    
    let msg = '';
    let boxClass = '';
    if (isSkip) {
        msg = `⏭️ <strong>Saltado.</strong><br>${email.explanation}`;
        boxClass = 'warning';
    } else {
        msg = correct ? `✅ ¡Correcto!<br>${email.explanation}` : `❌ Incorrecto.<br>${email.explanation}`;
        boxClass = correct ? 'success' : 'error';
    }

    feedback.innerHTML = `
        <div class="feedback-box ${boxClass}">
            ${msg}
        </div>
        <button class="btn btn-primary btn-next" id="btnNextEmail">Siguiente correo →</button>
    `;

    document.getElementById('btnNextEmail').addEventListener('click', () => {
        currentStep++;
        renderEmailStep();
    });
}

// ========== URL DETECTION ==========
function renderUrlStep() {
    if (currentStep >= URLS.length) {
        showResults(currentScore, URLS.length, 'url-detection');
        return;
    }

    const urlData = URLS[currentStep];
    totalQuestions = URLS.length;

    activityBody.innerHTML = `
        <div class="url-challenge">
            <div class="email-toolbar" style="margin: -2rem -2rem 1.5rem; padding: 12px 20px; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                <span class="email-counter">URL ${currentStep + 1} de ${URLS.length}</span>
            </div>
            <p style="color: var(--text-secondary); text-align: center; margin-bottom: 0.5rem;">Analiza esta URL y decide si es segura:</p>
            <div class="url-display">${urlData.url}</div>
            <div class="url-actions">
                <button class="btn btn-danger" id="btnMalicious">🚨 Maliciosa</button>
                <button class="btn btn-success" id="btnSafe">✅ Segura</button>
            </div>
            <div class="quiz-actions" style="margin-top: 1rem; display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-secondary" id="btnHintUrl">💡 Ver Pista</button>
                <button class="btn btn-warning" id="btnSkipUrl">⏭️ Saltar pregunta</button>
            </div>
            <div id="urlFeedback"></div>
        </div>
    `;

    document.getElementById('btnMalicious').addEventListener('click', () => handleUrlAnswer(true, urlData));
    document.getElementById('btnSafe').addEventListener('click', () => handleUrlAnswer(false, urlData));

    document.getElementById('btnHintUrl').addEventListener('click', () => {
        const feedback = document.getElementById('urlFeedback');
        if (!feedback.innerHTML.includes('Siguiente')) {
            feedback.innerHTML = `
                <div class="feedback-box info">
                    💡 <strong>Pista:</strong> ${urlData.hint}
                </div>
            `;
        }
    });

    document.getElementById('btnSkipUrl').addEventListener('click', () => {
        handleUrlAnswer(null, urlData, true);
    });
}

function handleUrlAnswer(answeredMalicious, urlData, isSkip = false) {
    const correct = answeredMalicious === urlData.isMalicious;
    if (correct && !isSkip) currentScore++;

    document.getElementById('btnMalicious').disabled = true;
    document.getElementById('btnSafe').disabled = true;
    document.getElementById('btnHintUrl').disabled = true;
    document.getElementById('btnSkipUrl').disabled = true;

    const feedback = document.getElementById('urlFeedback');
    
    let msg = '';
    let boxClass = '';
    if (isSkip) {
        msg = `⏭️ <strong>Saltado.</strong><br>${urlData.explanation}`;
        boxClass = 'warning';
    } else {
        msg = correct ? `✅ ¡Correcto!<br>${urlData.explanation}` : `❌ Incorrecto.<br>${urlData.explanation}`;
        boxClass = correct ? 'success' : 'error';
    }

    feedback.innerHTML = `
        <div class="feedback-box ${boxClass}">
            ${msg}
        </div>
        <button class="btn btn-primary btn-next" id="btnNextUrl">Siguiente URL →</button>
    `;

    document.getElementById('btnNextUrl').addEventListener('click', () => {
        currentStep++;
        renderUrlStep();
    });
}

// ========== ATTACHMENT SECURITY ==========
function renderAttachmentStep() {
    if (currentStep >= ATTACHMENTS_SCENARIOS.length) {
        showResults(currentScore, totalQuestions, 'attachment-security');
        return;
    }

    const scenario = ATTACHMENTS_SCENARIOS[currentStep];
    if (currentStep === 0) {
        totalQuestions = ATTACHMENTS_SCENARIOS.reduce((sum, s) => sum + s.files.length, 0);
    }

    activityBody.innerHTML = `
        <div class="url-challenge">
            <div class="email-toolbar" style="margin: -2rem -2rem 1.5rem; padding: 12px 20px; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                <span class="email-counter">Escenario ${currentStep + 1} de ${ATTACHMENTS_SCENARIOS.length}</span>
            </div>
            <p style="color: var(--text-secondary); margin-bottom: 1.5rem;">${scenario.context}</p>
            <div class="attachment-list">
                ${scenario.files.map((file, idx) => `
                    <div class="attachment-item" id="attachment-${idx}">
                        <div class="attachment-info">
                            <span class="attachment-icon">${file.icon}</span>
                            <div>
                                <div class="attachment-name">${file.name}</div>
                                <div class="attachment-size">${file.size}</div>
                            </div>
                        </div>
                        <div class="attachment-actions">
                            <button class="btn btn-safe" data-idx="${idx}" data-answer="safe">✅ Seguro</button>
                            <button class="btn btn-danger" data-idx="${idx}" data-answer="danger">🚫 Peligroso</button>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="quiz-actions" style="margin-top: 1.5rem; display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-secondary" id="btnHintAttach">💡 Ver Pista</button>
                <button class="btn btn-warning" id="btnSkipAttach">⏭️ Saltar escenario</button>
            </div>
            <div id="attachFeedback"></div>
        </div>
    `;

    let answered = 0;
    const total = scenario.files.length;
    let hasSkipped = false;

    document.getElementById('btnHintAttach').addEventListener('click', () => {
        const feedbackEl = document.getElementById('attachFeedback');
        if (answered < total) {
            feedbackEl.innerHTML += `
                <div class="feedback-box info" style="margin-bottom: 0.5rem; order: -1;">
                    💡 <strong>Pista:</strong> ${scenario.hint}
                </div>
            `;
            document.getElementById('btnHintAttach').disabled = true;
        }
    });

    document.getElementById('btnSkipAttach').addEventListener('click', () => {
        if (answered === total) return;
        hasSkipped = true;
        document.getElementById('btnHintAttach').disabled = true;
        document.getElementById('btnSkipAttach').disabled = true;

        // Auto-answer remaining files as incorrect (skipped)
        document.querySelectorAll('.attachment-item').forEach((item, idx) => {
            const btns = item.querySelectorAll('.btn');
            if (!btns[0].disabled) {
                // Was not answered yet
                const file = scenario.files[idx];
                item.style.borderColor = 'var(--warning)';
                item.style.background = 'rgba(255, 165, 2, 0.05)';
                btns.forEach(b => b.disabled = true);

                const feedbackEl = document.getElementById('attachFeedback');
                feedbackEl.innerHTML += `
                    <div class="feedback-box warning" style="margin-bottom: 0.5rem;">
                        <strong>${file.name}:</strong> ⏭️ Saltado — ${file.explanation}
                    </div>
                `;
                answered++;
            }
        });

        if (answered === total) {
            const feedbackEl = document.getElementById('attachFeedback');
            feedbackEl.innerHTML += `<button class="btn btn-primary btn-next" id="btnNextAttach">Siguiente escenario →</button>`;
            document.getElementById('btnNextAttach').addEventListener('click', () => {
                currentStep++;
                renderAttachmentStep();
            });
        }
    });

    document.querySelectorAll('.attachment-actions .btn').forEach(btn => {
        btn.addEventListener('click', () => {
            if (hasSkipped) return;
            const idx = parseInt(btn.dataset.idx);
            const isSafeAnswer = btn.dataset.answer === 'safe';
            const file = scenario.files[idx];
            const correct = isSafeAnswer === file.safe;

            if (correct) currentScore++;

            const item = document.getElementById(`attachment-${idx}`);
            item.style.borderColor = correct ? 'var(--success)' : 'var(--danger)';
            item.style.background = correct ? 'rgba(0,245,160,0.05)' : 'rgba(255,71,87,0.05)';

            // Disable buttons for this item
            item.querySelectorAll('.btn').forEach(b => b.disabled = true);

            // Show file feedback
            const feedbackEl = document.getElementById('attachFeedback');
            feedbackEl.innerHTML += `
                <div class="feedback-box ${correct ? 'success' : 'error'}" style="margin-bottom: 0.5rem;">
                    <strong>${file.name}:</strong> ${correct ? '✅ ¡Correcto!' : '❌ Incorrecto'} — ${file.explanation}
                </div>
            `;

            answered++;
            if (answered === total) {
                document.getElementById('btnHintAttach').disabled = true;
                document.getElementById('btnSkipAttach').disabled = true;
                feedbackEl.innerHTML += `<button class="btn btn-primary btn-next" id="btnNextAttach">Siguiente escenario →</button>`;
                document.getElementById('btnNextAttach').addEventListener('click', () => {
                    currentStep++;
                    renderAttachmentStep();
                });
            }
        });
    });
}

// ========== FAKE LOGIN DETECTION ==========
function renderFakeLoginStep() {
    if (currentStep >= FAKE_LOGINS.length) {
        showResults(currentScore, FAKE_LOGINS.length, 'fake-login');
        return;
    }

    const login = FAKE_LOGINS[currentStep];
    totalQuestions = FAKE_LOGINS.length;

    activityBody.innerHTML = `
        <div class="email-toolbar" style="margin-bottom: 1.5rem; border-radius: var(--radius-lg); padding: 12px 20px; background: var(--bg-card); border: 1px solid var(--border-glass);">
            <span class="email-counter">Sitio ${currentStep + 1} de ${FAKE_LOGINS.length}</span>
        </div>
        <div class="fake-login-container">
            <div class="fake-site-preview">
                <div class="browser-bar">
                    <div class="browser-dots">
                        <div class="browser-dot red"></div>
                        <div class="browser-dot yellow"></div>
                        <div class="browser-dot green"></div>
                    </div>
                    <div class="browser-url">${login.url.startsWith('http://') ? '⚠️ ' : '🔒 '}${login.url}</div>
                </div>
                <div class="fake-page-body">
                    <div class="fake-logo" style="color: ${login.logoColor}">${login.logo}</div>
                    <input type="text" placeholder="Correo electrónico" disabled>
                    <input type="password" placeholder="Contraseña" value="••••••••" disabled>
                    <button class="fake-btn" style="background: ${login.btnColor}; color: white;" disabled>${login.btnText}</button>
                </div>
            </div>
            <div class="site-clues">
                <h3>¿Es este sitio falso o legítimo?</h3>
                <div class="url-actions" style="margin-bottom: 1rem;">
                    <button class="btn btn-danger" id="btnFakeSite">🚨 Es Falso</button>
                    <button class="btn btn-success" id="btnRealSite">✅ Es Legítimo</button>
                </div>
                <div class="quiz-actions" style="margin-bottom: 1rem; display: flex; gap: 10px;">
                    <button class="btn btn-secondary" id="btnHintLogin">💡 Ver Pista</button>
                    <button class="btn btn-warning" id="btnSkipLogin">⏭️ Saltar pregunta</button>
                </div>
                <div id="loginFeedback"></div>
            </div>
        </div>
    `;

    document.getElementById('btnFakeSite').addEventListener('click', () => handleLoginAnswer(true, login));
    document.getElementById('btnRealSite').addEventListener('click', () => handleLoginAnswer(false, login));

    document.getElementById('btnHintLogin').addEventListener('click', () => {
        const feedback = document.getElementById('loginFeedback');
        if (!feedback.innerHTML.includes('Siguiente')) {
            feedback.innerHTML = `
                <div class="feedback-box info">
                    💡 <strong>Pista:</strong> ${login.hint}
                </div>
            `;
        }
    });

    document.getElementById('btnSkipLogin').addEventListener('click', () => {
        handleLoginAnswer(null, login, true);
    });
}

function handleLoginAnswer(answeredFake, login, isSkip = false) {
    const correct = answeredFake === login.isFake;
    if (correct && !isSkip) currentScore++;

    document.getElementById('btnFakeSite').disabled = true;
    document.getElementById('btnRealSite').disabled = true;
    document.getElementById('btnHintLogin').disabled = true;
    document.getElementById('btnSkipLogin').disabled = true;

    const feedback = document.getElementById('loginFeedback');
    
    let msg = '';
    let boxClass = '';
    if (isSkip) {
        msg = `⏭️ <strong>Saltado.</strong><br>${login.explanation}`;
        boxClass = 'warning';
    } else {
        msg = correct ? `✅ ¡Correcto!<br>${login.explanation}` : `❌ Incorrecto.<br>${login.explanation}`;
        boxClass = correct ? 'success' : 'error';
    }

    feedback.innerHTML = `
        <div class="feedback-box ${boxClass}">
            ${msg}
        </div>
        <h3 style="margin-top: 1rem; font-size: 0.9rem;">Señales clave:</h3>
        ${login.clues.map(c => `
            <div class="clue-option" style="cursor: default; border-color: ${c.correct ? 'rgba(0,245,160,0.3)' : 'var(--border-glass)'}; ${c.correct ? 'background: rgba(0,245,160,0.05);' : ''}">
                <span>${c.correct ? '⚠️' : 'ℹ️'}</span>
                <span>${c.text}</span>
            </div>
        `).join('')}
        <button class="btn btn-primary btn-next" id="btnNextLogin">Siguiente sitio →</button>
    `;

    document.getElementById('btnNextLogin').addEventListener('click', () => {
        currentStep++;
        renderFakeLoginStep();
    });
}

// ========== SOCIAL ENGINEERING ==========
function renderScenarioStep() {
    if (currentStep >= SCENARIOS.length) {
        showResults(currentScore, SCENARIOS.length, 'social-engineering');
        return;
    }

    const scenario = SCENARIOS[currentStep];
    totalQuestions = SCENARIOS.length;

    activityBody.innerHTML = `
        <div class="scenario-container">
            <div class="email-toolbar" style="margin: -2rem -2rem 1.5rem; padding: 12px 20px; border-radius: var(--radius-lg) var(--radius-lg) 0 0;">
                <span class="email-counter">Escenario ${currentStep + 1} de ${SCENARIOS.length}</span>
            </div>
            <div class="scenario-narrative">${scenario.narrative}</div>
            <p class="scenario-question">${scenario.question}</p>
            <div class="scenario-options">
                ${scenario.options.map((opt, idx) => `
                    <button class="scenario-option" data-idx="${idx}" id="scenarioOpt-${idx}">${opt.text}</button>
                `).join('')}
            </div>
            <div class="quiz-actions" style="margin-top: 1rem; display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-secondary" id="btnHintScenario">💡 Ver Pista</button>
                <button class="btn btn-warning" id="btnSkipScenario">⏭️ Saltar pregunta</button>
            </div>
            <div id="scenarioFeedback"></div>
        </div>
    `;

    document.querySelectorAll('.scenario-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            handleScenarioAnswer(idx, scenario);
        });
    });

    document.getElementById('btnHintScenario').addEventListener('click', () => {
        const feedback = document.getElementById('scenarioFeedback');
        if (!feedback.innerHTML.includes('Siguiente')) {
            feedback.innerHTML = `
                <div class="feedback-box info">
                    💡 <strong>Pista:</strong> ${scenario.hint}
                </div>
            `;
        }
    });

    document.getElementById('btnSkipScenario').addEventListener('click', () => {
        handleScenarioAnswer(null, scenario, true);
    });
}

function handleScenarioAnswer(selectedIdx, scenario, isSkip = false) {
    const correct = !isSkip && scenario.options[selectedIdx].correct;
    if (correct && !isSkip) currentScore++;

    document.querySelectorAll('.scenario-option').forEach((btn, idx) => {
        btn.classList.add('disabled');
        if (scenario.options[idx].correct) {
            btn.classList.add('correct');
        } else if (!isSkip && idx === selectedIdx && !correct) {
            btn.classList.add('incorrect');
        }
    });

    document.getElementById('btnHintScenario').disabled = true;
    document.getElementById('btnSkipScenario').disabled = true;

    const feedback = document.getElementById('scenarioFeedback');

    let msg = '';
    let boxClass = '';
    if (isSkip) {
        msg = `⏭️ <strong>Saltado.</strong><br>${scenario.explanation}`;
        boxClass = 'warning';
    } else {
        msg = correct ? `✅ ¡Correcto!<br>${scenario.explanation}` : `❌ Incorrecto.<br>${scenario.explanation}`;
        boxClass = correct ? 'success' : 'error';
    }

    feedback.innerHTML = `
        <div class="feedback-box ${boxClass}">
            ${msg}
        </div>
        <button class="btn btn-primary btn-next" id="btnNextScenario">Siguiente escenario →</button>
    `;

    document.getElementById('btnNextScenario').addEventListener('click', () => {
        currentStep++;
        renderScenarioStep();
    });
}

// ========== VM TERMINAL CASES ==========
let currentSocket = null;
let currentTerm = null;

function renderVMStep() {
    if (currentStep >= VM_SCENARIOS.length) {
        if (currentSocket) currentSocket.disconnect();
        showResults(currentScore, VM_SCENARIOS.length, 'vm-cases');
        return;
    }

    const scenario = VM_SCENARIOS[currentStep];
    totalQuestions = VM_SCENARIOS.length;

    activityBody.innerHTML = `
        <div class="vm-container">
            <div class="email-toolbar" style="margin: -2rem -2rem 1.5rem; padding: 12px 20px; border-radius: var(--radius-lg) var(--radius-lg) 0 0; background: var(--bg-card); border-bottom: 1px solid var(--border-glass);">
                <span class="email-counter">Escenario de Terminal ${currentStep + 1} de ${VM_SCENARIOS.length}</span>
            </div>
            <div class="vm-instruction" style="margin-bottom: 1.5rem;">
                <p style="color: var(--text-primary); font-size: 1.1rem; line-height: 1.5;">${scenario.instruction}</p>
            </div>
            
            <div class="terminal-container" style="padding: 10px;">
                <div id="xterm-container" style="height: 350px; width: 100%;"></div>
            </div>
            
            <div class="vm-actions" style="margin-top: 1.5rem; display: flex; gap: 10px; align-items: center;">
                <input type="text" id="vmAnswer" placeholder="¿Qué comando usaste?" style="flex: 1; padding: 10px; border-radius: 8px; border: 1px solid var(--border-glass); background: rgba(255,255,255,0.05); color: white;">
                <button class="btn btn-primary" id="btnValidateVM">Verificar</button>
            </div>
            <div class="quiz-actions" style="margin-top: 1rem; display: flex; gap: 10px; justify-content: center;">
                <button class="btn btn-secondary" id="btnHintVM">💡 Ver Pista</button>
                <button class="btn btn-warning" id="btnSkipVM">⏭️ Saltar pregunta</button>
            </div>
            <div id="vmFeedback" style="margin-top: 1rem;"></div>
        </div>
    `;

    // Initialize xterm.js
    const termContainer = document.getElementById('xterm-container');
    currentTerm = new Terminal({
        theme: {
            background: '#0f0f15',
            foreground: '#00f5d4'
        },
        fontFamily: '"Courier New", Courier, monospace',
        cursorBlink: true
    });
    
    const fitAddon = new FitAddon.FitAddon();
    currentTerm.loadAddon(fitAddon);
    currentTerm.open(termContainer);
    fitAddon.fit();

    // Connect WebSocket
    if (currentSocket) currentSocket.disconnect();
    currentSocket = io();

    currentSocket.on('connect', () => {
        currentTerm.write('\\r\\n*** Conectado a la máquina virtual Docker ***\\r\\n');
        currentSocket.emit('terminal.resize', { cols: currentTerm.cols, rows: currentTerm.rows });
    });

    currentSocket.on('terminal.inc', (data) => {
        currentTerm.write(data);
    });

    currentTerm.onData((data) => {
        currentSocket.emit('terminal.out', data);
    });

    window.addEventListener('resize', () => {
        fitAddon.fit();
        if (currentSocket) {
            currentSocket.emit('terminal.resize', { cols: currentTerm.cols, rows: currentTerm.rows });
        }
    });

    // Validation
    document.getElementById('btnValidateVM').addEventListener('click', () => {
        handleVMAnswer(false, scenario);
    });

    document.getElementById('btnHintVM').addEventListener('click', () => {
        const feedback = document.getElementById('vmFeedback');
        if (!feedback.innerHTML.includes('Siguiente')) {
            feedback.innerHTML = `
                <div class="feedback-box info">
                    💡 <strong>Pista:</strong> ${scenario.hint}
                </div>
            `;
        }
    });

    document.getElementById('btnSkipVM').addEventListener('click', () => {
        handleVMAnswer(true, scenario);
    });
}

function handleVMAnswer(isSkip, scenario) {
    const answerInput = document.getElementById('vmAnswer');
    const answer = answerInput.value.trim().toLowerCase();
    const feedback = document.getElementById('vmFeedback');
    
    // Very basic validation: Check if expected command is in the answer
    const correct = answer.includes(scenario.expectedCommand.toLowerCase().split(' ')[0]);

    if (isSkip) {
        feedback.innerHTML = `
            <div class="feedback-box warning">
                ⏭️ <strong>Saltado.</strong> El comando esperado era: <code>${scenario.expectedCommand}</code><br>
                ${scenario.explanation}
            </div>
            <button class="btn btn-primary btn-next" id="btnNextVM" style="margin-top:1rem;">Siguiente escenario →</button>
        `;
        document.getElementById('btnValidateVM').disabled = true;
        document.getElementById('btnHintVM').disabled = true;
        document.getElementById('btnSkipVM').disabled = true;
        answerInput.disabled = true;
        
        document.getElementById('btnNextVM').addEventListener('click', () => {
            currentStep++;
            renderVMStep();
        });
    } else if (correct) {
        currentScore++;
        feedback.innerHTML = `
            <div class="feedback-box success">
                ${scenario.explanation}
            </div>
            <button class="btn btn-primary btn-next" id="btnNextVM" style="margin-top:1rem;">Siguiente escenario →</button>
        `;
        document.getElementById('btnValidateVM').disabled = true;
        document.getElementById('btnHintVM').disabled = true;
        document.getElementById('btnSkipVM').disabled = true;
        answerInput.disabled = true;

        document.getElementById('btnNextVM').addEventListener('click', () => {
            currentStep++;
            renderVMStep();
        });
    } else {
        feedback.innerHTML = `
            <div class="feedback-box error">
                Comando incorrecto o incompleto. Inténtalo de nuevo.
            </div>
        `;
    }
}


// ========== FINAL QUIZ ==========
function renderQuizStep() {
    if (currentStep >= QUIZ_QUESTIONS.length) {
        showResults(currentScore, QUIZ_QUESTIONS.length, 'final-quiz');
        return;
    }

    const q = QUIZ_QUESTIONS[currentStep];
    totalQuestions = QUIZ_QUESTIONS.length;
    const letters = ['A', 'B', 'C', 'D'];
    const pct = ((currentStep) / QUIZ_QUESTIONS.length) * 100;

    activityBody.innerHTML = `
        <div class="quiz-container">
            <div class="quiz-progress">
                <div class="quiz-progress-bar">
                    <div class="quiz-progress-fill" style="width: ${pct}%"></div>
                </div>
                <span class="quiz-progress-text">${currentStep + 1} / ${QUIZ_QUESTIONS.length}</span>
            </div>
            <p class="quiz-question">${q.question}</p>
            <div class="quiz-options">
                ${q.options.map((opt, idx) => `
                    <button class="quiz-option" data-idx="${idx}" id="quizOpt-${idx}">
                        <span class="quiz-option-letter">${letters[idx]}</span>
                        <span>${opt}</span>
                    </button>
                `).join('')}
            </div>
            <div class="quiz-actions" style="margin-top: 1.5rem; display: flex; gap: 10px;">
                <button class="btn btn-secondary" id="btnHint">💡 Ver Pista</button>
                <button class="btn btn-warning" id="btnSkip">⏭️ Saltar pregunta</button>
            </div>
            <div id="quizFeedback"></div>
        </div>
    `;

    document.querySelectorAll('.quiz-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const idx = parseInt(btn.dataset.idx);
            handleQuizAnswer(idx, q);
        });
    });

    document.getElementById('btnHint').addEventListener('click', () => {
        const feedback = document.getElementById('quizFeedback');
        // Only show hint if there is no other feedback shown yet (like right after answering)
        if (!feedback.innerHTML.includes('Siguiente pregunta')) {
            feedback.innerHTML = `
                <div class="feedback-box info">
                    💡 <strong>Pista:</strong> ${q.hint}
                </div>
            `;
        }
    });

    document.getElementById('btnSkip').addEventListener('click', () => {
        handleQuizAnswer(-1, q, true);
    });
}

function handleQuizAnswer(selectedIdx, question, isSkip = false) {
    const correct = selectedIdx === question.correct;
    if (correct && !isSkip) currentScore++;

    document.querySelectorAll('.quiz-option').forEach((btn, idx) => {
        btn.style.pointerEvents = 'none';
        if (idx === question.correct) {
            btn.classList.add('correct');
        } else if (idx === selectedIdx && !correct) {
            btn.classList.add('incorrect');
        }
    });

    const btnHint = document.getElementById('btnHint');
    const btnSkip = document.getElementById('btnSkip');
    if (btnHint) btnHint.disabled = true;
    if (btnSkip) btnSkip.disabled = true;

    const feedback = document.getElementById('quizFeedback');
    
    let msg = '';
    let boxClass = '';
    
    if (isSkip) {
        msg = `⏭️ <strong>Pregunta saltada.</strong><br>La respuesta correcta era: <strong>${question.options[question.correct]}</strong>`;
        boxClass = 'warning';
    } else if (correct) {
        msg = '✅ ¡Respuesta correcta!';
        boxClass = 'success';
    } else {
        msg = `❌ <strong>Incorrecto.</strong><br>La respuesta correcta era: <strong>${question.options[question.correct]}</strong>`;
        boxClass = 'error';
    }

    feedback.innerHTML = `
        <div class="feedback-box ${boxClass}">
            ${msg}
        </div>
        <button class="btn btn-primary btn-next" id="btnNextQuiz">Siguiente pregunta →</button>
    `;

    document.getElementById('btnNextQuiz').addEventListener('click', () => {
        currentStep++;
        renderQuizStep();
    });
}
