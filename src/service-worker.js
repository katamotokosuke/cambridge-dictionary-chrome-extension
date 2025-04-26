chrome.action.onClicked.addListener(redirectOfficialSite);

const ORIGIN_URL = "https://dictionary.cambridge.org";
async function redirectOfficialSite() {
    chrome.tabs.create({ url: ORIGIN_URL });
}
