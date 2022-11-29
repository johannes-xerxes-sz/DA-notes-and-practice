var findCenter = function(edges) {
    if (edges[1][0] === edges[0][0] || edges[1][1] === edges[0][0]) {
      return edges[0][0]
    }
    if (edges[1][0] === edges[0][1] || edges[1][1] === edges[0][1]) {
      return edges[0][1]
    }
};
