[![Slack Badge](https://img.shields.io/badge/chat-atom.io%20slack-blue.svg?style=flat-square)](http://atom-slack.herokuapp.com/)
[![Plugin installs!](https://img.shields.io/apm/dm/linter-OpenEdge.svg?style=flat-square)](https://atom.io/packages/linter-OpenEdge)
[![Package version!](https://img.shields.io/apm/v/linter-OpenEdge.svg?style=flat-square)](https://atom.io/packages/linter-OpenEdge)
[![Dependencies!](https://img.shields.io/david/mimo74/linter-OpenEdge.svg?style=flat-square)](https://david-dm.org/mimo74/linter-OpenEdge)

OpenEdge Linter - prohibis Linter

OpenEdge Linter - prohibis Linter is an extension for the [linter](https://atom.io/packages/linter) package for the hackable [Atom Editor](http://atom.io).

#### what it does

writes filename of edited file to 'd:/ *{prohibis-version}* /tst/SCCInput.mimo' on save.

a listener (xmvscc00.p) is required to run in you prohibis enviroment.

if looks for d:/ *{prohibis-version}* /tst/SCCInput.mimo and compiles each programm therein and writes SCC output to d:/ *{prohibis-version}* /temp/mimocheck.txt.lint

OpenEdge Linter reads output from mimocheck.txt.lint and displays them with the Linter package


#### How to / Installation

- you need a running **SCC Background Compiler** (xmvscc00.p)
