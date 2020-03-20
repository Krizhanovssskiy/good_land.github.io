
const btn_prev = document.querySelector('.Gallery .bg-prev');
const btn_next = document.querySelector('.Gallery .bg-next');
let i = 0;

const item = document.querySelectorAll('.Gallery__item');
  console.log(item);
btn_prev.addEventListener('click', function () {
  console.log('prev')
  item[i].className = 'Gallery__item';
  i--;
  if (i < 0) {
    i = item.length - 1;
  }
  item[i].className = 'Gallery__item Gallery__show';
});

btn_next.addEventListener('click', function () {
  console.log('next')

  item[i].className = 'Gallery__item';
  i++;
  if (i >= item.length) {
    i = 0;
  }
  item[i].className = 'Gallery__item Gallery__show';
});
