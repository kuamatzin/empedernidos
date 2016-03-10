var elixir = require('laravel-elixir');

elixir(function(mix) {
    mix.sass('app.scss');

    mix.scripts([
        '../bower/jquery/dist/jquery.js',
        '../bower/bootstrap-sass/assets/javascripts/bootstrap.js',
        '../bower/vue/dist/vue.min.js',
        '../bower/vue-resource/dist/vue-resource.min.js'
    ], 'public/js/vendor.js');

    mix.copy('resources/assets/bower/font-awesome/fonts', 'public/fonts');
});
