(function(){var d=document,h=d.querySelector('header.site'),pg=d.querySelector('.progress'),b=d.querySelector('.burger'),m=d.getElementById('menu');
if(b)b.addEventListener('click',function(){var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o)});
d.addEventListener('click',function(e){if(m&&m.classList.contains('open')&&e.target.closest('.menu a')){m.classList.remove('open');b.setAttribute('aria-expanded',false)}});
function sc(){var y=window.pageYOffset,t=d.documentElement.scrollHeight-innerHeight;h&&h.classList.toggle('stuck',y>10);pg&&(pg.style.width=(t>0?y/t*100:0)+'%')}sc();addEventListener('scroll',sc,{passive:true});
var r=[].slice.call(d.querySelectorAll('.rv'));if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var s=e.target.parentNode.children,i=[].indexOf.call(s,e.target);e.target.style.transitionDelay=Math.min(i,5)*90+'ms';e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});r.forEach(function(x){io.observe(x)})}else r.forEach(function(x){x.classList.add('in')});
[].forEach.call(d.querySelectorAll('.tabs'),function(t){var bs=t.querySelectorAll('button');[].forEach.call(bs,function(x){x.addEventListener('click',function(){[].forEach.call(bs,function(y){y.setAttribute('aria-selected',y===x);d.getElementById(y.dataset.t).hidden=y!==x})})})});
var TO='info@calgarytrustedcleaners.ca';
[].forEach.call(d.querySelectorAll('form[data-mail]'),function(f){var n=f.querySelector('textarea[maxlength]'),c=f.querySelector('.cnt');if(n&&c)n.addEventListener('input',function(){c.textContent=n.value.length+' / '+n.maxLength});
f.addEventListener('submit',function(e){e.preventDefault();var ms=f.querySelector('.msg'),bad=0;[].forEach.call(f.querySelectorAll('[required]'),function(x){var v=x.value.trim();if(!v||(x.type==='email'&&!/^\S+@\S+\.\S+$/.test(v))){x.classList.add('bad');bad++}else x.classList.remove('bad')});
if(bad){ms.className='msg show no';ms.textContent='Please complete the highlighted fields.';return}
var L=[];[].forEach.call(f.querySelectorAll('input,select,textarea'),function(x){if(x.type==='radio'&&!x.checked)return;var l=x.dataset.l||x.name;if(l&&x.value.trim())L.push(l+': '+x.value.trim())});
ms.className='msg show ok';ms.textContent='Opening your email app with your request ready to send...';location.href='mailto:'+TO+'?subject='+encodeURIComponent(f.dataset.mail)+'&body='+encodeURIComponent(L.join('\n'))})});
})();
