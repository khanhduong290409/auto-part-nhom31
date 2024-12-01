
	document.addEventListener('scroll', () => {
	  const items = document.querySelectorAll('.items');
	  items.forEach(item => {
		const rect = item.getBoundingClientRect();
		if (rect.top < window.innerHeight) {
		  item.classList.add('show');
		}
	  });
	});
