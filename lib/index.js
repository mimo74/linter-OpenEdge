'use babel'
import { Range } from 'atom'

export function activate() {
  // Fill something here, optional
}

export function deactivate() {
  // Fill something here, optional
}

export function provideLinter() {
    const messages = [];

  return {
    name: 'SCC',
    scope: 'file', // or 'project'
    lintsOnChange: false, // or true
    grammarScopes: ['source.openedge'],
    lint(textEditor) {

      const editorPath = textEditor.getPath();
      var fs = require('fs');
      const pfad = editorPath.substring(0,9);

      fs.writeFileSync(pfad + 'tst/SCCInput.mimo',editorPath + "\n");

      return new Promise(function(resolve) {

        fs.watch(pfad + 'temp/mimocheck.txt.lint', function(event, filename) {
          if(filename){
            const messages = [];
            console.log('Event : ' + event);
            console.log(filename + ' file Changed ...');
            file = fs.readFileSync(pfad + 'temp/mimocheck.txt.lint');
            var match = fs.readFileSync(pfad + 'temp/mimocheck.txt.lint').toString().split("\n");
            for (var line in match) {
              var array = match[line].split(';');
              var range = new Range([parseInt(array[1]),0], [parseInt(array[1]),0]);
              if (array[2]) {
                messages.push({
                    severity: array[3],
                    location: {
                      file: editorPath,
                      position: range,
                    },
                    excerpt: array[2],
                  });
              }
            }
            resolve(messages);
          }
          else{
            console.log('filename not provided')
          }
        });

      });

    }
  }
}
