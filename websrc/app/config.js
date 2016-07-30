requirejs.config({
    baseUrl: 'app/',
    waitSeconds: 0,
    paths: {
        angular: 'lib/angular/angular',
        jQuery: 'lib/jquery/dist/jquery',
        domReady: 'lib/domReady/domReady',
        typeahead: 'lib/typeahead.js/dist/typeahead.jquery',
        angularResource: 'lib/angular-resource/angular-resource',
        angularBootstrap: 'lib/angular-bootstrap/ui-bootstrap-tpls',
        angularLoadingBar:'lib/angular-loading-bar/build/loading-bar'
    },
    shim: {
        angular: {
            deps: ['jQuery'],
            exports: 'angular'
        },
        jQuery: {
            exports: '$'
        },
        typeahead: {
            deps: ['jQuery']
        },
        angularResource:{
            deps:['angular']
        },
        angularBootstrap:{
            deps:['angular']
        },
        angularLoadingBar:{
            deps:['angular']
        }
    },
    deps: ['bootstrap']
});