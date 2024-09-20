
fetch('https://whatyearisit-backend-hgyhxyc2x-lassanas-projects.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.current;
 });

 