
// =-=-=-=-=- coundown code -=-=-=-=-= \\




let h2 = document.querySelectorAll("h2");



h2.forEach((item)=>{
    let countt = 1;

    let count = setInterval(() => {

        if ( countt <= item.dataset.count) {
            item.innerHTML = (countt ++);
        }else{
            clearInterval(count);
        }
    
    }, item.dataset.time/item.dataset.count);

})


// let count = setInterval(() => {

//     if ( countt <= h2.dataset.count) {
//         h2.innerHTML = (countt ++);
//     }else{
//         clearInterval(count);
//     }



// }, h2.dataset.time);


// =-=-=-=-=- coundown code -=-=-=-=-= \\


let input = document.getElementById("ip")
let button = document.getElementById("btn")
let ul = document.getElementById("list")
let dt = document.getElementById("detele")

console.log(dt)

button.addEventListener(("click"),function () {

    if(!input.value) return


    let li = document.createElement("li")
    li.style.listStyle = "none";
    li.innerHTML = `<span>${input.value}</span> <button id="delete">x</button>`;
    ul.appendChild(li)

    input.value = ""

    li.addEventListener(("click"),function() {
        li.remove()
    })


})










