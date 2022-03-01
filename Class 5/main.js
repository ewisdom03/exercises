const form = document.querySelector("#user-form");
const userList = document.querySelector(".user-list");
const input = document.querySelector(".user-input")
form.addEventListener("submit", logUser);

function logUser(e){
    e.preventDefault();

    const user = input.value;

    const newUser = document.createElement("li");
    newUser.className = "user";
    newUser.innerText = `${userList}`;

   userList.appendChild(newUser);

    form.reset();
}
