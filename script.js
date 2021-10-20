let liList = document.querySelectorAll("li");

let i;
let j;

let close = document.getElementsByClassName("close");
let done = document.getElementsByClassName("doneButton");
let doneList = document.querySelector("#doneList");

console.log(close);
console.log(done);

//removing the item if pressed on delete button

for (let i of close) {
  i.addEventListener("click", () => {
    console.log("entered method");
    i.parentElement.style.display = "none";
  });
}

//moving an element to Done list when task is done
let p = document.querySelectorAll("p");
console.log(p);
let addedNames = [];
for (let element of p) {
  addedNames.push(element.textContent);
}
console.log(addedNames);
for (let i of done) {
  console.log(i.textContent);

  i.addEventListener("click", (event) => {
    console.log("entered done method");
    console.log(event.currentTarget.textContent);
    const text = i.parentElement.textContent;
    textsliced = text.slice(0, -5);
    doneList.insertAdjacentHTML("beforeend", `<p>${textsliced}</p>`);
    i.parentElement.style.display = "none";
    i.classList.remove("doneButton");
    addedNames.push(textsliced);
  });
}


// the below function is called when clicking on add button to add items to the to do list.

function addItemToDo() {
  const inputValue = document.querySelector("#myInput");
  console.log("inputValue");
  console.log(inputValue.value);
  liList = document.querySelectorAll("li");
  for (let i of liList) {
    console.log(i.textContent);
    console.log(i.textContent.slice(0, -5));
    if (i.textContent.slice(0, -5) === inputValue.value) {
      if (i.style.display !== "none") {
        alert("Task already Exists!");
        return false;
      }
    }
  }
  if (inputValue.value.trim() === "") {
    alert("Please write something!");
    return false;
  } else {
    const list = document.querySelector("ul");
    const ul = document.getElementById("myUL");
    ul.style.display = "";
    const newLi = document.createElement("li");
    console.log("adding to list");
    newLi.textContent = inputValue.value;
    let deletebutton = document.createElement("button");
    let txt = document.createTextNode("\u00D7");
    deletebutton.className = "close";
    deletebutton.appendChild(txt);
    let button = document.createElement("button");
    button.classList.add("doneButton");
    button.textContent = "Done";
    newLi.appendChild(button);
    newLi.appendChild(deletebutton);
    console.log(newLi);
    //list.insertAdjacentHTML("beforeend",newLi);
   list.insertBefore(newLi, list.firstChild);

    console.log("added to list");
    console.log(newLi.textContent);
    document.getElementById("myUL").appendChild(newLi);
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
      };
    }

    done = document.getElementsByClassName("doneButton");
    doneList = document.querySelector("#doneList");

    console.log(doneList);
    for (let i of done) {
      console.log(i.textContent);

      i.addEventListener("click", (event) => {
        console.log("entered done method");
        console.log(event.currentTarget.textContent);
        const text = i.parentElement.textContent;
        textsliced = text.slice(0, -5);
        if (addedNames.indexOf(textsliced) == -1) {
          addedNames.push(textsliced);
          doneList.insertAdjacentHTML("beforeend", `<p>${textsliced}</p>`);
          console.log("successfull finish of done method");
        }

        i.parentElement.style.display = "none";
        i.classList.remove("doneButton");
      });
    }
  }
  document.querySelector("#myInput").value = "";
}

// Function to delete all items.
function deleteAllitems() {
  liList = document.querySelectorAll("li");

  for (i = 0; i < liList.length; i++) {
    liList[i].style.display = "none";
  }
}

