// =========================================================================
// BƯỚC 1: KHO DỮ LIỆU ĐẦY ĐỦ CHO TẤT CẢ CÁC DÒNG IPHONE (13 ĐẾN 17 & AIR)
// Ông chỉ cần thay đổi link ảnh và sửa lại giá tiền cho đúng thực tế nhé!
// =========================================================================
const databaseProducts = {
    // ---------- DÒNG IPHONE 17 & AIR (CHUNG TRANG HTML) ----------
    "17": {
        title: "iPhone 17 Thường",
        oldPrice: "Không có",
        // Cấu trúc mới: Liệt kê trực tiếp các phiên bản dung lượng máy có kèm giá tiền
        storages: [
            { label: "256GB", price: "24.990.000đ" },
            { label: "512GB", price: "28.990.000đ" }
        ],
        colors: [
            { name: "Tím Oải Hương", hex: "#E6E1F3", img: "/img/iphone_17_256gb-3.webp" },
            { name: "Xanh Lá Xô Thơm", hex: "#b3e6b9", img: "/img/iphone_17_sage_pdp_image_position_1_sage_color__vn-vi_1.webp" },
            { name: "Đen", hex: "#3C3D3A", img: "/img/iphone_17_256gb_2 (1).webp" },
            { name: "Xanh Lam Khói", hex: "#009ac9", img: "/img/iphone_17_256gb-2.webp" },
            { name: "Trắng", hex: "#ffffff", img: "/img/256gb_2.webp"}
        ],
        thumbnails: [
            "/img/ip17-thg-purple.webp",
            "/img/ip17-small-1.webp",
            "/img/ip17-small-2.webp",
            "/img/ip17-small-3.webp",
            "/img/ip17-small-4.webp",
            "/img/ip17-thg-review1.webp",
            "/img/ip17-thg-review2.webp",
            "/img/ip17-thg-review3.webp",
            "/img/ip17-thg-review4.webp",
            "/img/ip17-thg-review5.webp"
        ]
    },
    "17promax": {
        title: "iPhone 17 Pro Max",
        oldPrice: "36.990.000đ",
        storages: [
            { label: "256GB", price: "34.990.000đ" },
            { label: "512GB", price: "39.990.000đ" },
            { label: "1TB", price: "45.990.000đ" }
        ],
        colors: [
            { name: "Xanh Đậm", hex: "#0326b3", img: "./img/anh-iphone-17-51.jpg" },
            { name: "Bạc", hex: "#dbdbdb", img: "./img/iphone-17pro-gray.jpg" },
            { name: "Cam Vũ Trụ", hex: "#ff7701", img: "/img/ip17-orange.webp" }
        ],
        thumbnails: [
            "./img/anh-iphone-17-51.jpg", "./img/iphone-17pro-box.jpg"
        ]
    },
    "17air": {
        title: "iPhone Air",
        oldPrice: "24.890.000đ",
        storages: [
            { label: "256GB", price: "22.890.000đ" },
            { label: "512GB", price: "26.890.000đ" }
        ],
        colors: [
            { name: "Xám Không Gian", hex: "#555555", img: "/img/ip17-air-gray.webp" },
            { name: "Bạc", hex: "#e3e3e3", img: "/img/ip17-air-silver.webp" }
        ],
        thumbnails: [
            "/img/ip17-air-1.webp", "/img/ip17-air-2.webp"
        ]
    },

    // ---------- KHUNG CHO DÒNG IPHONE 16 ----------
    "16": {
        title: "iPhone 16 Thường",
        oldPrice: "22.990.000đ",
        storages: [
            { label: "128GB", price: "19.990.000đ" },
            { label: "256GB", price: "22.990.000đ" },
            { label: "512GB", price: "27.990.000đ" }
        ],
        colors: [
            { name: "Xanh Lưu Ly", hex: "#2b5775", img: "/img/ip16-blue.webp" },
            { name: "Hồng", hex: "#f3b3c3", img: "/img/ip16-pink.webp" },
            { name: "Đen", hex: "#232426", img: "/img/ip16-black.webp" }
        ],
        thumbnails: ["/img/ip16-thumb1.webp", "/img/ip16-thumb2.webp"]
    },
    "16promax": {
        title: "iPhone 16 Pro Max",
        oldPrice: "34.990.000đ",
        storages: [
            { label: "256GB", price: "31.990.000đ" },
            { label: "512GB", price: "36.990.000đ" },
            { label: "1TB", price: "41.990.000đ" }
        ],
        colors: [
            { name: "Titan Sa Mạc", hex: "#c2b2a2", img: "/img/ip16pm-desert.webp" },
            { name: "Titan Tự Nhiên", hex: "#8c8680", img: "/img/ip16pm-natural.webp" }
        ],
        thumbnails: ["/img/ip16pm-thumb1.webp"]
    },

    // ---------- KHUNG CHO DÒNG IPHONE 15 ----------
    "15": {
        title: "iPhone 15 Thường",
        oldPrice: "19.990.000đ",
        storages: [
            { label: "128GB", price: "17.490.000đ" },
            { label: "256GB", price: "20.490.000đ" }
        ],
        colors: [
            { name: "Xanh Dương", hex: "#d2e3eb", img: "/img/ip15-blue.webp" },
            { name: "Hồng Nhạt", hex: "#fae1e5", img: "/img/ip15-pink.webp" }
        ],
        thumbnails: ["/img/ip15-thumb1.webp"]
    },

    // ---------- KHUNG CHO DÒNG IPHONE 14 ----------
    "14": {
        title: "iPhone 14 Thường",
        oldPrice: "17.990.000đ",
        storages: [
            { label: "128GB", price: "15.490.000đ" },
            { label: "256GB", price: "18.490.000đ" }
        ],
        colors: [
            { name: "Xanh Ánh Sao", hex: "#faf6f0", img: "/img/ip14-starlight.webp" },
            { name: "Đỏ", hex: "#be0c23", img: "/img/ip14-red.webp" }
        ],
        thumbnails: ["/img/ip14-thumb1.webp"]
    },

    // ---------- KHUNG CHO DÒNG IPHONE 13 (CÓ BẢN 64GB HOẶC 128GB ĐẶC TRƯNG) ----------
    "13": {
        title: "iPhone 13 Thường",
        oldPrice: "15.990.000đ",
        storages: [
            { label: "64GB", price: "12.490.000đ" }, // Thêm mẫu bản 64GB cho ông đúng ý luôn
            { label: "128GB", price: "13.990.000đ" },
            { label: "256GB", price: "16.490.000đ" }
        ],
        colors: [
            { name: "Xanh Lục", hex: "#2f4436", img: "/img/ip13-green.webp" },
            { name: "Hồng", hex: "#fae1e5", img: "/img/ip13-pink.webp" }
        ],
        thumbnails: ["/img/ip13-thumb1.webp"]
    }
};

