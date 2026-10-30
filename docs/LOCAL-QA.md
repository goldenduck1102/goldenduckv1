# Local QA — 29/10/2026

## Thay đổi trong lượt này

- Giải nén ZIP gốc vào thư mục dự án riêng, giữ nguyên ZIP.
- Chuyển HTML/CSS/JS thành source Vite ở root, asset nằm trong public/.
- Thêm pnpm dev (3026, strictPort), check, build, preview (3027).
- Dùng module script để Vite bundle JavaScript; giữ nguyên giao diện và tương tác từ ZIP.
- Loại URL preview ChatGPT cũ khỏi metadata, dùng ảnh OG local.
- Viết lại README theo cấu trúc source hiện tại.

## Kết quả kiểm tra mới

- pnpm check và pnpm build: pass, Vite 8.3.5.
- Dev server: HTTP 200 tại http://localhost:3026.
- Production preview: HTML và 13 resource local được HTML tham chiếu đều HTTP 200.
- Đối chiếu nguồn sự kiện staging: ngày/giờ, giá, đoàn biểu diễn, địa điểm,
  quy định trẻ em, check-in và bốn đường dẫn chọn vé khớp.
- Chromium: không tràn ngang tại 320, 390, 768, 1440px.
- Quan sát ảnh toàn trang desktop, hero và section chọn vé ở mobile 390px.
- Ảnh nội dung đều tải được; không có anchor nội trang thiếu đích.
- Tạm tính: First Class × 1 = 1.800.000đ; Premium × 2 = 2.400.000đ;
  Eco × 3 = 2.400.000đ; Standing × 10 = 2.000.000đ.
- Bốn tổ hợp ngày/giờ dẫn đúng URL suất; nút giảm/tăng bị vô hiệu tại biên 1/10.
- Menu mở/đóng bằng Escape. Gallery mở, chuyển ảnh, đóng, trả focus về ảnh nguồn.
- Console không có error/warn trong lượt kiểm tra.

## Giới hạn

- Không thử giao dịch, giữ ghế hoặc thanh toán; CTA tiếp tục dùng staging theo nguồn.
- Không deploy. Dev server 3026 được giữ chạy để người dùng xem.
- Chưa thử thiết bị vật lý, Safari/iOS, clipboard hoặc download ICS trong lượt này.
- QA.md trong ZIP là lịch sử của bản cũ, không phải kết quả kiểm tra lại ở local.

## Bản sửa theo browser comments — 29/10/2026

- Bỏ form chọn hạng vé, số lượng, tạm tính và logic đặt vé/ICS.
- Bảng giá và lịch diễn là nội dung thông tin; liên kết ra trang sự kiện OrcheStars.
- Sơ đồ SVG lấy từ trang chọn vé được cung cấp, nhúng nhãn ảnh vào SVG,
  hiển thị tĩnh và có modal phóng to; không thể chọn ghế tại landing page.
- Thêm ảnh ngoại thất Renaissance từ Marriott, ghi credit, nhúng Google Maps.
- Tham khảo Confarex: hero hai cột, chữ lớn, dải thông tin sự kiện,
  nút bo tròn và khung ảnh rõ ràng. Giữ Lora/Be Vietnam Pro và màu Giáng Sinh.
- Chromium: đã quan sát desktop toàn trang, vé + sơ đồ, ảnh địa điểm + Google Maps,
  hero tablet, vé và modal mobile. Google Maps hiển thị đúng khách sạn.
- Không tràn ngang tại 1440/768/390/320px; không ảnh nội dung hỏng.
- Modal sơ đồ mở và Escape đóng; mobile cuộn ngang bên trong vùng ảnh.
- pnpm check / pnpm build pass. Không deploy.

Các kết quả kiểm tra tạm tính/ICS ở phần trước chỉ áp dụng bản cũ đã bị thay thế.

## Confarex layout / colour replacement — latest user correction

- Replaced the complete stylesheet, including typography, colours, hero layout,
  section compositions, pills, imagery, schedule and footer.
- Text/event facts preserved; programme moved to its own section before tickets.
- Inspected desktop hero/full-page, tablet full-page, phone hero and seat-map modal.
- Desktop 1440, tablet 768, phone 390: no horizontal overflow; no broken images
  in eager-loaded desktop check. Inter loaded successfully.
- Seat-plan modal opens and closes with Escape. Ticket form/input count remains zero.
- pnpm check and production build pass; local server remains on port 3026.
- Earlier burgundy/serif visual notes above describe superseded versions.

## Eight marked browser corrections — latest revision

- Verified official landscape banner at hero and portrait poster in event information.
- Computed fonts: Lora heading, Be Vietnam Pro body; accent #e4c68c.
- Verified main section order: top, cau-chuyen, chon-ve, story-spread, lich-dien,
  nghe-si, dia-diem, khoanh-khac, hoi-dap. No closing section.
- Inspected desktop full page and event-information detail, mobile full page.
- No horizontal overflow at 1440/768/390/320px; no broken loaded content images.
- No missing internal anchor targets. Seat-map modal opens and closes with Escape.
- pnpm check and pnpm build passed. Local preview stays on port 3026.

## Twelve browser-comment refinements

- Swapped check-in captions: “Bắt đầu check-in” above 17:15/19:45,
  performance time below.
- Replaced gallery and seating-plan magnification symbols with zoom-in icons.
- Removed gallery disclaimer, large footer statement, hero metadata strip and
  top announcement. Archival context remains in gallery introduction and image alt text.
