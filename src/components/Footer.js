import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        {/* Contact Information */}
        <div className="contact-info">
          <h3>ONYX</h3>
          <p>500 Terry Francine Street</p>
          <p>San Francisco, CA 94158</p>
          <p>Email: info@mysite.com</p>
          <p>Phone: 123-456-7890</p>
          <div className="social-icons">
            <a href="#" className="fab fa-instagram"></a>
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
          </div>
          <div className="app-links">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/135px-Download_on_the_App_Store_Badge.svg.png?20170219160111"
              alt="App Store"
            />
          </div>
        </div>

        {/* Membership Form */}
        <div className="membership-form">
          <h3>Not a Member? Get a 45 Day Free-Trial</h3>
          <p>Fill out the form below and a sales rep will get in touch shortly.</p>
          <form>
            <div>
              <input type="text" placeholder="First Name *" />
              <input type="text" placeholder="Last Name *" />
            </div>
            <input type="email" placeholder="Email *" />
            <textarea placeholder="Add a message"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>

        {/* Quick Links */}
        <div className="menu-links">
          <h3>Menu</h3>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Facilities</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#">Membership</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Refund Policy</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 ONYX. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
// import React from "react";
// // import image1 from '../assets/images/App_Store.png'

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: "#f5f5f5", color: "#333", padding: "3rem 1rem" }}>
//       <div className="container" style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-between" }}>
//         {/* Contact Information */}
//         <div className="contact-info" style={{ flex: "1 1 25%", minWidth: "250px" }}>
//           <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>ONYX</h3>
//           <p style={{ margin: "0.5rem 0", fontSize: "0.95rem" }}>500 Terry Francine Street</p>
//           <p style={{ margin: "0.5rem 0", fontSize: "0.95rem" }}>San Francisco, CA 94158</p>
//           <p style={{ margin: "0.5rem 0", fontSize: "0.95rem" }}>Email: <a href="mailto:info@mystie.com" style={{ color: "#007bff", textDecoration: "none" }}>info@mystie.com</a></p>
//           <p style={{ margin: "0.5rem 0", fontSize: "0.95rem" }}>Phone: <a href="tel:123-456-7890" style={{ color: "#007bff", textDecoration: "none" }}>123-456-7890</a></p>

//           <div className="social-icons" style={{ marginTop: "1.5rem", display: "flex", gap: "1rem" }}>
//             <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//               <img src="../assets/images/App_Store.png" alt="Instagram" style={{ width: "32px", height: "32px" }} />
//             </a>
//             <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//               <img src="../assets/image/logo/image2.png" alt="Facebook" style={{ width: "32px", height: "32px" }} />
//             </a>
//             <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//               <img src="../assets/image/logo/image3.png" alt="Twitter" style={{ width: "32px", height: "32px" }} />
//             </a>
//           </div>
//         </div>

//         {/* Membership Form */}
//         <div className="membership-form" style={{ flex: "1 1 35%", minWidth: "300px" }}>
//           <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Not a Member? Get a 45 Day Free-Trial</h3>
//           <p style={{ marginBottom: "1rem", fontSize: "0.95rem" }}>Fill out the form below and a sales rep will get in touch shortly.</p>
//           <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
//             <div style={{ display: "flex", gap: "1rem" }}>
//               <input type="text" placeholder="First Name *" style={{ flex: 1, padding: "0.9rem", border: "1px solid #ddd", borderRadius: "5px" }} />
//               <input type="text" placeholder="Last Name *" style={{ flex: 1, padding: "0.9rem", border: "1px solid #ddd", borderRadius: "5px" }} />
//             </div>
//             <input type="email" placeholder="Email *" style={{ width: "100%", padding: "0.9rem", border: "1px solid #ddd", borderRadius: "5px" }} />
//             <textarea placeholder="Add a message" style={{ width: "100%", padding: "0.9rem", border: "1px solid #ddd", borderRadius: "5px", resize: "none", height: "80px" }}></textarea>
//             <button type="submit" style={{ backgroundColor: "#e91e63", color: "#fff", padding: "0.9rem", border: "none", borderRadius: "5px", fontSize: "1rem", cursor: "pointer", transition: "background-color 0.3s ease, transform 0.2s ease" }}>Submit</button>
//           </form>
//         </div>

//         {/* Quick Links */}
//         <div className="menu-links" style={{ flex: "1 1 25%", minWidth: "200px" }}>
//           <h3 style={{ fontSize: "1.5rem", fontWeight: "bold", marginBottom: "1rem" }}>Menu</h3>
//           <ul style={{ listStyle: "none", padding: 0 }}>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Home</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>About</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Facilities</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Services</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Membership</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Accessibility</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Terms & Conditions</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Privacy Policy</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Shipping Policy</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Refund Policy</a></li>
//             <li style={{ margin: "0.7rem 0" }}><a href="#" style={{ color: "#555", textDecoration: "none" }}>Safety Policies</a></li>
//           </ul>
//         </div>
//       </div>

//       {/* Footer Bottom Section */}
//       <div className="footer-bottom" style={{ marginTop: "3rem", textAlign: "center", fontSize: "0.85rem", color: "#999" }}>
//         <p>© 2035 by Onyx. Powered and secured by Wix</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;