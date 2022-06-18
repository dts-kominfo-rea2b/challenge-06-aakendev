// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

let dataBaru = [];
const bacaData = (fungsiCallBack) => {
  fs.readFile(file1, "utf-8", (error, success) => {
    if (error) {
      return fungsiCallBack(error);
    }
    const hasilBacaData = JSON.parse(success);
    const potongBacaData = hasilBacaData.message.split(" ");
    masukkanData(potongBacaData[1]);

    fs.readFile(file2, "utf-8", (error, success) => {
      if (error) {
        return fungsiCallBack(error);
      }
      const hasilBacaData = JSON.parse(success);
      const potongBacaData = hasilBacaData[0].message.split(" ");
      masukkanData(potongBacaData[1]);

      fs.readFile(file3, "utf-8", (error, success) => {
        if (error) {
          return fungsiCallBack(error);
        }
        const hasilBacaData = JSON.parse(success);
        const potongBacaData = hasilBacaData[0]["data"].message.split(" ");
        masukkanData(potongBacaData[1]);
        fungsiCallBack(
          null,
          dataBaru.filter((value, index, array) => {
            // console.log(value);
            // console.log(index);
            // console.log(array);
            // console.log(array.indexOf(value) === index);
            return array.indexOf(value) === index;
          })
        );
      });
    });
  });
};

const masukkanData = (dataMasukan) => {
  dataBaru.push(dataMasukan);
};

// console.log(dataBaru);

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
