// QUERY SELECTORS
// header
const langButton = document.querySelector('#langButton');
const langButtonText = document.querySelector('#langButton>span');
const nameTag = document.querySelector('#name');
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
    aboutme_t:'על עצמי',
    aboutme_b:` שמי ירין שטרית, בן 21 מראשון לציון.<br> אני משרת כטכנאי רשת בבסיס סיירים, שם אני אחראי על תחזוקה ותפעול תשתיות הרשת בבסיס. בנוסף, אני מפתח אפליקציות ואתרים עבור צרכי היחידה.<br> בעל יכולת ללמידה עצמאית, עם ניסיון בפיתוח אפליקציות ואתרים במגוון טכנולוגיות. אני אדם חברותי, עם יכולת עבודה בצוות ויצירת קשרים בין-אישיים.`,
    education_t:'השכלה',
    education_b:`<li>תעודת בגרות מלאה עם 10 יחידות לימוד במדעי המחשב , 5 יחידות מתמטיקה, 5 יחידות אנגלית ו-5 יחידות כימיה</li><li>לימודי כיתה י״ג בהנדסת תוכנה, דיפלומת טכנאי תוכנה</li><li>השלמת קורס טכנאי רשת בצבא ושירות בתפקיד בתחום זה</li><li>פיתחתי במסגרת השירות הצבאי לצד תפקידי כטכנאי רשת</li>`,
    experience_t:'ניסיון תעסוקתי',
    experience_b:`<li><strong>אפליקציית כושר</strong> – פרויקט בתיכון: פיתחתי אפליקציה למעקב אחר אימונים ב-Android Studio עם אינטגרציה ל-Firebase לצורך שמירת נתוני משתמשים ותמיכה בהשגת יעדים.</li><li><strong>משחק עם בינה מלאכותית</strong> – פרויקט ב-Java: פיתחתי את Hasami Shogi, משחק לוח אסטרטגי, הכולל יריב מבוסס בינה מלאכותית באמצעות אלגוריתם מונטה קרלו ועיצוב לוח ריאליסטי.</li><li><strong>פרויקט ב-Java</strong> – בניתי מערכת צ'אט בזמן אמת הכוללת שרת ושני לקוחות, המאפשרת תקשורת מיידית.</li><li><strong>פרויקט ב-Python</strong> – פיתחתי בוט ל-Web Scraping באמצעות Selenium ו-BeautifulSoup לניטור נתונים מאתרים.</li><li><strong>טכנאי רשת</strong> – ניהלתי מתגים, סיבים אופטיים וארונות תקשורת. הגדרתי מתגים ותחזקתי את תשתית הרשת בכל הבסיס.</li>`,
    skills_t:'כישורים ומיומנויות',
    skills_b:`<li><strong>יכולת למידה עצמאית ומהירה</strong> – יכול ללמוד טכנולוגיות, שפות תכנות או מערכות חדשות באופן עצמאי וליישם אותן בפרויקטים בזמן קצר.</li><li><strong>כושר עבודה בצוות ותקשורת בין-אישית</strong> – יודע לשתף פעולה עם אחרים, לתקשר בצורה ברורה ולהשיג מטרות משותפות תוך שיתוף פעולה.</li><li><strong>אחריות גבוהה וניהול זמן יעיל</strong> – מתמיד במשימות, עומד בלוחות זמנים ומסוגל לנהל מספר משימות במקביל בצורה מסודרת.</li><li><strong>עמידה בלחצים וקבלת החלטות תחת לחץ</strong> – שומר על רוגע במצבי לחץ, מקבל החלטות מושכלות במהירות ושומר על איכות העבודה.</li><li><strong>כישורי הדרכה והנחיה</strong> – יכול להסביר רעיונות מורכבים לאחרים, להנחות משתמשים או עמיתים בתהליכים מקצועיים.</li>`,
    technologies_t:'יכולות',
    technologies_b:`<li>HTML</li><li>JavaScript</li><li>CSS</li><li>C</li><li>Assembly</li><li>SQL</li><li>C#</li><li>Java</li><li>Python</li><li>Android Studio</li><li>XML</li><li>Network Protocols</li>`,
    contact_t:'צור קשר'
};
const english = {
    id: 'english',
    name:'Yarin Shitrit',
    title:'Resume',
    lang_t:'ENG',
    aboutme_t:'About Me',
    aboutme_b:`My name is Yarin Shitrit, 21 years old, from Rishon Lezion.<br>I serve as a Network Technician at the 'Sayarim' base, responsible for maintaining and operating the network infrastructure. Additionally, I develop applications and websites for unit needs.<br>I am a fast learner with experience in developing apps and websites across multiple technologies. I am friendly, team-oriented, and skilled in interpersonal communication.`,
    education_t:'Education',
    education_b:`<li>High school diploma with 10 units in Computer Science, 5 units in English, and 5 units in Chemistry</li><li>13th grade studies in Software Engineering, Software Technician Diploma</li><li>Completed Network Technician course in the army and served in this role</li><li>Developed applications and websites as part of military service alongside network technician duties</li>`,
    experience_t:'Work Experience',
    experience_b:`<li><strong>Fitness App</strong> – High school project: Developed an Android Studio app for tracking workouts with Firebase integration to store user data and support goal achievement.</li><li><strong>AI-based Game</strong> – Java project: Developed Hasami Shogi, a strategic board game including an AI opponent using Monte Carlo algorithm and realistic board design.</li><li><strong>Java Project</strong> – Built a real-time chat system including a server and two clients enabling immediate communication.</li><li><strong>Python Project</strong> – Developed a Web Scraping bot using Selenium and BeautifulSoup to monitor data from websites.</li><li><strong>Network Technician</strong> – Managed switches, fiber optics, and communication cabinets; configured switches and maintained the base network infrastructure.</li>`,
    skills_t:'Personal Skills & Competencies',
    skills_b:`<li><strong>Fast and Independent Learner</strong> – Able to learn new technologies, programming languages, or systems independently and implement them quickly in projects.</li><li><strong>Teamwork & Interpersonal Communication</strong> – Collaborates effectively, communicates clearly, and achieves common goals with others.<li><strong>High Responsibility & Time Management</strong> – Completes tasks on time, manages multiple tasks simultaneously, and maintains order and structure.</li><li><strong>Stress Management & Decision Making</strong> – Stays calm under pressure, makes informed decisions quickly, and maintains work quality.<li><strong>Coaching & Mentoring</strong> – Able to explain complex ideas to others and guide users or colleagues through technical processes.</li>`,
    technologies_t:'Technical Skills',
    technologies_b:`<li>HTML</li><li>JavaScript</li><li>CSS</li><li>C</li><li>Assembly</li><li>SQL</li><li>C#</li><li>Java</li><li>Python</li><li>Android Studio</li><li>XML</li><li>Network Protocols</li>`,
    contact_t:'Contact'
};
let currentLanguage = english;

function fillHTML(language){
    title.innerText = language.title;
    nameTag.innerText = language.name;
    langButtonText.innerText = language.lang_t;
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
})();

