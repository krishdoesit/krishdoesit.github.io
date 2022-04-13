const ndd = document.getElementById('ndd');

window.addEventListener('load', (event) => {
  ndd.style.display = 'none';
});

document.getElementById('comment').addEventListener('click', ()=>{
  ndd.style.display = 'block';
})
document.getElementById('hiring').addEventListener('click', ()=>{
  ndd.style.display = 'none';
})
document.getElementById('question').addEventListener('click', ()=>{
  ndd.style.display = 'none';
})

