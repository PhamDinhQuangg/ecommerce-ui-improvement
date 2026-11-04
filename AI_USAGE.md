# AI Usage Log

## 1. Công cụ AI

ChatGPT.

## 2. Mục đích sử dụng

- Đọc và giải thích yêu cầu bài tập.
- Hướng dẫn khảo sát website Tiki theo từng bước.
- Phân tích ảnh chụp giao diện do tôi cung cấp.
- Hỗ trợ tổng hợp bảng khảo sát và đề xuất cải tiến.

## 3. Prompt đã sử dụng

Các yêu cầu chính trong cuộc trao đổi:

1. “đọc file và hướng dẫn cách làm tuần tự nếu đề bắt tôi chụp ảnh”
2. “giúp tôi từng bước đi”

Trong quá trình thực hiện, tôi gửi ảnh chụp từng khu vực của Tiki
để AI hỗ trợ nhận xét và hướng dẫn thao tác tiếp theo.

Tôi cũng bổ sung thông tin “tôi để thấp đến cao đó” để xác nhận
trạng thái sắp xếp của danh sách sản phẩm đang khảo sát.

Tôi đang thực hiện bài tập phát triển giao diện website thương mại
điện tử bằng HTML5 và CSS3.

Tôi muốn cải tiến thẻ sản phẩm sách dựa trên khảo sát Tiki:
một số tên sản phẩm bị cắt ngắn và một số ảnh không tải được.

Đối tượng sử dụng: khách hàng mua sách trực tuyến tại Việt Nam.

Hãy đề xuất:
1. Bố cục giao diện với tối thiểu 4 sản phẩm mẫu.
2. Các thành phần HTML cần sử dụng.
3. Cách tổ chức CSS trong file riêng.
4. Cách hiển thị trên máy tính và điện thoại.
5. Những điểm cần kiểm tra về khả năng sử dụng.

Chỉ sử dụng HTML/CSS và ảnh lưu trong dự án. Nút trên mỗi thẻ
dẫn đến phần giới thiệu sách mẫu trong cùng trang.

Trước tiên, hãy giải thích phương án thiết kế.
Chưa tạo toàn bộ mã nguồn cho đến khi tôi yêu cầu.
## 4. Kết quả AI đề xuất

AI hỗ trợ tổng hợp nhận xét cho năm khu vực:

- Trang chủ.
- Danh mục sản phẩm.
- Chi tiết sản phẩm.
- Tìm kiếm.
- Giỏ hàng.

Các đề xuất chính gồm:

- Thu gọn banner và cải thiện cách hiển thị tên sản phẩm.
- Kiểm tra kết quả sắp xếp theo giá.
- Bổ sung ảnh thay thế khi ảnh sản phẩm không tải được.
- Ưu tiên thông tin chi tiết trước các khối sản phẩm gợi ý.
- Giải thích rõ khi kết quả tìm kiếm không liên quan đến từ khóa.
- Điều chỉnh thanh nổi để không che bảng tổng tiền.
- Làm rõ đơn giá sau khi phân bổ mã giảm giá.
### Phương án cải tiến giao diện

AI đề xuất xây dựng trang “Góc Sách” bằng HTML5 và CSS3,
gồm đầu trang, danh sách tối thiểu 4 sản phẩm và phần giới thiệu
từng cuốn sách.

Mỗi thẻ sản phẩm có ảnh bìa, tên đầy đủ, tác giả, giá bán,
giá gốc và tỷ lệ giảm giá nếu có. Liên kết “Xem giới thiệu”
dẫn đến phần giới thiệu tương ứng trong cùng trang.

Tên sách được xuống dòng tự nhiên, không cắt ngắn. Ảnh lưu
trong thư mục images/, dùng đường dẫn tương đối và thuộc tính
object-fit: contain để giữ đúng tỷ lệ bìa sách.

HTML sử dụng các thẻ ngữ nghĩa như header, main, section,
article và footer. CSS được tách vào style.css, dùng Grid
để chia cột và Flexbox để bố trí nội dung trong thẻ.

Bố cục dự kiến gồm 4 cột trên máy tính, 2 cột trên máy tính bảng
và 1 cột trên điện thoại.

Các điểm cần kiểm tra gồm đường dẫn ảnh, tên sách dài,
tính chính xác của giá, liên kết trong trang, khả năng sử dụng
bàn phím và hiện tượng tràn ngang trên màn hình nhỏ.

Đây là phương án thiết kế; chưa tạo mã nguồn hoặc kiểm thử.
## 5. Kiểm tra và điều chỉnh

Tôi trực tiếp thao tác trên website và gửi ảnh màn hình để
đối chiếu với nhận xét của AI.

### Danh mục sản phẩm

Tôi chọn “Giá thấp đến cao” và kiểm tra một hàng sản phẩm.
Giá hiển thị lần lượt là 116.000đ, 280.000đ, 44.000đ và 26.999đ.

Tôi xác nhận với AI rằng tùy chọn sắp xếp đã được chọn.
Nhận xét cuối cùng chỉ ghi nhận hiện tượng trong lần kiểm tra,
không khẳng định nguyên nhân gây ra hiện tượng.

