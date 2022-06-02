const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})


document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "(708) 539-9556";
}

document.getElementById("demo2").onclick = function() {myFunction2()};

function myFunction2() {
  document.getElementById("demo2").innerHTML = "(708) 539-9556";
}

