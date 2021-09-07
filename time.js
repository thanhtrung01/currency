// Ngày tháng mới cập nhật 
var date = new Date();
var ngay = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sau", "Thứ bảy"];
var thang = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
document.getElementById("date").innerHTML = "Giao dịch"+ " ngày " 
  + date.getDate() +" tháng " + thang[date.getMonth()]
  + " năm " + date.getFullYear(); 






//Đồng hồ xem thời gian
function checkTime(i) 
{
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
// Hàm khởi tạo đồng hồ
function startTime() 
{
    // Lấy Object ngày hiện tại
    var today = new Date();
 
    // Giờ, phút, giây hiện tại
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
 
    // Chuyển đổi sang dạng 01, 02, 03
    // h = checkTime(h);
    m = checkTime(m);
    s = checkTime(s);
 
    // Ghi ra trình duyệt
    document.getElementById('timer').innerText = h + ":" + m + ":" + s;
 
    // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
    var t = setTimeout(function() {
        startTime();
    }, 500);
}
