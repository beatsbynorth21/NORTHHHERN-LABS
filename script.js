const reduce=matchMedia('(prefers-reduced-motion:reduce)').matches;
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));
const b=document.querySelector('.burger'),l=document.querySelector('.links');
if(b)b.onclick=()=>l.classList.toggle('open');
document.querySelectorAll('.card').forEach(c=>c.addEventListener('pointermove',e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')}));
const cio=new IntersectionObserver(es=>es.forEach(x=>{if(!x.isIntersecting)return;cio.unobserve(x.target);x.target.querySelectorAll('b').forEach(n=>{const m=n.textContent.match(/^([^\d]*)([\d.]+)(.*)$/);if(!m||reduce)return;const end=parseFloat(m[2]),dec=(m[2].split('.')[1]||'').length,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1200,1),e=1-Math.pow(1-p,3);n.textContent=m[1]+(end*e).toFixed(dec)+m[3];if(p<1)requestAnimationFrame(f)})(t0)})}),{threshold:.4});
document.querySelectorAll('.stats').forEach(s=>cio.observe(s));
const rot=document.querySelector('.rot');
if(rot&&!reduce){const w=['creators','producers','artists','beatmakers'];let i=0;setInterval(()=>{rot.style.opacity=0;setTimeout(()=>{i=(i+1)%w.length;rot.textContent=w[i];rot.style.opacity=1},300)},2600)}
const n=document.getElementById('nero');
if(n){const s=['NERO suggests: price "Midnight Lagos" at $59 and target Afro-drill listeners','NERO suggests: release on Friday evening, when listeners are most active','NERO suggests: add a $25 lease tier to convert first-time buyers'];let k=0;
function type(){const t=s[k%s.length];let j=0;n.textContent='';const iv=setInterval(()=>{n.textContent=t.slice(0,++j);if(j>=t.length){clearInterval(iv);setTimeout(()=>{k++;type()},3200)}},reduce?0:28)}type()}
const f=document.getElementById('cf');
if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);const sub=encodeURIComponent('['+d.get('topic')+'] '+d.get('name'));const body=encodeURIComponent(d.get('message')+'\n\n'+d.get('name')+' ('+d.get('email')+')');location.href='mailto:Northhhernlabs@gmail.com?subject='+sub+'&body='+body};
