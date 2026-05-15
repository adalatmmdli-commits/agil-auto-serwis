document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelectorAll(".main-nav a");

  if (navToggle) {
    const openMenu = () => {
      body.classList.add("nav-open");
      navToggle.setAttribute("aria-expanded", "true");
    };

    const closeMenu = () => {
      body.classList.remove("nav-open");
      navToggle.setAttribute("aria-expanded", "false");
    };

    const toggleMenu = () => {
      if (body.classList.contains("nav-open")) {
        closeMenu();
      } else {
        openMenu();
      }
    };

    navToggle.addEventListener("click", toggleMenu);

    navLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 900) {
        closeMenu();
      }
    });
  }

  const lightbox = document.querySelector(".image-lightbox");
  const lightboxImage = document.querySelector(".lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");
  const lightboxTriggers = document.querySelectorAll("[data-lightbox-src]");

  if (lightbox && lightboxImage && lightboxClose && lightboxTriggers.length > 0) {
    const openLightbox = (src, alt) => {
      lightboxImage.src = src;
      lightboxImage.alt = alt || "";
      lightbox.classList.add("is-open");
      lightbox.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
    };

    const closeLightbox = () => {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      lightboxImage.src = "";
      lightboxImage.alt = "";
      document.body.style.overflow = "";
    };

    lightboxTriggers.forEach((trigger) => {
      trigger.addEventListener("click", () => {
        openLightbox(
          trigger.getAttribute("data-lightbox-src"),
          trigger.getAttribute("data-lightbox-alt")
        );
      });
    });

    lightboxClose.addEventListener("click", closeLightbox);

    lightbox.addEventListener("click", (event) => {
      if (event.target === lightbox) {
        closeLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
        closeLightbox();
      }
    });
  }
});