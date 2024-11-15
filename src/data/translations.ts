import { Language } from "../types";

export interface Translation {
    [key: string]: string;
}

const translations: Record<Language, Translation> = {
    en: {
        meta_title: "Louis Grasset - Freelance front end web developer",
        meta_description:
            "Louis Grasset, freelance front end web developer. Development tailored to your needs.",
        language_label: "English",
        language_code: "en_US",
        alert_contact_text: "Your message has been sent.",
        modal_contact_title: "Let's break the ice !",
        modal_contact_subtitle:
            "Are you more social medias or contact form? It's up to you.",
        modal_contact_form_firstname: "First name",
        modal_contact_form_lastname: "Last name",
        modal_contact_form_email: "Email",
        modal_contact_form_message: "Message",
        modal_contact_form_submit: "Submit",
        modal_contact_form_form: "Form",
        modal_contact_form_honeypot: "Don’t fill this out if you’re human",
        theme_text_dark: "Toggle light mode",
        theme_text_light: "Toggle dark mode",
        hero_get_cv: "Obtain my CV here",
        hero_title: "Passionate front end web developer. I crunch the web.",
        hero_position: "Currently working as a Software Engineer at",
        hero_cta_primary: "Say hello",
        hero_cta_secondary: "Learn more",
        companies_headline_title: "Companies",
        companies_headline_subtitle: "They trusted me",
        portfolio_headline_title: "Portfolio",
        portfolio_headline_subtitle: "Projects I have worked on",
        portfolio_component_title: "Projects",
        portfolio_open: "See project",
        skills_headline_title: "Skills",
        skills_headline_subtitle: "What I am good at",
        workshop_headline_title: "Workshop",
        workshop_headline_subtitle: "Side projects I worked on",
        studies_headline_title: "Studies",
        studies_headline_subtitle: "This is my academic background",
        studies_mastercim_institution_name: "Lyon's University 2 - ICOM",
        studies_mastercim_label:
            "Master 2 Conception and Multimedia Integration",
        studies_ducci_institution_name: "Lyon's University 2 - ICOM",
        studies_ducci_label: "DU Communication and Infographic Conception.",
        studies_mmi_institution_name: "Toulon's University",
        studies_mmi_label: "DUT Multimedia and Internet jobs",
        studies_baccalaureat_institution_name: "Highschool Edouard Herriot",
        studies_baccalaureat_label: "Scientific Baccalaureate (SVT)",
        about_headline_title: "About me",
        about_headline_subtitle:
            "Naturally curious, I'm passionate about the web and particularly the front end part. Web development, graphic design, multimedia production and communication have been an integral part of my studies. I speak French, English and have studied Spanish. My hobbies ?",
        about_footnote_text: "Design inspired by",
        about_footnote_link: "this",
        about_cta_primary: "Get in touch",
        about_cta_navigation: "Go to top",
        toast_translation_title: "English speaking?",
        toast_translation_message: "Click me!",
        carbon_title: "Carbon footprint",
        carbon_attribution: "Provided by",
        carbon_of: "of",
        carbon_view: "view",
        carbon_cleaner_than: "Webpage cleaner than",
        carbon_dirtier_than: "Webpage dirtier than",
        carbon_of_tested_pages: "of pages tested",
    },
    fr: {
        meta_title: "Louis Grasset - Développeur web front end freelance",
        meta_description:
            "Louis Grasset, développeur web front end freelance. Développement adapté à vos besoins.",
        language_label: "Français",
        language_code: "fr_FR",
        alert_contact_text: "Votre message a bien été envoyé.",
        modal_contact_title: "Brisons la glace !",
        modal_contact_subtitle:
            "Vous êtes plutôt réseaux sociaux ou formulaire ? C'est comme vous préférez.",
        modal_contact_form_firstname: "Prénom",
        modal_contact_form_lastname: "Nom",
        modal_contact_form_email: "Email",
        modal_contact_form_message: "Message",
        modal_contact_form_submit: "Envoyer",
        modal_contact_form_form: "Formulaire",
        modal_contact_form_honeypot:
            "Ne remplissez pas ce champ si vous êtes humain.",
        theme_text_dark: "Activer le mode clair",
        theme_text_light: "Activer le mode sombre",
        hero_get_cv: "Obtenir mon CV ici",
        hero_title: "Développeur web front end passionné. Je croque le web.",
        hero_position: "Actuellement en poste de Software Engineer chez",
        hero_cta_primary: "Dire bonjour",
        hero_cta_secondary: "En savoir plus",
        companies_headline_title: "Entreprises",
        companies_headline_subtitle: "Elles m'ont fait confiance",
        portfolio_headline_title: "Réalisations",
        portfolio_headline_subtitle: "Projets sur lesquels j'ai travaillé",
        portfolio_component_title: "Projets",
        portfolio_open: "Voir le projet",
        skills_headline_title: "Compétences",
        skills_headline_subtitle: "Ce que je sais faire",
        workshop_headline_title: "Atelier",
        workshop_headline_subtitle:
            "Projets annexes sur lesquels j'ai travaillé",
        studies_headline_title: "Etudes",
        studies_headline_subtitle: "Voici mon parcours",
        studies_mastercim_institution_name: "Université Lyon 2 - ICOM",
        studies_mastercim_label:
            "Master 2 Conception et Intégration Multimédia",
        studies_ducci_institution_name: "Université Lyon 2 - ICOM",
        studies_ducci_label: "DU Communication et Conception Infographiques",
        studies_mmi_institution_name: "Université de Toulon",
        studies_mmi_label: "DUT Métiers du Multimédia et de l'Internet",
        studies_baccalaureat_institution_name: "Lycée Edouard Herriot",
        studies_baccalaureat_label: "Baccalauréat Scientifique (SVT)",
        about_headline_title: "A propos",
        about_headline_subtitle:
            "Curieux de nature, je suis passionné par le web et particulièrement son aspect front end. Développement web, conception graphique, production multimédia et communication ont fait partie intégrante de mes études. Je parle français, anglais et ai étudié l'espagnol. Mes hobbies ?",
        about_footnote_text: "Design inspiré par",
        about_footnote_link: "ceci",
        about_cta_primary: "Prendre contact",
        about_cta_navigation: "Aller en haut",
        carbon_title: "Empreinte carbon",
        carbon_attribution: "Fourni par",
        carbon_of: "de",
        carbon_view: "vue",
        carbon_cleaner_than: "Page web plus légère que",
        carbon_dirtier_than: "Page web plus lourde que",
        carbon_of_tested_pages: "des pages testées",
    },
};

export default translations;
