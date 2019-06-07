
let firstName = document.getElementById("firstName");
let secondName = document.getElementById("secondName");
let patronymic = document.getElementById("patronymic");
let dateOfBirth = document.getElementById("DateOfBirth");
let educationInstitutions = document.getElementById("EducationInstitutions");
let faculty = document.getElementById("Faculty");
let specialization = document.getElementById("Specialization");
let yearCompletion = document.getElementById("YearCompletion");
let phone = document.getElementById("Phone");
let eMail = document.getElementById("Email");
let skype = document.getElementById("Skype");
let telegram = document.getElementById("Telegram");
let other = document.getElementById("Other");

document.querySelector(".showMyProfile").addEventListener("click", showUserProfile);
document.querySelector(".buttonLoadPhoto").addEventListener("change", loadPhoto);
document.querySelector(".save").addEventListener("click", saveProfile);

function Profile() {};

Profile.prototype.setName = function (firstName) {
    this.firstName = firstName;
};

Profile.prototype.setSecondName = function (secondName) {
    this.secondName = secondName;;
};

Profile.prototype.setPatronymic = function (patronymic) {
    this.patronymic = patronymic;
};

Profile.prototype.setDateOfBirth = function (dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
};

Profile.prototype.setEducationInstitutions = function (educationInstitutions) {
    this.educationInstitutions = educationInstitutions;
};

Profile.prototype.setFaculty = function (faculty) {
    this.faculty = faculty;
};

Profile.prototype.setSpecialization = function (specialization) {
    this.specialization = specialization;
};

Profile.prototype.setYearCompletion = function (yearCompletion) {
    this.yearCompletion = yearCompletion;
};

Profile.prototype.setPhone = function (phone) {
    this.phone = phone;
};

Profile.prototype.setEmail = function (eMail) {
    this.eMail = eMail;
};

Profile.prototype.setSkype = function (skype) {
    this.skype = skype;
};

Profile.prototype.setTelegramf = function (telegram) {
    this.telegram = telegram;
};

Profile.prototype.setOther = function (other) {
    this.other = other;
};

const userProfile = new Profile();

function saveProfile() {
    userProfile.setName(firstName.value);
    userProfile.setSecondName(secondName.value);
    userProfile.setPatronymic(patronymic.value);
    userProfile.setDateOfBirth(dateOfBirth.value);
    userProfile.setEducationInstitutions(educationInstitutions.value);
    userProfile.setFaculty(faculty.value);
    userProfile.setSpecialization(specialization.value);
    userProfile.setYearCompletion(yearCompletion.value);
    userProfile.setPhone(phone.value);
    userProfile.setEmail(eMail.value);
    userProfile.setSkype(skype.value);
    userProfile.setTelegramf(telegram.value);
    userProfile.setOther(other.value);
    const data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(userProfile));
    const linkElement = document.getElementById("link")
    linkElement.href = 'data:' + data;
    linkElement.download = 'data.json';
    linkElement.innerHTML = 'download JSON';
};

function showUserProfile() {
    document.getElementById("inputProfile").style.display = 'none';
    document.getElementById("outputProfile").style.display = 'block';
    document.getElementById("firstNameOut").innerText = firstName.value;
    document.getElementById("secondNameOut").innerText = secondName.value;
    document.getElementById("patronymicNameOut").innerText = patronymic.value;
    document.getElementById("dateOfBirthOut").innerText = dateOfBirth.value;
    document.getElementById("EducationInstitutionsOut").innerText = educationInstitutions.value;
    document.getElementById("FacultyOut").innerText = faculty.value;
    document.getElementById("SpecializationOut").innerText = specialization.value;
    document.getElementById("YearCompletionOut").innerText = yearCompletion.value;
    document.getElementById("PhoneOut").innerText = phone.value;
    document.getElementById("EmailOut").innerText = eMail.value;
    document.getElementById("SkypeOut").innerText = skype.value;
    document.getElementById("TelegramOut").innerText = telegram.value;
    document.getElementById("OtherOut").innerText = other.value;
};

function loadPhoto() {
    let preview = document.querySelector('.photoImg');
    let file = document.querySelector('input[type=file]').files[0];
    let reader = new FileReader();

    reader.addEventListener("load", function () {
        preview.src = reader.result;
    }, false);

    if (file) {
        reader.readAsDataURL(file);
    }
}



