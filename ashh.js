let lightmode = document.querySelector("#light")
const text = document.getElementsByClassName("text")

lightmode.addEventListener("click",function() {
    document.body.style.backgroundColor = "#333"
    document.body.style.color = "white"
})


 let darkmode = document.querySelector("#dark")
darkmode.addEventListener("click",function() {
    document.body.style.backgroundColor = "white"
 document.body.style.color = "black"
}) 

/* Loading */


setTimeout(function(){
    let load = document.getElementById("load")
 load.style.display = "none"
 load.style.visibility = "hidden"
},7000)


/* about Upload */

setTimeout(()=>{
    let Loading = document.getElementById("about")
    Loading.style.display = "block"
},7000)