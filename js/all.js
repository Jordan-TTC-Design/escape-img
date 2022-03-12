const imgListContainer = document.querySelector('#imgList');
const imgsUrlList = [
  'https://i.imgur.com/ArsdCGv.jpeg',
  'https://i.imgur.com/LNUXzZF.jpeg',
  'https://i.imgur.com/kgTEVHZ.jpeg',
  'https://i.imgur.com/vZoqs0P.jpeg',
  'https://i.imgur.com/SEu9pHo.jpeg',
  'https://i.imgur.com/OkKwWM9.jpeg',
  'https://i.imgur.com/eUppgFB.jpeg',
  'https://i.imgur.com/WAIXTXs.jpeg',
  'https://i.imgur.com/vb0uajo.jpeg',
  'https://i.imgur.com/s6w2RpD.jpeg',
  'https://i.imgur.com/ArsdCGv.jpeg',
  'https://i.imgur.com/LNUXzZF.jpeg',
  'https://i.imgur.com/kgTEVHZ.jpeg',
  'https://i.imgur.com/vZoqs0P.jpeg',
  'https://i.imgur.com/SEu9pHo.jpeg',
  'https://i.imgur.com/OkKwWM9.jpeg',
  'https://i.imgur.com/eUppgFB.jpeg',
  'https://i.imgur.com/WAIXTXs.jpeg',
  'https://i.imgur.com/vb0uajo.jpeg',
  'https://i.imgur.com/s6w2RpD.jpeg',
];
function imgListInit() {
  let str = '';
  imgsUrlList.forEach((imgUrl, index) => {
    str += `<div class="mb-2 imgContainer__row"><img class="w-100 rounded animate__animated animate__heartBeat" src="${imgUrl}" alt="圖片${index}" referrerpolicy="no-referrer"></div>`;
    imgListContainer.innerHTML = str;
  });
}

imgListInit();
const bricklayer = new Bricklayer(document.querySelector('.bricklayer'));
