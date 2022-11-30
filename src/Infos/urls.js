export const internalUrls = {
    home: () => "/",
    profile: () => "/profile",
    skills: () => "/skills",
    work: () => "/work",
    projects: () => "/projects",
    project: (codename) => `${internalUrls.projects()}/${codename}`
};

export const externalUrls = {
    currentCompany: () => externalUrls.caixaMagicaSoftware(),

    caixaMagicaSoftware: () => "https://www.caixamagica.pt",
    happyCodePortugal: () => "https://www.happycode.pt",
    betacode: () => "https://www.betacode.tech",
    forallPhones: () => "https://forallphones.pt",

    projectWordbucket: () => "https://word-bucket.com",
    projectSamucar: () => "https://samucar.pt",
    projectCLIPCadeiras: () => "https://clipcadeiras.bitsys.tech",
    projectSimuladorHorarios: () => "https://horarios.bitsys.tech",
    projectThesis: () => "https://ifetch-chatbot.github.io"
};