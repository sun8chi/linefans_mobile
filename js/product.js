$(document).ready(function () {
  var swiperSingle = new Swiper('.swiperSingle', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination'
    }
  });
  // popup
  $('.popup').click(function (e) {
    e.preventDefault();

    if ($(e.target).attr('class') == 'popup show') {
      $('.popup').removeClass('show');
    }
  });
  // choose
  $('.list_choose li').click(function (e) {
    e.preventDefault();
    $(this)
      .siblings()
      .removeClass('active');
    $(this).addClass('active');
  });
  // tabs
  $('.tabs li').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.scrollTo').click(function (e) {
    e.preventDefault();
    let to = $(this).data('scroll');
    $([document.documentElement, document.body]).animate({
      scrollTop: $("#" + to).offset().top
    }, 800);
  });

  // 加入購物車成功提示
  $('.addCartBtn').click(function (e) {
    e.preventDefault();
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false
    });

    Toast.fire({
      icon: 'success',
      title: '成功加入購物車'
    });
  });

  // 迷你購物車
  $('.footerCartBtn.active').click(function (e) {
    e.preventDefault();
    $('.cart_mini').toggleClass('show');
  });
  $('.cart_mini').click(function (e) {
    e.preventDefault();
    if ($(e.target).attr('class') == 'cart_mini show' || $(e.target).attr('class') == 'cart_mini cart_mini_up show') {
      $('.cart_mini').removeClass('show');
    }
  });

  // 分類
  $('.left_filter li').click(function (e) {
    e.preventDefault();
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });


  $('.popup_fill_btn').click(function (e) {
    e.preventDefault();
    let popup = $(this).data('popup');
    $('#' + popup).addClass('show');
  });
  $('.colsePopupfill').click(function (e) {
    e.preventDefault();
    $('.popup_fill').removeClass('show')
  });
  // 篩選
  $('.filter_price').click(function (e) {
    e.preventDefault();
    $(this).find('span').toggleClass('active')
  });
  // 限時
  $('.tab_limit li').click(function (e) {
    e.preventDefault();
    $('.tab_limit li').removeClass('active');
    $(this).addClass('active');
  });
});
