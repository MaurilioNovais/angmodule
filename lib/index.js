module.exports = function(program) {

    const fs = require('fs');

    // console.log(JSON.stringify(program, null, 4)); return;

    var folder = program.folder || '';
    var controller = program.controller || '';
    var view = program.view || '';

    var module_name = folder;

    folder = folder.toLowerCase();

    if(folder.indexOf(' ') !== -1) {
        console.log('Separe as palavras do modulo com um "-"');
        return;
    }

    createDirectory(folder);

    function createDirectory(folder) {

        fs.mkdir(folder, function(err) {

            if(!err) {

                console.log('Diretório "' + folder + '" criado com sucesso.');

                var file_name_controller = formatFileName(controller, 'controller', 'js');
                var content_controller =
                    '(function() { \n' +
                    '   \'use strict\';\n\n' +
                    '   angular \n' +
                    '       .module(\'app.' + module_name + '\', []) \n' +
                    '       .controller(\'' + controller + '\', ' + controller + ') \n\n' +
                    '   ' + controller + '.$inject = [\'$scope\']; \n\n' +
                    '   function '+ controller +'($scope) { \n' +
                    '       console.log(\'chamada a controller ' + controller + '\'); \n' +
                    '   } \n\n' +
                    '})();';

                createFile(folder + '/' + file_name_controller, content_controller);

                var file_name_view = formatFileName(view, 'view', 'html');
                var content_view =
                    '<ion-view title=\'View Name\'> \n' +
                    '<h1>View Carregada...</h1> \n' +
                    '</ion-view>';

                createFile(folder + '/' + file_name_view, content_view);

            } else {

                console.log('Diretório já existe');
                return;

            }

        });

    }

    function createFile(folder, content) {

        fs.writeFile(folder, content, function(err) {

            if(!err) {

                console.log('Arquivo "' + folder + '" criado com sucesso.');

            } else {

                console.log(err);
                return;

            }

        });

    }

    function formatFileName(name, type, extension) {

        var file_name = name.match(/[A-Z][a-z]+/g);
        return file_name.join('-').toLowerCase() + '.' + type + '.' + extension;

    }

}