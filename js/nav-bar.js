import { resaltaSiEstasEn } from "../lib/js/resaltaSiEstasEn.js"

export class NavBar extends HTMLElement {

 connectedCallback() {
  this.classList.add("md-navigation-bar")

  this.innerHTML = /* HTML */`
   <a ${resaltaSiEstasEn(["/index.html", "", "/"])} href="index.html">
    <span class="material-symbols-outlined">home</span>
    Inicio
   </a>

   <a ${resaltaSiEstasEn(["/archivosycamara.html"])} href="archivosycamara.html">
    <span class="material-symbols-outlined">
folder_open
</span>
    Archivos y camara
   </a>

   <a id="navbar" ${resaltaSiEstasEn(["/camara.html"])} href="camara.html">
    <span class="material-symbols-outlined">
photo_camera
</span>
    Camara
   </a>

   <a ${resaltaSiEstasEn(["/ayuda.html"])} href="ayuda.html">
    <span class="material-symbols-outlined">
support_agent
</span>
    Ayuda
   </a>`

 }

}

customElements.define("nav-bar", NavBar)