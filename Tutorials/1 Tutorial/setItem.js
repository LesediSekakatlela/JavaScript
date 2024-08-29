//Function to handle saving data
function saveData() {
    var webStorageObject = localStorage; // or sessionStorage
    var key = "username";
    var value = "JohnDoe";
    webStorageObject.setItem(key, value);
}

// Event listener for button click
document.getElementById("saveButton").addEventListener("click", saveData);
