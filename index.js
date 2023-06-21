const form = document.getElementById("studentForm");

form.addEventListener("submit", function (event) {
event.preventDefault();

  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const age = document.getElementById("age").value;
  const skills = document.getElementById("skills").value;
  const country = document.getElementById("country").value;
  const enrolledCourses = document
    .getElementById("enrolledCourses")
    .value.split("\n");

  const student = {
    firstName: firstName,
    lastName: lastName,
    age: age,
    skills: skills,
    country: country,
    enrolledCourses: enrolledCourses,
  };

  localStorage.setItem("student", JSON.stringify(student));

  form.reset();

  alert("Student information saved!");
});