// =========================================================================
// BƯỚC 2: ĐỌC ID TỪ URL VÀ THIẾT LẬP MẶC ĐỊNH
// =========================================================================
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

let currentProduct = databaseProducts[productId];
if (!currentProduct) {
    currentProduct = databaseProducts["17"]; // Mặc định nếu không tìm thấy ID
}

// DOM các phần tử hiển thị giao diện
const mainImgElement = document.getElementById('main-product-img');
const titleElement = document.getElementById('product-title');
const oldPriceElement = document.getElementById('old-price');
const currentPriceElement = document.getElementById('current-price');

// Đổ các thông tin cơ bản
titleElement.innerText = currentProduct.title;
oldPriceElement.innerText = currentProduct.oldPrice;
mainImgElement.src = currentProduct.colors[0]?.img || "";

// MẶC ĐỊNH CÀI GIÁ TIỀN: Lấy luôn mức dung lượng đầu tiên trong danh sách (Giá rẻ nhất)
if (currentProduct.storages && currentProduct.storages.length > 0) {
    currentPriceElement.innerText = currentProduct.storages[0].price;
}

// =========================================================================
// BƯỚC 3: DỰNG DANH SÁCH ẢNH NHỎ VÀ XỬ LÝ SLIDER (THUMBNAILS)
// =========================================================================
const thumbContainer = document.getElementById('thumbnail-list');
const btnLeft = document.getElementById('slide-left-btn');
const btnRight = document.getElementById('slide-right-btn');
let currentTranslate = 0;


