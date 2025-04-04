function setLocalStorage(page) {
    localStorage.setItem("Page", page);
}

function getLocalStorage() {
    return localStorage.getItem("Page") || "Home";
}

function setLocalArrayNames(namesArray) {
    localStorage.setItem("NameList", JSON.stringify(namesArray.join(", ")));
}

function getLocalArrayNames() {
    return JSON.parse(localStorage.getItem("NameList")) || "";
}