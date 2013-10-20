node-svn-log-parse
==================

Simple `svn log` output parsing.

## Installation

We're not yet in the `npm` registry so install directly from github:

```
npm install --save git+https://github.com/jtrussell/node-svn-log-parse.git
```

## Usage

```
var Parser = require('svn-log-parse').Parser
  , parser = new Parser();

var svnLogObjects = parser.parse(/* log messages string */);

/*
Do something with svnLogObjects:

[{
  revision: 'r489'
  committer: 'bruce_lee'
  time: '2013-08-22 19:35:20 +0000 (Thu, 22 Aug 2013)'
  line_count: '1 line'
  message: 'fix: Typo'
},{
  // ...
}]
*/
```

## License

MIT