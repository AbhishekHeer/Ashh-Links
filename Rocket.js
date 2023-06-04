let in1 = document.getElementById("in1");
let te1 = document.getElementById("te1")
in1.addEventListener("click", () => {  
     in1.classList.remove("bg-transparent")
    te1.style.color = "black"; in2.classList.add("bg-transparent")
     in3.classList.add("bg-transparent")
     in4.classList.add("bg-transparent")
});



let in2 = document.getElementById("in2")
in2.addEventListener("click", () => {  
     in1.classList.add("bg-transparent")
   te1.style.color = "white";  in2.classList.remove("bg-transparent")
     in3.classList.add("bg-transparent")
   te1.style.color = "white";  in4.classList.add("bg-transparent")
});

let in3 = document.getElementById("in3");
in3.addEventListener("click", () => {  
   te1.style.color = "white";  in1.classList.add("bg-transparent")
     in2.classList.add("bg-transparent")
     in3.classList.remove("bg-transparent")
     in4.classList.add("bg-transparent")
});

let in4 = document.getElementById("in4");
in4.addEventListener("click", () => {  
     in1.classList.add("bg-transparent")
     in2.classList.add("bg-transparent")
     in3.classList.add("bg-transparent")
     in4.classList.remove("bg-transparent")
});
