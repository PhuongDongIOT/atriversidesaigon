function toggleDropdown(id) {
    const dropdown = document.getElementById(id);
    dropdown.classList.toggle('hidden');
}

const roomItems = document.querySelectorAll('.room-item');
const floorplanImage = document.getElementById('floorplanImage');

roomItems.forEach(item => {
    item.addEventListener('click', () => {
        const imgFile = item.getAttribute('data-img');
        floorplanImage.src = `./assets/images/${imgFile}`;

        roomItems.forEach(i => i.classList.remove('text-[#3e2a1d]', 'font-medium'));
        item.classList.add('text-[#3e2a1d]', 'font-medium');
    });
});
