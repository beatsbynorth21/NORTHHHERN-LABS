const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const b=document.querySelector('.burger'),l=document.querySelector('.links');
if(b)b.onclick=()=>l.classList.toggle('open');