### Tìm kiếm

Tôi kiểm tra hai trường hợp:

- Tìm tên sách “người đàn ông mang tên ove”.
- Tìm chuỗi thử nghiệm “zzzxxyy123456”.

Với chuỗi thử nghiệm, website vẫn hiển thị nhiều ấm đun nước.
Nhận xét được điều chỉnh theo kết quả thực tế, thay vì giả định
website sẽ hiển thị thông báo không tìm thấy sản phẩm.

### Giỏ hàng

Tôi đăng nhập, thêm sách vào giỏ và tăng số lượng từ 1 lên 2.

AI ban đầu dự kiến thành tiền là 232.000đ theo đơn giá 116.000đ.
Ảnh sau cập nhật cho thấy có mã giảm thêm 15.000đ, nên kết quả
thực tế là 217.000đ, tương ứng 108.500đ/cuốn sau phân bổ giảm giá.

Kết quả được đối chiếu bằng phép tính:

116.000đ × 2 − 15.000đ = 217.000đ.

### Giới hạn xác minh

Các nút và bộ lọc chưa được thao tác chỉ được ghi nhận là thành
phần có trên giao diện, chưa được xác nhận hoạt động đúng.

## 6. Phần tôi hiểu và có thể giải thích

Ở giai đoạn khảo sát, tôi có thể giải thích:

- Mục đích của năm khu vực được khảo sát.
- Sự khác biệt giữa quan sát thực tế và đề xuất cải tiến.
- Cách kiểm tra sắp xếp sản phẩm và kết quả tìm kiếm.
- Cách đối chiếu số lượng, đơn giá, giảm giá và thành tiền.

Phần giải thích HTML/CSS sẽ được bổ sung sau khi xây dựng,
chạy thử và tự điều chỉnh giao diện.
## 7. Xây dựng và kiểm tra giao diện

### Hỗ trợ tạo mã

Tôi yêu cầu AI: “tạo mã theo phương án này”.

AI tạo index.html, style.css, bốn ảnh bìa SVG mẫu và README.md.
Tôi đưa các file vào dự án và mở index.html bằng Chrome để chạy thử.

### Kiểm tra thực tế

- Trên máy tính: bốn sản phẩm hiển thị thành một hàng;
  ảnh tải được, tên sách đầy đủ, giá và nút thao tác rõ ràng.
- Trên chế độ điện thoại: sản phẩm chuyển thành một cột;
  nội dung đã quan sát nằm gọn trong màn hình.
- Liên kết “Xem giới thiệu” đã thử chuyển đến đúng phần sách
  tương ứng trong trang.

### Điểm tôi tự phát hiện và điều chỉnh

Khi chạy thử, tôi phát hiện một số tiêu đề tiếng Việt
hiển thị dấu và khoảng cách bất thường.

Tôi hỏi AI để được hỗ trợ, sau đó sửa style.css:
đổi font-family của các tiêu đề và thành phần liên quan
sang Arial, Helvetica, sans-serif.

Lần sửa đầu chưa áp dụng cho tiêu đề giới thiệu sách.
Tôi bổ sung selector .book-detail h3 để ghi đè quy tắc
định dạng cũ. Sau khi lưu và tải lại trang, chữ hiển thị
bình thường.

### Phần mã tôi có thể giải thích

- font-family: quy định danh sách phông chữ ưu tiên sử dụng.
- .book-detail h3: chọn các thẻ h3 bên trong phần tử
  có class book-detail.
- Selector .book-detail h3 có độ ưu tiên cao hơn h3.
  Khi hai quy tắc có cùng độ ưu tiên, quy tắc viết sau
  được áp dụng nếu không có yếu tố khác chi phối.
- href="#sach-1": dẫn đến phần tử có id="sach-1".
- Media query: thay đổi bố cục theo chiều rộng màn hình.
## 8. Nhật ký sử dụng AI trong Buổi 2

### Công cụ sử dụng
ChatGPT.

### Mục đích
- Rà soát mã HTML/CSS từ Buổi 1.
- Kiểm tra cách sử dụng các phần tử HTML5.
- Hướng dẫn thực hành CSS selector và Box Model.
- Giải thích Flexbox, CSS Grid và responsive.
- Hướng dẫn bổ sung hover, transition và focus.
- Hỗ trợ đối chiếu kết quả kiểm thử.

### Quá trình thực hiện
AI phân tích mã nguồn và đề xuất những thay đổi nhỏ
thay vì xây dựng lại website.

Tôi trực tiếp chỉnh sửa các file HTML/CSS bằng VS Code,
kiểm tra giao diện bằng Chrome và sử dụng DevTools
để quan sát bố cục ở nhiều kích thước màn hình.

### Kiểm tra và điều chỉnh
Tôi đối chiếu kết quả trên trình duyệt, thực hành
thay đổi các thuộc tính CSS và khôi phục cấu hình
phù hợp sau khi thử nghiệm.

Kết quả cuối cùng được kiểm tra bằng thao tác thực tế
và ảnh chụp màn hình.
