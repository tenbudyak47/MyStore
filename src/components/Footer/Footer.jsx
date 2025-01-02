import "./Footer.css"; // Import file CSS riêng
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Cột 1: Thông tin công ty */}
        <div className="footer-column">
          <h4>MyStore</h4>
          <p>
            Chúng tôi cung cấp các sản phẩm chất lượng cao với giá cả hợp lý. 
            Luôn sẵn sàng phục vụ bạn!
          </p>
        </div>

        {/* Cột 2: Chính sách và hỗ trợ */}
        <div className="footer-column">
          <h4>Chính sách & Hỗ trợ</h4>
          <ul>
            <li><a href="#shipping">Chính sách vận chuyển</a></li>
            <li><a href="#returns">Chính sách đổi trả</a></li>
            <li><a href="#privacy">Chính sách bảo mật</a></li>
            <li><a href="#faq">Câu hỏi thường gặp</a></li>
          </ul>
        </div>

        {/* Cột 3: Liên hệ */}
        <div className="footer-column">
          <h4>Liên hệ</h4>
          <p>Email: support@mystore.com</p>
          <p>Hotline: 1900 123 456</p>
          <p>
            <a href="#facebook">Facebook</a> | <a href="#instagram">Instagram</a>
          </p>
        </div>

        {/* Cột 4: Đăng ký nhận tin */}
        <div className="footer-column">
          <h4>Đăng ký nhận tin</h4>
          <p>Nhận các ưu đãi và thông tin mới nhất từ chúng tôi.</p>
          <input
            type="email"
            className="newsletter-input"
            placeholder="Nhập email của bạn"
          />
          <button className="subscribe-button">Đăng ký</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
