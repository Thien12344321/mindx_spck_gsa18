// =========================================================================
// BƯỚC 1: TẠO KHO DỮ LIỆU SẢN PHẨM (OBJECT)
// Dữ liệu được cấu trúc cực kỳ đơn giản để bạn dễ bốc ra xài
// =========================================================================
const databaseProducts = {
    "17": {
        title: "iPhone 17 Thường",
        oldPrice: "24.990.000đ",
        // Giá tiền tương ứng với từng dung lượng
        price128: "22.990.000đ",
        price256: "24.990.000đ",
        price512: "28.990.000đ",
        // Danh sách màu sắc (gồm tên, mã màu, và ảnh của màu đó)
        colors: [
            { name: "Tím Oải Hương", hex: "#E6E1F3", img: "/img/iphone_17_256gb-3.webp" },
            { name: "Xanh Lá Xô Thơm", hex: "#b3e6b9", img: "/img/iphone_17_sage_pdp_image_position_1_sage_color__vn-vi_1.webp" },
            { name: "Đen", hex: "#3C3D3A", img: "/img/iphone_17_256gb_2 (1).webp" },
            { name: "Xanh Lam Khói", hex: "#009ac9", img: "/img/iphone_17_256gb-2.webp" },
            { name: " Trắng", hex: "#ffff", img: "/img/256gb_2.webp"}

        ],
        // Mớ ảnh nhỏ làm thumbnail bên dưới ảnh chính
        thumbnails: [
            "/img/ip17-small-1.webp",
            "/img/ip17-small-2.webp",
            "/img/ip17-small-3.webp",
            "/img/ip17-small-4.webp"
        ]
    },
    "17promax": {
        title: "iPhone 17 Pro Max",
        oldPrice: "36.990.000đ",
        price128: "Không có", // Bản Pro Max không có 128GB
        price256: "34.990.000đ",
        price512: "39.990.000đ",
        colors: [
            { name: "Xanh Đậm", hex: "#0326b3", img: "./img/anh-iphone-17-51.jpg" },
            { name: "Bạc", hex: "#dbdbdb", img: "./img/iphone-17pro-gray.jpg" },
            {name: "Cam Vũ Trụ", hex:"#ff7701", img: ""}
        ],
        thumbnails: [
            "./img/anh-iphone-17-51.jpg",
            "./img/iphone-17pro-box.jpg",
            ""
        ]
    },

    "17air": {
        title : "iPhone Air",
        oldPrice: "24.890.000",
        price128: "Không có",
        price256: "22.890.000",
        price512: "28.990.000",
        colors: [
            { name: ""}
        ]
    }
};

// =========================================================================
// BƯỚC 2: ĐỌC ID TỪ THANH ĐỊA CHỈ TRÌNH DUYỆT (Ví dụ: ?id=17)
// =========================================================================
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id'); // Nhặt lấy chữ "17" hoặc "17pro"

// Bốc đúng cục dữ liệu của cái iPhone đó ra để xài. 
// Nếu id gõ bậy hoặc không tìm thấy, mặc định lấy iPhone 17 thường.
let currentProduct = databaseProducts[productId];
if (!currentProduct) {
    currentProduct = databaseProducts["17"];
}

// Lấy các thẻ HTML từ file index sang để chuẩn bị đổ chữ/ảnh vào
const mainImgElement = document.getElementById('main-product-img');
const titleElement = document.getElementById('product-title');
const oldPriceElement = document.getElementById('old-price');
const currentPriceElement = document.getElementById('current-price');

// =========================================================================
// BƯỚC 3: ĐỔ CÁC DỮ LIỆU CƠ BẢN LÊN MÀN HÌNH (Tên, Giá, Ảnh mặc định)
// =========================================================================
titleElement.innerText = currentProduct.title;
oldPriceElement.innerText = currentProduct.oldPrice;

// Mặc định lúc mới vào trang: hiện ảnh lớn là ảnh của màu đầu tiên
mainImgElement.src = currentProduct.colors[0].img;
// Mặc định lúc mới vào trang: hiện giá tiền là bản 256GB
currentPriceElement.innerText = currentProduct.price256;


// =========================================================================
// BƯỚC 4: LÀM PHẦN CLICK ĐỔI ẢNH (SLIDE THUMBNAIL)
// =========================================================================
const thumbContainer = document.getElementById('thumbnail-list');

