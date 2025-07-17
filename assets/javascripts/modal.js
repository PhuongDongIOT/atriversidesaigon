const modal = document.getElementById("modal");

function openModal() {
    modal.classList.remove("hidden");
    gsap.fromTo(modal,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 0.5, ease: "power2.out" }
    );
}

function closeModal() {
    gsap.to(modal, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
            modal.classList.add("hidden");
        }
    });
}