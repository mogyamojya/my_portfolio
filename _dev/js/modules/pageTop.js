export default class PageTop {
  constructor($pageTopBtn) {
    this.$pageTopBtn = document.querySelector(`${$pageTopBtn}`);
    //this.$window = document.getElementsByTagName('html');
    this.addEvent();
  }
  addEvent() {
    this.$pageTopBtn.addEventListener('click', (e) =>{
      e.preventDefault();
      window.scroll({
        top: top,
        behavior: 'smooth',
      });
    })
  }
}
