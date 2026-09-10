// Internationalization — English (default), French, German
const I18N = {
    defaultLang: 'en',
    supported: ['en', 'fr', 'de'],
    storageKey: 'portfolio-lang',

    translations: {
        en: {
            metaDescription: 'Professional portfolio — Data Analyst & Analytics Engineer — Ingrid Paloma Pouomegne',
            navHome: 'Home',
            navAbout: 'About',
            navProjects: 'Projects',
            navContact: 'Contact',
            navToggle: 'Open menu',
            heroTagline: 'Data analysis, business intelligence and business-oriented data solutions',
            heroLocation: 'Based in Germany — Available immediately',
            statExpValue: '+2 yrs',
            statExpLabel: 'hands-on experience',
            statProjectsLabel: 'featured projects',
            statCertLabel: 'certifications',
            btnProjects: 'View my projects',
            btnContact: 'Contact me',
            btnCv: 'Download my CV',
            aboutTitle: 'About',
            aboutLead: 'Data Analyst specializing in Analytics Engineering. Turning raw data into clear business decisions by structuring pipelines as carefully as dashboards. Based in Germany, currently building cloud skills with a GCP certification in progress.',
            skillBiTitle: 'Data analysis & BI',
            skillBiDesc: 'Power BI, DAX, KPIs',
            skillAeTitle: 'Analytics engineering',
            skillAeDesc: 'SQL, Python pipelines',
            skillCloudTitle: 'Cloud',
            skillCloudDesc: 'GCP — in progress',
            skillLangTitle: 'Languages',
            skillLangDesc: 'FR native, EN B2, DE B1',
            projectsTitle: 'Projects',
            projectsSubtitle: 'My work in data analysis, business intelligence and analytics engineering',
            featuredTitle: 'Featured projects',
            featuredSubtitle: 'Dashboards, reporting and business-oriented data solutions',
            otherTitle: 'Other work',
            otherSubtitle: 'Complementary projects in artificial intelligence',
            backToProjects: 'Back to projects',
            contactTitle: 'Contact',
            contactSubtitle: 'Feel free to reach out to discuss your projects',
            linkedinProfile: 'LinkedIn profile',
            footerRights: 'All rights reserved.',
            viewDetails: 'View details',
            demo: 'Demo',
            videoTitle: 'Presentation video',
            videoUnsupported: 'Your browser does not support video playback.',
            galleryTitle: 'Image gallery',
            projectImageAlt: 'Project image',
            featuresTitle: 'Key features',
            descriptionTitle: 'Description',
            techTitle: 'Technologies used',
            viewGithub: 'View on GitHub',
            viewDemo: 'View demo',
            catDataAnalysis: 'Data Analysis & BI',
            catDataAnalysisDesc: 'Data analysis, reporting and visualization',
            catAnalyticsEng: 'Analytics Engineering',
            catAnalyticsEngDesc: 'Transformation, modeling and data pipelines',
            catNlp: 'NLP',
            catNlpDesc: 'Natural language processing',
            catCv: 'Computer Vision',
            catCvDesc: 'Computer vision and deep learning'
        },
        fr: {
            metaDescription: 'Portfolio professionnel - Data Analyst & Analytics Engineer — Ingrid Paloma Pouomegne',
            navHome: 'Accueil',
            navAbout: 'À propos',
            navProjects: 'Projets',
            navContact: 'Contact',
            navToggle: 'Ouvrir le menu',
            heroTagline: 'Analyse de données, business intelligence et solutions data orientées métier',
            heroLocation: 'Basée en Allemagne — Disponible immédiatement',
            statExpValue: '+2 ans',
            statExpLabel: 'expérience terrain',
            statProjectsLabel: 'projets phares',
            statCertLabel: 'certifications',
            btnProjects: 'Voir mes projets',
            btnContact: 'Me contacter',
            btnCv: 'Télécharger mon CV',
            aboutTitle: 'À propos',
            aboutLead: 'Data Analyst spécialisée en Analytics Engineering. Transformer une donnée brute en décision business claire, en structurant les pipelines autant que les dashboards. Aujourd\'hui basée en Allemagne, montée en compétence cloud avec une certification GCP en cours.',
            skillBiTitle: 'Data analysis & BI',
            skillBiDesc: 'Power BI, DAX, KPIs',
            skillAeTitle: 'Analytics engineering',
            skillAeDesc: 'SQL, pipelines Python',
            skillCloudTitle: 'Cloud',
            skillCloudDesc: 'GCP — en cours',
            skillLangTitle: 'Langues',
            skillLangDesc: 'FR natif, EN B2, DE B1',
            projectsTitle: 'Projets',
            projectsSubtitle: 'Mes réalisations en analyse de données, business intelligence et analytics engineering',
            featuredTitle: 'Projets phares',
            featuredSubtitle: 'Dashboards, reporting et solutions data orientées métier',
            otherTitle: 'Autres réalisations',
            otherSubtitle: 'Projets complémentaires en intelligence artificielle',
            backToProjects: 'Retour aux projets',
            contactTitle: 'Contact',
            contactSubtitle: 'N\'hésitez pas à me contacter pour discuter de vos projets',
            linkedinProfile: 'Profil LinkedIn',
            footerRights: 'Tous droits réservés.',
            viewDetails: 'Voir les détails',
            demo: 'Démo',
            videoTitle: 'Vidéo de présentation',
            videoUnsupported: 'Votre navigateur ne supporte pas la lecture de vidéos.',
            galleryTitle: 'Galerie d\'images',
            projectImageAlt: 'Image du projet',
            featuresTitle: 'Fonctionnalités principales',
            descriptionTitle: 'Description',
            techTitle: 'Technologies utilisées',
            viewGithub: 'Voir sur GitHub',
            viewDemo: 'Voir la démo',
            catDataAnalysis: 'Data Analysis & BI',
            catDataAnalysisDesc: 'Analyse de données, reporting et visualisation',
            catAnalyticsEng: 'Analytics Engineering',
            catAnalyticsEngDesc: 'Transformation, modélisation et pipelines de données',
            catNlp: 'NLP',
            catNlpDesc: 'Traitement du langage naturel',
            catCv: 'Computer Vision',
            catCvDesc: 'Vision par ordinateur et deep learning'
        },
        de: {
            metaDescription: 'Professionelles Portfolio — Data Analyst & Analytics Engineer — Ingrid Paloma Pouomegne',
            navHome: 'Start',
            navAbout: 'Über mich',
            navProjects: 'Projekte',
            navContact: 'Kontakt',
            navToggle: 'Menü öffnen',
            heroTagline: 'Datenanalyse, Business Intelligence und geschäftsorientierte Data-Lösungen',
            heroLocation: 'Wohnhaft in Deutschland — Sofort verfügbar',
            statExpValue: '+2 Jahre',
            statExpLabel: 'Praxiserfahrung',
            statProjectsLabel: 'Schlüsselprojekte',
            statCertLabel: 'Zertifizierungen',
            btnProjects: 'Meine Projekte',
            btnContact: 'Kontakt aufnehmen',
            btnCv: 'Lebenslauf herunterladen',
            aboutTitle: 'Über mich',
            aboutLead: 'Data Analystin mit Fokus auf Analytics Engineering. Rohdaten in klare Geschäftsentscheidungen verwandeln — mit ebenso sorgfältig strukturierten Pipelines wie Dashboards. Heute in Deutschland, Cloud-Kompetenz mit laufender GCP-Zertifizierung.',
            skillBiTitle: 'Data analysis & BI',
            skillBiDesc: 'Power BI, DAX, KPIs',
            skillAeTitle: 'Analytics engineering',
            skillAeDesc: 'SQL, Python-Pipelines',
            skillCloudTitle: 'Cloud',
            skillCloudDesc: 'GCP — in Arbeit',
            skillLangTitle: 'Sprachen',
            skillLangDesc: 'FR Muttersprache, EN B2, DE B1',
            projectsTitle: 'Projekte',
            projectsSubtitle: 'Meine Arbeiten in Datenanalyse, Business Intelligence und Analytics Engineering',
            featuredTitle: 'Schlüsselprojekte',
            featuredSubtitle: 'Dashboards, Reporting und geschäftsorientierte Data-Lösungen',
            otherTitle: 'Weitere Arbeiten',
            otherSubtitle: 'Ergänzende Projekte im Bereich künstliche Intelligenz',
            backToProjects: 'Zurück zu den Projekten',
            contactTitle: 'Kontakt',
            contactSubtitle: 'Gerne stehe ich für ein Gespräch über Ihre Projekte zur Verfügung',
            linkedinProfile: 'LinkedIn-Profil',
            footerRights: 'Alle Rechte vorbehalten.',
            viewDetails: 'Details ansehen',
            demo: 'Demo',
            videoTitle: 'Präsentationsvideo',
            videoUnsupported: 'Ihr Browser unterstützt keine Videowiedergabe.',
            galleryTitle: 'Bildergalerie',
            projectImageAlt: 'Projektbild',
            featuresTitle: 'Hauptfunktionen',
            descriptionTitle: 'Beschreibung',
            techTitle: 'Verwendete Technologien',
            viewGithub: 'Auf GitHub ansehen',
            viewDemo: 'Demo ansehen',
            catDataAnalysis: 'Data Analysis & BI',
            catDataAnalysisDesc: 'Datenanalyse, Reporting und Visualisierung',
            catAnalyticsEng: 'Analytics Engineering',
            catAnalyticsEngDesc: 'Transformation, Modellierung und Datenpipelines',
            catNlp: 'NLP',
            catNlpDesc: 'Verarbeitung natürlicher Sprache',
            catCv: 'Computer Vision',
            catCvDesc: 'Computer Vision und Deep Learning'
        }
    },

    getLang() {
        const saved = localStorage.getItem(this.storageKey);
        if (saved && this.supported.includes(saved)) return saved;
        return this.defaultLang;
    },

    setLang(lang) {
        if (!this.supported.includes(lang)) lang = this.defaultLang;
        localStorage.setItem(this.storageKey, lang);
        document.documentElement.lang = lang;
        return lang;
    },

    t(key) {
        const lang = this.getLang();
        return this.translations[lang][key]
            || this.translations[this.defaultLang][key]
            || key;
    },

    /** Resolve a multilingual field: string | { en, fr, de } */
    resolve(value) {
        if (value == null) return '';
        if (typeof value === 'string') return value;
        const lang = this.getLang();
        return value[lang] || value[this.defaultLang] || value.fr || Object.values(value)[0] || '';
    },

    resolveList(value) {
        if (!value) return [];
        if (Array.isArray(value) && (value.length === 0 || typeof value[0] === 'string')) {
            return value;
        }
        const lang = this.getLang();
        return value[lang] || value[this.defaultLang] || value.fr || [];
    }
};
