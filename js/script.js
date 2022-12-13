/* MENU BUTTON */
const $openMenu = document.querySelector(".open-menu-button")
const $mainNav = document.querySelector(".main-nav")
const $closeMenu = document.querySelector(".close-menu-button")
const $linksNav = document.querySelectorAll(".main-nav a")

$openMenu.addEventListener("click", () => {
   $mainNav.classList.add("-active")
})

$closeMenu.addEventListener("click", () => {
   $mainNav.classList.remove("-active")
})

$linksNav.forEach((linkNav) => {
   linkNav.addEventListener("click", function() {
      $mainNav.classList.remove("-active")
   })
})


/* trayectoria Pestaña*/
const $tabQualification = document.querySelectorAll(".qualification-button")
let $tabActive = document.querySelector(".qualification-button.-active")

function selectQualification(item) {
   item.preventDefault();
   let $tabClicked = this;
   $tabActive.classList.remove("-active");
   $tabClicked.classList.add("-active");
   $tabActive = $tabClicked;

   let $contentActive = document.querySelector(".qualification-content.-active");
   $contentActive.classList.remove("-active");
   let idContent = $tabClicked.getAttribute("href");
   let $targetContent = document.querySelector(idContent);
   $targetContent.classList.add("-active");
}

$tabQualification.forEach((tabItem) => {
   tabItem.addEventListener("click", selectQualification)
})

/* FFormatos y testimonios */
const $cardButtons = document.querySelectorAll(".card-button")
const $serviceModals = document.querySelectorAll(".service-modal")
const $closeModals = document.querySelectorAll(".modal-close")

let modalService = (modalClick) => {
   $serviceModals[modalClick].classList.add("-active")
}

$cardButtons.forEach((cardButton, i) => {
   cardButton.addEventListener("click", () => {
      modalService(i)
   })
})

$closeModals.forEach((closeModal) => {
   closeModal.addEventListener("click", () => {
      $serviceModals.forEach((serviceModal) => {
         serviceModal.classList.remove("-active")
      })
   })
})

/* Carrusel de profesores */
const $profesoresCarousel = document.querySelector(".glide.portfolio-carousel.profesores")

new Glide($profesoresCarousel, {
   type: "carousel",
   gap: 0,
   startAt: 1,
   perView: 1,
   autoplay: 3000,
   hoverpause: true,
   animationDuration: 1000
}).mount()

/* Carrusel de profesores */
const $portfolioCarousel = document.querySelector(".glide.portfolio-carousel")

new Glide($portfolioCarousel, {
   type: "carousel",
   gap: 0,
   startAt: 1,
   perView: 1,
   autoplay: 3000,
   hoverpause: true,
   animationDuration: 1000
}).mount()

/* testimonios carrusel */
const $testimonialCarousel = document.querySelector(".glide.testimonial-carousel")

new Glide($testimonialCarousel, {
   type: "carousel",
   gap: 60,
   startAt: 1,
   perView: 2,
   autoplay: 3000,
   hoverpause: true,
   animationDuration: 1000,
   breakpoints: {
      992: {
         gap: 60,
         perView: 1,
         peek: {
            before: 200,
            after: 200
         },
      },
      610: {
         gap: 20,
         perView: 1,
      }
   }
}).mount()

/* scroll evento */
const scrollEvent = () => {
   const $header = document.querySelector(".header")
   const $btnToTop = document.querySelector(".btn-totop")

   if (this.scrollY >= 50) {
      $header.classList.add("-scroll")
   } else {
      $header.classList.remove("-scroll")
   }

   if (this.scrollY >= 550) {
      $btnToTop.classList.add("-visible")
   } else {
      $btnToTop.classList.remove("-visible")
   }
}

window.addEventListener("scroll", scrollEvent)

/* Sseccion de desplazamiento suave activada */
const $sections = document.querySelectorAll(".section[id]")

let sectionActive = () => {
   const $scroll_Y = window.pageYOffset

   $sections.forEach(current => {
      const $sectionHeight = current.offsetHeight
      const $sectionTop = current.offsetTop - 50
      $sectionId = current.getAttribute("id")

      if ($scroll_Y > $sectionTop && $scroll_Y <= $sectionTop + $sectionHeight) {
         document.querySelector(".main-nav a[href*=" + $sectionId + "]").classList.add("-active")
      } else {
         document.querySelector(".main-nav a[href*=" + $sectionId + "]").classList.remove("-active")
      }
   })
}

window.addEventListener("scroll", sectionActive)

/* oscuro/claro Tema */
const $themeButton = document.querySelector(".theme-button")
const $body = document.body
const $themeActive = window.localStorage.getItem("theme")

if ($themeActive === "dark") {
   $themeButton.classList.add("-dark-mode")
   $body.classList.add("dark-theme")
   
} else {
   $themeButton.classList.remove("-dark-mode")
   $body.classList.remove("dark-theme")
}

const toggleTheme = () => {
   let $darkMode = document.querySelector(".-dark-mode")

   if (!$darkMode) {
      $themeButton.classList.add("-dark-mode")
      $body.classList.add("dark-theme")
      localStorage.setItem("theme", "dark")
   } else {
      $themeButton.classList.remove("-dark-mode")
      $body.classList.remove("dark-theme")
      localStorage.setItem("theme", "light")
   }
}

$themeButton.addEventListener("click", toggleTheme)
