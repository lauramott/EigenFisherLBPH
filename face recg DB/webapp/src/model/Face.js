function Face( slots) {
  this.id = slots.id;
  this.name = slots.name;
};

Face.instances = {};
faceTableString = localStorage["faceTable"];
faceTable = JSON.parse( faceTableString);
Face.convertRow2Obj = function (faceRow) {
  var face = new Face( faceRow);
  return face;
};

Face.loadAll = function () {
  var i=0, key="", keys=[], faceTableString="", faceTable={};
  try {
    if (localStorage["faceTable"]) {
      faceTableString = localStorage["faceTable"];
    }
  } catch (e) {
    alert("Error when reading from Local Storage\n" + e);
  }
  if (faceTableString) {
    faceTable = JSON.parse( faceTableString);
    keys = Object.keys( faceTable);
    console.log( keys.length +" faces loaded.");
    for (i=0; i < keys.length; i++) {
      key = keys[i];
      Face.instances[key] = Face.convertRow2Obj( faceTable[key]);
    }
  }
};

Face.saveAll = function () {
  var faceTableString="", error=false,
      nmrOfFaces = Object.keys( Face.instances).length;
  try {
    faceTableString = JSON.stringify( Face.instances);
    localStorage["faceTable"] = faceTableString;
  } catch (e) {
    alert("Error when writing to Local Storage\n" + e);
    error = true;
  }
  if (!error) console.log( nmrOfFaces + " faces saved.");
};

Face.add = function (slots) {
  var face = new Face( slots);
  Face.instances[slots.id] = face;
  console.log("Face " + slots.id + " created!");
};

Face.update = function (slots) {
  var face = Face.instances[slots.id];
  if (face.name !== slots.name) { face.name = slots.name;}
  console.log("Face " + slots.id + " modified!");
};

Face.destroy = function (id) {
  if (Face.instances[id]) {
    console.log("Face " + id + " deleted");
    delete Face.instances[id];
  } else {
    console.log("There is no face with ID " + id + " in the database!");
  }
};

Face.createTestData = function () {
  Face.instances["006251587X"] = new Face({id:"006251587X", name:"Weaving the Web"});
  Face.instances["0465026567"] = new Face({id:"0465026567", name:"Gödel, Escher, Bach"});
  Face.instances["0465030793"] = new Face({id:"0465030793", name:"I Am A Strange Loop"});
  Face.saveAll();
};

Face.clearData = function () {
  if (confirm("Do you really want to delete all face data?")) {
    localStorage["faceTable"] = "{}";
  }
};
