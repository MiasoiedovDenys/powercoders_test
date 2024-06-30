document.addEventListener("DOMContentLoaded", function () {
    const image = document.querySelector(".logo-image");
    const mainFlex = document.querySelector(".main-flex");

    image.addEventListener("click", function () {
        if (mainFlex.firstElementChild === image.parentElement) {
            mainFlex.appendChild(image.parentElement);
        } else {
            mainFlex.appendChild(document.querySelector(".main-flex-text"));
            mainFlex.insertBefore(image.parentElement, mainFlex.querySelector(".main-flex-text"));
        }
    });
});