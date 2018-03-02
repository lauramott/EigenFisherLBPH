pl.view.saveNewFace = {
  setupUserInterface: function () {
    var saveButton = document.forms['Face'].commit;
    // load all face objects
    Face.loadAll();
    // Set an event handler for the save/submit button
    saveButton.addEventListener("click", pl.view.saveNewFace.handleSaveButtonClickEvent);
    window.addEventListener("beforeunload", function () {
        Face.saveAll();
    });
  },
  handleSaveButtonClickEvent: function () {
    var formEl = document.forms['Face'];
    var slots = { id: formEl.id.value,
     name: formEl.name.value};
    Face.add(slots);
    formEl.reset();
    }
};