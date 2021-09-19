function scrollTo(element) {
  window.scroll({
    left: 0,
    top: element.offsetTop,
    behavior: 'smooth'
  })
}

var btn_about = document.querySelector('.about');
var about = document.querySelector('.cont__grid1');


btn_about.addEventListener('click', () => {
  scrollTo(about);
})

var btn_test = document.querySelector('.testi');
var test = document.querySelector('.test');

btn_test.addEventListener('click', () => {
  scrollTo(test);
})

var btn_feat = document.querySelector('.feat');
var feat = document.querySelector('.features');

btn_feat.addEventListener('click', () => {
  scrollTo(feat);
})
