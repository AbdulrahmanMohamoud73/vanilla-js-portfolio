const input = document.querySelectorAll(".contact-input");

input.forEach((inpt) => {
    
    inpt.addEventListener("focus", () => { 

        inpt.parentNode.classList.add("focus");
        inpt.parentNode.classList.add("not-empty");

    })

    inpt.addEventListener("blur", () => { 
        if(inpt.value === ""){
            inpt.parentNode.classList.remove("not-empty");
        }
        
        inpt.parentNode.classList.remove("focus");

    })

})
