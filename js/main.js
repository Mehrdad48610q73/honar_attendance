document.addEventListener('DOMContentLoaded', () => {
  console.log('آمار هنرستان - شروع شد');
  
  const navItems = document.querySelectorAll('.nav-item');
  const pages = document.querySelectorAll('.page');

  navItems.forEach(item => {
    item.addEventListener('click', () => {
      navItems.forEach(nav => nav.classList.remove('is-active'));
      pages.forEach(page => page.classList.remove('is-active'));
      
      item.classList.add('is-active');
      const targetPage = item.getAttribute('data-nav');
      const pageElement = document.getElementById('page-' + targetPage);
      
      if (pageElement) {
        pageElement.classList.add('is-active');
      }
    });
  });
});
