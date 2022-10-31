# Group Information N08

- Đỗ Thành Đạt - 20521163
- Kiều Bá Dương - 20520990
- Trần Đình Khôi - 20520594
- Lê Hải Phong - 20521743

-----

# Installation

## Tải code về máy

- C1: dùng git clone

  - B1: Tạo một thư mục
  - B2: Mở terminal và cd đến thư mục vừa tạo
  - B3: chạy lệnh sau:
    > git clone https://github.com/ddatdt12/calculator-rn.git

- C2: Tải code từ github

  - B1: Tạo một thư mục
  - B2: Truy cập vào link https://github.com/ddatdt12/calculator-rn.git
  - B3: Click vào code -> download zip
  - B4: Giải nén file vừa tải vào thư mục vừa tạo

## Chạy ứng dụng với docker

- B1: Mở terminal
- B2: Chạy lệnh sau:

  - `node:16.16.0-buster-slim` là tên image
  - `rn-calculator` là tên container

#### Window
```powershell
docker run -u node -it --rm --name rn-calculator -p 19000-19010:19000-19010 -v %cd%:/usr/rn-calculator -w /usr/rn-calculator node:16-buster-slim bash
```

#### Linux / MacOS
```powershell
docker run -u node -it --rm --name rn-calculator -p 19000-19010:19000-19010 -v $(pwd):/usr/rn-calculator -w /usr/rn-calculator node:16-buster-slim bash
```

- B3: Chạy lệnh:

```powershell
npm install
```

- B4: Chạy lệnh:

```powershell
npm start
```

- B5:
  - Quét mã QR ở trên terminal bằng Expo Go (Android) hoặc ứng dụng Máy ảnh (iOS)
  - Nếu muốn truy cập bằng web thì xem dòng trong terminal: `Web is waiting on http://localhost:{port}`
- B6: Connect và sử dụng ứng dụng