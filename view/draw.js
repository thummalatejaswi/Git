function drawCommit(svg, x, y, id) {
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    circle.setAttribute("cx", x);
    circle.setAttribute("cy", y);
    circle.setAttribute("r", 10);
    circle.setAttribute("class", "commit");

    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y +25);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "label");
    label.textContent = id;

    svg.appendChild(circle);
    svg.appendChild(label);
}

function drawLabel(svg, x, y, message) {
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", x);
    label.setAttribute("y", y-25);
    label.setAttribute("text-anchor", "middle");
    label.setAttribute("class", "label");
    label.textContent = message;

    svg.appendChild(label);
}

function drawLine(svg, from, to) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", from.x);
    line.setAttribute("y1", from.y);
    line.setAttribute("x2", to.x);
    line.setAttribute("y2", to.y);
    line.setAttribute("class", "edge");

    line.setAttribute("stroke", "#555");   
    line.setAttribute("stroke-width", "2");

    svg.appendChild(line);
}

window.drawCommit = drawCommit;
window.drawLine = drawLine;