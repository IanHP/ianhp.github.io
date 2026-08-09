function equalizeHeights() {
  /*Creates a class (photo-row) that can be applied to a column
  space div (a section that holds multiple columns).
  
  It will edit every image so that: all images will have the same height
  as the "shortest" image. 
  */
  const rows = document.querySelectorAll('.photo-row');

  rows.forEach(row => {
    const imgs = row.querySelectorAll('img.adjust');   // only this row's images
    imgs.forEach(img => img.style.height = 'auto');   // reset

    let min = Infinity;
    imgs.forEach(img => min = Math.min(min, img.clientHeight));  // min for THIS row

    imgs.forEach(img => {
      img.style.height = min + 'px';
      //img.style.objectFit = 'cover'; // crops the images
      img.style.width = 'auto'; // keeps aspect ratio with new set height
    });
  });
}

window.addEventListener('load', equalizeHeights);
window.addEventListener('resize', equalizeHeights);