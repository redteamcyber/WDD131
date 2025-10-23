// map 1
const steps = ["one", "two", "three"];
function listTemplate(step){
    return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate);
document.querySelector("#myList").innerHTML = stepsHtml.join("");

// map 2
const grades = ["A", "B", "A"];
function convertGradeToPoints(grade){
    let points = 0;
    if (grade === "A"){
        points = 4;
    } else if (grade === "B"){
        points = 3;
    return points;
}
}

// reduce

const gpaPoints = grades.map(convertGradeToPoints);
const pointsTotal = gpaPoints.reduce(function(total, item) {
    return total + item;
});

const gpa = pointsTotal / gpaPoints.length;

// filter

const fruits = ["watermelon", "peach", "apple", "tomato", "grape"]
constLength = words.filter(function(word) {
    return word.length < 6;
});
