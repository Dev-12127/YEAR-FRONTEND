
fetch('https://whatyearisit-backend-8qlfa3lgp-lassanas-projects.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.current;
 });

 