function encodeVariableName(variableName) {
    var a = 0;
    for (let i = 0; i < variableName.length; i++) {
        a += variableName.charCodeAt(i)
    }
    return a.toString(16);
}
function encodeChar(char) {
    return `\\x${char.charCodeAt(0).toString(16)}`;
}
function encodeScript(script = '') {
    let result = '';
    for (char of script) {
        result += encodeChar(char);
    }
    return result;
}
function decodeScript(encodedScript = '') {
    return encodedScript;
}