/**
 * @param {string[]} paths
 * @return {string[][]}
 */
 var findDuplicate = function(paths) {
    let contentMap = {};
  for (var path of paths) {
    path = path.split(" ");
    let rootDir = path[0];
    for (var i = 1; i < path.length; i++) {
      let [fileName, content] = path[i].split("(");
      content = content.replace(')', '');
      if (!contentMap[content]) contentMap[content] = [];
      contentMap[content].push(rootDir + '/' + fileName);
    }
  }  
  let res = [];
  for (var content in contentMap) {
    if (contentMap[content].length > 1) {
      res.push(contentMap[content]);
    }
  }
  return res;
};