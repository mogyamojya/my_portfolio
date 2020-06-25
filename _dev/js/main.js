import '@babel/polyfill';

import MainPaddingTop from './modules/mainPaddingTop';
import PageTop from './modules/pageTop';


// new PageTop('#pagetop', '.pagetop');
new MainPaddingTop();
new PageTop();

$(window).resize(function() {
  new MainPaddingTop();
});



//SweetScroll用の記述
// import SweetScroll from "sweet-scroll"
// const sweetScroll = new SweetScroll({
//   trigger: "a[href^='#']"
// });