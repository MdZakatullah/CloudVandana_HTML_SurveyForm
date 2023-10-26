function submitForm() {
    // Get form input values
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    const genderOthers = document.getElementById("others").checked;
    const profession = document.getElementById("profession").value;
    const email = document.getElementById("email").value;
    const mobile = document.getElementById("mobile").value;

    // Validate the form
    if (firstName === "" || lastName === "" || dob === "" || country === "" ||
        !(genderMale || genderFemale ||genderOthers) || profession === "" || email === "" || mobile === "") {
        alert("Please fill in all the fields.");
        return;
    }

    // Prepare the response
    const response = `
        <p>First Name: ${firstName}</p>
        <p>Last Name: ${lastName}</p>
        <p>Date of Birth: ${dob}</p>
        <p>Country: ${country}</p>
        <p>Gender: ${genderMale ? "Male" : "Female"}</p>
        <p>Profession: ${profession}</p>
        <p>Email: ${email}</p>
        <p>Mobile Number: ${mobile}</p>
    `;

    // Display the response in a popup
    document.getElementById("response").innerHTML = response;
    document.getElementById("popup").style.display = "flex";

    // Reset the form
    resetForm();
}

function resetForm() {
    document.getElementById("surveyForm").reset();
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
