import React from 'react';

function Footer() {
  return (
    <footer className="footer bg-gray-900 text-white py-10 text-center">
      <p>&copy; 2024 CQ Studios. All rights reserved.</p>
      <p>Follow us on social media:</p>
      <div className="social-icons mt-4">
        <button className="text-white mx-2">Facebook</button>
        <button className="text-white mx-2">Twitter</button>
        <button className="text-white mx-2">Instagram</button>
      </div>
    </footer>
  );
}

export default Footer;
