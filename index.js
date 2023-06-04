
function output(input){
    let text = document.getElementById("out")
    let ut = text.value
    document.body.style.background=ut
    if (input=="black") {
        document.body.style.color="white"
    }else if(input=="white"){
        document.body.style.color="black"
    }else(
       document.body.style.background=ut
    )
}

function Show(){
    document.getElementById("idshow").innerHTML = "My BGMI ID Is : 5205863993"
}