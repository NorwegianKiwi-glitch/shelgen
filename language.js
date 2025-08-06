const translations = {
    en: {
        index: {
            title: "Portfolio",
            subtitle: "Selected Works & Projects",
            cv: "View full CV",
            projects: [
                {
                    title: "Evacuation system",
                    desc: "Python flask web app with biometric and RFID scanning in emergency situations",
                    year: "2024"
                },
                {
                    title: "AI drone protection system",
                    desc: "IOT AI computer vision powered robot that detects and shoots drone",
                    year: "2023"
                },
                {
                    title: "Web based note taking application",
                    desc: "Simple to use notetaking application made by Python flask and styled with tailwindcss",
                    year: "2023"
                },
                {
                    title: "Management repair system",
                    desc: ".NET MVC webapplication with login and auth",
                    year: "2022"
                },
                {
                    title: "(Cloud Infrastructure Tool)",
                    desc: "(DevOps automation platform for deployment management)",
                    year: "2022"
                }
            ],
        },
        exitnode: {
            title: "Evacuation system for emergency services",
            desc: "Python flask web app with biometric and RFID scanning in emergency situations",
            features: "Features",
            feature_list: [
                "Biometric authentication",
                "RFID badge scanning",
                "Emergency reporting dashboard"
            ],
            back: "Back to Portfolio"
        },
        inkay: {
            title: "Web based note taking application",
            desc: "Simple to use notetaking application made by Python flask and styled with tailwindcss",
            features: "Features",
            feature_list: [
                "Rich text editing",
                "Tagging and search",
                "Cloud sync",
                "Login and account creation"
            ],
            back: "Back to Portfolio"
        },
        IoT: {
            title: "AI drone protection system",
            desc: "IOT AI computer vision powered robot that detects and neutralizes drone",
            features: "Features",
            feature_list: [
                "Real-time drone detection",
                "Automated response",
                "Remote monitoring"
            ],
            back: "Back to Portfolio"
        },
        noested: {
            title: "Management repair system",
            desc: ".NET MVC webapplication with login and auth",
            features: "Features",
            feature_list: [
                "User authentication",
                "Repair ticket management",
                "Admin dashboard"
            ],
            back: "Back to Portfolio"
        },
        system_info: {
            title: "System Information",
            desc: "Overview of system status and configuration.",
            os: "Operating System",
            cpu: "CPU",
            memory: "Memory",
            back: "Back to Portfolio"
        },
        footer: {
            about: "About this page.",
        },
        toggle: "Norsk"
    },
    no: {
        index: {
            title: "Portefølje",
            subtitle: "Utvalgte arbeider og prosjekter",
            cv: "Se full CV",
            projects: [
                {
                    title: "Evakueringssystem",
                    desc: "Python Flask webapp med biometrisk og RFID-skanning i nødsituasjoner",
                    year: "2024"
                },
                {
                    title: "AI dronesikringssystem",
                    desc: "IOT AI datavisjon-robot som oppdager og skyter droner",
                    year: "2023"
                },
                {
                    title: "Nettbasert notatapplikasjon",
                    desc: "Enkel notatapp laget med Python Flask og stylet med TailwindCSS",
                    year: "2023"
                },
                {
                    title: "Administrasjons- og reparasjonssystem",
                    desc: ".NET MVC webapplikasjon med innlogging og autentisering",
                    year: "2022"
                },
                {
                    title: "(Skyinfrastrukturverktøy)",
                    desc: "(DevOps-automatiseringsplattform for distribusjonsstyring)",
                    year: "2022"
                }
            ],
        },
        exitnode: {
            title: "Evakueringssystem for nødetater",
            desc: "Python Flask webapp med biometrisk og RFID-skanning i nødsituasjoner",
            features: "Funksjoner",
            feature_list: [
                "Biometrisk autentisering",
                "RFID-brikkeskanning",
                "Nødrapporteringspanel"
            ],
            back: "Tilbake til portefølje"
        },
        inkay: {
            title: "Nettbasert notatapplikasjon",
            desc: "Enkel notatapp laget med Python Flask og stylet med TailwindCSS",
            features: "Funksjoner",
            feature_list: [
                "Rik tekstredigering",
                "Tagging og søk",
                "Sky-synkronisering",
                "Innlogging og kontoopprettelse"
            ],
            back: "Tilbake til portefølje"
        },
        IoT: {
            title: "KI dronesikringssystem",
            desc: "IOT KI datavisjon-robot som oppdager og nøytraliserer droner",
            features: "Funksjoner",
            feature_list: [
                "Sanntids droneoppdagelse",
                "Automatisert respons",
                "Fjernovervåking"
            ],
            back: "Tilbake til portefølje"
        },
        noested: {
            title: "Administrasjons- og reparasjonssystem",
            desc: ".NET MVC webapplikasjon med innlogging og autentisering",
            features: "Funksjoner",
            feature_list: [
                "Brukerautentisering",
                "Reparasjonsbillett-håndtering",
                "Adminpanel"
            ],
            back: "Tilbake til portefølje"
        },
        system_info: {
            title: "Systeminformasjon",
            desc: "Oversikt over systemstatus og konfigurasjon.",
            os: "Operativsystem",
            cpu: "Prosessor",
            memory: "Minne",
            back: "Tilbake til portefølje"
        },
        footer: {
            about: "Om denne siden.",
        },
        toggle: "English"
    }
};

