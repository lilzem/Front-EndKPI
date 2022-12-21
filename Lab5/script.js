let selectedColor = false;
const tableElements = document.querySelectorAll("td");

function validate() {
    const name = document.forms["person"]["name"].value;
    const idCard = document.forms["person"]["idCard"].value;
    const faculty = document.forms["person"]["faculty"].value;
    const dateOfBirth = document.forms["person"]["dateOfBirth"].value;
    const address = document.forms["person"]["address"].value;

    let Error = "false";

    if (!/^[a-zA-Z]+$/.test(name)) {
        document.getElementById("nameLabel").innerHTML = "Name must contain only letters";
        Error = "true";
    } else {
        document.getElementById("nameLabel").classList.remove("Error");
    }
    if (!/[0-9]{6}/.test(idCard)) {
        document.getElementById("idLabel").innerHTML = "ID must be a number with at least 6 digits";
        Error = "true";
    } else {
        document.getElementById("idLabel").classList.remove("Error");
    }
    if (!/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dateOfBirth)) {
        document.getElementById("dateLabel").innerHTML = "date must be DD/MM/YYYY or DD-MM-YYYY";
        Error = "true";
    } else {
        document.getElementById("dateLabel").classList.remove("Error");
    }
    if (!/^[a-zA-Z]+$/.test(faculty)) {
        document.getElementById("facultyLabel").innerHTML = "Faculty must contain only letters and a number";
        Error = "true";
    } else {
        document.getElementById("facultyLabel").classList.remove("Error");
    }
    if (!/^[a-zA-Z]+$/.test(address)) {
        document.getElementById("addressLabel").innerHTML = "Address must contain only letters and a number";
        Error = "true";
    } else {
        document.getElementById("addressLabel").classList.remove("Error");
    }

    if (Error === "false") {
        alert("Form submitted successfully");
    } else {
        alert("Please fill in the form correctly");
    }
    return false;
}

function onHover(element) {
    element.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    element.style.color = "#" + Math.floor(Math.random() * 16777215).toString(16);
}

function onOut(element) {
    if (selectedColor) {
        usePickedColor(element);
        return;
    }
    element.style.backgroundColor = "";
    element.style.color = "";
}

function usePickedColor(element) {
    element.style.backgroundColor = document.getElementById("colorpicker").value;
    element.style.color = "black";
    selectedColor = true;
}

function changeDiagonalColor() {
    tableElements.forEach((value, key) => {
        if (key % 5 || !key || key == 35) {
            return;
        }

        value.style.backgroundColor = document.getElementById("colorpicker").value;
        value.style.color = "black";
    });
}