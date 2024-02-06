const menuBtn = document.getElementById('menuBtn');
const sideNav = document.getElementById('sideNav');

menuBtn.addEventListener('click', () => {
    if (sideNav.style.right == '-300px') {
        sideNav.style.right = '0px';
    }
    else {
        console.log(false)
        sideNav.style.right = '-300px';
    }
})