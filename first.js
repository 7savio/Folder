let i_status = document.querySelector("h5")
let btn = document.querySelector("#add")
let check = 0

btn.addEventListener("click",function(){
    if(check==0){
        i_status.innerHTML = "Friends"
        i_status.style.color = "green"
        btn.style.color = "green"
        btn.style.backgroundColor = "#dadada"
        btn.innerHTML = "Remove"
        check = 1
    }else{
        i_status.innerHTML = "Stranger"
        i_status.style.color = "red"
        btn.style.color = "black"
        btn.style.backgroundColor = "lightblue"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})
