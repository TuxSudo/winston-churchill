var WCSelect = WC.register('plusplus-select');


WCSelect.prototype.on( 'attached', function () {
    var select = this;

    select.addEventListener('click', function() {
        return select.hasAttribute('open') ? select.removeAttribute('open') : select.setAttribute('open', 1);
    });

});

WCSelect.prototype.on('created', function () {
    this.data = {};
});

