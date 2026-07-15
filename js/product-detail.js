// =========================================================================
// BƯỚC 1: KHO DỮ LIỆU ĐẦY ĐỦ CHO TẤT CẢ CÁC DÒNG IPHONE (13 ĐẾN 17 & AIR)
// Ông chỉ cần thay đổi link ảnh và sửa lại giá tiền cho đúng thực tế nhé!
// =========================================================================
const databaseProducts = {
    // ---------- DÒNG IPHONE 17 & AIR (CHUNG TRANG HTML) ----------

    "17pro-256": {
        title: "iPhone 17 Pro 256GB",
        oldPrice: "32.990.000đ",
        storages: [
            { label: "256GB", price: "30.990.000đ" },
            { label: "512GB", price: "34.990.000đ" }
        ],
        colors: [
            { name: "Titan Cam Vũ Trụ", hex: "#ff7701", img: "../img/ip17-promax-orange.webp" },
            { name: "Titan Tự Nhiên", hex: "#8e8d89", img: "../img/ip17-pro-natural.webp" },
            { name: "Titan Đen", hex: "#3b3c3e", img: "../img/ip17-pro-black.webp" }
        ],
        thumbnails: [
            "../img/ip17-promax-orange.webp",
            "../img/ip17-pro-detail-1.webp"
        ]
    },

    "17-256": {
        title: "iPhone 17 256GB",
        oldPrice: "27.990.000đ",
        storages: [
            { label: "256GB", price: "25.990.000đ" },
            { label: "512GB", price: "29.990.000đ" }
        ],
        colors: [
            { name: "Tím Oải Hương", hex: "#E6E1F3", img: "../img/ip17-thg-purple.webp" },
            { name: "Xanh Lam Khói", hex: "#009ac9", img: "../img/ip17-thg-blue.webp" },
            { name: "Trắng", hex: "#ffffff", img: "../img/ip17-thg-white.webp" }
        ],
        thumbnails: [
            "../img/ip17-thg-purple.webp",
            "../img/ip17-detail-1.webp"
        ]
    },

    "17air-256": {
        title: "iPhone Air 256GB",
        oldPrice: "30.990.000đ",
        storages: [
            { label: "256GB", price: "28.990.000đ" },
            { label: "512GB", price: "32.990.000đ" }
        ],
        colors: [
            { name: "Xanh Băng Tuyết", hex: "#a5cad2", img: "../img/ipair-blue.webp" },
            { name: "Bạc", hex: "#e3e3e3", img: "../img/ipair-silver.webp" }
        ],
        thumbnails: [
            "../img/ipair-blue.webp",
            "../img/ipair-detail-1.webp"
        ]
    },

    "17e-256": {
        title: "iPhone 17e 256GB",
        oldPrice: "23.990.000đ",
        storages: [
            { label: "256GB", price: "21.990.000đ" },
            { label: "512GB", price: "24.990.000đ"}
        ],
        colors: [
            { name: "Hồng Thạch Anh", hex: "#fbc2d5", img: "../img/ip17e-pink.webp" },
            { name: "Xanh Lục Nhạt", hex: "#bcf2db", img: "../img/ip17e-green.webp" }
        ],
        thumbnails: [
            "../img/ip17e-pink.webp"
        ]
    },

    "17promax-256": {
        title: "iPhone 17 Pro Max 256GB",
        oldPrice: "37.990.000đ",
        storages: [
            { label: "256GB", price: "35.990.000đ" },
            { label: "512GB", price: "39.990.000đ" },
            { label: "1TB", price: "45.990.000đ" }
        ],
        colors: [
            { name: "Titan Cam Vũ Trụ", hex: "#ff7701", img: "../img/ip17-promax-orange.webp" },
            { name: "Titan Trắng", hex: "#f1f2ed", img: "../img/ip17-promax-white.webp" }
        ],
        thumbnails: [
            "../img/ip17-promax-orange.webp"
        ]
    },

    "17pro-512": {
        title: "iPhone 17 Pro 512GB",
        oldPrice: "36.990.000đ",
        storages: [
            { label: "256GB", price: "30.990.000đ" },
            { label: "512GB", price: "34.990.000đ" }
        ],
        colors: [
            { name: "Titan Cam Vũ Trụ", hex: "#ff7701", img: "../img/ip17-promax-orange.webp" },
            { name: "Titan Tự Nhiên", hex: "#8e8d89", img: "../img/ip17-pro-natural.webp" }
        ],
        thumbnails: [
            "../img/ip17-promax-orange.webp"
        ]
    },

  

 // ---------------------------IP 16 SERIES----------------------------------

    "16-256": {
        title: "iPhone 16 256GB",
        oldPrice: "24.990.000đ",
        storages: [
            { label: "128GB", price: "19.990.000đ" }, // Thêm option phụ cho phong phú giống mẫu
            { label: "256GB", price: "22.990.000đ" },
            { label: "512GB", price: "27.990.000đ" }
        ],
        colors: [
            { name: "Xanh Lưu Ly", hex: "#a1e3f6", img: "../img/ip16-thg-blue.webp" },
            { name: "Hồng", hex: "#fbc2d5", img: "../img/ip16-thg-pink.webp" },
            { name: "Xanh Lục Bảo", hex: "#9ee3cd", img: "../img/ip16-thg-green.webp" },
            { name: "Trắng", hex: "#ffffff", img: "../img/ip16-thg-white.webp" },
            { name: "Đen", hex: "#323335", img: "../img/ip16-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip16-thg-blue.webp",
            "../img/ip16-detail-1.webp",
            "../img/ip16-detail-2.webp"
        ]
    },

    "16plus-128": {
        title: "iPhone 16 Plus 128GB",
        oldPrice: "25.990.000đ",
        storages: [
            { label: "128GB", price: "23.990.000đ" },
            { label: "256GB", price: "26.990.000đ" },
            { label: "512GB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Xanh Lưu Ly", hex: "#a1e3f6", img: "../img/ip16-thg-blue.webp" },
            { name: "Hồng", hex: "#fbc2d5", img: "../img/ip16-thg-pink.webp" },
            { name: "Đen", hex: "#323335", img: "../img/ip16-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip16-thg-blue.webp",
            "../img/ip16-plus-detail-1.webp"
        ]
    },

    "16pro-256": {
        title: "iPhone 16 Pro 256GB",
        oldPrice: "32.990.000đ",
        storages: [
            { label: "128GB", price: "27.990.000đ" },
            { label: "256GB", price: "30.990.000đ" },
            { label: "512GB", price: "35.990.000đ" },
            { label: "1TB", price: "40.990.000đ" }
        ],
        colors: [
            { name: "Sa Mạc", hex: "#c2b29f", img: "../img/ip16-promax-dessert.webp" },
            { name: "Titan Tự Nhiên", hex: "#8e8d89", img: "../img/ip16-pro-natural.webp" },
            { name: "Titan Trắng", hex: "#f1f2ed", img: "../img/ip16-pro-white.webp" },
            { name: "Titan Đen", hex: "#3b3c3e", img: "../img/ip16-pro-black.webp" }
        ],
        thumbnails: [
            "../img/ip16-promax-dessert.webp",
            "../img/ip16-pro-detail-1.webp"
        ]
    },

    "16plus-512": {
        title: "iPhone 16 Plus 512GB",
        oldPrice: "29.990.000đ",
        storages: [
            { label: "128GB", price: "23.990.000đ" },
            { label: "256GB", price: "26.990.000đ" },
            { label: "512GB", price: "27.890.000đ" }
        ],
        colors: [
            { name: "Xanh Lưu Ly", hex: "#a1e3f6", img: "../img/ip16-thg-blue.webp" },
            { name: "Đen", hex: "#323335", img: "../img/ip16-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip16-thg-blue.webp"
        ]
    },

    "16promax-512": {
        title: "iPhone 16 Pro Max 512GB",
        oldPrice: "33.990.000đ",
        storages: [
            { label: "256GB", price: "29.990.000đ" },
            { label: "512GB", price: "31.990.000đ" },
            { label: "1TB", price: "37.990.000đ" }
        ],
        colors: [
            { name: "Sa Mạc", hex: "#c2b29f", img: "../img/ip16-promax-dessert.webp" },
            { name: "Titan Tự Nhiên", hex: "#8e8d89", img: "../img/ip16-pro-natural.webp" },
            { name: "Titan Đen", hex: "#3b3c3e", img: "../img/ip16-pro-black.webp" }
        ],
        thumbnails: [
            "../img/ip16-promax-dessert.webp"
        ]
    },

    "16promax-256": {
        title: "iPhone 16 Pro Max 256GB",
        oldPrice: "31.990.000đ",
        storages: [
            { label: "256GB", price: "29.990.000đ" },
            { label: "512GB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Sa Mạc", hex: "#c2b29f", img: "../img/ip16-promax-dessert.webp" },
            { name: "Titan Trắng", hex: "#f1f2ed", img: "../img/ip16-pro-white.webp" }
        ],
        thumbnails: [
            "../img/ip16-promax-dessert.webp"
        ]
    },

    "16e-256": {
        title: "iPhone 16e 256GB",
        oldPrice: "18.990.000đ",
        storages: [
            { label: "128GB", price: "11.990.000đ" },
            { label: "256GB", price: "13.990.000đ" }
        ],
        colors: [
            { name: "Trắng", hex: "#ffffff", img: "../img/ip16e-white.webp" },
            { name: "Xanh Lưu Ly", hex: "#a1e3f6", img: "../img/ip16e-blue.webp" },
            { name: "Hồng Vàng", hex: "#fad2e1", img: "../img/ip16e-pink.webp" }
        ],
        thumbnails: [
            "../img/ip16e-white.webp"
        ]
    },

 //   --------------------------------IP 15 SERIES--------------------------------

    "15plus-128": {
        title: "iPhone 15 Plus 128GB",
        oldPrice: "22.990.000đ",
        storages: [
            { label: "128GB", price: "20.990.000đ" },
            { label: "256GB", price: "23.990.000đ" },
            { label: "512GB", price: "27.990.000đ" }
        ],
        colors: [
            { name: "Hồng", hex: "#fecad5", img: "../img/ip15-thg-pink.webp" },
            { name: "Xanh Lá", hex: "#caedd4", img: "../img/ip15-thg-green.webp" },
            { name: "Xanh Dương", hex: "#d3e5f2", img: "../img/ip15-thg-blue.webp" },
            { name: "Vàng", hex: "#fef3bd", img: "../img/ip15-thg-yellow.webp" },
            { name: "Đen", hex: "#32353c", img: "../img/ip15-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip15-thg-pink.webp",
            "../img/ip15-plus-detail-1.webp"
        ]
    },

    "15promax-512": {
        title: "iPhone 15 Pro Max 512GB",
        oldPrice: "39.990.000đ",
        storages: [
            { label: "256GB", price: "32.990.000đ" },
            { label: "512GB", price: "36.990.000đ" },
            { label: "1TB", price: "42.990.000đ" }
        ],
        colors: [
            { name: "Titan Tự Nhiên", hex: "#8a857e", img: "../img/ip15-promax-titan.webp" },
            { name: "Titan Xanh", hex: "#2f4452", img: "../img/ip15-promax-blue-titan.webp" },
            { name: "Titan Trắng", hex: "#ecece7", img: "../img/ip15-promax-white-titan.webp" },
            { name: "Titan Đen", hex: "#3c3d3a", img: "../img/ip15-promax-black-titan.webp" }
        ],
        thumbnails: [
            "../img/ip15-promax-titan.webp",
            "../img/ip15-promax-detail-1.webp"
        ]
    },

    "15-256": {
        title: "iPhone 15 256GB",
        oldPrice: "20.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "18.990.000đ" },
            { label: "512GB", price: "23.990.000đ" }
        ],
        colors: [
            { name: "Xanh Lá", hex: "#caedd4", img: "../img/ip15-thg-green.webp" },
            { name: "Hồng", hex: "#fecad5", img: "../img/ip15-thg-pink.webp" },
            { name: "Đen", hex: "#32353c", img: "../img/ip15-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip15-thg-green.webp",
            "../img/ip15-detail-1.webp"
        ]
    },

    "15pro-1tb": {
        title: "iPhone 15 Pro 1TB",
        oldPrice: "40.990.000đ",
        storages: [
            { label: "128GB", price: "23.990.000đ" },
            { label: "256GB", price: "27.990.000đ" },
            { label: "512GB", price: "31.990.000đ" },
            { label: "1TB", price: "37.990.000đ" }
        ],
        colors: [
            { name: "Titan Tự Nhiên", hex: "#8a857e", img: "../img/ip15-promax-titan.webp" },
            { name: "Titan Đen", hex: "#3c3d3a", img: "../img/ip15-promax-black-titan.webp" }
        ],
        thumbnails: [
            "../img/ip15-promax-titan.webp"
        ]
    },

    "15-128": {
        title: "iPhone 15 128GB",
        oldPrice: "18.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "18.990.000đ" }
        ],
        colors: [
            { name: "Xanh Lá", hex: "#caedd4", img: "../img/ip15-thg-green.webp" },
            { name: "Vàng", hex: "#fef3bd", img: "../img/ip15-thg-yellow.webp" },
            { name: "Đen", hex: "#32353c", img: "../img/ip15-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip15-thg-green.webp"
        ]
    },

    "15plus-512": {
        title: "iPhone 15 Plus 512GB",
        oldPrice: "30.990.000đ",
        storages: [
            { label: "128GB", price: "20.990.000đ" },
            { label: "256GB", price: "23.990.000đ" },
            { label: "512GB", price: "27.990.000đ" }
        ],
        colors: [
            { name: "Hồng", hex: "#fecad5", img: "../img/ip15-thg-pink.webp" },
            { name: "Xanh Dương", hex: "#d3e5f2", img: "../img/ip15-thg-blue.webp" }
        ],
        thumbnails: [
            "../img/ip15-thg-pink.webp"
        ]
    },

    "15pro-256": {
        title: "iPhone 15 Pro 256GB",
        oldPrice: "30.990.000đ",
        storages: [
            { label: "128GB", price: "23.990.000đ" },
            { label: "256GB", price: "27.990.000đ" },
            { label: "512GB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Titan Tự Nhiên", hex: "#8a857e", img: "../img/ip15-promax-titan.webp" },
            { name: "Titan Trắng", hex: "#ecece7", img: "../img/ip15-promax-white-titan.webp" }
        ],
        thumbnails: [
            "../img/ip15-promax-titan.webp"
        ]
    },

    "15promax-256": {
        title: "iPhone 15 Pro Max 256GB",
        oldPrice: "35.990.000đ",
        storages: [
            { label: "256GB", price: "32.990.000đ" },
            { label: "512GB", price: "36.990.000đ" }
        ],
        colors: [
            { name: "Titan Tự Nhiên", hex: "#8a857e", img: "../img/ip15-promax-titan.webp" },
            { name: "Titan Xanh", hex: "#2f4452", img: "../img/ip15-promax-blue-titan.webp" }
        ],
        thumbnails: [
            "../img/ip15-promax-titan.webp"
        ]
    },

    "15-512": {
        title: "iPhone 15 512GB",
        oldPrice: "26.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "18.990.000đ" },
            { label: "512GB", price: "23.990.000đ" }
        ],
        colors: [
            { name: "Xanh Lá", hex: "#caedd4", img: "../img/ip15-thg-green.webp" },
            { name: "Đen", hex: "#32353c", img: "../img/ip15-thg-black.webp" }
        ],
        thumbnails: [
            "../img/ip15-thg-green.webp"
        ]
    },

    // --------------------------------------IP 14 SERIES--------------------------------------
    "14-128": {
        title: "iPhone 14 128GB",
        oldPrice: "15.990.000đ",
        storages: [
            { label: "128GB", price: "13.990.000đ" },
            { label: "256GB", price: "15.990.000đ" }
        ],
        colors: [
            { name: "Trắng Starlight", hex: "#f5f3f0", img: "../img/ip14-thg-white.webp" },
            { name: "Xanh Dương", hex: "#a0b4c7", img: "../img/ip14-thg-blue.webp" },
            { name: "Đỏ Product RED", hex: "#e11d2a", img: "../img/ip14-thg-red.webp" }
        ],
        thumbnails: [
            "../img/ip14-thg-white.webp",
            "../img/ip14-detail-1.webp"
        ]
    },

    "14pro-256": {
        title: "iPhone 14 Pro 256GB",
        oldPrice: "25.990.000đ",
        storages: [
            { label: "128GB", price: "21.990.000đ" },
            { label: "256GB", price: "23.990.000đ" },
            { label: "512GB", price: "27.990.000đ" },
            { label: "1TB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Bạc", hex: "#f1f2ed", img: "../img/ip14-promax-white.webp" },
            { name: "Tím Đậm", hex: "#594f57", img: "../img/ip14-promax-purple.webp" },
            { name: "Vàng Gold", hex: "#f4e0c7", img: "../img/ip14-promax-gold.webp" },
            { name: "Đen Space Black", hex: "#3b3c3e", img: "../img/ip14-promax-black.webp" }
        ],
        thumbnails: [
            "../img/ip14-promax-white.webp",
            "../img/ip14-pro-detail-1.webp"
        ]
    },

    "14-256": {
        title: "iPhone 14 256GB",
        oldPrice: "17.990.000đ",
        storages: [
            { label: "128GB", price: "13.990.000đ" },
            { label: "256GB", price: "15.990.000đ" }
        ],
        colors: [
            { name: "Xanh Dương", hex: "#a0b4c7", img: "../img/ip14-thg-blue.webp" },
            { name: "Trắng Starlight", hex: "#f5f3f0", img: "../img/ip14-thg-white.webp" }
        ],
        thumbnails: [
            "../img/ip14-thg-blue.webp"
        ]
    },

    "14pro-512": {
        title: "iPhone 14 Pro 512GB",
        oldPrice: "29.990.000đ",
        storages: [
            { label: "128GB", price: "21.990.000đ" },
            { label: "256GB", price: "23.990.000đ" },
            { label: "512GB", price: "27.990.000đ" }
        ],
        colors: [
            { name: "Vàng Gold", hex: "#f4e0c7", img: "../img/ip14-promax-gold.webp" },
            { name: "Tím Đậm", hex: "#594f57", img: "../img/ip14-promax-purple.webp" },
            { name: "Đen Space Black", hex: "#3b3c3e", img: "../img/ip14-promax-black.webp" }
        ],
        thumbnails: [
            "../img/ip14-promax-gold.webp"
        ]
    },

    "14plus-128": {
        title: "iPhone 14 Plus 128GB",
        oldPrice: "18.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "19.990.000đ" }
        ],
        colors: [
            { name: "Xanh Dương", hex: "#a0b4c7", img: "../img/ip14-thg-blue.webp" },
            { name: "Vàng", hex: "#f9e490", img: "../img/ip14-thg-yellow.webp" },
            { name: "Trắng Starlight", hex: "#f5f3f0", img: "../img/ip14-thg-white.webp" }
        ],
        thumbnails: [
            "../img/ip14-thg-blue.webp",
            "../img/ip14-plus-detail-1.webp"
        ]
    },

    "14promax-256": {
        title: "iPhone 14 Pro Max 256GB",
        oldPrice: "31.990.000đ",
        storages: [
            { label: "128GB", price: "26.990.000đ" },
            { label: "256GB", price: "29.990.000đ" },
            { label: "512GB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Tím Đậm", hex: "#594f57", img: "../img/ip14-promax-purple.webp" },
            { name: "Vàng Gold", hex: "#f4e0c7", img: "../img/ip14-promax-gold.webp" },
            { name: "Bạc", hex: "#f1f2ed", img: "../img/ip14-promax-white.webp" }
        ],
        thumbnails: [
            "../img/ip14-promax-purple.webp",
            "../img/ip14-promax-detail-1.webp"
        ]
    },

    "14plus-256": {
        title: "iPhone 14 Plus 256GB",
        oldPrice: "21.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "19.990.000đ" }
        ],
        colors: [
            { name: "Vàng", hex: "#f9e490", img: "../img/ip14-thg-yellow.webp" },
            { name: "Xanh Dương", hex: "#a0b4c7", img: "../img/ip14-thg-blue.webp" }
        ],
        thumbnails: [
            "../img/ip14-thg-yellow.webp"
        ]
    },

    "14pro-1tb": {
        title: "iPhone 14 Pro 1TB",
        oldPrice: "33.990.000đ",
        storages: [
            { label: "128GB", price: "21.990.000đ" },
            { label: "256GB", price: "23.990.000đ" },
            { label: "1TB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Đen Space Black", hex: "#3b3c3e", img: "../img/ip14-promax-black.webp" },
            { name: "Bạc", hex: "#f1f2ed", img: "../img/ip14-promax-white.webp" }
        ],
        thumbnails: [
            "../img/ip14-promax-black.webp"
        ]
    },

    "14promax-512": {
        title: "iPhone 14 Pro Max 512GB",
        oldPrice: "33.990.000đ",
        storages: [
            { label: "256GB", price: "29.990.000đ" },
            { label: "512GB", price: "31.990.000đ" }
        ],
        colors: [
            { name: "Tím Đậm", hex: "#594f57", img: "../img/ip14-promax-purple.webp" },
            { name: "Đen Space Black", hex: "#3b3c3e", img: "../img/ip14-promax-black.webp" }
        ],
        thumbnails: [
            "../img/ip14-promax-purple.webp"
        ]
    },

    // --------------------------IP13 SERIES--------------------------------

    "13mini-128": {
        title: "iPhone 13 mini 128GB",
        oldPrice: "12.990.000đ",
        storages: [
            { label: "128GB", price: "10.990.000đ" },
            { label: "256GB", price: "12.990.000đ" }
        ],
        colors: [
            { name: "Xanh Dương", hex: "#276081", img: "../img/ip13-thg-blue.webp" },
            { name: "Hồng", hex: "#fae0e4", img: "../img/ip13-thg-pink.webp" },
            { name: "Trắng Starlight", hex: "#fbf9f4", img: "../img/ip13-thg-white.webp" }
        ],
        thumbnails: [
            "../img/ip13-thg-blue.webp",
            "../img/ip13-mini-detail-1.webp"
        ]
    },

    "13-256": {
        title: "iPhone 13 256GB",
        oldPrice: "15.990.000đ",
        storages: [
            { label: "128GB", price: "11.990.000đ" },
            { label: "256GB", price: "13.990.000đ" }
        ],
        colors: [
            { name: "Hồng", hex: "#fae0e4", img: "../img/ip13-thg-pink.webp" },
            { name: "Xanh Dương", hex: "#276081", img: "../img/ip13-thg-blue.webp" },
            { name: "Đen Midnight", hex: "#1d2327", img: "../img/ip13-thg-midnight.webp" }
        ],
        thumbnails: [
            "../img/ip13-thg-pink.webp",
            "../img/ip13-detail-1.webp"
        ]
    },

    "13pro-256": {
        title: "iPhone 13 Pro 256GB",
        oldPrice: "20.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "18.990.000đ" },
            { label: "512GB", price: "20.990.000đ" }
        ],
        colors: [
            { name: "Xanh Sierra Blue", hex: "#a7c1d4", img: "../img/ip13-promax-blue.webp" },
            { name: "Vàng Gold", hex: "#f9e5c9", img: "../img/ip13-promax-gold.webp" },
            { name: "Xám Graphite", hex: "#4e4e4e", img: "../img/ip13-promax-graphite.webp" }
        ],
        thumbnails: [
            "../img/ip13-promax-blue.webp",
            "../img/ip13-pro-detail-1.webp"
        ]
    },

    "13-128": {
        title: "iPhone 13 128GB",
        oldPrice: "13.990.000đ",
        storages: [
            { label: "128GB", price: "11.990.000đ" },
            { label: "256GB", price: "13.990.000đ" }
        ],
        colors: [
            { name: "Xanh Sierra Blue", hex: "#a7c1d4", img: "../img/ip13-promax-blue.webp" },
            { name: "Hồng", hex: "#fae0e4", img: "../img/ip13-thg-pink.webp" },
            { name: "Đen Midnight", hex: "#1d2327", img: "../img/ip13-thg-midnight.webp" }
        ],
        thumbnails: [
            "../img/ip13-promax-blue.webp"
        ]
    },

    "13mini-256": {
        title: "iPhone 13 mini 256GB",
        oldPrice: "14.990.000đ",
        storages: [
            { label: "128GB", price: "10.990.000đ" },
            { label: "256GB", price: "12.990.000đ" }
        ],
        colors: [
            { name: "Hồng", hex: "#fae0e4", img: "../img/ip13-thg-pink.webp" },
            { name: "Xanh Dương", hex: "#276081", img: "../img/ip13-thg-blue.webp" }
        ],
        thumbnails: [
            "../img/ip13-thg-pink.webp"
        ]
    },

    "13pro-512": {
        title: "iPhone 13 Pro 512GB",
        oldPrice: "22.990.000đ",
        storages: [
            { label: "128GB", price: "16.990.000đ" },
            { label: "256GB", price: "18.990.000đ" },
            { label: "512GB", price: "20.990.000đ" }
        ],
        colors: [
            { name: "Xanh Sierra Blue", hex: "#a7c1d4", img: "../img/ip13-promax-blue.webp" },
            { name: "Bạc Silver", hex: "#ebebe9", img: "../img/ip13-promax-silver.webp" }
        ],
        thumbnails: [
            "../img/ip13-promax-blue.webp"
        ]
    },

    "13promax-256": {
        title: "iPhone 13 Pro Max 256GB",
        oldPrice: "22.990.000đ",
        storages: [
            { label: "256GB", price: "20.990.000đ" }
        ],
        colors: [
            { name: "Xanh Sierra Blue", hex: "#a7c1d4", img: "../img/ip13-promax-blue.webp" },
            { name: "Xám Graphite", hex: "#4e4e4e", img: "../img/ip13-promax-graphite.webp" },
            { name: "Vàng Gold", hex: "#f9e5c9", img: "../img/ip13-promax-gold.webp" }
        ],
        thumbnails: [
            "../img/ip13-promax-blue.webp",
            "../img/ip13-promax-detail-1.webp"
        ]
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