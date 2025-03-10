import type { Translations } from "../types";

export const translations: Translations<"fr"> = {
  /* spell-checker: disable */
  Header: {
    documentation: "Documentation",
    "our instance": "Notre instance",
    contact: "Contacter l'équipe",
  },
  Footer: {
    "edit this website": "Modifier ce site",
  },
  Body: {
    "orange title": "La stack data science moderne rendue accessible",
    "Onyxia in action": "Onyxia en action",
    subTitle:
      "Fournissez un environnement de travail à l'état de l'art à vos data scientists sans dépendre de logiciels propriétaires.",
    "what is onyxia title": "Qu'est-ce qu'Onyxia?",
    "what is onyxia body": `Onyxia est une application web qui permet aux 
        data scientists d'accéder à un environnement de travail a l'état 
        de l'art même sans être très pointu en informatique.
        Essentiellement, Onyxia transforme un repo de charts [Helm](https://helm.sh) en un catalogue de services
        configurables et configurés automatiquement.  
        Onyxia propose également une intégration avec S3.`,
    "install now": "Guide de déploiment",
    "article 1 title": "Construisez votre catalogue ou réutilisez les nôtres",
    "article 1 body": `Construisez une offre de services sur mesure pour votre métier en mettant en place 
    votre propre dépôt de charts Helm ou réutilisez les nôtres : [interactive-services](https://github.com/InseeFrLab/helm-charts-interactive-services), [databases](https://github.com/InseeFrLab/helm-charts-databases), [automation](https://github.com/InseeFrLab/helm-charts-automation), ...`,
    "article 2 title": `Configuration des services`,
    "article 2 body": `Onyxia génère automatiquement un formulaire qui permet aux utilisateurs
    d'écraser les valeurs par défaut des \`values.yaml\` de vos charts Helm.
    Onyxia vous permet également de préciser des valeurs à préremplir spécifiquement
    pour l'utilisateur en question.
    Ce mécanisme permet notamment à l'utilisateur d'être déjà authentifié à S3 et d'avoir accès
    à son bucket personnel dès l'ouverture de Jupyter ou RStudio.`,

    "article 3 title": `Authentification et autorisation polyvalentes`,
    "article 3 body": `Onyxia s'intègre à votre système IAM existant. Que vous utilisiez [Keycloak](https://www.keycloak.org/), Microsoft [Entra ID](https://www.microsoft.com/en-us/security/business/identity-access/microsoft-entra-id), 
      [Auth0](https://auth0.com/) ou tout autre fournisseur compatible OpenID Connect/OAuth, Onyxia [s'y connecte en toute transparence](https://docs.onyxia.sh/admin-doc/openid-connect-configuration).`,

    "bp title 1": "Onyxia ne cherche pas à se rendre indispensable",
    "bp description 1": `Nous visons à rendre les utilisateurs de la plateforme suffisamment 
        familiers avec les technologies sous-jacentes (Kubernetes, helm, S3...) pour pouvoir s'affranchir 
        d'Onyxia.  Nous affichons les commandes exécutées sur le cluster, sur S3, sur Vault par le biais d'Onyxia.`,

    "bp title 2": `Un explorateur de fichiers S3`,
    "bp description 2": `Onyxia permet de glisser déposer ses jeux de données pour les uploader sur S3.`,

    "bp title 3": `Intégration avec [HashiCorp Vault](https://www.vaultproject.io)`,
    "bp description 3": `Onyxia permet de stocker les informations sensibles de type 
        clés d'API dans Vault et de les rendre accessibles dans les services sous forme de variable.`,

    "bp title 4": `Personnalisez l'apparence d'Onyxia`,
    "bp description 4": `Onyxia offre de nombreuses options de personalisation.
        Modifiez le thème, les liens et le logo de l'entête sans avoir à toucher au code source d'Onyxia. Mais uniquement
        en [modifiant les paramètres de votre instance](https://docs.onyxia.sh/admin-doc/theme).`,

    "bp title 5": "Un environnement de formation",
    "bp description 5": `Onyxia permet de générer des liens de lancement de service.  
        Cette fonctionalité peut être utilisée pour créer des catalogues de formations comme [celui-là](https://www.sspcloud.fr/formation).`,

    "bp title 6": "Technologiquement agnostique",
    "bp description 6": `Avec Onyxia vous n'investissez pas sur une stack technique en particulier sauf Kubernetes et S3.
    Onyxia permet de rendre accessible n'importe quelle technologie cloud native et ne génére 
    donc pas de potentielle dette technique future.`,

    "They have their own Onyxia Datalab": "Ils ont leur Datalab Onyxia",
    "Review slide insee description": `La véritable innovation c'est de rendre simple quelque chose de quasi impossible.  
    C'est l'essence même d Onyxia qui met à la portée du plus grand nombre la mise en place à la demande d'environnements 
    sophistiqués pour la Datascience. Je suis extrêmement fier que l'[Insee](https://www.insee.fr/fr) ait lancé le développement de ce logiciel et porte 
    toujours des contributeurs majeurs mais aussi enthousiaste qu'une communauté se mette en marche pour enrichir collectivement 
    ses fonctionnalités.`,

    "Review slide insee signature": "Jean-Séverin Lair, DSI de l'Insee",

    "Review slide Mercator description": `[Mercator Ocean International](https://www.mercator-ocean.eu/) est une organisation à but non lucratif qui fournit des 
    services basés sur la science océanique d'intérêt général, axés sur la conservation et l'utilisation durable de l'océan et des ressources marines. Onyxia datalab 
    permet aux prévisionnistes océaniques de créer facilement leur propre environnement d'analyse en facilitant l'accès à un large panel de services à la demande. 
    Ceci permettant ainsi le développement futur de modèles et de produits de données vers des jumeaux numériques émergents de l'océan.
    `,
    "Review slide Mercator signature":
      "Chloé Delpont Ramat, Full Stack Dev @ Mercator Ocean International",
    "Review slide Statistic Norway description": `[Statistics Norway](https://www.ssb.no/en) est ravi d'intégrer Onyxia en tant que composant clé de notre plateforme de données. 
    Les capacités d'Onyxia s'alignent parfaitement avec notre mission et ajoutent une valeur substantielle à nos opérations de données. Nous soutenons 
    pleinement Onyxia et offrons tout notre soutien pour sa promotion.`,

    "Review slide Statistic Norway signature":
      "Statistics Norway, l'institut national de statistique de Norvège",

    "Review slide ExpertiseFrance description": `Le  projet datafid, mis en œuvre par [Expertise France, a déployé Onyxia](https://www.expertisefrance.fr/en/fiche-projet?id=850376)  
    pour proposer un datalab aux datascientists des Directions Générales des Impôts et des Douanes de quatre pays de l'Afrique de l'ouest. 
    L’outil  permet à ces administrations de s’exercer à la manipulation de leurs  données pour mieux les comprendre et les valoriser.
    `,
    "Review slide ExpertiseFrance signature": `Expertise France, l'agence française d'expertise technique internationale`,

    "Review slide Genes description": `Onyxia est un atout majeur pour [le Groupe des Écoles Nationales d'Économie et Statistique (GENES)](https://www.groupe-genes.fr) en matière de data science.  
      Au-delà de la simple facilitation d'accès aux outils de traitement de données modernes, Onyxia promeut activement les bonnes pratiques en 
      matière de traitement des données et de programmation, en favorisant la reproductibilité des résultats.  
      Pour les élèves, Onyxia est une opportunité unique d'autoformation. Grâce à son interface intuitive, les étudiants peuvent explorer, expérimenter et 
      approfondir leurs compétences en temps réel, tout en s'adaptant aux standards actuels du monde professionnel.
    `,
    "Review slide Genes signature": `Groupe des Écoles Nationales d'Économie et Statistique (GENES)`,
  },
  LogoCarousel: {
    "read testimonials": "Lire les témoignages",
  },
  /* spell-checker: enable */
};
