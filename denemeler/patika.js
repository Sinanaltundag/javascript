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
  clss: function (num, cl) {
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
      let data = JSON.parse(localStorage.getItem("school")) ?? school.clss();
      console.log(data);
      data[clsNum][clsName][no] = { info: [ad, notlar] };
      // let info = new Map();
      // s[2]["2-A"] = info.set(11, 222);
      // s[clsNum][clsName] = info.set(no, [ad, notlar]);
      // console.log(data);
      localStorage.setItem("school", JSON.stringify(data));
      return data;
    },
  },
  getStudents: function (clsNum, clsName, no) {
    let data = JSON.parse(localStorage.getItem("school"));
    if (clsNum && clsName && no) {
     return data[clsNum][clsName][no];
    } else if (clsNum && clsName) {
      return (data[clsNum][clsName]);
    } else if (clsNum) {
      return (data[clsNum]);
    } else {
      return (data);
    }
  },
};
// console.log(school.fullName());

// console.log(school.classGroups());
// // school.classes=Object.fromEntries(school.classGroups())
// console.log(school.classes());

// console.log(school.classGroups().get("1-A"));

// console.log(school.findClassesWithLetters(1));

school.clsStudents.addStnt(1, "1-A", 1123, "bbbccc", 55, 43, 54);

school.getStudents();
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