// Dùng vòng lặp for chạy từ 0 đến hết danh sách ảnh nhỏ
for (let i = 0; i < currentProduct.thumbnails.length; i++) {
    // Tạo ra một thẻ <img> bằng code JavaScript
    let imgTag = document.createElement('img');
    imgTag.src = currentProduct.thumbnails[i];
    imgTag.className = 'thumb-item';
    
    // Nếu là tấm ảnh đầu tiên thì cho nó viền đen (active) luôn
    if (i === 0) {
        imgTag.classList.add('active');
    }

    // Cài đặt sự kiện: BẤM VÀO ẢNH NHỎ NÀY THÌ LÀM GÌ?
    imgTag.onclick = function() {
        // Hành động 1: Lấy link ảnh nhỏ đè lên ảnh lớn
        mainImgElement.src = imgTag.src;

        // Hành động 2: Tìm thằng ảnh nhỏ nào đang có viền đen thì xóa viền đi
        let currentActiveThumb = document.querySelector('.thumb-item.active');
        if (currentActiveThumb) {
            currentActiveThumb.classList.remove('active');
        }

        // Hành động 3: Thêm viền đen vào chính tấm ảnh mình vừa click
        imgTag.classList.add('active');
    };

    // Bỏ cái ảnh nhỏ vừa tạo vào trong cái khung ở ngoài HTML
    thumbContainer.appendChild(imgTag);
}


// =========================================================================
// BƯỚC 5: LÀM PHẦN BẤM ĐỔI DUNG LƯỢNG (TÍNH TIỀN)
// Vì giao diện cứng có 3 nút cố định, mình tạo luôn code bắt sự kiện cho từng nút
// =========================================================================
const storageContainer = document.getElementById('storage-group');

// Tạo danh sách 3 mức dung lượng
const listStorage = ["128GB", "256GB", "512GB"];

for (let i = 0; i < listStorage.length; i++) {
    let dungLuong = listStorage[i];

    // Kiểm tra xem máy này có mức dung lượng này không (Ví dụ 17 Pro Max không có 128GB)
    if (dungLuong === "128GB" && currentProduct.price128 === "Không có") {
        continue; // Nếu không có thì bỏ qua, không thèm tạo nút này
    }

    // Tạo thẻ <button> bằng code
    let btnStorage = document.createElement('button');
    btnStorage.className = 'option-btn';
    btnStorage.innerText = dungLuong;

    // Mặc định cho nút 256GB sáng lên trước
    if (dungLuong === "256GB") {
        btnStorage.classList.add('active');
    }

    // Sự kiện khi bấm chọn dung lượng
    btnStorage.onclick = function() {
        // 1. Xóa viền đen của nút dung lượng cũ
        let activeStorage = document.querySelector('.option-btn.active');
        if (activeStorage) {
            activeStorage.classList.remove('active');
        }
        // 2. Thêm viền đen vào nút vừa bấm
        btnStorage.classList.add('active');

        // 3. Thay đổi giá tiền hiển thị tương ứng trên màn hình
        if (dungLuong === "128GB") {
            currentPriceElement.innerText = currentProduct.price128;
        } else if (dungLuong === "256GB") {
            currentPriceElement.innerText = currentProduct.price256;
        } else if (dungLuong === "512GB") {
            currentPriceElement.innerText = currentProduct.price512;
        }
    };

    storageContainer.appendChild(btnStorage);
}


// =========================================================================
// BƯỚC 6: LÀM PHẦN BẤM ĐỔI MÀU SẮC (ĐỔI ẢNH THEO MÀU)
// =========================================================================
const colorContainer = document.getElementById('color-grid');

for (let i = 0; i < currentProduct.colors.length; i++) {
    let mauSacObj = currentProduct.colors[i];

    // Tạo thẻ <button> cho ô màu
    let btnColor = document.createElement('button');
    btnColor.className = 'color-btn';

    // Nếu là màu đầu tiên thì cho viền đen chọn sẵn
    if (i === 0) {
        btnColor.classList.add('active');
    }

    // Tạo chấm tròn màu sắc bên trong nút
    let dot = document.createElement('span');
    dot.className = 'color-dot';
    dot.style.backgroundColor = mauSacObj.hex; // Lấy mã màu CSS đổ vào nền

    // Tạo chữ mô tả tên màu
    let infoDiv = document.createElement('div');
    infoDiv.className = 'color-info';
    infoDiv.innerHTML = `<strong>${mauSacObj.name}</strong><span>Chính hãng</span>`;

    // Gắn chấm tròn và chữ vào trong nút bấm
    btnColor.appendChild(dot);
    btnColor.appendChild(infoDiv);

    // Sự kiện khi bấm chọn đổi màu điện thoại
    btnColor.onclick = function() {
        // 1. Xóa viền đen của nút màu cũ
        let activeColor = document.querySelector('.color-btn.active');
        if (activeColor) {
            activeColor.classList.remove('active');
        }
        // 2. Thêm viền đen vào nút màu mới vừa bấm
        btnColor.classList.add('active');

        // 3. Quan trọng nhất: Thay ảnh lớn thành ảnh của cái màu vừa chọn!
        mainImgElement.src = mauSacObj.img;
    };

    colorContainer.appendChild(btnColor);
}