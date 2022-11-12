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

    caixaMagicaSoftware: () => "https://www.caixamagica.pt/",
    happyCodePortugal: () => "https://www.happycode.pt/",
    betacode: () => "https://www.betacode.tech/",
    forallPhones: () => "https://forallphones.pt/"
};