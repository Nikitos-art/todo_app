import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {currentYear}</p>
      <p>This app was written to help you combat your laziness and help you achieve desired results in all your endevours. Get in your dream shape, achieve academic mastery, sky is the limit.</p>
    </footer>
  );
}

export default Footer;