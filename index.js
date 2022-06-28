window.onload = function () {
  var list = document.getElementById('shuffleAndSortList'),
    button = document.getElementById('shuffleList');
  function shuffle(items) {
    var cached = items.slice(0),
      temp,
      i = cached.length,
      rand;
    while (--i) {
      rand = Math.floor(i * Math.random());
      temp = cached[rand];
      cached[rand] = cached[i];
      cached[i] = temp;
    }
    return cached;
  }
  function shuffleNodes() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);
    nodes = shuffle(nodes);
    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  function sortNodes() {
    var nodes = list.children,
      i = 0;
    nodes = Array.prototype.slice.call(nodes);

    nodes.sort((a, b) => {
      return a.innerHTML - b.innerHTML;
    });

    while (i < nodes.length) {
      list.appendChild(nodes[i]);
      ++i;
    }
  }

  document.getElementById('shuffleList').onclick = shuffleNodes;
  document.getElementById('sortList').onclick = sortNodes;
};
