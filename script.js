const checkbox = document.getElementById("checkbox");
const submitButton = document.querySelector('button[type=submit]')

//disabled checkbox
checkbox.disabled = true;
submitButton.disabled = true;

const elements = document.querySelectorAll(".element");
const selectColor = document.getElementById('selectColor');

//Assign colors to the elements
elements.forEach(function(element){
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.innerHTML = color;
    selectColor.innerHTML = color;
})
//generates random color
function getRandomColor(){
    const letter = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += letter[Math.floor(Math.random()*16)]
    }
    return color;
}
//check if right color
elements.forEach(function(element){
    element.addEventListener('click',function(){
        if(element.innerHTML == selectColor.innerHTML){
            checkbox.checked = true
            //alert("You are a human!")
            submitButton.disabled = false
            submitButton.classList.remove("btn-light");
            submitButton.classList.add("btn-success");
        }
        else{
            alert("please verify that you are a human!")
            location.reload(true)
        }
    })
})