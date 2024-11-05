const dragDiv = document.querySelectorAll(".drag-box")
const box1 = document.getElementById("box1");
const box2 = document.getElementById("box2");
const box3 = document.getElementById("box3");
const box4 = document.getElementById("box4");
let dragged = null
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});

dragDiv.forEach((box) => {
    box.addEventListener("dragstart", (e) => {
        let data = box.getAttribute("data-box")
        dragged = data
        e.dataTransfer.setData("text", data); // Store the id of the dragged element
    });

    box.addEventListener("dragend", () => {
        console.log(mouseX,mouseY)
    })
})


// 2. Prevent the default behavior on the drop target (box2)
box2.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allows us to drop
});

box3.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allows us to drop
});

box4.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allows us to drop
});

// 3. Handle the drop event
box2.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData("text"); // Get the id of the dragged element
    console.log(draggedElementId)
    const draggedElement = document.querySelector(`[data-box=${dragged}]`);
    box2.appendChild(draggedElement); // Append the element to the new box
});

box3.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData("text"); // Get the id of the dragged element
    console.log(draggedElementId)
    const draggedElement = document.querySelector(`[data-box=${dragged}]`);
    box3.appendChild(draggedElement); // Append the element to the new box
});

box4.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData("text"); // Get the id of the dragged element
    console.log(draggedElementId)
    const draggedElement = document.querySelector(`[data-box=${dragged}]`);
    console.log(box4.hasChildNodes())
    if(box4.hasChildNodes())
    {
        box4.insertBefore(draggedElement, box4.firstChild)
    }
    else
    {
        box4.appendChild(draggedElement);
    }
     // Append the element to the new box
});

box1.addEventListener("dragover", (event) => {
    event.preventDefault(); // Allows us to drop
});

// 3. Handle the drop event
box1.addEventListener("drop", (event) => {
    event.preventDefault();
    const draggedElementId = event.dataTransfer.getData("text"); // Get the id of the dragged element
    console.log(draggedElementId)
    const draggedElement = document.getElementById(draggedElementId);
    box1.appendChild(draggedElement); // Append the element to the new box
});


