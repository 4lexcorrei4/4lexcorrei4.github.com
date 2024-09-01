export const internalUrls = {
    home: () => "/",
    profile: () => "/profile",
    skills: () => "/skills",
    work: () => "/work",
    projects: () => "/projects",
    project: (codename) => `${internalUrls.projects()}/${codename}`
};

export const externalUrls = {
    fctNova: () => "https://www.fct.unl.pt",
    skyPortugal: () => "https://www.skygroup.sky",
    caixaMagicaSoftware: () => "https://www.caixamagica.pt",
    happyCodePortugal: () => "https://www.happycode.pt",
    betacode: () => "https://www.betacode.tech",
    forallPhones: () => "https://forallphones.pt",

    projectHappyCode: () => "https://www.happycode.pt",
    projectForallFamily: () => "https://www.forallfamily.com",
    projectWordbucket: () => "https://word-bucket.com",
    projectSamucar: () => "https://samucar.pt",
    projectCLIPCadeiras: () => "https://clipcadeiras.bitsys.tech",
    projectSimuladorHorarios: () => "https://horarios.bitsys.tech",
    projectThesis: () => "https://ifetch-chatbot.github.io",
    projectDigitarq: () => "https://digitarq.arquivos.pt"
};