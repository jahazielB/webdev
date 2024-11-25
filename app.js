const button = document.querySelectorAll("button");

button.forEach((node)=>{node.addEventListener("click",function(){
    let screen = document.querySelector("input")
    let text = node.innerHTML;
    if (text == "C"){
        text = ""
        let appear = screen.value += text
        screen.value = appear.slice(0,(appear.length-1))
    }else if(text == "CE"){
        screen.value = ""
    }else if(text == "="){
        text == ""
        screen.value = (equals(screen.value))
        
    }
    else{
        let num = screen.value += text
        console.log((num))
    }
})})



function equals(num){

    return eval(num)
}



