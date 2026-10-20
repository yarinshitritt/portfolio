// QUERY SELECTORS
// header
const langButton = document.querySelector('#langButton');
const langButtonText = document.querySelector('#langButton>span');
const nameTag = document.querySelector('#name');
const pdfButton = document.querySelector('#pdfButton');
// main
const body = document.querySelector('body');
const title = document.querySelector('#title>h1');
// about
const aboutTitle = document.querySelector('#about>h2');
const aboutBody = document.querySelector('#about>p');
// education
const educationTitle = document.querySelector('#education>h2');
const educationBody = document.querySelector('#education>ul');
// experience
const experienceTitle = document.querySelector('#experience>h2');
const experienceBody = document.querySelector('#experience>ul');
// skills
const skillsTitle = document.querySelector('#skills>h2');
const skillsBody = document.querySelector('#skills>ul');
// technologies
const technologiesTitle = document.querySelector('#technologies>h2');
const technologiesBody = document.querySelector('#technologies>ul');
// contact
const contactTitle = document.querySelector('#contact>h2');

// PAGE CONTENT
const hebrew = {
    id: 'hebrew',
    name:'ירין שטרית',
    title: 'קורות חיים',
    lang_t:'עבר',
    pdf_t:'📄 הורדה כ-PDF',
    aboutme_t:'על עצמי',
    aboutme_b:`שמי ירין שטרית, יליד 2005, מראשון לציון.<br>משרת כטכנאי רשתות במחלקת מחשוב ותשתיות בבהל״ג, ובמקביל לתפקידי יזמתי ופיתחתי מערכות עבור החטיבה.<br>בעל ניסיון בהובלת פרויקט מקצה לקצה – מאפיון הצורך מול גורמי פיקוד ומקצוע ועד ליישום ולתחזוקה שוטפת. לומד מהר ובאופן עצמאי, אחראי ובעל יכולת עבודה בצוות.`,
    education_t:'השכלה',
    education_b:`<li>תעודת בגרות מלאה עם 10 יחידות לימוד במדעי המחשב, 5 יחידות מתמטיקה, 5 יחידות אנגלית ו-5 יחידות כימיה</li><li>לימודי כיתה י״ג בהנדסת תוכנה – דיפלומת טכנאי תוכנה</li><li>קורס טכנאי רשתות בצה״ל</li><li>למידה עצמאית בתחום פיתוח Web, עבודה מול APIs ושילוב מודלי AI במערכות</li>`,
    experience_t:'ניסיון תעסוקתי',
    experience_b:`<li><strong>״פקאדקס״ – מערכת לניהול פקא״ות יחידתיות</strong> – יזמתי, אפיינתי ופיתחתי באופן עצמאי מערכת Web שנמצאת בשימוש יומיומי בחטיבה ובגדודים הכפופים לה. המערכת מנהלת את הציוד והלו״ז השבועי של מדורי היחידה וכוללת סנכרון בזמן אמת בין משתמשים, תהליך טיוטה והפצה, ניהול משתמשים והרשאות והתחברות אוטומטית מבוססת זהות ארגונית. נבנתה ב-JavaScript, HTML ו-CSS ושומרת את המידע ב-SharePoint. <strong>זכיתי בהצטיינות מח״ט על פיתוח המערכת.</strong></li><li><strong>צ'אט AI להכשרות חיל הגנת הגבולות</strong> – מערכת צ'אט שמנגישה ללוחמים ולמפקדים מידע מתוך נהלי ותוכניות ההכשרה של החיל וניתוח מידע אודות יכולות החניכים בפלוגות השונות. כוללת ממשק Web, שרת Backend על Cloudflare Workers ואינטגרציה ל-API של מודל AI, כשמסמכי המקור משמשים כבסיס הידע.</li><li><strong>משחק עם בינה מלאכותית</strong> – פרויקט ב-Java: פיתחתי את Hasami Shogi, משחק לוח אסטרטגי הכולל יריב ממוחשב מבוסס אלגוריתם Monte Carlo ועיצוב לוח ריאליסטי.</li><li><strong>אפליקציית כושר</strong> – פרויקט גמר בתיכון: פיתחתי ב-Android Studio אפליקציה למעקב אחר אימונים, עם אינטגרציה ל-Firebase לשמירת נתוני משתמשים ומעקב אחר יעדים.</li><li><strong>טכנאי רשתות – מחלקת מחשוב ותשתיות, בהל״ג</strong> – כשנתיים וחצי של ניהול ותחזוקת תשתיות התקשורת בבסיס: הגדרת מתגים, עבודה עם סיבים אופטיים וארונות תקשורת, איתור ופתרון תקלות ומתן מענה טכנולוגי שוטף לעמדות המחשוב ביחידה.</li>`,
    skills_t:'כישורים ומיומנויות',
    skills_b:`<li><strong>הובלת פרויקטים מקצה לקצה</strong> – מזהה צורך, מאפיין אותו מול גורמי פיקוד ומקצוע, מפתח את הפתרון ומלווה את ההטמעה והתמיכה במשתמשים.</li><li><strong>יכולת למידה עצמאית ומהירה</strong> – לומד טכנולוגיות, שפות ומערכות חדשות באופן עצמאי ומיישם אותן בפרויקטים אמיתיים בזמן קצר.</li><li><strong>יוזמה וראש גדול</strong> – מזהה פערים ומפתח פתרונות טכנולוגיים מעבר לנדרש בתפקיד.</li><li><strong>אחריות וניהול זמן</strong> – עומד בלוחות זמנים ומשלב תפקיד שוטף בתחום התשתיות לצד פיתוח מערכות.</li><li><strong>עבודה בצוות והדרכה</strong> – משתף פעולה, מתקשר בצורה ברורה ויודע להדריך משתמשים ועמיתים בתהליכים טכנולוגיים.</li>`,
    technologies_t:'יכולות',
    technologies_b:`<li>JavaScript</li><li>HTML</li><li>CSS</li><li>Python</li><li>Java</li><li>C#</li><li>C</li><li>SQL</li><li>REST APIs</li><li>Cloudflare Workers</li><li>AI Chatbot Development</li><li>SharePoint</li><li>Git &amp; GitHub</li><li>Android Studio</li><li>Firebase</li><li>Networking (TCP/IP)</li>`,
    contact_t:'צור קשר'
};
const english = {
    id: 'english',
    name:'Yarin Shitrit',
    title:'Resume',
    lang_t:'ENG',
    pdf_t:'📄 Download PDF',
    aboutme_t:'About Me',
    aboutme_b:`My name is Yarin Shitrit, born in 2005, from Rishon LeZion.<br>I serve as a Network Technician in the IT & Infrastructure department of the "Bahalag" base. Alongside my role, I initiated and developed systems for the brigade.<br>Experienced in leading projects end to end – from defining requirements with commanders and professionals, through development, to deployment and ongoing maintenance. A fast, independent learner, responsible and team-oriented.`,
    education_t:'Education',
    education_b:`<li>Full matriculation with 10 units in Computer Science, 5 units in Mathematics, 5 units in English and 5 units in Chemistry</li><li>13th grade studies in Software Engineering – Software Technician Diploma</li><li>IDF Network Technician course</li><li>Self-taught Web development, API integration and AI model integration</li>`,
    experience_t:'Work Experience',
    experience_b:`<li><strong>"Pakadex" – Unit Orders Management System</strong> – Independently initiated, specified and built a web system used daily across the brigade and its subordinate battalions. It manages the equipment and weekly schedule of the unit's departments, with real-time multi-user sync, a draft-and-publish workflow, user and permission management, and automatic login via organizational identity. Built with JavaScript, HTML and CSS, with data stored in SharePoint. <strong>Received the Brigade Commander's Award of Excellence for developing the system.</strong></li><li><strong>"Hir Gvulot" AI Chat</strong> – A chat system that gives soldiers and commanders access to information from the corps' training procedures and programs, and analyzes data on trainees' performance across the different companies. Includes a web interface, a backend on Cloudflare Workers and integration with an AI model API, with the source documents serving as its knowledge base.</li><li><strong>AI-based Game</strong> – Java project: Developed Hasami Shogi, a strategic board game with a computer opponent based on the Monte Carlo algorithm and a realistic board design.</li><li><strong>Fitness App</strong> – High school final project: Developed an Android Studio app for tracking workouts, with Firebase integration for storing user data and tracking goals.</li><li><strong>Network Technician – IT & Infrastructure Department</strong> – About two and a half years managing and maintaining the base's network infrastructure: configuring switches, working with fiber optics and communication cabinets, troubleshooting, and providing ongoing technical support to the unit's workstations.</li>`,
    skills_t:'Personal Skills & Competencies',
    skills_b:`<li><strong>End-to-End Project Ownership</strong> – Identifies a need, defines requirements with commanders and stakeholders, builds the solution and supports deployment and users.</li><li><strong>Fast and Independent Learner</strong> – Learns new technologies, languages and systems independently and applies them in real projects quickly.</li><li><strong>Initiative</strong> – Spots gaps and builds technological solutions beyond the scope of the role.</li><li><strong>Responsibility & Time Management</strong> – Meets deadlines while running an infrastructure role in parallel with system development.</li><li><strong>Teamwork & Mentoring</strong> – Collaborates well, communicates clearly and guides users and colleagues through technical processes.</li>`,
    technologies_t:'Technical Skills',
    technologies_b:`<li>JavaScript</li><li>HTML</li><li>CSS</li><li>Python</li><li>Java</li><li>C#</li><li>C</li><li>SQL</li><li>REST APIs</li><li>Cloudflare Workers</li><li>AI Chatbot Development</li><li>SharePoint</li><li>Git &amp; GitHub</li><li>Android Studio</li><li>Firebase</li><li>Networking (TCP/IP)</li>`,
    contact_t:'Contact'
};
let currentLanguage = english;

