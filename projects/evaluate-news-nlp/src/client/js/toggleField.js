function toggleFieldfn() {

    const quoteEl = document.getElementById('quote');
    const urlEl = document.getElementById('url');

    if (document.getElementById('urlRadio').checked === true) {
        quoteEl.setAttribute('disabled', 'disabled');
        urlEl.removeAttribute('disabled');
    }
    else {
        urlEl.setAttribute('disabled', 'disabled');
        quoteEl.removeAttribute('disabled');
    }

}

export { toggleFieldfn }