$(document).ready(function () {
  var swiperHomeSlide = new Swiper('.swiperHomeSlide', {
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  var swiperAnn = new Swiper('.swiperAnn', {
    slidesPerView: 1,
    autoplay: true,
    pagination: {
      el: '.swiper-pagination',
    },
  });
  var swiperLimit = new Swiper('.swiperLimit', {
    slidesPerView: 1.2,
    // freeMode: true,
    spaceBetween: 8
  });
  var swiperNewPorduct = new Swiper('.swiperNewPorduct', {
    slidesPerView: 2.7,
    spaceBetween: 8
  });
  var swiperRecommend = new Swiper('.swiperRecommend', {
    slidesPerView: 2.7,
    spaceBetween: 8
  });
  $('.swiperBar .swiper-slide').click(function (e) {
    e.preventDefault();
    $('.swiperBar .swiper-slide').removeClass('active')
    $(this).addClass('active')
  });

  //收藏
  $('.icon_like').click(function (e) {
    e.preventDefault();
    e.stopPropagation();
    $(this).toggleClass('active');
  });

  // 加入購物車
  $('.togglePopup').click(function (e) {
    e.preventDefault();
    $('.popup').toggleClass('show');
    $('.cart_mini').removeClass('show');
  });

  // header
  $('.headerIconOpen').click(function (e) {
    e.preventDefault();
    $('.headerIconOpen').toggle();
    $('.headerIconClose').toggle();
    $('.search_bar_content').toggle();
  });
  $('.headerIconClose').click(function (e) {
    e.preventDefault();
    $('.headerIconOpen').toggle();
    $('.headerIconClose').toggle();
    $('.search_bar_content').toggle();
  });

  // tool icon
  $('.tool_icon_btn').click(function (e) {
    e.preventDefault();
    $('.tool_icon_btn img').toggle()
    $('.tool_icon ul').toggleClass('active');
  });
});


// $(function () {
//   $("#footer").load("footer.html");
// });
