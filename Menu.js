"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Lover_1 = require("./entity/Lover");
var readline = require('readline-sync');
var LoverService_1 = require("./Service/LoverService");
var loverService = new LoverService_1.LoverService();
// for (let i = 0; i < 5; i++) {
//     let id = readline.question('Hay nhap ma nguoi yeu');
//     let name = readline.question('Hay nhap ten nguoi yeu moi');
//     let zodiac = readline.question('Hay nhap cung hoang dao');
//     let address = readline.question('Hãy nhap dia chi moi');
//     let dOB = readline.question('Hay nhap ngay sinh');
//     let hobby = readline.question('Hay nhap so thich');
//     let newLover = new Lover(id, name, zodiac, address, dOB, hobby)
//     loverService.add(newLover)
// }
var choice = -1;
while (true) {
    console.log('Hay lua chon di' +
        '\n1. Hien thi nguoi yeu' +
        '\n2. Tim kiem nguoi yeu theo ten' +
        '\n3. Them moi mot nguoi yeu  ' +
        '\n4. Chinh sua thong tin nguoi yeu   ' +
        '\n5. Xoa nguoi yeu  ' +
        '\n0. Thoat ');
    var choice_1 = readline.question('hãy nhập lựa chọn đi');
    if (choice_1 == 0) {
        break;
    }
    if (choice_1 == 1) {
        loverService.show();
    }
    if (choice_1 == 2) {
        var name_1 = readline.question('Hay nhap ten nguoi yeu di');
        loverService.search(name_1);
        loverService.show();
    }
    if (choice_1 == 3) {
        var ids = readline.question('Hay nhap ma nguoi yeu');
        if (typeof (ids) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
        }
        var name_2 = readline.question('Hãy nhâp ten nguoi yeu di');
        if (typeof (name_2) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
        }
        var zodiac = readline.question('Hay nhap cung hoang dao de');
        if (typeof (zodiac) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
        }
        var address = readline.question('Hay nhap dia chi moi di');
        if (typeof (address) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
        }
        var dOB = readline.question('Hay nhap ngay sinh di');
        if (typeof (dOB) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
        }
        var hobby = readline.question('Hay nhap so thich di ');
        if (typeof (hobby) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
        }
        var newLover = new Lover_1.Lover(ids, name_2, zodiac, address, dOB, hobby);
        loverService.add(newLover);
    }
    if (choice_1 == 4) {
        var ids = readline.question('Hay nhap ma nguoi yeu');
        var name_3 = readline.question('Hay nhap ten nguoi yeu moi');
        var zodiac = readline.question('Hay nhap cung hoang dao');
        var address = readline.question('Hay nhap dia chi moi di');
        var dOB = readline.question('Hay nhap ngay sinh di');
        var hobby = readline.question('Hay nhap so thich ');
        loverService.edit(ids, name_3, zodiac, address, dOB, hobby);
    }
    if (choice_1 == 5) {
        var ids = readline.question('Hay nhap ma nguoi yeu');
        loverService.delete(ids);
    }
}
