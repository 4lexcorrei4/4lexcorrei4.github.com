export const internalUrls = {
    home: () => "/",
    profile: () => "/profile",
    skills: () => "/skills",
    work: () => "/work",
    projects: () => "/projects",
    projectThesis: () => internalUrls.projects() + "/thesis",
    projectSimuladorHorarios: () => internalUrls.projects() + "/simulador-horarios",
    projectAquariumManagement: () => internalUrls.projects() + "/aquarium-management",
    projectCLIPCadeiras: () => internalUrls.projects() + "/clip-cadeiras",
    projectFashionProductSearch: () => internalUrls.projects() + "/fashion-product-search",
    projectSamucarWebsite: () => internalUrls.projects() + "/samucar-website",
    projectWordBucket: () => internalUrls.projects() + "/wordbucket"
};

export const externalUrls = {
    currentPosition: () => "https://www.di.fct.unl.pt/ensino/mestrado-em-engenharia-informatica/estrutura-curricular-do-mei",
    currentCompany: () => "https://www.fct.unl.pt/",

    happyCodePortugal: () => "https://www.happycode.pt/",
    betacode: () => "https://www.betacode.tech/",
    forallPhones: () => "https://forallphones.pt/"
};