function fullName(name, surname) {
    return "Hi " + name + " " + surname + "!";
}

function printInfo(name = "Bob", surname, course, school = "SUPSI") {
    console.log(school + " " + fullName(name, surname) + " course: " + course);
}

function printGrades(name = "Bob", surname, grade, school = "SUPSI") {
    console.log(school + " " + fullName(name, surname) + " grade: " + grade);
}

function printCreditsLaser(name = "Bob", surname, grade, school = "SUPSI") {
    console.log(school + " " + fullName(name, surname) + " credit: " + grade);
}

function printCredits3D(name = "Bob", surname, grade, school = "SUPSI") {
    console.log(school + " " + fullName(name, surname) + " credit: " + grade);
}


printInfo(undefined, "Brown", "Coding Foundations", "ETH");
printGrades(undefined, "Brown", 4, "HEAD");
printCreditsLaser(undefined, "Brown", 10, "ECAL");
printCredits3D(undefined, "Brown", 2, "HELLOOOO");
