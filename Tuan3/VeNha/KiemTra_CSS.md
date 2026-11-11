# Kết quả rà soát bài tập CSS Tuần 3

Đối chiếu với `BaiTap_CSS_Basic.pdf` (6 trang), file `css1.zip` và bộ file trước khi sửa.

| Bài | Đối chiếu yêu cầu | Sửa / kết quả |
|---|---|---|
| 1 | Hoàn thành 2 game, nộp ảnh minh chứng | Giữ nguyên file Word đã gửi. File này thể hiện ảnh các level CSS Diner 1–32; chưa thấy ảnh minh chứng CSS Speedrun trong file Word. |
| 2a | Xanh, giữa, đậm, gạch chân, 30px | Đúng. |
| 2b | Đỏ mờ 50%, phải, nghiêng, viền vàng chấm, nền xám, 15px | Đúng. |
| 2c | BIT-UEH, hiệu ứng text-shadow theo hình | Đã sửa lớp chữ đỏ, bóng đỏ và quầng sáng xanh-vàng. |
| 2d | Logo BIT kích thước 30px lặp và cố định | Sử dụng phần nhận diện khoa BIT từ ảnh gốc của đề (loại bỏ mảng UEH UNIVERSITY), `background-repeat: repeat`, `background-attachment: fixed`, ảnh cao 30px. |
| 2e | 100×50; hidden; ellipsis; nowrap | Đã đủ ba phần. |
| 3 | Chọn 3b: làm Bài 4,5,6,7 | Đã làm đúng lựa chọn. |
| 4 | Thanh 4 ô cyan và link gạch chân | Sửa thanh đen thành 4 ô cyan, chữ xanh gạch chân, `inline-block`. |
| 5 | Shared Hosting, logo và 2 CTA | Logo đổi sang ảnh cục bộ, khối được căn giữa, hai nút ngang. |
| 6 | My Portfolio với 9 hình theo HTML đề | 9 hình placeholder xanh lá và menu, đã dùng SVG cục bộ, grid 3 cột desktop. |
| 7 | Bố cục wrapper, header/nav/main/footer | Bốn thẻ là con trực tiếp của wrapper, bố cục hai cột nav/main bằng CSS Grid. |
| 8 | Dùng file css1 tạo layout Heroes | Giữ nguyên nội dung và bốn hình gốc từ zip, bố cục bốn cột và hộp văn bản đè lên hình. |
| 9 | Font Awesome | Font và CSS dùng file cục bộ, icon hiển thị khi offline. |
| 10 | `Tuan3/VeNha/index.html`, liên kết và cá nhân | Có liên kết các bài, họ tên, ảnh minh họa, liên kết GitHub cá nhân. Chưa có ảnh chân dung thật; chưa đẩy repo lên GitHub. |

## Kiểm tra kỹ thuật

- Render 8 trang HTML ở 1280px và 390px: không tràn ngang, không phát hiện lỗi JavaScript.
- Ảnh HTML không lỗi tải, tất cả liên kết tài nguyên cục bộ tồn tại.
- Ảnh Bài 5, 6, 8 và Font Awesome không phụ thuộc Internet.
- Riêng Bài 2d: `background-attachment: fixed` cần cuộn để thấy đầy đủ trong trình duyệt; ảnh chụp full-page của một số browser có thể chỉ vẽ phần nằm trong viewport.
- Chưa thử quy trình `git push` vì không có quyền ghi GitHub từ phiên này.

## Trước khi nộp

1. Kiểm tra và bổ sung ảnh minh chứng CSS Speedrun trong Bài 1 nếu chưa có.
2. Thay ảnh đại diện minh họa bằng ảnh cá nhân (nếu giảng viên yêu cầu ảnh chân dung).
3. Đưa **các file đã giải nén** vào `Tuan3/VeNha/` của repository GitHub, không nộp file zip.
