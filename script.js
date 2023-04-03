const container = document.getElementById("grid-container");
function random(number) {
    return Math.floor(Math.random() * number + 1);
}
function makeRows(rows, columns) {
    container.style.setProperty("--grid-rows", rows);
    container.style.setProperty("--grid-columns", columns);
    for (i = 0; i < (rows * columns); i++) {
        let cell = document.createElement("div");
        container.appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseover", function bgChange() {
            let randomRGB = hsv_to_rgb(Math.random(), 0.3, 0.99);
            const randomColor = "rgb(" + randomRGB + ")";
            cell.style.backgroundColor = randomColor;
        });
    };
};

//adapted from Martin Leitner-Ankerl's Ruby function 
//created to control the random color distribution to be lighter than random 0-256 RGB values
function hsv_to_rgb(h, s, v) {
    let [r, g, b] = [];
    let h_i = parseInt(h * 6);
    let f = h * 6 - h_i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    if (h_i === 0){
        let [r, g, b] = [v, t, p];
    }else if (h_i === 1){
        [r, g, b] = [q, v, p];
    }else if (h_i === 2) {
        [r, g, b] = [p, v, t];
    }else if (h_i === 3) {
        [r, g, b] = [p, q, v];
    }else if (h_i === 4) {
        [r, g, b] = [t, p, v];
    }else if (h_i === 5) {
        [r, g, b] = [v, p, q];
    }else {
        return "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")"
    }
    return [parseInt(r * 256), parseInt(g * 256), parseInt(b * 256)]
  }



makeRows(16,16);
const button = document.getElementById("button");

button.addEventListener("click", function changeSize(size) {
    size = prompt("Enter a value between 0 and 101");
    container.innerHTML = "";
    if (0 < size && size <= 100) {
        makeRows(size, size);
    } else {
        makeRows(16, 16);
        alert ("Error: value is not between 0 and 101");
    }
})