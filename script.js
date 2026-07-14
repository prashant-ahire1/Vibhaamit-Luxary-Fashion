
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelector(".hero button").onclick = () => {
    document.querySelector(".mens").scrollIntoView({
        behavior: "smooth"
    });
};

const accordionItems = document.querySelectorAll(".accordion-item");

accordionItems.forEach((item) => {

    const header = item.querySelector(".accordion-header");

    header.addEventListener("click", () => {

        accordionItems.forEach((accordion) => {

            if (accordion !== item) {
                accordion.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});