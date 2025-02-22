/*===== Resize NavBar with Scroll =====*/
var NavBar = document.querySelector(".NavBar");
window.onscroll = () =>{
    this.scrollY > 20 ? NavBar.classList.add("sticky") : NavBar.classList.remove("sticky");
    
}
