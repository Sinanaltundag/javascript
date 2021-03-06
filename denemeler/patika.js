const schoolFormSubmit = document.querySelector(".btn-outline-primary");
const schoolInputs = document.querySelectorAll("header input, header select");
const schoolForm = document.querySelector("header");
const schoolNameHeader = document.querySelector("main h1");
const classNum = document.getElementById("class-num");
const className = document.getElementById("class-name");
const studentNo = document.getElementById("student-no");
const studentName = document.getElementById("fullname");
const examResults = document.querySelectorAll(".input-group input");
const searchBtn = document.querySelector("main button");
const addStudent = document.getElementById("register");
const studentForm = document.querySelector("main");

console.log(schoolInputs[2]);
let clsNumbers = [];
const alphabet = "ABCDEFGHIJK";
let letters = [];

let data = JSON.parse(localStorage.getItem("school"))||{};
fillSelect()
console.log(Object.keys(data) );
schoolNameHeader.innerHTML= localStorage.getItem("schoolName")? `${localStorage.getItem("schoolName")}<br><span class="badge rounded-pill bg-info fs-4">${localStorage.getItem("schoolType")}</span>`: "Enter School Information"

schoolFormSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  console.log();
  school.schoolName = schoolInputs[0].value;
  school.type = schoolInputs[1].value;
  // let {schoolName, schoolType}= school
  //  clsNumbers= Array.from(Array(+schoolInputs[2].value+1).keys()).splice(1);  similar with bottom
  clsNumbers = [...Array(+schoolInputs[2].value + 1).keys()].splice(1);
  letters = alphabet.slice(0, schoolInputs[3].value).split("");
  localStorage.setItem("school", JSON.stringify(school.clss()));
  localStorage.setItem("schoolName",school.schoolName);
  localStorage.setItem("schoolType",school.type);
  schoolNameHeader.innerHTML= `${localStorage.getItem("schoolName")}<br><span class="badge rounded-pill bg-info fs-4">${localStorage.getItem("schoolType")}</span>`;
  fillSelect()
  
  console.log(school.classGroups());
  console.log(school.classes());

  console.log();
});

if (data=={}) {
   schoolForm.classList.remove("d-none");//alta al
  searchBtn.disabled = true;
  addStudent.disabled = true;
} 
studentForm.addEventListener("change", (e)=>{
  console.log(e);

if (e.target.id =="class-num") {
  className.innerHTML=""
  Object.keys(school.clsStudents.getStudents()[e.target.value]).forEach((item)=>{
    className.innerHTML += `<option value="${item}">${item}</option>`
  })
}
if (e.target.id=="fullname") {
  addStudent.disabled=false;
}
})

studentForm.addEventListener("click", (e)=>{
  if (e.target==searchBtn) {
    e.preventDefault()
    if (studentNo.value) {
      let studentList =school.clsStudents.getStudents(classNum.value,className.value,studentNo.value);
let tableRow = `<tr>
    <th scope="row">${className.value}</th>
    <td>${studentNo.value}</td>
    <td>${studentList.info}</td>
    <td>${studentNo.value}</td>
  </tr>`
console.log(studentList.info[0]);
  console.log(studentList.info[1]);
    }
    
    


  }
})

function fillSelect() {
  classNum.innerHTML="";
  classNum.innerHTML = `<option selected disabled>Select Grade</option>`
  Object.keys(data).forEach((item)=>{
    classNum.innerHTML += `<option value="${item}">${item}</option>`
  })
}

const school = {
  schoolName: "School Name",
  schoolType: "School Type",

  clss: function () {
    let obj = {};
    let clss = {};
    let d = clsNumbers[0];

    let list = this.findClassesWithLetters(d);
    for (const i of clsNumbers) {
      for (const j of list) {
        obj[j] = {};
      }
      d++;
      clss[i] = obj;
      obj = {};

      list = this.findClassesWithLetters(d);
    }

    return clss;
  },
  classGroups: () => {
// let clsWithLttrs = Object.keys(school.clsStudents.getStudents()[1]);

    
    const clsWithLttrs = new Map();
    console.log(clsNumbers+letters);
    clsNumbers.forEach((item) => {
      for (let i = 0; i < letters.length; i++) {
        let temp = `${item}-${letters[i]}`;
        clsWithLttrs.set(temp, item);
      }
    });
    return clsWithLttrs;
  },
  findClassesWithLetters: function (number) {
    // const a = new Map();

    let a = [...this.classGroups().entries()].filter((a) => a[1] === number);
    a.forEach((e) => {
      e.splice(1, 1);
    });
    let b = a.flat();
    return b;
  },
  classes: function () {
    const classList = new Map(school.classGroups());
    [...classList.keys()].forEach((key) => {
      classList.set(key, 0);
    });
    // classList.forEach((_,i) => {classList.set(i,0)});

    return classList;
  },
  clsStudents: {
    addStnt: function (clsNum, clsName, no, ad, ...notlar) {
      // nulish operator
      let data = JSON.parse(localStorage.getItem("school")) //?? school.clss();
      // console.log(data);
      
  Object.keys(data).forEach((item)=>{
    Object.keys(data[item]).forEach((innerItem)=>{
      Object.keys(data[item][innerItem]).forEach((inner2Item)=>{
    if (inner2Item.includes(no)){
     if (confirm(`At ${innerItem} class there is same ${inner2Item} number. Do you want to update?`)) {
      data[clsNum][clsName][no] = { info: [ad, notlar] };
      localStorage.setItem("school", JSON.stringify(data));
      return data;
     } ;
    }; 
      })
    })
  })
      data[clsNum][clsName][no] = { info: [ad, notlar] };
      // let info = new Map();
      // s[2]["2-A"] = info.set(11, 222);
      // s[clsNum][clsName] = info.set(no, [ad, notlar]);
      // console.log(data);
      localStorage.setItem("school", JSON.stringify(data));
      return data;
    },
    getStudents: function (clsNum, clsName, no) {
      let data = JSON.parse(localStorage.getItem("school"));
      if (clsNum && clsName && no) {
        return data[clsNum][clsName][no];
      } else if (clsNum && clsName) {
        return data[clsNum][clsName];
      } else if (clsNum) {
        return data[clsNum];
      } else {
        return data;
      }
  },
  },
};
console.log(data);
console.log(school.classGroups());
// school.classes=Object.fromEntries(school.classGroups())
console.log(school.classes());

// console.log(school.classGroups().get("1-A"));

// console.log(school.findClassesWithLetters(1));

// school.clsStudents.addStnt(1, "1-A", 1123, "bbbccc", 55, 43, 54);
// console.log(school.clsStudents.getStudents()[1]);
// console.log(Object.keys(school.clsStudents.getStudents()[1]) );

// console.log(school.clsStudents.addStnt("ali", 1, "1-A"));
// school.clss()[1]["1-A"] = ["ali"];

// console.log(school.clss());

// let sc = {
//   1: {
//     "1-A": {
//       101: ["ali", "veli"],
//     },
//   },
// };

// console.log(sc[1]["1-A"][101]);
