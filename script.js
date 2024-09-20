
fetch('https://year-frontend-3hlt6zrfp-lassanas-projects.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.current;
 });

 