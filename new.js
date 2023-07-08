let title = document.getElementById('title')
let task = document.getElementById('task')
let empty = document.getElementById('empty')
let dolar=document.getElementById('dolar')
let reyal=document.getElementById('reyal')
let clear=document.getElementById('clear')


function data() {
    empty.innerHTML=''

}
   
   
    dolar.onclick = function () {
        if (title.value!='') {
            empty.innerHTML = title.value * 40
            
           
        } else {
            empty.innerHTML=''
        }
    }

reyal.onclick = function () {
    if (title.value!='') {
        empty.innerHTML = title.value *10 
        
    } else {
        empty.innerHTML=''
    }
}

clear.onclick = function () {
    title.value = ''
    empty.innerHTML=''
}