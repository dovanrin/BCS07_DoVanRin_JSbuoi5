/* inphut: nhập điểm các môn dự thi. 
điểm chuẩn của trường. 
đối tượng được cộng điểm */
//các bước xử lý:
//lấy dử liệu điểm các môn 

//xem đối tượng được cộng điểm hay không?
const A = "a";
const B = "b";
const C = "c";


function khuVucCongDiem(khuVuc){
    switch (khuVuc) {
        case A: {
            return 2;
        }
        case B: {
            return 1;
        }
        case C: {
            return 0.5;
        }
    }
}
const MOT = "mot";
const HAI = "hai";
const BA = "ba";

function doiTuongCongDiem(doiTuong){
    switch (doiTuong) {
        case MOT: {
            return 2.5;
        }
        case HAI: {
            return 1.5;
        }
        case BA: {
            return 1;
        }
    }
}

function tinhKetQua (){
var khuVuc = document.getElementById("khuVuc").value;
var doiTuong = document.getElementById("doiTuong").value;
// diểm chuẩn
var diemChuan = document.getElementById("diemChuan").value * 1;
// Điểm 1
var diemMon1 = document.getElementById("diem1").value * 1;
// Điểm 2
var diemMon2 = document.getElementById("diem2").value * 1;
// Điểm 3
var diemMon3 = document.getElementById("diem3").value * 1;
var tongDiemCacMon = 0
tongDiemCacMon = diemMon1 + diemMon2 + diemMon3;
console.log(tongDiemCacMon);
var diemUuTien1 = khuVucCongDiem(khuVuc);

//Tính điểm và so sanh với điểm chuẩn để đưa ra kết quả
var diemUuTien2 = doiTuongCongDiem(doiTuong);
var diemUuTien = diemUuTien1 + diemUuTien2;
console.log(diemUuTien);
var tongDiem = 0;
tongDiem = diemUuTien + tongDiemCacMon;
 if(diemMon1 == 0 || diemMon2 == 0 || diemMon3 == 0) { 
    document.getElementById("ketQua").innerHTML = "Bạn đã rớt. Do có điểm 0";
 }
 else if (tongDiem < diemChuan) {
    document.getElementById("ketQua").innerHTML = "Bạn đã rớt. Cố gắng nhé. Tổng Điểm:"+ " " + tongDiem;
 }
 else
 {document.getElementById("ketQua").innerHTML = "Bạn đã Đạt. Tổng Điểm:" + tongDiem;}
}
//output: tính kết quả và trẩ về xem có đạt điểm chuẩn không?
// Bài 2: Tính tiền điện:
/* input: 
*số điện sử dụng. 
*giá tiền ứng với số kw sử dụng
*họ tên người dùng
*/
// xử lý:
function tinhTienDien () {
    var soDien = document.getElementById("dienSuDung").value * 1;
    var hoVaTen = document.getElementById("hoTen").value;
    var tienSuDung = 0;
    if (soDien <= 50){
        tienSuDung = soDien * 500;
    }
    else if (soDien <= 100) {
        tienSuDung = soDien * 650;
    }
    else if (soDien <= 200) {
        tienSuDung = soDien * 850;
    }
    else if (soDien <= 350){
        tienSuDung = soDien * 1100;
    }
    else 
    {
        tienSuDung = soDien *1300;
    }

    document.getElementById("tinhTien").innerHTML = hoVaTen + ". " + " Tiền điện sử dụng là: " + new Intl.NumberFormat("en-IN").format(tienSuDung) + " " + "VNĐ";
}

//output: xuất ra sô tiền sử dụng điện tương ứng.

// =========Bài 3================