
let countEle = document.getElementById("ele-count")
let count = 0
function increment(){
    count = count + 1
    countEle.innerText = count  
}
let saveEl=document.getElementById("save-el")
function save(){
    let countstr ="" + count + "-"
    saveEl.innerText += countstr
    count = count - count

}