const bar = document.getElementById("bar")
const menu= document.getElementById("menu")

if (bar) {
   bar.addEventListener("click", ()=> {
    menu.classlist.toggle("active");

    });
}