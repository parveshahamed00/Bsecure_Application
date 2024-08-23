import React from "react";

function Footer() {
  return (
    <section id="footer">
      <footer
        className="text-center text-white"
        style={{ backgroundColor: "#f1f1f1" }}
      >
        {/* Grid container */}
        <div className="container pt-4">
          {/* Section: Social media */}
          <section className="mb-4">
            {/* Facebook */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.facebook.com/Bsecure.advisory?mibextid=JRoKGi"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-facebook"></i>{" "}
            </a>
            {/* Twitter */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-twitter-x"></i>{" "}
            </a>

            {/* Instagram */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.instagram.com/bsecure.advisory?igsh=aTN4Z2lvamt5cnA0"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-instagram"></i>{" "}
            </a>
            {/* Linkedin */}
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://www.threads.net/@bsecure.advisory"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-threads"></i>{" "}
            </a>
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="https://wa.me/message/SIQY7HJY43Q3M1"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-whatsapp"></i>{" "}
            </a>
            <a
              data-mdb-ripple-init=""
              className="btn btn-link btn-floating btn-lg text-dark m-1"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
            >
              <i class="bi bi-youtube"></i>{" "}
            </a>
          </section>
          {/* Section: Social media */}
        </div>
        {/* Grid container */}
        {/* Copyright */}
        <div
          className="text-center text-dark p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2023 Copyright:
          <a className="text-dark" href="#">
            {" "} Bsecure.com
          </a>
        </div>
        {/* Copyright */}
      </footer>
    </section>
  );
}

export default Footer;
