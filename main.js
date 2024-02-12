const accordionItemHeaders = document.querySelectorAll('.label');

accordionItemHeaders.forEach(accordionItemHeaders => {
    accordionItemHeaders.addEventListener('click', event => {
        accordionItemHeaders.classList.toggle('active');

    });
});
