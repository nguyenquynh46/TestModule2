import {Lover} from "../entity/Lover";
import {homedir} from "os";

 export class LoverService {
    listLover: Lover[] = [];

    show() {
        if (this.listLover.length > 0) {
            console.log(this.listLover)
        } else {
            console.log('không có dữ liệu')
        }

    }

    search(x: string) {
        this.listLover = this.listLover.filter(item => item.name.includes(x))

    }
    add(newLover: Lover){
       this.listLover.push(newLover)

    }
    edit(id: string, name: string,x:string, address: string, zodiac: string, hobbies:string){
        for (let i = 0; i < this.listLover.length ; i++) {
            if( this.listLover[i].id==id){
                console.log('Có tồn tại mã người yêu trên')
                this.listLover[i].name= name;
                this.listLover[i].dOB=x;
                this.listLover[i].address= address;
                this.listLover[i].zodiac=zodiac;
                this.listLover[i].hobbies= hobbies;

            } else {
                console.log('Không tồn tại người yêu cần cập nhật')
            }
        }
    }
    delete( id: string){
        for (let i = 0; i < this.listLover.length; i++) {
            if(this.listLover[i].id==id){
                this.listLover =this.listLover.filter(item=> item.id!=id);
                this.show();
                console.log('Xoá người yêu thành công')
            } else {
                console.log('Không tìm thấy người yêu')
            }
        }
    }
}