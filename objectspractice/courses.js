const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    { sectionNum: 1, roomNum: "STC 353", enrolled: 26, days: "TTh", instructor: "Bro T" },
    { sectionNum: 2, roomNum: "STC 347", enrolled: 28, days: "TTh", instructor: "Sis A" }
  ],

  changeEnrollment: function (sectionNum, add = true) {
    // find the right section...Array.findIndex will work here
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      if (add) {
        this.sections[sectionIndex].enrolled++;
      } else {
        this.sections[sectionIndex].enrolled--;
      }
      createSections(this.sections); // ✅ corrected from renderSections
    }
  }
}; // ✅ closes the object

function createHeader(course) {
  const nameEl = document.querySelector("#courseName");
  const codeEl = document.querySelector("#courseCode");
  nameEl.textContent = course.name;
  codeEl.textContent = course.code;
}

function sectionTemplate(section) {
  return `<tr>
            <td>${section.sectionNum}</td>
            <td>${section.roomNum}</td>
            <td>${section.enrolled}</td>
            <td>${section.days}</td>
            <td>${section.instructor}</td>
          </tr>`;
}

function createSections(sections) {
  const sectionsElement = document.querySelector("#sections");
  const html = sections.map(sectionTemplate);
  sectionsElement.innerHTML = html.join("");
}

// ✅ Define clickHandler so your buttons work
function clickHandler(event) {
  const sectionNum = parseInt(document.querySelector("#sectionNumber").value);
  if (event.target.id === "enrollStudent") {
    aCourse.changeEnrollment(sectionNum, true);
  } 
  else if (event.target.id === "dropStudent") {
    aCourse.changeEnrollment(sectionNum, false);
  }
  createSections(aCourse.sections);
}

createHeader(aCourse);
createSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", clickHandler);
document.querySelector("#dropStudent").addEventListener("click", clickHandler);
