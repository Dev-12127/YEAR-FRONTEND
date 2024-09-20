
fetch('whatyearisit-backend-tau-red.vercel.app')
 .then(response => response.json())
 .then(data => {
   document.querySelector('#msg').textContent = data.message;
 });

