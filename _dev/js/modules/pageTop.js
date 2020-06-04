export default class PageTop {
  constructor($pageTopBtn) {
    this.$pageTopBtn = document.querySelector(`${$pageTopBtn}`);
    this.addEvent();
  }
  addEvent() {
    this.$pageTopBtn.addEventListener('click', (e) =>{
      e.preventDefault();
      window.scroll({
        top: 0,
        behavior: 'smooth',
      });
    })
  }
}
