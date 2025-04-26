const ROOT_URL = "https://dictionary.cambridge.org/dictionary/english/";
// this variable will be true when double click event hired,
// but if other event hired,  for example click event, it will be false.
let doubleClicked = false;

/**
 * It's supposed to listen dblclick event.
 * If event was hire, a popup will appear at near the clicked location
 */
document.addEventListener("dblclick", (event) => {
    const selectedText = window.getSelection().toString().trim();
    if (selectedText === "") {
        return;
    }
    doubleClicked = true;
    const [x, y] = estimateBubbleCoordinate(event);
    document.body.insertAdjacentHTML("beforeend", bubbleElement(x, y, selectedText));
});

document.addEventListener("click", function () {
    if (doubleClicked) {
        doubleClicked = false;
        const bubbleRoot = document.getElementById("cdic-root");
        bubbleRoot.remove();
    }
});

const bubbleElement = function (x, y, word) {
    const extensionId = chrome.runtime.id;
    const iconImageAbsUrl = `chrome-extension://${extensionId}/images/icon.png`;
    return `
<a id="cdic-root" href = ${generateUrl(word)} target="_blank">
    <div id="cdic-bubble" style="position: absolute; left: ${x}px; top: ${y}px">
        <div id="cdic-icon" style="background-image: url(${iconImageAbsUrl});"></div>
    </div>
</a>
    `;
};

const estimateBubbleCoordinate = function (event) {
    const x = event.pageX;
    const y = event.pageY;
    return [x, y];
};

const generateUrl = function (word) {
    return ROOT_URL + "/" + word;
};
