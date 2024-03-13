var h1 = document.querySelector("h1");

document.querySelector("#block").addEventListener("click", () => {
  localStorage.setItem("block", true);
  show();
});

document.querySelector("#unblock").addEventListener("click", () => {
  localStorage.setItem("block", false);
  show();
});

function show() {
  if (localStorage.getItem("block") === "false") {
    h1.textContent = "Not Bocked";
  } else {
    h1.textContent = "Blocked";
  }
}

show();

typeError;
const obj = {};

// obj.name.age;

obj?.name?.age;
