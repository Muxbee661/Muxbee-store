function menu() {
  document.getElementById('nav').classList.toggle("active");
}


document.querySelectorAll('.btn-add')
 .forEach((button) => {
   button.addEventListener('click', () => {
     console.log('added')
   });
 });