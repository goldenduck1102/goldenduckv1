# ATOTC V1 — A Tale of Two Christmas 2026

GitHub: https://github.com/goldenduck1102/goldenduckv1

Bản đóng gói ngày 30/10/2026, chốt theo giao diện và chỉnh sửa đã hoàn thành trong dự án.

## Chạy mã nguồn

Mở Terminal tại thư mục `ATOTC V1`, rồi chạy:

```bash
pnpm install --frozen-lockfile
pnpm dev
```

Xem tại http://localhost:3026. Cổng được cố định; hãy dừng server đang dùng cổng 3026 trước khi chạy bản đóng gói.

## Build

```bash
pnpm check
pnpm build
pnpm preview
```

Preview bản build tại http://localhost:3027.

## Nội dung gói

- `index.html`, `styles.css`, `app.js`: mã nguồn chỉnh sửa được.
- `public/`: tài nguyên ảnh, logo, sơ đồ và favicon.
- `package.json`, `pnpm-lock.yaml`: lệnh chạy và phiên bản dependency.
- `dist/`: tạo bằng `pnpm build`, không lưu trong Git; có thể đưa nội dung thư mục này lên web root của hosting.
- `ASSETS.json`: thông tin nguồn tài nguyên, gồm bộ ảnh Christmas 2025 và Frame 2.
- `docs/LOCAL-QA.md`: lịch sử các lần kiểm tra và sửa giao diện.
- `MANIFEST.json`: danh sách file, kích thước và SHA-256 để đối chiếu mã nguồn trong repository.

Gói không kèm `node_modules` hoặc ảnh gốc dung lượng lớn trong Downloads. Các ảnh WebP dùng trên trang đã nằm đủ trong `public/` ; `dist/` được tạo lại khi build.

## Trạng thái bàn giao

- Gallery masonry hiển thị đủ 17 ảnh, hỗ trợ phóng to.
- Banner và poster chính thức, bảng giá và sơ đồ tham khảo, địa điểm và Google Maps.
- CTA dẫn tới https://orchestars.vn/events/ttc2026.
- Font Lora và Be Vietnam Pro tải từ Google Fonts; Google Maps cần kết nối Internet.
- Trang giới thiệu, chuyển người mua sang hệ thống OrcheStars để đặt vé.
- Bản build đã kiểm tra thành công trước khi đóng gói. Chưa deploy bản này.
