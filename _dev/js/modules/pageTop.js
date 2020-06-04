export default class PageTop {
  constructor($target, $pageTopBtn) {
    this.$target = document.querySelector(`${$target}`);
    this.$pageTopBtn = document.querySelector(`${$pageTopBtn}`);
    this.addEvent();
  }
  addEvent() {
    this.$pageTopBtn.addEventListener('click', (e) =>{
      //this.$target.style.backgroundColor = 'red';
      //this.$target.velocity('scroll', {duration: 500, easing: 'ease-in'});
      e.preventDefault();
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    })
  }
}
