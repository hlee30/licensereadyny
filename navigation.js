document.querySelectorAll('.nav-menu').forEach(details => {
    const summary = details.querySelector('summary');

    details.addEventListener('keydown', event => {
        if (event.key === 'Escape' && details.open) {
            details.open = false;
            summary.focus();
        }
    });

    details.addEventListener('toggle', () => {
        if (!details.open) return;
        document.querySelectorAll('.nav-menu').forEach(other => {
            if (other !== details) other.open = false;
        });
    });

    document.addEventListener('click', event => {
        if (!details.contains(event.target)) {
            details.open = false;
        }
    });
});
