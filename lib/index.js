'use babel'

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

// waitforfile Variante
  /*      function waitForFile(filePath, attempts, cb) {
            var fileExists = false;
            var i = 0;
            while (!fileExists && i < attempts) {
                sleep(1000);
                fileExists = fs.exists(filePath) && fs.isFile(filePath) && fs.size(filePath) > 0;
                i++;
            }
            if (fileExists) {cb()};
        }

        function sleep(miliseconds) {
           var currentTime = new Date().getTime();

           while (currentTime + miliseconds >= new Date().getTime()) {
           }
        }

        waitForFile('D:/ph27e/temp/mimocheck.txt.lint',30, function () {
          const messages = [];

          var match = fs.readFileSync('D:/ph27e/temp/mimocheck.txt.lint').toString().split("\n");

          for (var line in match) {
            var array = match[line].split(';');
            if (array[2]) {
            messages.push({
              type: 'Error',
              filePath: editorPath,
              range: [[parseInt(array[1]),0], [parseInt(array[1]),0]],
              text: array[2],
            });
            }
          }

          fs.unlink('D:/ph27e/temp/mimocheck.txt.lint',function () {resolve(messages);});
        });
*/
/*
function timeout() {
        setTimeout(function() {

        if (fs.exists(filePath) && fs.isFile(filePath) && fs.size(filePath) > 0) {
        const messages = [];

        var match = fs.readFileSync('D:/ph27e/temp/mimocheck.txt.lint').toString().split("\n");

        for (var line in match) {
          var array = match[line].split(';');
          if (array[2]) {
          messages.push({
            type: 'Error',
            filePath: editorPath,
            range: [[parseInt(array[1]),0], [parseInt(array[1]),0]],
            text: array[2],
          });
          }
        }

         resolve(messages);
       }
       timeout();
     }, 1000);
}
*/
      setTimeout(function() {

        const messages = [];

        // in der optimistischen Annahme, dass die eresten neun Zeichen
        // die Version sind (d:\ph27f\)
        const pfad     = editorPath.substring(0,9);

        var match = fs.readFileSync(pfad + 'temp/mimocheck.txt.lint').toString().split("\n");

        for (var line in match) {
          var array = match[line].split(';');
          if (array[2]) {
          messages.push({
            severity: array[3],
            location: {
              file: editorPath,
              position: [[parseInt(array[1]),0], [parseInt(array[1]),0]],
            },
            excerpt: array[2],
          });
          }
        }

        resolve(messages);

      }, 10000);

    });



/*
      return messages;

*/

  //    messages.push({
  //      type: 'Warning',
  //      text: 'Something happened',
  //      filePath: editorPath,
  //      range: [[3,4], [3,20]],
  //    });
  //    messages.push({
  //      type: 'Error',
  //      text: 'ON ERROR - for each/first/last without visible on error phrase',
  //      filePath: editorPath,
  //      range: [[794,0], [794,0]],
  //    });
      // Note, a Promise may be returned as well!
//      return [{
//        type: 'Error',
//        text: 'Something went wrong',
//        range: [[0,0], [0,1]],
//        filePath: editorPath
//      }]
    //  return messages;
    }
  }
}
