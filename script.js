
var userArray = [];

function submitForm(event) {
  event.preventDefault();
  //user input
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");

  // user object
  var user = {
    name: nameInput.value,
    email: emailInput.value,
  };

  userArray.push(user);

  nameInput.value = "";
  emailInput.value = "";

  displayUserList();

}

// Function to display user names in the user list div
function displayUserList() {
  var userListDiv = document.getElementById("userList");
  userListDiv.innerHTML = "<h2>User List</h2>";

  // Loop through userArray and create list items
  var ul = document.createElement("ul");
  userArray.forEach(function (user) {
    var li = document.createElement("li");
    li.textContent = user.name;
    ul.appendChild(li);
  });

  userListDiv.appendChild(ul);
}

// Add event listener to the form submit event
var userForm = document.getElementById("userForm");
userForm.addEventListener("submit", submitForm);
