import type { Translations } from "../types";

export const translations: Translations<"en"> = {
  Header: {
    contact: "Contact us",
    "our instance": "Our instance",
    documentation: "Documentation",
  },
  Footer: {
    "edit this website": "Edit this website",
  },
  Body: {
    "orange title": "The modern data science stack made accessible",
    "Onyxia in action": "Onyxia in action",
    subTitle:
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

    "bp title 1":
      "We are not trying to lock you in, we are trying to free you out.",
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
    "Review slide Mercator signature":
      "Chloé Delpont Ramat, Full Stack Dev @ Mercator Ocean International",

    "Review slide Statistic Norway description": `[Statistics Norway](https://www.ssb.no/en) is thrilled to integrate Onyxia as a key component in our Data platform. 
        Onyxia's capabilities align well with our mission and add substantial value to our data operations. We wholeheartedly endorse Onyxia and offer our full support for its promotion.`,

    "Review slide Statistic Norway signature":
      "Statistics Norway, the national statistical institute of Norway",

    "Review slide ExpertiseFrance description": `The datafid project, implemented by [Expertise France, deployed Onyxia](https://www.expertisefrance.fr/en/fiche-projet?id=850376) 
            to provide a datalab for the data scientists of the General Directorates of Taxes and Customs of four West African countries. 
            The tool allows these administrations to practice manipulating their data to better understand and value it.
        `,
    "Review slide ExpertiseFrance signature": `Expertise France, the French agency for international technical expertise`,

    "Review slide Genes description": `Onyxia is a major asset for [the National Schools of Economics and Statistics Group (GENES)](https://www.groupe-genes.fr) in the field of data science.  
            Beyond simply facilitating access to modern data processing tools, Onyxia actively promotes best practices in data processing and programming, encouraging reproducibility of results.  
            For students, Onyxia is a unique self-training opportunity. With its intuitive interface, students can explore, experiment, and deepen their skills in real-time, while adapting to current professional world standards.
        `,
    "Review slide Genes signature": `National Schools of Economics and Statistics Group (GENES)`,
  },
  LogoCarousel: {
    "read testimonials": "Read testimonials",
  },
};
