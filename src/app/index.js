document.addEventListener('DOMContentLoaded', ()=>{

    let open = document.getElementById ('open')    
    let show = document.getElementById ('show')
    let close = document.getElementById ('close')
        
    open.addEventListener('click', ()=> {
    
        console.log("i was clicked")
    show.style.width = "75%"
    })
    
    close.addEventListener('click', ()=> {
    
        console.log("i was clicked")
        show.style.width = "0"
    })
    
    })