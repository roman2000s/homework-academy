
	let americanStates = {
    'AL': 'Alabama',
    'AK': 'Alaska',
    'AS': 'American Samoa',
    'AZ': 'Arizona',
    'AR': 'Arkanzas',
    'CA': 'California',
    'CO': 'Colorado',
    'CT': 'Connecticut',
    'DE': 'Delaware'
};

function transfromObject(objectToTransform) {
    let transfromedObject = {};
    for (var key in objectToTransform) {
        transfromedObject[objectToTransform[key]] = key;
    }
    return transfromedObject;
}
console.log(transfromObject(americanStates));
	