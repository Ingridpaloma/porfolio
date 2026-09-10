// Project data — multilingual fields use { en, fr, de }; English is primary
const projectsData = {
    categories: [
        {
            id: 'data-analysis',
            nameKey: 'catDataAnalysis',
            descriptionKey: 'catDataAnalysisDesc'
        },
        {
            id: 'analytics-engineering',
            nameKey: 'catAnalyticsEng',
            descriptionKey: 'catAnalyticsEngDesc'
        },
        {
            id: 'nlp',
            nameKey: 'catNlp',
            descriptionKey: 'catNlpDesc'
        },
        {
            id: 'computer-vision',
            nameKey: 'catCv',
            descriptionKey: 'catCvDesc'
        }
    ],

    projects: [
        {
            id: 1,
            title: {
                en: 'E-commerce Analytics: Customer Segmentation & RFM Prediction',
                fr: 'E-commerce Analytics : Segmentation Client & Prédiction RFM',
                de: 'E-Commerce-Analytics: Kundensegmentierung & RFM-Vorhersage'
            },
            description: {
                en: 'End-to-end e-commerce data analysis including exploratory analysis, RFM customer segmentation (Recency, Frequency, Monetary), and an interactive Power BI dashboard. Built a machine learning model for automatic RFM segment prediction and deployed an interactive Streamlit web app.',
                fr: 'Projet complet d\'analyse de données e-commerce incluant l\'exploration des données, la segmentation client RFM (Recency, Frequency, Monetary), et la création d\'un tableau de bord interactif sur Power BI. Développement d\'un modèle de machine learning pour la prédiction automatique des segments RFM et déploiement d\'une application web interactive via Streamlit.',
                de: 'Umfassendes E-Commerce-Datenanalyseprojekt mit Datenexploration, RFM-Kundensegmentierung (Recency, Frequency, Monetary) und interaktivem Power-BI-Dashboard. Entwicklung eines Machine-Learning-Modells zur automatischen RFM-Segmentvorhersage und Bereitstellung einer interaktiven Streamlit-Webapp.'
            },
            category: 'data-analysis',
            featured: true,
            technologies: ['Python', 'Power BI', 'Streamlit', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Data Visualization'],
            image: '🛒',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'This project combines data analysis, machine learning and interactive visualization: deep customer behavior analysis, RFM segments, and a predictive model deployed as a web app.',
                fr: 'Ce projet complet combine analyse de données, machine learning et visualisation interactive. Il comprend une analyse approfondie des comportements clients, la création de segments RFM, et un modèle prédictif déployé via une application web.',
                de: 'Dieses Projekt verbindet Datenanalyse, Machine Learning und interaktive Visualisierung: tiefgehende Kundenverhaltensanalyse, RFM-Segmente und ein als Webapp bereitgestelltes Vorhersagemodell.'
            },
            video: 'images/projets/projet1/Demonstration2.mp4',
            images: [
                'images/projets/projet1/Vue_Globale.png',
                'images/projets/projet1/Analyse_client.png',
                'images/projets/projet1/Analyse_Produit.png',
                'images/projets/projet1/cm_normalized.png',
                'images/projets/projet1/Capture_presentation.png',
                'images/projets/projet1/Image_Segment.png'
            ],
            longDescription: {
                en: 'Built a complete customer analytics solution for an e-commerce site: data exploration and cleaning, RFM metrics, automatic customer segmentation, and future segment prediction with machine learning. The Streamlit app provides an intuitive way to explore the results.',
                fr: 'Développement d\'une solution complète d\'analyse client pour un site e-commerce. Le projet inclut l\'exploration et le nettoyage des données, la création de métriques RFM, la segmentation automatique des clients, et la prédiction des segments futurs grâce à un modèle de machine learning. L\'application Streamlit permet une interaction intuitive avec les résultats.',
                de: 'Entwicklung einer vollständigen Kundenanalyse-Lösung für einen E-Commerce-Shop: Datenexploration und -bereinigung, RFM-Metriken, automatische Kundensegmentierung und Vorhersage künftiger Segmente mit Machine Learning. Die Streamlit-App ermöglicht eine intuitive Exploration der Ergebnisse.'
            },
            features: {
                en: [
                    'Exploratory analysis of customer data',
                    'RFM metrics (Recency, Frequency, Monetary)',
                    'Customer segmentation into 4 categories',
                    'Machine learning model for RFM prediction',
                    'Interactive Power BI dashboard',
                    'Streamlit web app for visualization'
                ],
                fr: [
                    'Analyse exploratoire des données clients',
                    'Calcul des métriques RFM (Recency, Frequency, Monetary)',
                    'Segmentation client en 4 catégories',
                    'Modèle de machine learning pour prédiction RFM',
                    'Tableau de bord Power BI interactif',
                    'Application web Streamlit pour visualisation'
                ],
                de: [
                    'Explorative Analyse der Kundendaten',
                    'Berechnung der RFM-Metriken (Recency, Frequency, Monetary)',
                    'Kundensegmentierung in 4 Kategorien',
                    'Machine-Learning-Modell zur RFM-Vorhersage',
                    'Interaktives Power-BI-Dashboard',
                    'Streamlit-Webapp zur Visualisierung'
                ]
            }
        },
        {
            id: 2,
            title: {
                en: 'HR Dashboard — Human Resources Data Analysis',
                fr: 'Tableau de Bord RH - Analyse des Données Ressources Humaines',
                de: 'HR-Dashboard — Analyse von Personaldaten'
            },
            description: {
                en: 'Design and implementation of a Power BI dashboard for HR data analysis. Visualization of key performance indicators to better understand trends and support strategic decision-making.',
                fr: 'Conception et mise en place d\'un tableau de bord Power BI pour l\'analyse des données RH. Visualisation des indicateurs clés de performance (KPI) liés aux ressources humaines, permettant une meilleure compréhension des tendances et l\'aide à la prise de décision stratégique.',
                de: 'Konzeption und Umsetzung eines Power-BI-Dashboards zur Analyse von HR-Daten. Visualisierung zentraler KPIs für bessere Trendanalysen und strategische Entscheidungsfindung.'
            },
            category: 'data-analysis',
            featured: true,
            technologies: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence', 'SQL'],
            image: '📊',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'Complete HR analytics dashboard with interactive visualizations and key KPIs.',
                fr: 'Tableau de bord complet pour l\'analyse des ressources humaines avec visualisations interactives et KPIs clés.',
                de: 'Vollständiges HR-Analyse-Dashboard mit interaktiven Visualisierungen und zentralen KPIs.'
            },
            video: 'images/projets/projet2/Analyse_Rh.mp4',
            images: [],
            longDescription: {
                en: 'Created a professional Power BI dashboard to analyze HR data, covering recruitment, retention, diversity, performance and more.',
                fr: 'Création d\'un tableau de bord Power BI professionnel pour analyser les données RH. Le dashboard inclut des visualisations sur le recrutement, la rétention, la diversité, les performances et bien plus encore.',
                de: 'Erstellung eines professionellen Power-BI-Dashboards zur Analyse von HR-Daten — u. a. Recruiting, Retention, Diversity und Performance.'
            },
            features: {
                en: [
                    'Real-time HR KPI visualization',
                    'Retention and turnover analysis',
                    'Recruitment and hiring tracking',
                    'Diversity and inclusion indicators',
                    'Interactive dashboards with filters'
                ],
                fr: [
                    'Visualisation des KPIs RH en temps réel',
                    'Analyse de la rétention et du turnover',
                    'Suivi du recrutement et des embauches',
                    'Indicateurs de diversité et inclusion',
                    'Tableaux de bord interactifs avec filtres'
                ],
                de: [
                    'Echtzeit-Visualisierung von HR-KPIs',
                    'Analyse von Retention und Fluktuation',
                    'Tracking von Recruiting und Einstellungen',
                    'Kennzahlen zu Diversity & Inclusion',
                    'Interaktive Dashboards mit Filtern'
                ]
            }
        },
        {
            id: 3,
            title: {
                en: 'Maintenance Dashboard — EV Charging Station Failures',
                fr: 'Dashboard Maintenance - Suivi des Pannes de Bornes de Recharge',
                de: 'Wartungs-Dashboard — Ausfälle von Ladestationen'
            },
            description: {
                en: 'Transformed a manual Excel tracking process into an interactive Power BI dashboard for EV charging station failures. Instant priority visibility, real-time resolution tracking, and optimization of preventive and corrective maintenance.',
                fr: 'Transformation d\'un suivi Excel manuel en un dashboard Power BI interactif et professionnel pour le suivi des pannes de bornes de recharge. Visualisation instantanée des priorités, suivi des résolutions en temps réel et optimisation des processus de maintenance préventive et corrective.',
                de: 'Umwandlung eines manuellen Excel-Trackings in ein interaktives Power-BI-Dashboard für Ausfälle von Ladestationen. Sofortige Prioritätenübersicht, Echtzeit-Tracking der Lösungen und Optimierung präventiver sowie korrektiver Wartung.'
            },
            category: 'analytics-engineering',
            featured: true,
            technologies: ['Power BI', 'DAX', 'Data Transformation', 'Business Intelligence', 'Excel'],
            image: '🔌',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'Digital transformation of a manual process into an automated BI solution for preventive maintenance.',
                fr: 'Transformation digitale d\'un processus manuel en solution BI automatisée pour la maintenance préventive.',
                de: 'Digitale Transformation eines manuellen Prozesses in eine automatisierte BI-Lösung für vorbeugende Wartung.'
            },
            video: 'images/projets/projet3/DEFAILLANCES_IONITY.mp4',
            images: [],
            longDescription: {
                en: 'Migrated an Excel-based tracking system to a professional Power BI dashboard for real-time failure monitoring, automatic intervention prioritization, and optimized maintenance resources.',
                fr: 'Migration d\'un système de suivi Excel vers un dashboard Power BI professionnel permettant un suivi en temps réel des pannes, la priorisation automatique des interventions et l\'optimisation des ressources de maintenance.',
                de: 'Migration eines Excel-basierten Trackingsystems zu einem professionellen Power-BI-Dashboard für Echtzeit-Ausfallüberwachung, automatische Priorisierung und optimierte Wartungsressourcen.'
            },
            features: {
                en: [
                    'Excel to Power BI data migration',
                    'Real-time failure tracking',
                    'Automatic prioritization system',
                    'Alerts and notifications',
                    'Maintenance performance reports'
                ],
                fr: [
                    'Migration de données Excel vers Power BI',
                    'Suivi en temps réel des pannes',
                    'Système de priorisation automatique',
                    'Alertes et notifications',
                    'Rapports de performance de maintenance'
                ],
                de: [
                    'Datenmigration von Excel zu Power BI',
                    'Echtzeit-Tracking von Ausfällen',
                    'Automatisches Priorisierungssystem',
                    'Alerts und Benachrichtigungen',
                    'Berichte zur Wartungsleistung'
                ]
            }
        },
        {
            id: 4,
            title: {
                en: 'Power BI Report — Billing & Commercial Activity Analysis',
                fr: 'Rapport Power BI - Analyse de Facturation et Activité Commerciale',
                de: 'Power-BI-Bericht — Analyse von Abrechnung & Geschäftsaktivität'
            },
            description: {
                en: 'Built a complete interactive Power BI report for billing and commercial activity analysis. Structured data model with dynamic visuals, advanced filters, and exploration features including tooltips, drillthrough and bookmarks.',
                fr: 'Création d\'un rapport Power BI complet et interactif pour l\'analyse de la facturation et de l\'activité commerciale. Mise en place d\'un modèle de données structuré avec des visuels dynamiques, des filtres avancés et des fonctionnalités d\'exploration avancées incluant les tooltips, drillthrough et signets pour une analyse approfondie des performances commerciales.',
                de: 'Erstellung eines vollständigen interaktiven Power-BI-Berichts zur Analyse von Abrechnung und Geschäftsaktivität. Strukturiertes Datenmodell mit dynamischen Visuals, erweiterten Filtern sowie Exploration inkl. Tooltips, Drillthrough und Lesezeichen.'
            },
            category: 'data-analysis',
            featured: true,
            technologies: ['Power BI', 'DAX', 'Data Modeling', 'Business Intelligence', 'Advanced Analytics'],
            image: '💼',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'Advanced Power BI report with data modeling and interactive features for commercial analysis.',
                fr: 'Rapport Power BI avancé avec modélisation de données et fonctionnalités interactives pour l\'analyse commerciale.',
                de: 'Erweiterter Power-BI-Bericht mit Datenmodellierung und interaktiven Funktionen für die Geschäftsanalyse.'
            },
            video: 'images/projets/projet4/Axa_formation.mp4',
            images: [],
            longDescription: {
                en: 'Developed a full Power BI report with data modeling, complex DAX measures, and advanced features such as custom tooltips, drillthrough and bookmarks for smooth navigation.',
                fr: 'Développement d\'un rapport Power BI complet avec modélisation de données, mesures DAX complexes, et fonctionnalités avancées comme les tooltips personnalisés, drillthrough et signets pour une navigation fluide.',
                de: 'Entwicklung eines vollständigen Power-BI-Berichts mit Datenmodellierung, komplexen DAX-Measures und erweiterten Features wie benutzerdefinierten Tooltips, Drillthrough und Lesezeichen.'
            },
            features: {
                en: [
                    'Structured data modeling',
                    'Advanced DAX measures',
                    'Custom tooltips',
                    'Drillthrough functionality',
                    'Bookmarks for quick navigation',
                    'Advanced interactive filters'
                ],
                fr: [
                    'Modélisation de données structurée',
                    'Mesures DAX avancées',
                    'Tooltips personnalisés',
                    'Fonctionnalité drillthrough',
                    'Signets pour navigation rapide',
                    'Filtres avancés et interactifs'
                ],
                de: [
                    'Strukturierte Datenmodellierung',
                    'Erweiterte DAX-Measures',
                    'Benutzerdefinierte Tooltips',
                    'Drillthrough-Funktion',
                    'Lesezeichen für schnelle Navigation',
                    'Erweiterte interaktive Filter'
                ]
            }
        },
        {
            id: 5,
            title: {
                en: 'Seasonal Rental Dashboard & ML Prediction of Location Errors',
                fr: 'Dashboard Location Saisonnière & Prédiction ML des Erreurs d\'Emplacement',
                de: 'Saisonvermietungs-Dashboard & ML-Vorhersage von Standortfehlern'
            },
            description: {
                en: 'Power BI dashboard for seasonal rental fleet tracking, followed by a machine learning model to predict and automatically correct location errors. A full BI + AI solution to optimize operations.',
                fr: 'Mise en place d\'un tableau de bord Power BI pour le suivi des parcs de location saisonnière, suivi du développement d\'un modèle de machine learning pour la prédiction et la correction automatique des erreurs d\'emplacement. Solution complète combinant business intelligence et intelligence artificielle pour optimiser la gestion opérationnelle.',
                de: 'Power-BI-Dashboard zur Überwachung saisonaler Mietflotten sowie ein Machine-Learning-Modell zur Vorhersage und automatischen Korrektur von Standortfehlern. Vollständige BI- und KI-Lösung zur Optimierung des Betriebs.'
            },
            category: 'data-analysis',
            featured: true,
            technologies: ['Power BI', 'Python', 'Machine Learning', 'Scikit-learn', 'Data Visualization', 'Predictive Analytics'],
            image: '🏠',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'Complete solution combining BI and ML to optimize seasonal rental management.',
                fr: 'Solution complète combinant BI et ML pour optimiser la gestion des locations saisonnières.',
                de: 'Vollständige Lösung aus BI und ML zur Optimierung der Saisonvermietung.'
            },
            video: 'images/projets/projet5/location.mp4',
            images: [
                'images/projets/projet5/Image1.png',
                'images/projets/projet5/Image2.png',
                'images/projets/projet5/Image3.png',
                'images/projets/projet5/Image4.png'
            ],
            longDescription: {
                en: 'Combined a Power BI operational dashboard with a machine learning model to predict and automatically correct location errors in rental data.',
                fr: 'Projet combinant un tableau de bord Power BI pour le suivi opérationnel et un modèle de machine learning pour prédire et corriger automatiquement les erreurs d\'emplacement dans les données de location.',
                de: 'Kombination aus Power-BI-Betriebsdashboard und Machine-Learning-Modell zur Vorhersage und automatischen Korrektur von Standortfehlern in Mietdaten.'
            },
            features: {
                en: [
                    'Power BI dashboard for operational tracking',
                    'ML model for error prediction',
                    'Automatic data correction',
                    'BI and ML integration',
                    'Operational process optimization'
                ],
                fr: [
                    'Dashboard Power BI pour suivi opérationnel',
                    'Modèle ML pour prédiction d\'erreurs',
                    'Correction automatique des données',
                    'Intégration BI et ML',
                    'Optimisation des processus opérationnels'
                ],
                de: [
                    'Power-BI-Dashboard für Betriebsüberwachung',
                    'ML-Modell zur Fehlervorhersage',
                    'Automatische Datenkorrektur',
                    'Integration von BI und ML',
                    'Optimierung betrieblicher Prozesse'
                ]
            }
        },
        {
            id: 6,
            title: {
                en: 'E-commerce Chatbot — Intelligent Virtual Assistant',
                fr: 'Chatbot E-commerce - Assistant Virtuel Intelligent',
                de: 'E-Commerce-Chatbot — Intelligenter virtueller Assistent'
            },
            shortDescription: {
                en: 'NLP chatbot to support customers and improve the online shopping experience.',
                fr: 'Chatbot NLP pour accompagner les clients et améliorer l\'expérience d\'achat en ligne.',
                de: 'NLP-Chatbot zur Kundenbetreuung und Verbesserung des Online-Einkaufserlebnisses.'
            },
            description: {
                en: 'Development of an intelligent chatbot for an e-commerce site. A virtual assistant that answers customer questions, guides purchases and improves UX through natural language processing and conversational AI.',
                fr: 'Développement et mise en place d\'un chatbot intelligent pour un site e-commerce. Conception d\'un assistant virtuel capable de répondre aux questions des clients, guider les achats et améliorer l\'expérience utilisateur grâce au traitement du langage naturel et à l\'intelligence artificielle conversationnelle.',
                de: 'Entwicklung eines intelligenten Chatbots für einen E-Commerce-Shop. Virtueller Assistent, der Kundenfragen beantwortet, Käufe begleitet und die UX durch NLP und konversationelle KI verbessert.'
            },
            category: 'nlp',
            featured: false,
            technologies: ['Python', 'NLP', 'Machine Learning', 'Chatbot', 'Natural Language Processing', 'API Integration'],
            image: '🤖',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'Intelligent NLP chatbot to improve the customer experience on an e-commerce site.',
                fr: 'Chatbot intelligent utilisant le NLP pour améliorer l\'expérience client sur un site e-commerce.',
                de: 'Intelligenter NLP-Chatbot zur Verbesserung der Kundenerfahrung im E-Commerce.'
            },
            video: 'images/projets/projet6/Chatbot.mp4',
            images: [],
            longDescription: {
                en: 'Built a conversational chatbot that understands customer queries, answers product questions, guides purchases and improves engagement.',
                fr: 'Développement d\'un chatbot conversationnel intelligent capable de comprendre les requêtes clients, répondre aux questions sur les produits, guider les achats et améliorer l\'engagement client.',
                de: 'Entwicklung eines konversationellen Chatbots, der Kundenanfragen versteht, Produktfragen beantwortet, Käufe begleitet und Engagement steigert.'
            },
            features: {
                en: [
                    'Natural language processing (NLP)',
                    'Contextual understanding',
                    'Product catalog integration',
                    'Order management and tracking',
                    'Intuitive conversational interface'
                ],
                fr: [
                    'Traitement du langage naturel (NLP)',
                    'Compréhension contextuelle',
                    'Intégration avec le catalogue produits',
                    'Gestion des commandes et suivi',
                    'Interface conversationnelle intuitive'
                ],
                de: [
                    'Verarbeitung natürlicher Sprache (NLP)',
                    'Kontextuelles Verständnis',
                    'Integration mit dem Produktkatalog',
                    'Bestellverwaltung und Tracking',
                    'Intuitive Konversationsoberfläche'
                ]
            }
        },
        {
            id: 7,
            title: {
                en: 'Agricultural Image Classification with CNN — VGG16, VGG19, Xception & LIME',
                fr: 'Classification d\'Images Agricoles avec CNN - VGG16, VGG19, Xception & LIME',
                de: 'Agrarische Bildklassifikation mit CNN — VGG16, VGG19, Xception & LIME'
            },
            shortDescription: {
                en: 'Agricultural image classification with deep learning, CNN model comparison and LIME explainability.',
                fr: 'Classification d\'images agricoles par deep learning, avec comparaison de modèles CNN et explicabilité LIME.',
                de: 'Agrarische Bildklassifikation mit Deep Learning, CNN-Modellvergleich und LIME-Erklärbarkeit.'
            },
            description: {
                en: 'CNN model for agricultural image classification. Compared deep learning architectures (VGG16, VGG19, Xception) and implemented LIME for model prediction explainability.',
                fr: 'Développement d\'un modèle de réseau de neurones convolutifs (CNN) pour la classification d\'images agricoles. Expérimentation et comparaison de différentes architectures de deep learning (VGG16, VGG19, Xception) avec implémentation de LIME (Local Interpretable Model-agnostic Explanations) pour l\'explicabilité des prédictions du modèle.',
                de: 'CNN-Modell zur Klassifikation landwirtschaftlicher Bilder. Vergleich von Deep-Learning-Architekturen (VGG16, VGG19, Xception) und Implementierung von LIME zur Erklärbarkeit der Vorhersagen.'
            },
            category: 'computer-vision',
            featured: false,
            technologies: ['Python', 'Deep Learning', 'CNN', 'TensorFlow', 'Keras', 'VGG16', 'VGG19', 'Xception', 'LIME', 'Computer Vision'],
            image: '🌾',
            github: '',
            demo: '',
            date: '',
            detailDescription: {
                en: 'Deep learning project comparing CNN architectures for agricultural image classification with explainability.',
                fr: 'Projet de deep learning comparant différentes architectures CNN pour la classification d\'images agricoles avec explicabilité.',
                de: 'Deep-Learning-Projekt zum Vergleich von CNN-Architekturen für agrarische Bildklassifikation mit Erklärbarkeit.'
            },
            video: 'images/projets/projet7/ImageClassification.mp4',
            images: [],
            longDescription: {
                en: 'Developed and compared deep learning models for agricultural image classification, including transfer learning with VGG16, VGG19 and Xception, performance analysis, and LIME for explaining predictions.',
                fr: 'Développement et comparaison de modèles de deep learning pour la classification d\'images agricoles. Le projet inclut l\'entraînement de plusieurs architectures (VGG16, VGG19, Xception), l\'analyse comparative de leurs performances, et l\'implémentation de LIME pour expliquer les prédictions du modèle.',
                de: 'Entwicklung und Vergleich von Deep-Learning-Modellen zur Klassifikation landwirtschaftlicher Bilder — inkl. Transfer Learning mit VGG16, VGG19 und Xception, Leistungsanalyse und LIME zur Erklärung der Vorhersagen.'
            },
            features: {
                en: [
                    'Comparison of 3 CNN architectures',
                    'Transfer learning with VGG16, VGG19, Xception',
                    'Explainability with LIME',
                    'Agricultural image classification',
                    'Comparative performance analysis',
                    'Prediction visualization'
                ],
                fr: [
                    'Comparaison de 3 architectures CNN',
                    'Transfer learning avec VGG16, VGG19, Xception',
                    'Explicabilité avec LIME',
                    'Classification d\'images agricoles',
                    'Analyse comparative des performances',
                    'Visualisation des prédictions'
                ],
                de: [
                    'Vergleich von 3 CNN-Architekturen',
                    'Transfer Learning mit VGG16, VGG19, Xception',
                    'Erklärbarkeit mit LIME',
                    'Klassifikation landwirtschaftlicher Bilder',
                    'Vergleichende Leistungsanalyse',
                    'Visualisierung der Vorhersagen'
                ]
            }
        }
    ]
};
