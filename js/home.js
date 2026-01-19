let isCeiling = false;

window.addEventListener('wheel', (e) => {
  if (e.deltaY < 0 && !isCeiling) {
    document.documentElement.style.background = 'rgb(245,244,245)';
    isCeiling = true;
  } else if (e.deltaY > 0 && isCeiling) {
    document.documentElement.style.background = 'rgba(151, 172, 250, 1)';
    isCeiling = false;
  }
});
