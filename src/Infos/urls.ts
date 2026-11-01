export const internalUrls = {
    home: () => "/",
    me: () => "/me",
    about: () => "/about",
    profile: () => "/profile",
    jobs: () => "/jobs",
    projects: () => "/projects",
    project: (codename: string) => `${internalUrls.projects()}/${codename}`,
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
    projectSamucar: () => "https://samucar.pt",
    projectThesis: () => "https://ifetch-chatbot.github.io",
    projectDigitarq: () => "https://digitarq.arquivos.pt",
    projectAqua2Value: () => "https://waste-to-value-ui-szadzmna2a-ew.a.run.app"
};