function validateFullname(fullname) {
    var isValid = /^[a-zA-Z-'. ]+$/.test(fullname) && fullname.length >= 3;
    if (!isValid) {
        alert("'" + fullname + "' is not a valid fullname!");
    }
    return isValid;
};


function showUserProfile() {
    let userFullname = document.getElementById("fullname").value;
    console.log("fullname - " + userFullname);
    let dateOfBirth = document.getElementById("DateOfBirth").value;
    console.log("dateOfBirth - " + dateOfBirth);
    let userEducation = document.getElementById("Education").value;
    console.log("education - " + userEducation);
    let contInform = document.getElementById("ContInf").value;
    console.log("cont Inf - " + contInform);
    if (validateFullname(userFullname)) {
        document.getElementById("userFullname").innerText += userFullname;
        document.getElementById("dateOfBirth").innerText += dateOfBirth;
        document.getElementById("userEducation").innerText += userEducation;
        document.getElementById("ContInformOut").innerText += contInform;
        document.getElementById("inputProfile").style.display = 'none';
        document.getElementById("outputProfile").style.display = 'block';
    }
};



