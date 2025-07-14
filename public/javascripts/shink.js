const header = document.getElementById('header');
const headerContainer = document.getElementById('headerContainer');
const logoImgs = document.querySelectorAll('.logo-img');

let isShrunk = false;

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 50 && !isShrunk) {
        isShrunk = true;

        gsap.to(headerContainer, { paddingTop: 10, paddingBottom: 10, duration: 0.4 });
        gsap.to(logoImgs, { width: '64px', height: '64px', duration: 0.4, ease: 'power2.out' });

    } else if (scrollY <= 50 && isShrunk) {
        isShrunk = false;

        gsap.to(headerContainer, { paddingTop: 24, paddingBottom: 24, duration: 0.4 });
        gsap.to(logoImgs, { width: '96px', height: '96px', duration: 0.4, ease: 'power2.out' });
    }
});