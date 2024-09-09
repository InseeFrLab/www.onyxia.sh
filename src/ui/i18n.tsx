import { createI18nApi } from "i18nifty";
import MuiLink from "@mui/material/Link";
export { declareComponentKeys } from "i18nifty";

export const languages = ["en", "fr"] as const;

export const fallbackLanguage = "fr";

export type Language = typeof languages[number];

export const {
    useTranslation,
    resolveLocalizedString,
    useLang,
    useResolveLocalizedString,
} = createI18nApi<
    | typeof import("./App").i18n
    | typeof import("./pages/Home/Home").i18n
    | typeof import("./pages/Home/LogoCarousel").i18n
    | typeof import("./pages/FourOhFour").i18n
>()(
    {
        languages,
        fallbackLanguage,
    },
    {
        "en": {
            "App": {
                "contact": "Contact us",
                "documentation": "Documentation",
                "it is libre software dialog title": "It's libre software",
                "it is libre software dialog body": ({ licenseUrl, inseeUrl }) => (
                    <>
                        Onyxia is a free and open-source software <MuiLink href={licenseUrl}>under MIT</MuiLink>.<br/>
                        It is developed by <MuiLink href={inseeUrl}>INSEE</MuiLink> along with other contributors for use in European public services.<br/>
                        You are free to use, modify, or redistribute it. Contributions are also welcome!
                    </>
                ),
                "pricing": "Pricing",
                "our instance": "Our instance",
                "ok": "Ok",
                "edit this website": "Edit this website",
            },
            "Home": {
                "orange title": "The modern datascience stack made accessible",
                "Onyxia in action": "Onyxia in action",
                "subTitle":
                    "Pool computing resources and provide a state of the art work environment to your data scientists without relying on big tech closed-source software.",
                "what is onyxia title": "What is Onyxia?",
                "what is onyxia body": `Onyxia enables data scientists to work with modern cloud based technologies even 
                    if they are not well versed into computing.  
                    At its core Onyxia is a web UI that turns a helm chart repo into a catalog of services.
                    Onyxia enables to provide your data scientists with a nice and intuitive interface for launching [containers](https://wwww.docker.com/) like [Spark, RStudio or Jupyter](https://datalab/sppcloud.fr/catalog).  
                    On top of that Onyxia features a tight S3 integration via [MinIO](https://min.io/) or [Amazon S3](https://aws.amazon.com/s3/).`,
                "install now": "Access the deployment guide",
                "article 1 title": "Build your catalog of services or use the builtin one",
                "article 1 body": `Build a custom offer of services by setting up 
                    your own depot of Helm charts. All is [well documented](https://docs.onyxia.sh/contributing/catalog-of-services).  
                    You can also opt for using [the default catalog](https://datalab.sspcloud.fr/catalog).`,
                "article 2 title": `Services configurations`,
                "article 2 body": `Onyxia automatically generates a form from the Helm chart that enables users to configure their services.
                    As an Onyxia administrator you can also decide to pre fill some values based on what is known about the user.  
                    This mechanism enables for example to inject the correct environment variables so that the user can easily connect to his S3 bucket within his service.`,

                "article 3 title": `Versatile and secure authentication`,
                "article 3 body": `Onyxia is distributed with a Keycloak login theme. 
                    Easily restrict who can use your platform with an email domain accept list.`,


                "bp title 1": "We are not trying to lock you in, we are trying to free you out.",
                "bp description 1": `Onyxia makes it very transparent what are the command executed on the 
                    cluster on the behalf of the user. We are looking to build trust and 
                    understanding in the underlying technologies.`,

                "bp title 2": `S3 file explorer`,
                "bp description 2": `Onyxia enables to drag and drop files to be uploaded on S3. The files 
                    are then readily accessible within the services.`,

                "bp title 3": `[HashiCorp Vault](https://www.vaultproject.io) integration`,
                "bp description 3": `Onyxia provides a safe storage space for storing critical information like API keys.  
                    Theses sensitive information are injected in the services under the form of environment variables.`,

                "bp title 4": `Apply your own branding`,
                "bp description 4": `Onyxia enables to customize the default look and information displayed there and there 
                    without having to change to fork the code. Look for example how different looks [this instance from Etalab](https://sill-demo.etalab.gouv.fr/catalog/helm-charts-sill).`,

                "bp title 5": "Great for education ",
                "bp description 5": `Onyxia enables you to generate links that start a service just by clicking them.  
                    It is used to create training catalogs such as [this one](https://www.sspcloud.fr/formation).`,

                "bp title 6": "Technology agnostic",
                "bp description 6": `By making the choice of Onyxia you aren't gambling on one specific stack being the future of Data science.  
                Onyxia lets you leverage any technology as long as it is cloud native (containerized using HTTP).`,

                "bp title 7": "Work groups",
                "bp description 7": "Multiple users can collaborate on a project, share services and S3 buckets.",

                "bp title 8": "Open source",
                "bp description 8": `Onyxia is fully open source and well documented. Feel free to [get involved in the development](https://docs.onyxia.sh/contributing)!`,

                "They have their own Onyxia Datalab": "They have an Onyxia Datalab",
                "Review slide insee description": `True innovation is making something almost impossible simple.  
                This is the very essence of Onyxia, which makes it possible for a wide range of people to set up sophisticated data science 
                environments on demand.  
                I am extremely proud that [INSEE](https://www.insee.fr/en) initiated the development of this software and continues 
                to be a major contributor, but also excited that a community is coming together to collectively enrich its features.`,
                "Review slide insee signature": "Jean-Séverin Lair,  of INSEE",

                "Review slide Mercator description": `[Mercator Ocean International](https://www.mercator-ocean.eu/) is a non-profit organisation providing ocean science-based 
                services of general interest focused on the conservation and the sustainable use of the ocean and marine resources. Onyxia datalab 
                allows ocean forecasters to easily create their own analysis environment by facilitating access to a large panel of on-demand services. 
                Thus enabling further development of models and data products towards emerging digital twins of the ocean.
                `,
                "Review slide Mercator signature": "Chloé Delpont Ramat, Full Stack Dev @ Mercator Ocean International",
                
                "Review slide Statistic Norway description": `[Statistics Norway](https://www.ssb.no/en) is thrilled to integrate Onyxia as a key component in our Data platform. 
                Onyxia's capabilities align well with our mission and add substantial value to our data operations. We wholeheartedly endorse Onyxia and offer our full support for its promotion.`,  
                
                "Review slide Statistic Norway signature": "Statistics Norway, the national statistical institute of Norway",

                "Review slide ExpertiseFrance description": `The datafid project, implemented by [Expertise France, deployed Onyxia](https://www.expertisefrance.fr/en/fiche-projet?id=850376) 
                    to provide a datalab for the data scientists of the General Directorates of Taxes and Customs of four West African countries. 
                    The tool allows these administrations to practice manipulating their data to better understand and value it.
                `,
                "Review slide ExpertiseFrance signature": `Expertise France, the French agency for international technical expertise`,

                "Review slide Genes description": `Onyxia is a major asset for [the National Schools of Economics and Statistics Group (GENES)](https://www.groupe-genes.fr) in the field of data science.  
                    Beyond simply facilitating access to modern data processing tools, Onyxia actively promotes best practices in data processing and programming, encouraging reproducibility of results.  
                    For students, Onyxia is a unique self-training opportunity. With its intuitive interface, students can explore, experiment, and deepen their skills in real-time, while adapting to current professional world standards.
                `,
                "Review slide Genes signature": `National Schools of Economics and Statistics Group (GENES)`

            },
            "LogoCarousel": {
                "read testimonials": "Read testimonials",
            },
            "FourOhFour": {
                "not found": "Page not found",
            },
        },
        /* spell-checker: disable */
        "fr": {
            "App": {
                "contact": "Contacter l'équipe",
                "documentation": "Documentation",
                "it is libre software dialog title": "C'est un logiciel libre",
                "it is libre software dialog body": ({ licenseUrl, inseeUrl }) => (
                    <>
                        Onyxia est un logiciel libre et open source <MuiLink href={licenseUrl}>sous licence MIT</MuiLink>.<br/>
                        Il est développé par l'<MuiLink href={inseeUrl}>INSEE</MuiLink> ainsi que par d'autres contributeurs pour une utilisation dans les services publics européens.<br/>
                        Vous êtes libre de l'utiliser, de le modifier ou même de le redistribuer. Les contributions sont également les bienvenues !
                    </>
                ),
                "pricing": "Tarification",
                "our instance": "Notre instance",
                "ok": "D'accord",
                "edit this website": "Modifier ce site",
            },
            "Home": {
                "orange title": "La stack data science moderne rendue accessible",
                "Onyxia in action": "Onyxia en action",
                "subTitle":
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

                "article 3 title": `Un système d'authentification versatile`,
                "article 3 body": `Onyxia s'intègre avec Keycloak via OpenID Connect. Restreignez 
                    l'inscription aux services aux utilisateurs détenteurs d'un email d'un domaine spécifique.  
                    Onyxia est distribué avec un thème Keycloak pour offrir une expérience utilisateur 
                    homogène.`,

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
                    Modifiez le thème, le lien et le logo de l'entête sans avoir à toucher au code source d'Onyxia. Mais uniquement
                    en modifiant les paramètres de votre instance. [Example du customization](https://sill-demo.etalab.gouv.fr/catalog/helm-charts-sill).`,

                "bp title 5": "Un environnement de formation",
                "bp description 5": `Onyxia permet de générer des liens de lancement de service.  
                    Cette fonctionalité peut être utilisée pour créer des catalogues de formations comme [celui-là](https://www.sspcloud.fr/formation).`,

                "bp title 6": "Technologiquement agnostique",
                "bp description 6": `Avec Onyxia vous n'investissez pas sur une stack technique en particulier sauf Kubernetes et S3.
                Onyxia permet de rendre accessible n'importe quelle technologie cloud native et ne génére 
                donc pas de potentielle dette technique future.`,

                "bp title 7": "Projets",
                "bp description 7": `Plusieurs utilisateurs peuvent collaborer sur un même projet,
                    partager des services et un même bucket S3`,

                "bp title 8": "Open source",
                "bp description 8": `Onyxia est un logiciel libre, 
                    [bien documenté](https://docs.onyxia.sh/) et sous [license MIT](https://github.com/InseeFrLab/onyxia-web/blob/main/LICENSE).
                    Sentez-vous libre de [participer a son développement](https://docs.onyxia.sh/contributing)!`,
                

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
                "Review slide Mercator signature": "Chloé Delpont Ramat, Full Stack Dev @ Mercator Ocean International",
                "Review slide Statistic Norway description": `[Statistics Norway](https://www.ssb.no/en) est ravi d'intégrer Onyxia en tant que composant clé de notre plateforme de données. 
                Les capacités d'Onyxia s'alignent parfaitement avec notre mission et ajoutent une valeur substantielle à nos opérations de données. Nous soutenons 
                pleinement Onyxia et offrons tout notre soutien pour sa promotion.`,
                
                "Review slide Statistic Norway signature": "Statistics Norway, l'institut national de statistique de Norvège",

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
                "Review slide Genes signature": `Groupe des Écoles Nationales d'Économie et Statistique (GENES)`

            },
            "LogoCarousel": {
                "read testimonials": "Lire les témoignages",
            },
            "FourOhFour": {
                "not found": "Page non trouvée",
            },
        },
    },
    /* spell-checker: enable */
);
