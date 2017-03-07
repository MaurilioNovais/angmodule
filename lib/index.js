module.exports = function(name) {

    // TODO Pegar o nome do app

    const fs = require('fs');

    var module_name = name.toLowerCase();

    if(module_name.indexOf(' ') != -1) {
        console.log('Separate the words from the module with "-"');
        return;
    }

    createDirectory(module_name);

    function createDirectory(path) {

        fs.mkdir(path, function(err) {

            if(!err) {

                var file_name = module_name + '.controller.js';

                // testando identacao e conteudo
                var content = 'angular \n' +
                    '   .module("app.' + module_name + '") \n' +
                    '   .controller("NomeController", NomeController)';

                createFile(path + '/' + file_name, content);

            } else {

                console.log('Diretório já existe');
                return;

            }

        });

    }

    function createFile(path, content) {

        fs.writeFile(path, content, function(err) {

            if(!err) {

                console.log('Arquivo Criado');

            } else {

                console.log(err);
                return;

            }

        });

    }

}