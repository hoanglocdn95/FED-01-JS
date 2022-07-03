// Bài 1:
// Tạo form đăng ký người dùng với các field và rule validation theo yêu cầu:
// Username: ít nhất 8 ký tự, nhiều nhất 16, chỉ chấp nhận ký tự, số và dấu _
// Name: tên thật người dùng
// Email: phải đúng format email
// password: ít nhất 8 ký tự, password phải đủ có ít nhất 1 chữ, 1 số, 1 ký tự đặc biệt
// confirm password: như trên
// birthday: đảm bảo người dùng trên 18 tuổi
// phonenumber: phải có 84 ở trước, phải có 11 chữ số
// checkbox gender: male, female,
// radio khóa học quan tâm: html, css, js, ts, react, vue, angular, node.
// select option chọn lớp: FED01 đến FED03
// có nút submit và nút reset, tất cả các trường đều required

// Bài 2: (Optional)
// Tạo ứng dụng đơn xin nghỉ, có các field và rule validation theo yêu cầu:
// username: ít nhất 8 ký tự, chỉ chấp nhận ký tự, số và dấu _
// select option chọn team: giá trị từ team1 đến team4
// Textarea lý do nghỉ (Reason): nhập không quá 100 từ
// Nghỉ từ (Form): có thể chọn ngày quá khứ không quá ngày hiện tại 3 ngày (ví dụ hôm nay là 31/5/2022,
//  thì có thể chọn tối đa từ ngày 28/05/2022
// Nghỉ đến (To): Nếu số ngày nghỉ lớn hơn 2 ngày (ví dụ From: 28/05/2022, To: 29/05/2022 => là 2 ngày)
// thì sẽ hiện thêm label thông báo số ngày nghỉ không lương (No Paid Day),
// nếu chọn số ngày nhỏ hơn hoặc bằng 2 thì label sẽ mất
// No Paid Day: khi số ngày nghỉ lớn hơn 2, thì số ngày nghỉ - 2 sẽ được tính là ngày nghỉ không lương
// Checkbox có cần người làm thay hay không (Replacement): Nếu chọn có, sẽ hiện field Supporter,
//  nếu chọn không thì không hiện field Supporter
// Select option chọn người làm thay (Supporter): tạo ra 4 option là tên 4 người bất kì
// Có nút submit và nút reset
