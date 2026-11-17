const projectLinks = document.querySelectorAll('.project');

projectLinks.forEach((project) => {
	project.addEventListener('mouseenter', () => project.classList.add('is-hovered'));
	project.addEventListener('mouseleave', () => project.classList.remove('is-hovered'));
});

const sections = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.animationPlayState = 'running';
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.12 });

sections.forEach((section) => {
	section.style.animationPlayState = 'paused';
	observer.observe(section);
});
