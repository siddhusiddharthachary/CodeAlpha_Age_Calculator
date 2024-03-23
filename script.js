function calculateAge() {
    var dobDay = document.getElementById('dobDay').value;
    var dobMonth = document.getElementById('dobMonth').value;
    var dobYear = document.getElementById('dobYear').value;

    var dob = new Date(dobYear, dobMonth - 1, dobDay);
    var today = new Date();

    var age = today.getFullYear() - dob.getFullYear();
    var monthDiff = today.getMonth() - dob.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }

    document.getElementById('result').innerText = "Your age is " + age;
}