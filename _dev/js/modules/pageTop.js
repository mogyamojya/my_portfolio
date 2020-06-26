// export default class PageTop {
//   constructor($target, $pageTopBtn) {
//     this.$target = document.querySelector(`${$target}`);
//     this.$pageTopBtn = document.querySelector(`${$pageTopBtn}`);
//     this.addEvent();
//   }
//   addEvent() {
//     this.$pageTopBtn.addEventListener('click', (e) =>{
//       e.preventDefault();
//       velocity(this.$target, 'scroll', {
//         duration: 800,
//         easing: [250, 30]
//       });
//     })
//   }
// }

// export default class PageTop {
//   constructor() {
    $('a[href^="#"]').click(function() {
        const header = $('.header__wrap');
        const headerHeight = header.height();
        const speed = 400;
        const href= $(this).attr("href");
        const target = $(href == "#" || href == "" ? 'html' : href);
        const position = target.offset().top - headerHeight;
        $('body,html').animate({scrollTop:position}, speed, 'swing');
        event.preventDefault(); 
        event.stopPropagation(); 
    });

    const pagetop = $('.pagetop');
    let winSclollTop = 0;
    let startPosition = 0;
    console.log(startPosition);
    $(window).on('scroll', function () {
        winSclollTop = $(this).scrollTop();
        if (winSclollTop >= startPosition) {
            pagetop.fadeIn();
            console.log('フェードイン');
        } else {
            pagetop.fadeOut();
            console.log('フェードアウト');
        }
    });
//   }
// }