 pl.view.listFaces = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#faces>tbody");
    var i=0, keys=[], key="", row={};
    // load all face objects
    Face.loadAll();
    keys = Object.keys( Face.instances);
    // for each face, create a table row with a cell for each attribute
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = Face.instances[key].id;
      row.insertCell(-1).textContent = Face.instances[key].name;
    }
  }
};