const fadeEls = document.querySelectorAll(".fade");

const obs = new IntersectionObserver(
    entries => {
        entries.forEach(e => {
            if (e.isIntersecting) {
                e.target.classList.add("visible");
                obs.unobserve(e.target);
            }
        });
    },
    { threshold: 0.2 }
);

fadeEls.forEach(el => obs.observe(el));