// Tìm đoạn này trong file JS của ông và check xem giống chưa nhé:
for (let i = 0; i < currentProduct.thumbnails.length; i++) {
    let imgTag = document.createElement('img');
    imgTag.src = currentProduct.thumbnails[i];
    imgTag.className = 'thumb-item';
    imgTag.draggable = false; // Thêm dòng này để cố định ảnh, tránh lỗi hiển thị của trình duyệt
    
    if (i === 0) imgTag.classList.add('active');
    // ... các đoạn code phía dưới giữ nguyên

    imgTag.onclick = function() {
        mainImgElement.src = imgTag.src;
        let currentActiveThumb = document.querySelector('.thumb-item.active');
        if (currentActiveThumb) currentActiveThumb.classList.remove('active');
        imgTag.classList.add('active');
    };

    thumbContainer.appendChild(imgTag);
}

function updateSliderButtons() {
    const track = document.querySelector('.thumbnail-track');
    if (!track) return;
    const trackWidth = track.offsetWidth;
    const listRealWidth = thumbContainer.scrollWidth;

    if (listRealWidth <= trackWidth) {
        btnLeft.classList.add('disabled');
        btnRight.classList.add('disabled');
        return;
    }
    if (currentTranslate >= 0) btnLeft.classList.add('disabled');
    else btnLeft.classList.remove('disabled');

    if (Math.abs(currentTranslate) >= (listRealWidth - trackWidth)) btnRight.classList.add('disabled');
    else btnRight.classList.remove('disabled');
}

btnRight.onclick = function() {
    const trackWidth = document.querySelector('.thumbnail-track').offsetWidth;
    const listRealWidth = thumbContainer.scrollWidth;
    const maxScroll = listRealWidth - trackWidth;

    currentTranslate -= (76 + 10) * 2; 
    if (Math.abs(currentTranslate) > maxScroll) currentTranslate = -maxScroll;

    thumbContainer.style.transform = `translateX(${currentTranslate}px)`;
    updateSliderButtons();
};

btnLeft.onclick = function() {
    currentTranslate += (76 + 10) * 2;
    if (currentTranslate > 0) currentTranslate = 0;

    thumbContainer.style.transform = `translateX(${currentTranslate}px)`;
    updateSliderButtons();
};

setTimeout(updateSliderButtons, 150);

// =========================================================================
// BƯỚC 4: TỰ ĐỘNG SINH NÚT DUNG LƯỢNG DỰA TRÊN DỮ LIỆU ĐỘNG (FIX LỖI 128GB/64GB)
// =========================================================================
const storageContainer = document.getElementById('storage-group');

if (currentProduct.storages && currentProduct.storages.length > 0) {
    currentProduct.storages.forEach((storageObj, index) => {
        let btnStorage = document.createElement('button');
        btnStorage.className = 'option-btn';
        btnStorage.innerText = storageObj.label;

        // Tự động kích hoạt viền đen cho nút dung lượng đầu tiên (bản cơ sở rẻ nhất)
        if (index === 0) {
            btnStorage.classList.add('active');
        }

        // Sự kiện click đổi dung lượng -> Đổi giá tiền tương ứng trực tiếp từ Object
        btnStorage.onclick = function() {
            let activeStorage = document.querySelector('.option-btn.active');
            if (activeStorage) activeStorage.classList.remove('active');
            btnStorage.classList.add('active');

            // Cập nhật giá tiền tương ứng từ mảng dữ liệu
            currentPriceElement.innerText = storageObj.price;
        };

        storageContainer.appendChild(btnStorage);
    });
}

// =========================================================================
// BƯỚC 5: TỰ ĐỘNG SINH KHỐI MÀU SẮC
// =========================================================================
const colorContainer = document.getElementById('color-grid');

for (let i = 0; i < currentProduct.colors.length; i++) {
    let mauSacObj = currentProduct.colors[i];
    if (!mauSacObj.name) continue;

    let btnColor = document.createElement('button');
    btnColor.className = 'color-btn';
    if (i === 0) btnColor.classList.add('active');

    let dot = document.createElement('span');
    dot.className = 'color-dot';
    dot.style.backgroundColor = mauSacObj.hex;

    let infoDiv = document.createElement('div');
    infoDiv.className = 'color-info';
    infoDiv.innerHTML = `<strong>${mauSacObj.name}</strong><span>Chính hãng</span>`;

    btnColor.appendChild(dot);
    btnColor.appendChild(infoDiv);

    btnColor.onclick = function() {
        let activeColor = document.querySelector('.color-btn.active');
        if (activeColor) activeColor.classList.remove('active');
        btnColor.classList.add('active');
        mainImgElement.src = mauSacObj.img;
    };

    colorContainer.appendChild(btnColor);
}