const min = 0;
const max = $(".slider-l-item").length;
const subject = new rxjs.Subject();

$(window).on("load resize orientationchange", function () {
  const smallSlider = $(".slider-s");
  const bigSlider = $(".slider-l");
  const counterStart = $(".counter-outer .start");
  const counterEnd = $(".counter-outer .end");

  if ($(window).width() < 768) {
    if (smallSlider.hasClass("slick-initialized")) {
      smallSlider.slick("unslick");
    }
  } else {
    if (!smallSlider.hasClass("slick-initialized")) {
      smallSlider.slick({
        centerMode: true,
        slidesToShow: max,
        focusOnSelect: true,
        centerPadding: "0px",
        arrows: false,
        infinite: false,
        asNavFor: ".slider-l",
      });
    }
  }

  bigSlider.slick({
    arrows: true,
    infinite: false,
    slidesToShow: 1,
    fade: true,
    prevArrow: $("#arrow-l"),
    nextArrow: $("#arrow-r"),
    asNavFor: ".slider-s",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          fade: false,
          slidesToShow: 1,
          slidesToScroll: 1,
          asNavFor: null,
        },
      },
    ],
  });

  bigSlider.on("beforeChange", function (
    event,
    slick,
    currentSlide,
    nextSlide
  ) {
    subject.next(nextSlide);
  });

  counterStart.text(min + 1);
  counterEnd.text(max);

  subject.subscribe((data) => counterStart.text(data + 1));
});
