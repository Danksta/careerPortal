nav = document.getElementById('nav');
body = document.getElementsByTagName("body");
changeTheme = document.querySelector('changeTheme');

nav.addEventListener('click', () => {
    //nav.textContent = nav.textContent
});
$('#profileImage')
    .dimmer({
        on: 'hover'
    });
changeTheme.addEventListener('click', () => {
    body.style.color = "background: linear-gradient(to right, #636363, #a2ab58);"
});
