let size = 150;
let minSize = 100;
let maxSize = 200;


window.addEventListener("mousemove", (e) => {
    // console.log(e.clientX, e.clientY);

    document.documentElement.style.setProperty('--mouseX', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouseY', `${e.clientY}px`);

    let posh = document.querySelector("#pos");
    posh.textContent = `(${e.clientX}, ${e.clientY})`
})

window.addEventListener("click", (e) => {
    size = (size - minSize + (50 % maxSize) + maxSize) % maxSize + minSize

    // size = (size + 50 + maxSize) % maxSize
    document.documentElement.style.setProperty('--size', `${size}px`);
})