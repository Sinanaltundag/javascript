class StudentInfo {
  constructor(fullName, stndNo, cls) {
    this.fullName = fullName;
    this.stndNo = stndNo;
    this.cls = cls;
  }
}

let clsNumbers = [1, 2, 3, 4];
const letters = ["A", "B", "C", "D"];

const school = {
  schoolName: "kaşüstü",
  type: "ilkokul",

  fullName: function () {
    return `${this.schoolName} ${this.type}`;
  },
  clss: function(ad,no) {
    let obj = {};
    let clss ={}
    
    for (const i of clsNumbers) {
      for (const j of this.classGroups().keys()) {
        obj[j] = {

        };
      }
      clss[i]=obj
      // obj ={}
    
  }
    return clss
  },
  classGroups: () => {
    const clsWithLttrs = new Map();
    clsNumbers.forEach((item) => {
      for (let i = 0; i < letters.length; i++) {
        let temp = `${item}-${letters[i]}`;
        clsWithLttrs.set(temp, item);
      }
    });
    return clsWithLttrs;
  },
  findClassesWithLetters: function (number) {
    return [...this.classGroups().entries()].filter((a) => a[1] === number);
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
    addStnt: function (a, b, c) {
      school.clss()[1]["1-A"]={"ali":1} 
      console.log(school.clss()[1]['1-A']);
      return new StudentInfo(a, b, c);
    },
  },
};
// console.log(school.fullName());

// console.log(school.classGroups());
// // school.classes=Object.fromEntries(school.classGroups())
// console.log(school.classes());

// console.log(school.classGroups().get("1-A"));

// console.log(school.findClassesWithLetters(1));

school.clsStudents.addStnt();
// console.log(school.clsStudents.addStnt("ali", 1, "1-A"));
school.clss()[1]["1-A"]=["ali"] 

console.log(school.clss());

let sc = {
  1: {
    "1-A": {
      101: ["ali", "veli"],
    },
  },
};

console.log(sc[1]["1-A"][101]);
