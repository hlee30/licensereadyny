document.querySelectorAll('.nav-articles').forEach(details => {
    const summary = details.querySelector('summary');
    details.addEventListener('keydown', event => {
        if (event.key === 'Escape' && details.open) {
            details.open = false;
            summary.focus();
        }
    });
    document.addEventListener('click', event => {
        if (!details.contains(event.target)) details.open = false;
    });
});
