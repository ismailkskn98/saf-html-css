//! Selectors
const mobilMenuOpen = document.querySelector('.mobil-menu-open');
const mobilMenuClose = document.querySelector('.closebtn');
//! Events
// mobil menu açma kapama
mobilMenuOpen.addEventListener('click', openNav);
mobilMenuClose.addEventListener('click', closeNav);
//! Function

// mobil menu 
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
}
// mobil menu 
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}