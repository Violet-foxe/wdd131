const aCourse = {
    code: "Dynamic Web Fundamentals",
    name: "WDD131",
    logo: 'js-logo.png',
    sections: [
        {
            sectionNum: 1,
            roomNum: 'STC 231',
            enrolled: 20,
            days: 'TTh',
            instructor: 'Brother Warner',
        },
        {
            sectionNum: 2,
            roomNum: 'STC 353',
            enrolled: 13,
            days: 'MW',
            instructor: 'Sister Anderson',
        },
    ],
    enrollStudent: function (sectionNum) {
        // sectionNum represents the section the user wants to add the student to
        // find the section in the array, add a student to it.
        this.sections.find(section => section.sectionNum == sectionNum).enrolled++;
        // reload the section, so it can do it again and again
        renderSections(this.sections);
    }
}

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
    const html = sections.map(sectionTemplate);
    document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.querySelector("#enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});
