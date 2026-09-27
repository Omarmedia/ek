document.addEventListener("DOMContentLoaded", function () {

  const siteHeader = document.getElementById("siteHeader");
  const menuBtn = document.getElementById("menuBtn");
  const menuClose = document.getElementById("menuClose");
  const megaMenu = document.getElementById("megaMenu");

  let lastScrollY = window.scrollY;
  let closeTimer = null;


  /* =========================================
     OPEN MENU
  ========================================= */

  function openMenu() {

    if (!megaMenu) return;

    if (closeTimer) {
      clearTimeout(closeTimer);
    }

    megaMenu.classList.remove("closing");
    megaMenu.classList.add("active");

    megaMenu.setAttribute(
      "aria-hidden",
      "false"
    );

    if (menuBtn) {
      menuBtn.setAttribute(
        "aria-expanded",
        "true"
      );
    }

    document.body.classList.add(
      "no-scroll"
    );

    if (siteHeader) {
      siteHeader.classList.add(
        "header-hidden"
      );
    }

  }


  /* =========================================
     CLOSE MENU
  ========================================= */

  function closeMenu() {

    if (!megaMenu) return;

    if (
      !megaMenu.classList.contains("active")
    ) {
      return;
    }

    megaMenu.classList.remove("active");
    megaMenu.classList.add("closing");

    megaMenu.setAttribute(
      "aria-hidden",
      "true"
    );

    if (menuBtn) {
      menuBtn.setAttribute(
        "aria-expanded",
        "false"
      );
    }


    closeTimer = setTimeout(function () {

      megaMenu.classList.remove(
        "closing"
      );

      document.body.classList.remove(
        "no-scroll"
      );

      if (siteHeader) {
        siteHeader.classList.remove(
          "header-hidden"
        );
      }

      lastScrollY = window.scrollY;

    }, 650);

  }


  /* =========================================
     BUTTON EVENTS
  ========================================= */

  if (menuBtn) {

    menuBtn.addEventListener(
      "click",
      openMenu
    );

  }


  if (menuClose) {

    menuClose.addEventListener(
      "click",
      closeMenu
    );

  }


  /* =========================================
     CLOSE WHEN CLICKING MENU LINK
  ========================================= */

  document
    .querySelectorAll(".mega-menu a")
    .forEach(function (link) {

      link.addEventListener(
        "click",
        closeMenu
      );

    });


  /* =========================================
     ESCAPE
  ========================================= */

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        megaMenu &&
        megaMenu.classList.contains(
          "active"
        )
      ) {

        closeMenu();

      }

    }
  );


  /* =========================================
     HEADER SCROLL
  ========================================= */

  window.addEventListener(
    "scroll",
    function () {

      if (!siteHeader) return;


      /* Ikke gjør noe når menyen er åpen */

      if (
        megaMenu &&
        megaMenu.classList.contains(
          "active"
        )
      ) {
        return;
      }


      const currentScrollY =
        window.scrollY;


      /*
        Scroll ned:
        skjul header
      */

      if (
        currentScrollY > lastScrollY &&
        currentScrollY > 100
      ) {

        siteHeader.classList.add(
          "header-hidden"
        );

      }

      /*
        Scroll opp:
        vis header
      */

      else {

        siteHeader.classList.remove(
          "header-hidden"
        );

      }


      lastScrollY = Math.max(
        currentScrollY,
        0
      );

    },

    {
      passive: true
    }

  );

});



const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      // Forsink hver synlig kort basert på index
      setTimeout(() => {
        entry.target.classList.add('visible');
      }, index * 200); // 200ms delay mellom kortene
      observer.unobserve(entry.target); // Unngå gjentatte triggere
    }
  });
}, {
  threshold: 0.2 // Trigger når 20% av elementet er synlig
});

document.querySelectorAll('.beh-flex').forEach((el) => {
  observer.observe(el);
});


document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Legg til .visible når elementet er synlig
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Unobserve etter første visning
      }
    });
  }, {
    threshold: 0.2 // hvor mye av elementet må være synlig
  });

  // Finn alle elementer med .lazy-load
  const lazyElements = document.querySelectorAll(".lazy-load");
  lazyElements.forEach(el => observer.observe(el));
});



  const scrollContainer = document.getElementById('testimonial-scroll');
  const scrollAmount = scrollContainer.offsetWidth / 2; // scroll 50% of visible area

  document.getElementById('scroll-left').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  });

  document.getElementById('scroll-right').addEventListener('click', () => {
    scrollContainer.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }); 



  


  const events = [
  {
    date: "2026-04-12",
    title: "Vårtur i marka",
    time: "11:00 - 14:00",
    location: "Sognsvann, Oslo",
    description: "Bli med på en sosial og frisk vårtur i marka med enkel servering og hyggelig fellesskap."
  },
  {
    date: "2026-04-18",
    title: "Pust og bevegelse i parken",
    time: "18:00 - 19:30",
    location: "Frognerparken",
    description: "En rolig samling med fokus på pust, bevegelse og tilstedeværelse ute i naturen."
  },
  {
    date: "2026-04-25",
    title: "Familiedag ute",
    time: "12:00 - 15:00",
    location: "Ekebergparken",
    description: "Aktiviteter for hele familien med lek, enkel mat og sosialt samvær i grønne omgivelser."
  },
  {
    date: "2026-05-03",
    title: "Morgentur med kaffe",
    time: "08:00 - 09:30",
    location: "Bygdøy",
    description: "Start dagen ute med en lett morgentur og kaffe i godt selskap."
  }
];







//KALENDEN