- Event facts now have exactly two rows: date/showtimes, venue; performer row removed.
- Expanded introduction into three paragraphs, grounded in fresh retrieval of
  staging.orchestars.vn/events/ttc2026 (traditional/contemporary Christmas,
  orchestral music/Broadway, orchestra/children's choir, family audience).
- Header “Mua vé ngay” links externally to the supplied OrcheStars event page.
- Verified DOM removal count, two facts rows, all six gallery zoom symbols,
  map zoom symbol and caption order. Inspected desktop information section and
  mobile view. No horizontal overflow at 1440, 768, 390 and 320px.
- pnpm check and production build passed.

## 30/10/2026 — CTA and navigation

- Removed information-invitation sentence.
- Seven navigation entries match page order and align left beside the logo;
  responsive menu breakpoint is 1100px. Mobile menu opens and Escape closes.
- Five purchase CTAs share label, dimensions and visual hierarchy; all hrefs
  are https://orchestars.vn/events/ttc2026 as explicitly requested by the user.
- Artist role badges use #68171d with white text.
- Browser DOM verifies order, all five destinations and removed sentence.
- Inspected desktop header and mobile open menu. No overflow at 1440, 1024,
  390 and 320px. No missing internal anchors. Production build and JS check pass.
- Local Vite restarted on 3026; no deployment in this change.

## 30/10/2026 — supplied Christmas 2025 gallery

- Imported all 16 supplied photos from Downloads/OrcheStars Christmas 2025 - Social Proof.
- Original 223,694,858 bytes untouched. Generated 32 WebP variants (720px thumbnails,
  1800px large images), total 4,889,180 bytes; orientation corrected and metadata stripped.
- Replaced the six old gallery images; initial six photos plus working expand/collapse
  for ten additional photos. All 16 remain accessible without JavaScript.
- All 16 thumbnails decoded without errors. Expanded gallery shows 16; collapsed shows 6.
- Last photo opens its large variant in the modal; Escape closes it.
- Inspected desktop 1440 and mobile 390 screenshots; no horizontal overflow.
- JS syntax check and production build passed. Preview running locally on 3026.

## 30/10/2026 — masonry, hover zoom and animated header CTA

- Applied ui-ux-pro-max focused UX search: reduced motion, keyboard focus,
  hover-versus-tap and keyboard navigation guidance.
- Gallery now uses responsive masonry rows, preserving natural image ratios;
  CSS column fallback remains usable without JavaScript.
- Added supplied Frame 2.jpg as a new optimized thumbnail/large image, retained
  originals, recorded provenance in ASSETS.json. Gallery contains 17 images.
- Zoom badge is visible only on the hovered or keyboard-focused image. Entire
  photograph remains the tap/click target on touchscreens.
- Header purchase CTA: #68171d background, white text, no icon, white/cream moving
  gradient stroke. Reduced-motion users receive a static stroke.
- Browser verified 6 initial / 17 expanded photos, natural heights vary, all 5 other
  badges remain hidden when one is hovered; keyboard Enter opens the new 1800px
  photo and Escape closes it. Stroke angle changes over time and animation is
  disabled under prefers-reduced-motion.
- Inspected 945px gallery and 390px mobile; no horizontal overflow at 320/390/945.

## Latest marked refinements: full gallery / layout / shared CTA

- All 17 masonry images are visible; expansion button and hiding logic removed.
- Burgundy live introduction/facts moved together after gallery, before venue.
  Hero retains official banner and accessible H1; moved display title is an H2.
- Removed third event-description paragraph and “Xem địa điểm” action.
- Updated heading to “Thời gian Check-In”, removed hard address line break and
  both standalone Google Maps links; map iframe remains.
- All five purchase CTAs match the header: burgundy, white text/animated stroke,
  no icon; exact production href retained. Reduced motion disables all animations.
- Desktop ticket section measured 847px at 1440px, approximately requested 860px.
  All prices, seat plan and magnification action remain visible and readable.
- DOM verifies 17 visible photos, no more button, two intro paragraphs, zero
  standalone map links and zero CTA SVGs. Reviewed desktop ticket/moved block
  and mobile moved block. No overflow at 1440/390/320; no missing internal anchors.

## Latest four comments — performance emphasis and artists removal

- Removed artists section and corresponding menu link.
- Removed duration line. Weekdays have higher contrast; 18:00 / 20:30 are now
  large burgundy primary information rather than small secondary text.
- Purchase CTA sits beside performance date/times on desktop; on mobile it follows
  the schedule at full width. Production URL and shared CTA styling retained.
- Inspected desktop information section and mobile schedule/CTA. No horizontal
  overflow at 1440/390; no missing internal anchors. Build passed.

## Latest mobile ticket and closing-block edits

- Removed “Mỗi ngày” by the performance times, secondary summary information link,
  and the standalone 19–20/month date cell from the closing strip.
- Summary purchase CTA centered. At 430px its horizontal centre equals 215px.
- Mobile only: seat map precedes compact, centered price card (489px measured height).
  Title/note/button centered; clear left/right tier-price alignment preserved.
- Responsive DOM reordering also keeps keyboard focus order aligned with visuals;
  desktop automatically restores prices before map.
- Reviewed 430px screenshots, verified desktop order and no horizontal overflow.
  JS check and production build passed.
