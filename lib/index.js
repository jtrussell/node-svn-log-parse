'use strict';

module.exports.Parser = function() {
  
  var svnLogDelim = /-{72}/g;
  
  this.parse = function(logStr) {
    var commitStrs = logStr.split(svnLogDelim)
      .map(function(s) {
        return s.trim();
      })
      .filter(function(s) {
        return s.length > 0;
      });
      
    var commitObjs = commitStrs.map(function(s) {
      // The first line has all the non-message info... that's on the second
      // line
      var firstLineBreakPos = s.indexOf('\n');
      
      if(firstLineBreakPos === -1) {
        return null;
      }
      
      var firstLine = s.substring(0, firstLineBreakPos)
        , firstLineParts = firstLine.split('|').map(function(p) {
          return p.trim();
        });
        
      if(firstLineParts.length !== 4) {
        return null;
      }
      
      return {
        revision: firstLineParts[0],
        committer: firstLineParts[1],
        time: firstLineParts[2],
        line_count: firstLineParts[3],
        message: s.substring(firstLineBreakPos+1).trim()
      };
    })
    .filter(function(c) {
      return c !== null;
    });
      
    return commitObjs;
  };

};