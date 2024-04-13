document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.them-vao-gio');
    const gioHang = document.getElementById('gioHang');
    const thanhToanButton = document.getElementById('thanh-toan');
    const gioHangLink = document.getElementById('gioHangLink');
    const formKhachHang = document.getElementById('formKhachHang');
    const thongBao = document.getElementById('thong-bao');
    
    let gioHangItems = [];
    
    // Xử lý khi click vào nút "Thêm vào giỏ hàng"
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const product = this.parentElement;
            const productName = product.querySelector('h2').textContent;
            const mauSac = product.querySelector('.mau-sac').value;
            const size = product.querySelector('.size').value;
            const gioHangItem = {
                tenSanPham: productName,
                mauSac: mauSac,
                size: size
            };
            gioHangItems.push(gioHangItem);
            renderGioHang();
        });
    });
    
    // Xử lý khi click vào nút "Thanh toán"
    thanhToanButton.addEventListener('click', function() {
        document.getElementById('thong-tin-khach-hang').style.display = 'block';
        gioHangLink.style.display = 'none';
    });
    
    // Xử lý khi submit form thông tin khách hàng
    formKhachHang.addEventListener('submit', function(event) {
        event.preventDefault();
        // Xử lý thông tin khách hàng ở đây (ví dụ: gửi thông tin đến máy chủ)
        thongBao.style.display = 'block';
        gioHangItems = [];
        renderGioHang();
        setTimeout(function() {
            thongBao.style.display = 'none';
            document.getElementById('thong-tin-khach-hang').style.display = 'none';
            gioHangLink.style.display = 'inline';
        }, 3000); // Hiển thị thông báo trong 3 giây trước khi ẩn đi
    });
    
    // Hàm hiển thị giỏ hàng
    function renderGioHang() {
        gioHang.innerHTML = '';
        gioHangItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.tenSanPham} - Màu: ${item.mauSac} - Size: ${item.size}`;
            gioHang.appendChild(li);
        });
    }
});
