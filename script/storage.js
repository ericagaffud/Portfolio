function setLocalStorage(page) {
    localStorage.setItem("Page", page);
}

function getLocalStorage() {
    return localStorage.getItem("Page") || "Home";
}