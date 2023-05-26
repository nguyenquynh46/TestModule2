"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoverService = void 0;
var LoverService = /** @class */ (function () {
    function LoverService() {
        this.listLover = [];
    }
    LoverService.prototype.show = function () {
        if (this.listLover.length > 0) {
            console.log(this.listLover);
        }
        else {
            console.log('không có dữ liệu');
        }
    };
    LoverService.prototype.search = function (x) {
        this.listLover = this.listLover.filter(function (item) { return item.name.includes(x); });
    };
    LoverService.prototype.add = function (newLover) {
        this.listLover.push(newLover);
    };
    LoverService.prototype.edit = function (id, name, x, address, zodiac, hobbies) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].id == id) {
                console.log('Có tồn tại mã người yêu trên');
                this.listLover[i].name = name;
                this.listLover[i].dOB = x;
                this.listLover[i].address = address;
                this.listLover[i].zodiac = zodiac;
                this.listLover[i].hobbies = hobbies;
            }
            else {
                console.log('Không tồn tại người yêu cần cập nhật');
            }
        }
    };
    LoverService.prototype.delete = function (id) {
        for (var i = 0; i < this.listLover.length; i++) {
            if (this.listLover[i].id == id) {
                this.listLover = this.listLover.filter(function (item) { return item.id != id; });
                this.show();
                console.log('Xoá người yêu thành công');
            }
            else {
                console.log('Không tìm thấy người yêu');
            }
        }
    };
    return LoverService;
}());
exports.LoverService = LoverService;
