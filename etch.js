const tocontain = document.querySelector("#container");

let mouse = false;

document.addEventListener('mousedown', (e) => {
    if (e.button === 0){
        mouse= true;
    }
})
document.addEventListener('mouseup', (e) => {
    if (e.button === 0){
        mouse= false;
    }
})



function grid_make(grid_val) {
    for (let i = 0; i < grid_val * grid_val; i++ ){
    const bbox = document.createElement("div");
    bbox.classList.add("Pixel")
    tocontain.appendChild(bbox);
}}
submit.addEventListener('click', () =>{
    const grid_value = parseInt(document.getElementById("grid").value);
    const res_value = parseInt(document.getElementById("resolution").value);
   
    
    grid_make(grid_value);
    const pixel = document.querySelectorAll(".Pixel");
    
    pixel.forEach(pixel => {
        pixel.style.width = res_value + "px";
        pixel.style.height = res_value + "px";
    });

    label01.style.display = "none";
    label02.style.display = "none";
    resolution.style.display = "none";
    grid.style.display = "none";
    submit.style.display = "none";
    reset.style.display = "";
})

reset.addEventListener('click', () => {
    document.getElementById("grid").value = "";
    document.getElementById("resolution").value = "";
    tocontain.innerHTML = "";
    label01.style.display = "";
    label02.style.display = "";
    resolution.style.display = "";
    grid.style.display = "";
    submit.style.display = "";
    reset.style.display = "none";
    resolution.style.display = "";
})


let change = "white";

tocontain.addEventListener('mouseover', (e) => {
    if (e.target.classList.contains("Pixel") && mouse === true){
        e.target.style.backgroundColor = change;
    }
})



document.querySelectorAll('input[name = "color"]').forEach( radio => {
    radio.addEventListener("click", () => {
        picked = radio.value;
        if (picked === "red") {
            change = "red";
        } else if (picked === "blue") {
            change = "blue";
        } else if (picked === "green") {
            change = "green";
        } else if (picked === "black") {
            change = "black";
        } else if (picked === "white") {
            change = "white";
        } else if (picked === "yellow") {
            change = "yellow";
        }
    })
})