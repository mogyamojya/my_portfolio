export default class PageTop {
  constructor($target, $pageTopBtn) {
    this.$target = document.querySelector(`${$target}`);
    this.$pageTopBtn = document.querySelector(`${$pageTopBtn}`);
    this.addEvent();
  }
  addEvent() {
    this.$pageTopBtn.addEventListener('click', (e) =>{
      e.preventDefault();
      velocity(this.$target, 'scroll', {
        duration: 800,
        easing: [250, 30]
      });
    })
  }
}
