var imageEl = document.getElementById('mainImg');

const animImages = {
    1:'https://file.garden/ZXoYW8qZfDccLwuG/pfp.gif',
    2:'https://file.garden/ZXoYW8qZfDccLwuG/pfp2.gif',
}

function getSrc(scrollPos) {
  if (scrollPos < 100) return animImages[1];
  return animImages[2];
  }
  
window.addEventListener('scroll', function() {
  imageEl.src = getSrc(window.scrollY);
});