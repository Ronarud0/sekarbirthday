function goBack() {
    window.history.back();
}

// Animasi interaktif pada nama
document.addEventListener("DOMContentLoaded", () => {
    let nameElement = document.querySelector(".name");
    nameElement.addEventListener("mouseover", () => {
        nameElement.style.transform = "rotate(-2deg) scale(1.1)";
    });

    nameElement.addEventListener("mouseout", () => {
        nameElement.style.transform = "rotate(0deg) scale(1)";
    });

    // Efek love muncul setiap klik
    document.body.addEventListener("click", (e) => {
        let heart = document.createElement("div");
        heart.innerHTML = "❤️";
        heart.classList.add("floating-heart");
        heart.style.left = `${e.clientX}px`;
        heart.style.top = `${e.clientY}px`;
        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2000);
    });
});
