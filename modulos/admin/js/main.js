require.config({

  baseUrl: "",

  

    // alias libraries paths

  paths: {

      'jquery': 'bower_components/jquery/dist/jquery.min',
      'jquery-ui': 'bower_components/jquery-ui/jquery-ui.min',
      'angular': 'bower_components/angular/angular.min',
      'angular-route': 'bower_components/angular-route/angular-route.min',
      'angular-resource': 'bower_components/angular-resource/angular-resource.min',
      'angular-ui': 'bower_components/angular-ui/build/angular-ui.min',
      'angular-locale': 'bower_components/angular-locale-pt-br/angular-locale_pt-br',
      
      'View1Controller': 'scripts/controllers/ctrl1',
      'View2Controller': 'scripts/controllers/ctrl2',
      'dataServices': 'scripts/services/dataServices',
      
      'app': 'angular/router'

  },


  // definição de dependências
  shim: {
      'app': ['angular-route'],
      'angular-route': ['angular'],
      'angular' : ['jquery-ui'],
      'jquery-ui': ['jquery']
  },


  // kick start application
  deps: ['app']


});             