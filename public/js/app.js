navi = document.getElementById("nav");
bodytag = document.getElementsByTagName("body");
changeTheme = document.getElementById('changeTheme');
window.onload = function(){
    /*navi.addEventListener('click', (e) => {
        /!*e.preventDefault()*!/
        console.log(e.target.id)

        target = document.getElementById(e.target.id)
        window.onload = function(){
        console.log(target)
        target.classList.add('active')}
       /!* $(target).addClass('active')*!//!*
        e.target.className += "active"*!/
        //nav.textContent = nav.textContent
    });*/
    active = function(){
        url  = window.location.href
        arr = url.split('/')
        console.log(arr)
        console.log(arr[arr.length-1])
        try{
            document.getElementById(arr[arr.length-1]).classList.add('active')
        }
        catch{
            document.getElementById('home').classList.add('active')
        }
    }
    active()
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
$('.ui.search')
    .search({
        source: content
    })
;
var content = [
    { title: 'Andorra' },
    { title: 'United Arab Emirates' },
    { title: 'Afghanistan' },
    { title: 'Antigua' },
    { title: 'Anguilla' },
    { title: 'Albania' },
    { title: 'Armenia' },
    { title: 'Netherlands Antilles' },
    { title: 'Angola' },
    { title: 'Argentina' },
    { title: 'American Samoa' },
    { title: 'Austria' },
    { title: 'Australia' },
    { title: 'Aruba' },
    { title: 'Aland Islands' },
    { title: 'Azerbaijan' },
    { title: 'Bosnia' },
    { title: 'Barbados' },
    { title: 'Bangladesh' },
    { title: 'Belgium' },
    { title: 'Burkina Faso' },
    { title: 'Bulgaria' },
    { title: 'Bahrain' },
    { title: 'Burundi' }
    // etc
];