( function () {
    var queryImport = (function () {
            var doc = document.currentScript.ownerDocument;
            return function (sel) {
                return doc.querySelector(sel);
            };
        })(),
        PlusPlusSelect = WC.register( 'plusplus-select' );

    PlusPlusSelect.prototype.on( 'created', function () {
        this.template = queryImport('template');
    } );

    PlusPlusSelect.prototype.on( 'attached', function () {
        console.log('attached');
        
    });

    PlusPlusSelect.prototype.on('data', function (data) {
        this.render(this.templateFragment, data);
    });

    PlusPlusSelect.prototype.on( 'detached', function () {
        window.clearInterval( interval );
    });
} )();
