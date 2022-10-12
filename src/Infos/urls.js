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
    currentCompany: () => externalUrls.caixaMagicaSoftware(),

    caixaMagicaSoftware: () => "https://www.caixamagica.pt/",
    happyCodePortugal: () => "https://www.happycode.pt/",
    betacode: () => "https://www.betacode.tech/",
    forallPhones: () => "https://forallphones.pt/"
};