function toggleMenu() {
    const menuBox = document.getElementById('menu-box');
    if (menuBox.style.display === 'flex') {
        // If the menu is displayed, hide it
        menuBox.style.display = 'none';
    } else {
        // If the menu is hidden, display it
        menuBox.style.display = 'flex';
    }
}