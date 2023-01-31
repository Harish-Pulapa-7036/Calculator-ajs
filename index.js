let inputtext=document.getElementById("inputtext")
let result=document.getElementById("result")
let clear=document.getElementById("clear")


function dis(val){
    inputtext.value+=val
}
result.addEventListener('click',()=>{
    inputtext.value=eval(inputtext.value)

})
clear.addEventListener('click',()=>{
    inputtext.value=""
})