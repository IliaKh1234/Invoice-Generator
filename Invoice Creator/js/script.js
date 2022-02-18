const washBtn = document.getElementById("wash-btn");
const mowBtn = document.getElementById("mow-btn");
const pullBtn = document.getElementById("pull-btn");
const task = document.querySelector(".task");
const total = document.querySelector(".total");
const send = document.getElementById("send")
let amount = document.getElementById("amount")
let counter = 0;
amount.textContent += 0;
let tasks = []
const remove3 = document.createElement("p");
const remove2 = document.createElement("p");
const remove1 = document.createElement("p");
const task1 = document.createElement("p");
const task2 = document.createElement("p");
const task3 = document.createElement("p");
const total1 = document.createElement("p");
const total2 = document.createElement("p");
const total3 = document.createElement("p");

send.addEventListener("click", function(){
    location.reload();
})

remove1.addEventListener("click",function(){
    task1.style.display = "none"
    remove1.style.display = "none";
    total1.style.display = "none";
    washBtn.addEventListener("click", washCar)
    counter -= 10;
    amount.textContent = `$${counter}`
})
remove2.addEventListener("click",function(){
    task2.style.display = "none"
    remove2.style.display = "none";
    total2.style.display = "none";
    mowBtn.addEventListener("click", mow)
    counter -= 20;
    amount.textContent = `$${counter}`
})
remove3.addEventListener("click",function(){
    task3.style.display = "none"
    remove3.style.display = "none";
    total3.style.display = "none";
    pullBtn.addEventListener("click", pull)
    counter -= 30;
    amount.textContent = `$${counter}`
})

washBtn.addEventListener("click", washCar);
mowBtn.addEventListener("click", mow);
pullBtn.addEventListener("click", pull)



function pull(){
    task3.style.display = "block"
    remove3.style.display = "block";
    total3.style.display = "block";

    task3.textContent = "Pull Weeds";
    task3.style.fontSize = "20px"
    task3.style.fontWeight = "bold"
    task.appendChild(task3);
    total3.textContent = "$30" ;
    total3.style.fontSize = "20px";
    total3.style.fontWeight = "400"
    total.appendChild(total3)
    removePullListener()
    counter += 30;
    amount.textContent = `$${counter}`;
    tasks.push(task,total)
    remove3.textContent = "Remove";
    remove3.style.fontSize = "12px";
    remove3.style.color = "#F5F5F5"
    remove3.style.cursor = "pointer"
    task.append(remove3)
}

function mow(){
    task2.style.display = "block"
    remove2.style.display = "block";
    total2.style.display = "block";

    task2.textContent = "Mow Lawn";
    task2.style.fontSize = "20px"
    task2.style.fontWeight = "bold"
    task.appendChild(task2);
    total2.textContent = "$20" ;
    total2.style.fontSize = "20px";
    total2.style.fontWeight = "400"
    total.appendChild(total2)
    removeMowListener()
    counter += 20;
    amount.textContent = `$${counter}`;
    tasks.push(task,total)
    remove2.textContent = "Remove";
    remove2.style.fontSize = "12px";
    remove2.style.color = "#F5F5F5"
    remove2.style.cursor = "pointer"
    task.append(remove2)
}

function washCar(){
    task1.style.display = "block"
    remove1.style.display = "block";
    total1.style.display = "block";

    task1.textContent = "Wash Car";
    task1.style.fontSize = "20px"
    task1.style.fontWeight = "bold"
    task.appendChild(task1);
    total1.textContent = "$10" ;
    total1.style.fontSize = "20px";
    total1.style.fontWeight = "400"
    total.appendChild(total1)
    removeWashListener()
    counter += 10;
    amount.textContent = `$${counter}`;
    tasks.push(task,total)
    remove1.textContent = "Remove";
    remove1.style.fontSize = "12px";
    remove1.style.color = "#F5F5F5"
    remove1.style.cursor = "pointer"
    task.append(remove1)
}

function removeWashListener(){
    washBtn.removeEventListener("click", washCar)
}
function removeMowListener(){
    mowBtn.removeEventListener("click", mow)
}
function removePullListener(){
    pullBtn.removeEventListener("click", pull)
}