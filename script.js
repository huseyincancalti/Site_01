let originalTitle = document.title;

window.addEventListener("blur", () => {
    document.title = "Come Back 😭";
});

window.addEventListener("focus", () => {
    document.title = originalTitle;
});

document.getElementById("refresh-link").addEventListener("click", (event) => {
    event.preventDefault();
    location.reload();
});
