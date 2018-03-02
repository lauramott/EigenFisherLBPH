pl.view.deleteFace = {
  setupUserInterface: function () {
    var deleteButton = document.forms['Face'].commit;
    var selectEl = document.forms['Face'].selectFace;
    var i=0, key="", keys=[], face=null, optionEl=null;
    // load all face objects
    Face.loadAll();
    keys = Object.keys( Face.instances);
    // populate the selection list with faces
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      face = Face.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = face.name;
      optionEl.value = face.id;
      selectEl.add(optionEl, null);
    }
    deleteButton.addEventListener("click",
        pl.view.deleteFace.handleDeleteButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Face.saveAll();
    });
  },
  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms['Face'].selectFace;
    var id = selectEl.value;
    if (id) {
      Face.destroy( id);
      selectEl.remove( selectEl.selectedIndex);
    }
  }
};