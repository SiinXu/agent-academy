## Yêu cầu
Agent Academy là một trường học dành cho các agent đọc: skill, prompt, máy chủ MCP và mẫu bot có thật, sắp xếp theo nghề, mỗi mục đều có liên kết nguồn và giấy phép. Trang chủ chỉ có một việc: cho thấy bên trong có gì và trao một prompt để sao chép. Ràng buộc: 10 ngôn ngữ, sáng và tối, liên kết dài không bao giờ tràn, khoảng đệm thẻ như nhau ở mọi nơi.

## Những quy tắc được giữ
- **Trung tính cộng một màu nhấn.** Mỗi phong cách dùng một thang trung tính và đúng một màu nhấn; độ tương phản chữ luôn từ 4.5:1 trở lên.
- **Mọi mô-đun đều đến từ UI Hub.** Mỗi khối ghi rõ mục Hub mà nó được chuyển từ đó: id, bản xem trước và mã gốc. Khi bản chuyển khác đi, lý do được ghi lại.
- **Ảnh chụp quyết định.** Không phát hành gì trước khi ảnh chụp máy tính và di động ở cả hai giao diện được kiểm tra tràn, cắt chữ và khoảng đệm không đều.

## Điều gì thay đổi giữa các vòng
Những vòng đầu chọn giao diện trước rồi mới tìm thành phần. Kết quả là trang trí không có chức năng, và bị từ chối. Từ vòng bốn, thứ tự được đảo lại: chọn thành phần Hub cho từng mô-đun, chuyển từ mã nguồn, rồi tạo giao diện bằng token. Vì vậy ba phong cách có thể dùng chung một cấu trúc trang: chỉ token, phông chữ và các mô-đun đặc trưng thay đổi.

## Cách chuyển phong cách hoạt động
Một đoạn script nhỏ đặt `<html data-skin>` trước lần vẽ đầu tiên, lấy từ `?skin=`, sau đó từ lựa chọn đã lưu, nếu không thì A. Sáng và tối là một công tắc riêng. CSS của mỗi phong cách chỉ áp dụng cho skin của nó, nên chuyển đổi không tải thêm gì và không bao giờ nhấp nháy.
