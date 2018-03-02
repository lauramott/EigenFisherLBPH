pl.view.updateFace = {
  setupUserInterface: function () {
    var formEl = document.forms['Face'],
        saveButton = formEl.commit,
        selectFaceEl = formEl.selectFace;
    var i=0, key="", keys=[], face=null, optionEl=null;
    // load all face objects
    Face.loadAll();
    // populate the selection list with faces
    keys = Object.keys( Face.instances);
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      face = Face.instances[key];
      optionEl = document.createElement("option");
      optionEl.text = face.name;
      optionEl.value = face.id;
      selectFaceEl.add( optionEl, null);
    }
    // when a face is selected, populate the form with the face data
    selectFaceEl.addEventListener("change", function () {
        var face=null, key = selectFaceEl.value;
        if (key) {
          face = Face.instances[key];
          formEl.id.value = face.id;
          formEl.name.value = face.name;
        } else {
          formEl.id.value = "";
          formEl.name.value = "";
        }
    });
    saveButton.addEventListener("click",
        pl.view.updateFace.handleUpdateButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Face.saveAll();
    });
  },
  // save updated data
  handleUpdateButtonClickEvent: function () {
    var formEl = document.forms['Face'];
    var slots = { id: formEl.id.value,
        name: formEl.name.value,
    };
    Face.update( slots);
    formEl.reset();
  }
};