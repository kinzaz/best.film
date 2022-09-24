const sectionShown = () => {

    const allSections = document.querySelectorAll('.section');

    const appearanceSection = function(entries, observer) {
        const entry = entries[0];
        if (!entry.isIntersecting) return;
        entry.target.classList.remove('section--hidden')
        observer.unobserve(entry.target)
    }
    const sectionObserver = new IntersectionObserver(appearanceSection, {
        root: null,
        threshold: 0.2
    })

    allSections[0].classList.add('section--hidden');
    allSections.forEach(sec => sec.classList.add('section--hidden'));

    allSections.forEach(section => {
        sectionObserver.observe(section);
    })
}

sectionShown();     




const headerHidden = () => {

    const header = document.querySelector('header');
    const footer = document.querySelector('footer');

    const disappearanceHeader = function(entries, observer) {
        const entry = entries[0];
        if(entry.isIntersecting) {
            header.style.opacity = '0'
        } else {
            header.style.opacity = '1'
        }
        // observer.unobserve(entry.target)
    }
    const footerObserver = new IntersectionObserver(disappearanceHeader, {
        root: null,
        threshold: 0.7
    })

    footerObserver.observe(footer);
}

headerHidden();   