function getPageKey() {
    // Map file names to translation keys
    const map = {
        "index.html": "index",
        "exitnode.html": "exitnode",
        "inkay.html": "inkay",
        "iot.html": "IoT",
        "noested.html": "noested",
        "system_info.html": "system_info",
        "footer.html": "footer"
    };
    const file = window.location.pathname.split('/').pop().toLowerCase();
    return map[file] || "index";
}

function getBrowserLang() {
    const lang = navigator.language || navigator.userLanguage;
    return lang.startsWith('no') ? 'no' : 'en';
}

function setLanguage(lang) {
    document.documentElement.lang = lang;
    const pageKey = getPageKey();
    const pageTranslations = translations[lang][pageKey] || {};

    // Update elements by ID
    for (const key in pageTranslations) {
        if (key === 'feature_list' || key === 'projects') continue;
        const el = document.getElementById(key);
        if (el) el.textContent = pageTranslations[key];
    }

    // Update feature lists if present
    if (pageTranslations.feature_list) {
        const list = document.getElementById('feature-list');
        if (list) {
            list.innerHTML = '';
            pageTranslations.feature_list.forEach(item => {
                const li = document.createElement('li');
                li.textContent = item;
                list.appendChild(li);
            });
        }
    }

    // Update projects (for index page)
    if (translations[lang].index.projects && pageKey === 'index') {
        const projectEls = document.querySelectorAll('.project-item');
        translations[lang].index.projects.forEach((proj, i) => {
            if (projectEls[i]) {
                projectEls[i].querySelector('h3').textContent = proj.title;
                projectEls[i].querySelector('p').textContent = proj.desc;
                projectEls[i].querySelector('.text-gray-500').textContent = proj.year;
            }
        });
    }

    // Update footer
    if (translations[lang].footer) {
        for (const key in translations[lang].footer) {
            const el = document.getElementById(`footer-${key}`);
            if (el) el.textContent = translations[lang].footer[key];
        }
    }

    // Update toggle button
    const toggle = document.getElementById('lang-toggle');
    if (toggle) toggle.textContent = translations[lang].toggle;
}

// Load footer.html into #footer-placeholder
fetch('footer.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('footer-placeholder').innerHTML = html;
    // Now the footer is in the DOM, so attach the event listener:
    attachLangToggle();
  });

function attachLangToggle() {
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.addEventListener('click', () => {
      let lang = document.documentElement.lang === 'en' ? 'no' : 'en';
      setLanguage(lang);
    });
  }
}