// Lucas Tavares Criscuolo - Student ID: 101500671
function parseCliMixed(arg) {
  if (!arg) return null;
  return arg.split(',').map((t) => {
    const s = t.trim();
    if (s === 'true') return true;
    if (s === 'false') return false;
    const n = Number(s);
    return Number.isFinite(n) ? n : s;
  });
}

function lowerCaseWords(arr) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arr)) {
      return reject(new TypeError('Input must be an array.'));
    }
    const strings = arr.filter((x) => typeof x === 'string');
    resolve(strings.map((s) => s.toLowerCase()));
  });
}

// Test Case to ensure the code works as expected
const cliInput = parseCliMixed(process.argv[2]);
const demoInput = cliInput ?? ['LaB',123, 'TeST', 'ColLeGe', 'E56'];

(async () => {
  try {
    console.log('Input:', demoInput);
    const result = await lowerCaseWords(demoInput);
    console.log('Output:', result);
  } catch (err) {
    console.log('Error:', err.message ?? err);
  }
})();

module.exports = { lowerCaseWords };
