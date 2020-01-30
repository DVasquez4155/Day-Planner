var values = getValues();
function getValues() {
    var retrievedObject = localStorage.getItem('values');
    if (retrievedObject == null) {
        var emptyValues = new Array(9);
        for (var i = 0; i < emptyValues.length; i++) {
            emptyValues[i] = "";
        }
        return emptyValues;
    }
    return JSON.parse(retrievedObject);
}
function updateValues(values) {
    localStorage.setItem('values', JSON.stringify(values));
}