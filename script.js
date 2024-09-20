
fetch('https://whatyearisit-backend-tau-red.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#year').textContent = data.current;
 });

 