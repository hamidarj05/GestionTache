const listeTache = document.getElementById("taches")
listeTache.style.listStyle = "none" 
let taches = []
for (let i = 0 ; i <= window.localStorage.length ;i++ ){
    const tache = window.localStorage.getItem(localStorage.key(i))
    if(!localStorage.key(i)){
        break
    }
    if (tache == "") {
        break
    }
    const li = document.createElement("li")  
    const div = document.createElement("div")  
    div.style.float = "right"
    var span = document.createElement("span")
    span.style.color = "green"
    span.style.cursor = "pointer"
    span.textContent = "✔"
    span.className = "me-2" 
    span.addEventListener("click",()=>{
        tacheDone(li)
    })
    div.appendChild(span)
    var span = document.createElement("span")
    span.style.color = "red"
    span.style.cursor = "pointer"
    span.textContent = "✖"  
    span.addEventListener("click",()=>{
        if(window.confirm("Wach Mt2akad baghi tmsa7 Tache!!!!")){
            window.localStorage.removeItem(tache)
            deleteTache(li)
        }
    })
    div.appendChild(span)
    li.className = "tache"
    li.textContent = tache
    li.appendChild(div)
    listeTache.appendChild(li)

}


function AjouterTache(){ 
    const tache = document.getElementById("tache").value
    if(tache.trim() === ""){
        alert("Kttb Chi7aja '-' ")
    }else{ 
        const li = document.createElement("li")  
        const div = document.createElement("div")  
        div.style.float = "right"
        var span = document.createElement("span")
        span.style.color = "green"
        span.style.cursor = "pointer"
        span.textContent = "✔"
        span.className = "me-2" 
        span.addEventListener("click",()=>{
            tacheDone(li)
        })
        div.appendChild(span)
        var span = document.createElement("span")
        span.style.color = "red"
        span.style.cursor = "pointer"
        span.textContent = "✖"  
        window.localStorage.setItem(tache,tache)
        span.addEventListener("click",()=>{
            if(window.confirm("Wach Mt2akad baghi tmsa7 Tache!!!!")){
                window.localStorage.removeItem(tache)
                deleteTache(li)
            }
        })
        div.appendChild(span)
        li.className = "tache"
        li.textContent = tache
        li.appendChild(div)
        listeTache.appendChild(li)
    }
    document.getElementById("tache").value = ""
}

function tacheDone(li){
    li.style.textDecoration = "line-through"
    li.style.color = "green "
}
function deleteTache(li){
    listeTache.removeChild(li)
}

// By Hamid
