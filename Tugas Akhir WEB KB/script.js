const navBar = document.querySelector(".navbar");

window,addEventListener("scroll", () => {
    const positionwindow = window.scrollY > 0;
    navBar.classList.toggle("scrolling-active", positionwindow);
})