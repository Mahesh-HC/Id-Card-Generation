function printError(eleid, msg) {
    document.getElementById(eleid).innerHTML = msg
}
function validateForm() {
    const username = document.idCardForm.username.value
    const collegename = document.idCardForm.collegename.value
    const location = document.idCardForm.location.value
    const picture = document.idCardForm.picture.value

    let userErr = true
    let collegeErr = true
    let locationErr = true
    let pictureErr = true
    if (username === '') {
        printError("userErr", "username cannot be left blank")
        document.getElementById("failureIcon").style.opacity = "1"
        document.getElementById("successIcon").style.opacity = "0"
    }
    else {
        printError("userErr", "")
        document.getElementById("failureIcon").style.opacity = "0"
        document.getElementById("successIcon").style.opacity = "1"
        userErr = false
    }
    if (collegename === '') {
        printError("collegeErr", "collegename cannot be left blank")
        document.getElementById("failureIcon1").style.opacity = "1"
        document.getElementById("successIcon1").style.opacity = "0"
    }
    else {
        printError("collegeErr", "")
        document.getElementById("failureIcon1").style.opacity = "0"
        document.getElementById("successIcon1").style.opacity = "1"
        collegeErr = false
    }
    if (location === '') {
        printError("locationErr", "location cannot be left blank")
        document.getElementById("failureIcon2").style.opacity = "1"
        document.getElementById("successIcon2").style.opacity = "0"
    }
    else {
        printError("locationErr", "")
        document.getElementById("failureIcon2").style.opacity = "0"
        document.getElementById("successIcon2").style.opacity = "1"
        locationErr = false
    }
    if (picture === '') {
        printError("pictureErr", "picture block cannot be left blank")
        document.getElementById("failureIcon3").style.opacity = "1"
        document.getElementById("successIcon3").style.opacity = "0"
    }
    else {
        printError("pictureErr", "")
        document.getElementById("failureIcon3").style.opacity = "0"
        document.getElementById("successIcon3").style.opacity = "1"
        pictureErr = false
    }
    if (userErr === true || collegeErr === true || locationErr === true || pictureErr === true) {
        return false
    }
}


function generateCard() {
    const usernameValue = document.idCardForm.username.value
    const collegeNameValue = document.idCardForm.collegename.value
    const locationValue = document.idCardForm.location.value

    document.getElementById("personName").innerHTML = usernameValue
    document.getElementById("college").innerHTML = collegeNameValue
    document.getElementById("locate").innerHTML = locationValue
    document.getElementById("collegeCard").style.display = "block";
}

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};