// Structure de données pour les projets
// Organisés par catégories pertinentes pour Big Data et IA

const projectsData = {
    categories: [
        {
            id: 'machine-learning',
            name: 'Machine Learning',
            description: 'Projets de machine learning et deep learning'
        },
        {
            id: 'data-science',
            name: 'Data Science',
            description: 'Analyse de données et visualisation'
        },
        {
            id: 'big-data',
            name: 'Big Data',
            description: 'Traitement de données massives et architectures distribuées'
        },
        {
            id: 'nlp',
            name: 'Natural Language Processing',
            description: 'Traitement du langage naturel et analyse textuelle'
        },
        {
            id: 'computer-vision',
            name: 'Computer Vision',
            description: 'Vision par ordinateur et reconnaissance d\'images'
        },
        {
            id: 'data-engineering',
            name: 'Data Engineering',
            description: 'Pipelines de données et ETL'
        },
        {
            id: 'research',
            name: 'Recherche & Académique',
            description: 'Projets de recherche et travaux académiques'
        }
    ],
    
    projects: [
        {
            id: 1,
            title: 'E-commerce Analytics : Segmentation Client & Prédiction RFM',
            description: 'Projet complet d\'analyse de données e-commerce incluant l\'exploration des données, la segmentation client RFM (Recency, Frequency, Monetary), et la création d\'un tableau de bord interactif sur Power BI. Développement d\'un modèle de machine learning pour la prédiction automatique des segments RFM et déploiement d\'une application web interactive via Streamlit.',
            category: 'data-science',
            technologies: ['Python', 'Power BI', 'Streamlit', 'Scikit-learn', 'Pandas', 'Machine Learning', 'Data Visualization'],
            image: '🛒',
            github: '', // À remplir avec votre lien GitHub
            demo: '', // À remplir si vous avez une démo Streamlit
            date: '2024',
            // Détails supplémentaires pour la page de détail
            detailDescription: 'Ce projet complet combine analyse de données, machine learning et visualisation interactive. Il comprend une analyse approfondie des comportements clients, la création de segments RFM, et un modèle prédictif déployé via une application web.',
            video: '', // URL de la vidéo (YouTube, Vimeo, ou fichier local)
            images: [], // Tableau d'URLs d'images : ['images/projet1/img1.jpg', 'images/projet1/img2.jpg']
            longDescription: 'Développement d\'une solution complète d\'analyse client pour un site e-commerce. Le projet inclut l\'exploration et le nettoyage des données, la création de métriques RFM, la segmentation automatique des clients, et la prédiction des segments futurs grâce à un modèle de machine learning. L\'application Streamlit permet une interaction intuitive avec les résultats.',
            features: [
                'Analyse exploratoire des données clients',
                'Calcul des métriques RFM (Recency, Frequency, Monetary)',
                'Segmentation client en 4 catégories',
                'Modèle de machine learning pour prédiction RFM',
                'Tableau de bord Power BI interactif',
                'Application web Streamlit pour visualisation'
            ]
        },
        {
            id: 2,
            title: 'Tableau de Bord RH - Analyse des Données Ressources Humaines',
            description: 'Conception et mise en place d\'un tableau de bord Power BI pour l\'analyse des données RH. Visualisation des indicateurs clés de performance (KPI) liés aux ressources humaines, permettant une meilleure compréhension des tendances et l\'aide à la prise de décision stratégique.',
            category: 'data-science',
            technologies: ['Power BI', 'DAX', 'Data Visualization', 'Business Intelligence', 'SQL'],
            image: '📊',
            github: '',
            demo: '',
            date: '2024',
            detailDescription: 'Tableau de bord complet pour l\'analyse des ressources humaines avec visualisations interactives et KPIs clés.',
            video: '',
            images: [],
            longDescription: 'Création d\'un tableau de bord Power BI professionnel pour analyser les données RH. Le dashboard inclut des visualisations sur le recrutement, la rétention, la diversité, les performances et bien plus encore.',
            features: [
                'Visualisation des KPIs RH en temps réel',
                'Analyse de la rétention et du turnover',
                'Suivi du recrutement et des embauches',
                'Indicateurs de diversité et inclusion',
                'Tableaux de bord interactifs avec filtres'
            ]
        },
        {
            id: 3,
            title: 'Dashboard Maintenance - Suivi des Pannes de Bornes de Recharge',
            description: 'Transformation d\'un suivi Excel manuel en un dashboard Power BI interactif et professionnel pour le suivi des pannes de bornes de recharge. Visualisation instantanée des priorités, suivi des résolutions en temps réel et optimisation des processus de maintenance préventive et corrective.',
            category: 'data-science',
            technologies: ['Power BI', 'DAX', 'Data Transformation', 'Business Intelligence', 'Excel'],
            image: '🔌',
            github: '',
            demo: '',
            date: '2024',
            detailDescription: 'Transformation digitale d\'un processus manuel en solution BI automatisée pour la maintenance préventive.',
            video: '',
            images: [],
            longDescription: 'Migration d\'un système de suivi Excel vers un dashboard Power BI professionnel permettant un suivi en temps réel des pannes, la priorisation automatique des interventions et l\'optimisation des ressources de maintenance.',
            features: [
                'Migration de données Excel vers Power BI',
                'Suivi en temps réel des pannes',
                'Système de priorisation automatique',
                'Alertes et notifications',
                'Rapports de performance de maintenance'
            ]
        },
        {
            id: 4,
            title: 'Rapport Power BI - Analyse de Facturation et Activité Commerciale',
            description: 'Création d\'un rapport Power BI complet et interactif pour l\'analyse de la facturation et de l\'activité commerciale. Mise en place d\'un modèle de données structuré avec des visuels dynamiques, des filtres avancés et des fonctionnalités d\'exploration avancées incluant les tooltips, drillthrough et signets pour une analyse approfondie des performances commerciales.',
            category: 'data-science',
            technologies: ['Power BI', 'DAX', 'Data Modeling', 'Business Intelligence', 'Advanced Analytics'],
            image: '💼',
            github: '',
            demo: '',
            date: '2024',
            detailDescription: 'Rapport Power BI avancé avec modélisation de données et fonctionnalités interactives pour l\'analyse commerciale.',
            video: '',
            images: [],
            longDescription: 'Développement d\'un rapport Power BI complet avec modélisation de données, mesures DAX complexes, et fonctionnalités avancées comme les tooltips personnalisés, drillthrough et signets pour une navigation fluide.',
            features: [
                'Modélisation de données structurée',
                'Mesures DAX avancées',
                'Tooltips personnalisés',
                'Fonctionnalité drillthrough',
                'Signets pour navigation rapide',
                'Filtres avancés et interactifs'
            ]
        },
        {
            id: 5,
            title: 'Dashboard Location Saisonnière & Prédiction ML des Erreurs d\'Emplacement',
            description: 'Mise en place d\'un tableau de bord Power BI pour le suivi des parcs de location saisonnière, suivi du développement d\'un modèle de machine learning pour la prédiction et la correction automatique des erreurs d\'emplacement. Solution complète combinant business intelligence et intelligence artificielle pour optimiser la gestion opérationnelle.',
            category: 'data-science',
            technologies: ['Power BI', 'Python', 'Machine Learning', 'Scikit-learn', 'Data Visualization', 'Predictive Analytics'],
            image: '🏠',
            github: '',
            demo: '',
            date: '2024',
            detailDescription: 'Solution complète combinant BI et ML pour optimiser la gestion des locations saisonnières.',
            video: '',
            images: [],
            longDescription: 'Projet combinant un tableau de bord Power BI pour le suivi opérationnel et un modèle de machine learning pour prédire et corriger automatiquement les erreurs d\'emplacement dans les données de location.',
            features: [
                'Dashboard Power BI pour suivi opérationnel',
                'Modèle ML pour prédiction d\'erreurs',
                'Correction automatique des données',
                'Intégration BI et ML',
                'Optimisation des processus opérationnels'
            ]
        },
        {
            id: 6,
            title: 'Chatbot E-commerce - Assistant Virtuel Intelligent',
            description: 'Développement et mise en place d\'un chatbot intelligent pour un site e-commerce. Conception d\'un assistant virtuel capable de répondre aux questions des clients, guider les achats et améliorer l\'expérience utilisateur grâce au traitement du langage naturel et à l\'intelligence artificielle conversationnelle.',
            category: 'nlp',
            technologies: ['Python', 'NLP', 'Machine Learning', 'Chatbot', 'Natural Language Processing', 'API Integration'],
            image: '🤖',
            github: '',
            demo: '',
            date: '2024',
            detailDescription: 'Chatbot intelligent utilisant le NLP pour améliorer l\'expérience client sur un site e-commerce.',
            video: '',
            images: [],
            longDescription: 'Développement d\'un chatbot conversationnel intelligent capable de comprendre les requêtes clients, répondre aux questions sur les produits, guider les achats et améliorer l\'engagement client.',
            features: [
                'Traitement du langage naturel (NLP)',
                'Compréhension contextuelle',
                'Intégration avec le catalogue produits',
                'Gestion des commandes et suivi',
                'Interface conversationnelle intuitive'
            ]
        },
        {
            id: 7,
            title: 'Classification d\'Images Agricoles avec CNN - VGG16, VGG19, Xception & LIME',
            description: 'Développement d\'un modèle de réseau de neurones convolutifs (CNN) pour la classification d\'images agricoles. Expérimentation et comparaison de différentes architectures de deep learning (VGG16, VGG19, Xception) avec implémentation de LIME (Local Interpretable Model-agnostic Explanations) pour l\'explicabilité des prédictions du modèle.',
            category: 'computer-vision',
            technologies: ['Python', 'Deep Learning', 'CNN', 'TensorFlow', 'Keras', 'VGG16', 'VGG19', 'Xception', 'LIME', 'Computer Vision'],
            image: '🌾',
            github: '',
            demo: '',
            date: '2024',
            detailDescription: 'Projet de deep learning comparant différentes architectures CNN pour la classification d\'images agricoles avec explicabilité.',
            video: '',
            images: [],
            longDescription: 'Développement et comparaison de modèles de deep learning pour la classification d\'images agricoles. Le projet inclut l\'entraînement de plusieurs architectures (VGG16, VGG19, Xception), l\'analyse comparative de leurs performances, et l\'implémentation de LIME pour expliquer les prédictions du modèle.',
            features: [
                'Comparaison de 3 architectures CNN',
                'Transfer learning avec VGG16, VGG19, Xception',
                'Explicabilité avec LIME',
                'Classification d\'images agricoles',
                'Analyse comparative des performances',
                'Visualisation des prédictions'
            ]
        }
    ]
};

