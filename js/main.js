/* eslint-disable */
/*stylelint-disable*/
'use strict';

(function () {
  var toggleBtn = document.querySelector('.header__toggle');
  var header = document.querySelector('header');
  var intro = document.querySelector('.intro__info')
  // var nav = document.querySelector('.header__nav');

  intro.classList.remove('fadeInDown');
  intro.classList.add('animItems');
  intro.classList.add('animItems--hide');

  header.classList.remove('header--nojs');
  header.classList.add('header--open');

  toggleBtn.addEventListener('click', function () {
    if (header.classList.contains('header--open')) {
      header.classList.remove('header--open');
      header.classList.add('header--close');
      header.classList.remove('lock');
    } else {
      header.classList.remove('header--close');
      header.classList.add('header--open');
      header.classList.add('lock');
    }
  });




  var animItems = document.querySelectorAll('.animItems');

  if (animItems.length > 0) {
    animOnScroll();
    // window.addEventListener('load', animOnScroll);
    window.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
      for (var i = 0; i < animItems.length; i++)
      animItems.forEach(function(el) {
        var animItem = animItems[i];
        var animItemHeight = animItem.offsetHeight;
        var animItemOffset = offset(animItem).top;
        var animStart = 4;

        var animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
          animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }
        if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
          animItem.classList.add('active');
        } else {
          if (!animItem.classList.contains('animItems--hide')) {
            animItem.classList.remove('active');
          }
        }
      });
    }

    function offset(element) {
      var rect = element.getBoundingClientRect();
      var scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
      var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      return {top: rect.top + scrollTop, left: rect.left + scrollLeft}
    }


  }



  // var sections = document.querySelectorAll('.section--main');
  // var mainNav = document.querySelector('.header__nav');
  // var links = document.querySelectorAll('.nav__link');

  // var removeActiveClass = function () {
  //   links.forEach(function (el) {
  //     if (el.classList.contains('active')) {
  //       el.classList.remove('active');
  //     }
  //   });
  // };
  // var checkScrollDistance = function () {
  //   var scrollDistance = window.pageYOffset;

  //   sections.forEach(function (el, i) {
  //     var top = el.offsetTop - mainNav.clientHeight;
  //     var bottom = el.clientHeight + top;
  //     if (top < scrollDistance && scrollDistance < bottom) {
  //       removeActiveClass();
  //       document.querySelectorAll('.main-nav li')[i].querySelector('a').classList.add('active');
  //     }
  //   });
  //   document.removeEventListener('scroll', checkScrollDistance);
  // };

  // window.addEventListener('scroll', checkScrollDistance);
}());