function fillHTML(language){
    title.innerText = language.title;
    nameTag.innerText = language.name;
    langButtonText.innerText = language.lang_t;
    pdfButton.innerText = language.pdf_t;
    document.title = language.id === 'hebrew' ? 'ירין שטרית - קורות חיים' : 'Yarin Shitrit - Resume';
    aboutTitle.innerText = language.aboutme_t;
    aboutBody.innerHTML = language.aboutme_b;
    educationTitle.innerText = language.education_t;
    educationBody.innerHTML = language.education_b;
    experienceTitle.innerText = language.experience_t;
    experienceBody.innerHTML = language.experience_b;
    skillsTitle.innerText = language.skills_t;
    skillsBody.innerHTML = language.skills_b;
    technologiesTitle.innerText = language.technologies_t;
    technologiesBody.innerHTML = language.technologies_b;
    contactTitle.innerText = language.contact_t;

    body.classList.remove('hebrew', 'english');
    body.classList.add(language.id);

    currentLanguage = language;
}

function toggleLanguage() {
    const next = currentLanguage.id === 'hebrew' ? english : hebrew;
    fillHTML(next);
    saveLanguage(next.id);
}

const KEY = 'language';

function saveLanguage(langId) {
    try {
        localStorage.setItem(KEY, langId);
    } catch (e) {}
}

function loadLanguage() {
    try {
        return localStorage.getItem(KEY);
    } catch (e) {
        return null;
    }
}

(function init() {
    const saved = loadLanguage();
    const startLanguage = saved === 'english' ? english : hebrew;
    fillHTML(startLanguage);
    langButton.addEventListener('click', toggleLanguage);
    pdfButton.addEventListener('click', () => window.print());
})();

