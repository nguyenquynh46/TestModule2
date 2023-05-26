import {Lover} from "./entity/Lover";

let readline = require('readline-sync');
import {LoverService} from "./Service/LoverService";

let loverService = new LoverService();
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
let choice = -1;
while (true) {
    console.log('Hay lua chon di' +
        '\n1. Hien thi nguoi yeu' +
        '\n2. Tim kiem nguoi yeu theo ten' +
        '\n3. Them moi mot nguoi yeu  ' +
        '\n4. Chinh sua thong tin nguoi yeu   ' +
        '\n5. Xoa nguoi yeu  ' +
        '\n0. Thoat ')
    let choice= readline.question('hãy nhập lựa chọn đi')
    if (choice == 0) {
        break;
    }
    if (choice == 1) {
        loverService.show()
    }
    if (choice == 2) {
        let name = readline.question('Hay nhap ten nguoi yeu di')
        loverService.search(name);
        loverService.show()

    }
    if (choice == 3) {
        let ids = readline.question('Hay nhap ma nguoi yeu');
        if (typeof (ids) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
            let ids = readline.question('Hay nhap ma nguoi yeu');
        }
        let name = readline.question('Hãy nhâp ten nguoi yeu di');
        if (typeof (name) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
            let name = readline.question('Hãy nhâp ten nguoi yeu di');
        }
        let zodiac = readline.question('Hay nhap cung hoang dao de');
        if (typeof (zodiac) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
            let zodiac = readline.question('Hay nhap cung hoang dao de');
        }
        let address = readline.question('Hay nhap dia chi moi di');
        if (typeof (address) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
            let address = readline.question('Hay nhap dia chi moi di');
        }
        let dOB = readline.question('Hay nhap ngay sinh di');
        if (typeof (dOB) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
            let dOB = readline.question('Hay nhap ngay sinh di');
        }
        let hobby = readline.question('Hay nhap so thich di ');
        if (typeof (hobby) != "string") {
            console.log('Trường dữ liệu không hợp lệ');
            let hobby = readline.question('Hay nhap so thich di ');
        }
        let newLover = new Lover(ids, name, zodiac, address, dOB, hobby)
        loverService.add(newLover)
    }
    if (choice == 4) {
        let ids = readline.question('Hay nhap ma nguoi yeu');
        let name = readline.question('Hay nhap ten nguoi yeu moi');
        let zodiac = readline.question('Hay nhap cung hoang dao');
        let address = readline.question('Hay nhap dia chi moi di');
        let dOB = readline.question('Hay nhap ngay sinh di');
        let hobby = readline.question('Hay nhap so thich ');
        loverService.edit(ids, name, zodiac, address, dOB, hobby);

    }
    if (choice == 5) {
        let ids = readline.question('Hay nhap ma nguoi yeu');
        loverService.delete(ids)
    }
}