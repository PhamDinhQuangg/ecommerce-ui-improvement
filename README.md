# E-commerce UI Improvement — Góc Sách

## 1. Giới thiệu
Giao diện tĩnh cải tiến thẻ sản phẩm sách: tên đầy đủ, ảnh giữ đúng tỷ lệ, giá dễ đọc và liên kết giới thiệu trong trang. Các sách, tác giả, bìa và giá đều là dữ liệu hư cấu phục vụ học tập.

## 2. Website tham khảo
- Tên: Tiki.
- URL: https://tiki.vn/
- Khu vực đã khảo sát: trang chủ, danh mục Nhà Sách Tiki, chi tiết sách, tìm kiếm và giỏ hàng.
- Xem bảng khảo sát trong `survey.md` do sinh viên đã tạo; giữ nguyên file đó khi ghép bộ mã này.

## 3. Chức năng
Hiển thị 4 sách mẫu, giá bán, giá gốc và mức giảm nếu có. Liên kết “Xem giới thiệu” dẫn đến phần tương ứng. Bố cục 4/2/1 cột theo chiều rộng màn hình. Không có xử lý giỏ hàng hoặc thanh toán.

## 4. Công nghệ
HTML5, CSS3 và ảnh SVG nguyên bản lưu cục bộ. Không JavaScript, thư viện, font ngoài, backend hay cơ sở dữ liệu.

## 5. Cách chạy
Giải nén toàn bộ thư mục, mở `index.html` bằng trình duyệt. Giữ `style.css` và thư mục `images/` đúng vị trí. Có thể dùng Live Server nếu đã cài, nhưng không bắt buộc.

## 6. Cải tiến đã thực hiện
- Tên sách xuống dòng tự nhiên, không dùng line-clamp hay dấu ba chấm.
- CSS Grid chia cột; Flexbox giữ các nút thẳng hàng.
- Ảnh cục bộ dùng `object-fit: contain`; có alt và kích thước gốc.
- Phân biệt giá bán, giá gốc, giảm giá; giá giảm tính đúng.
- Liên kết trong trang có đích rõ ràng; có skip link, focus và phân cấp tiêu đề.

## 7. Hỗ trợ từ AI
AI hỗ trợ phương án, HTML/CSS, bìa SVG mẫu và kiểm tra kỹ thuật. Sinh viên cần tự chạy, kiểm tra trên thiết bị của mình, phát hiện và sửa ít nhất một điểm, rồi cập nhật `AI_USAGE.md` đã tạo. Không ghi rằng bản thân đã sửa nếu chưa thực hiện.

## Kiểm tra trên máy tính
1. Mở trang ở máy tính và điện thoại giả lập bằng DevTools.
2. Kiểm tra ảnh, tên dài, giá và cả 4 liên kết giới thiệu.
3. Dùng Tab/Enter để kiểm tra bàn phím, thử zoom 200%.
4. Ghi lại ít nhất một điều chỉnh do bản thân phát hiện, giải thích CSS đã sửa.

## Tệp trong bộ mã
- `index.html`: nội dung và cấu trúc.
- `style.css`: toàn bộ định dạng, media query ở cuối.
- `images/`: 4 ảnh bìa SVG tự thiết kế cho bài tập.

Bộ mã không chứa `survey.md` hoặc `AI_USAGE.md` để tránh ghi đè các file sinh viên đã hoàn thành.
## 8. Cập nhật Buổi 2: Thực hành HTML5 và CSS3

### 8.1. Mục tiêu
Tiếp tục hoàn thiện giao diện danh sách bốn sản phẩm sách từ Buổi 1, tập trung vào HTML5 có ngữ nghĩa, CSS selector, Box Model, Flexbox, CSS Grid và trạng thái tương tác.

### 8.2. Những thay đổi đã thực hiện
- Bổ sung danh sách `ul` và `li` cho menu điều hướng.
- Sử dụng Flexbox để căn chỉnh các mục menu.
- Tăng `border-radius` của thẻ sản phẩm từ 8px lên 12px.
- Tăng `padding` của nội dung thẻ từ 20px lên 24px trên desktop.
- Bổ sung hiệu ứng đổi màu đường viền khi hover thẻ sản phẩm.
- Bổ sung `transition` cho nút Xem giới thiệu.
- Tự tăng cỡ chữ giá gốc từ 12px lên 14px.
- Giữ bố cục responsive 4/2/1 cột bằng CSS Grid.

### 8.3. Kết quả kiểm thử
- Bố cục 1366px: 4 cột.
- Bố cục 768px: 2 cột.
- Bố cục 390px: 1 cột.
- Bốn ảnh bìa hiển thị đúng.
- Hai liên kết menu và bốn liên kết Xem giới thiệu hoạt động đúng.
- Trạng thái hover và focus hiển thị rõ.
- Giá gốc sau điều chỉnh nằm gọn trong thẻ.
- Không ghi nhận tràn ngang ở 390px.

### 8.4. Công cụ và phạm vi
Sử dụng HTML5, CSS3 và tài nguyên SVG cục bộ. ChatGPT hỗ trợ phân tích, hướng dẫn thực hành và giải thích mã. Sinh viên trực tiếp chỉnh sửa, kiểm tra trên Chrome và xác nhận kết quả. Không sử dụng JavaScript hoặc framework CSS.