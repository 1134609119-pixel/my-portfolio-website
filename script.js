(function(){
  // 通用返回顶部按钮
  var toTop = document.getElementById('toTop');
  if(toTop){
    window.addEventListener('scroll', function(){
      toTop.style.display = (window.scrollY > 300) ? 'block' : 'none';
    });
    toTop.addEventListener('click', function(){ window.scrollTo({top:0,behavior:'smooth'}); });
  }

  // 简单轮播：Hero 区（占位）
  var heroCarousel = document.getElementById('heroCarousel');
  if(heroCarousel){
    var slides = heroCarousel.querySelectorAll('.slide');
    var idx = 0;
    function showSlide(i){ slides.forEach((s,k)=>{ s.classList.toggle('active', k===i); }); }
    setInterval(function(){ idx=(idx+1)%slides.length; showSlide(idx); }, 4000);
  }

  // 右侧 collage 按图片轮播效果：图片不停轮播（持续切换并高亮当前图片）
  var collageImgs = document.querySelectorAll('.collage-img');
  if(collageImgs.length>0){
    var cIdx = 0;
    collageImgs.forEach((el, i)=>{ if(i===0){ el.classList.add('visible'); el.style.opacity='1'; } else { el.style.opacity='0'; el.classList.remove('visible'); } });
    setInterval(function(){
      collageImgs[cIdx].classList.remove('visible');
      collageImgs[cIdx].style.opacity = '0';
      cIdx = (cIdx + 1) % collageImgs.length;
      collageImgs[cIdx].classList.add('visible');
      collageImgs[cIdx].style.opacity = '1';
    }, 2800);
  }

  // 精选案例：静态两张卡片，点击跳转逻辑统一
  var casesCarousel = document.getElementById('casesCarousel');
  if(casesCarousel){
    const container = casesCarousel.querySelector('.cards-container');
    const items = container.querySelectorAll('.card');
    items.forEach(it => {
      it.style.cursor = 'pointer';
      it.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        const titleEl = it.querySelector('.card-title');
        const title = titleEl ? titleEl.textContent : '';
        let url = it.getAttribute('data-href');
        if (title.includes('AI驱动的新媒体增长')) {
          url = 'project-detail.html?id=1';
        } else if (title.includes('中亚市场')) {
          url = 'assets/中亚市场开拓与新品研发管理.pdf';
        }
        if (url) {
          if (url.endsWith('.pdf')) window.open(url, '_blank');
          else window.location.href = url;
        }
      });
    });
  }
})();
