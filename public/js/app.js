navi = document.getElementById("nav");
bodytag = document.getElementsByTagName("body");
changeTheme = document.getElementById('changeTheme');
console.log(navi)
window.onload = function(){
    navi.addEventListener('click', () => {
        //nav.textContent = nav.textContent
    });
    changeTheme.addEventListener('click', () => {
        colors = ["background: linear-gradient(to right, #ff4b1f, #1fddff);","background: linear-gradient(to right, #bdc3c7, #2c3e50); ","background: linear-gradient(to right, #dbe6f6, #c5796d);","background: linear-gradient(to right, #43c6ac, #191654);","background: linear-gradient(to right, #4ac29a, #bdfff3);","background: linear-gradient(to right, #c0392b, #8e44ad);","background: linear-gradient(to right, #659999, #f4791f);", "background: linear-gradient(to right, #636363, #a2ab58);", "background: linear-gradient(to right, #636363, #a2ab58);" ]
        bodytag[0].style = colors[Math.floor(Math.random() * colors.length)]
    });

}
$('#profileImage')
    .dimmer({
        on: 'hover'
    });


$('.special.cards .image').dimmer({
    on: 'hover'
});
