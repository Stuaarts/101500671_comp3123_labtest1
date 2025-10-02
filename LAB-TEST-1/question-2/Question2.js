// Lucas Tavares Criscuolo - Student ID: 101500671
function resolvedPromise() {
  return new Promise((resolve) =>
    setTimeout(() => resolve('Resolved after 500ms'), 500)
  );
}

function rejectedPromise() {
  return new Promise((_, reject) =>
    setTimeout(() => reject(new Error('Rejected after 500ms')), 500)
  );
}

// Test Case to ensure the code works as expected
(async () => {
  try {
    const ok = await resolvedPromise();
    console.log('resolvedPromise ->', ok);
  } catch (e) {
    console.log('resolvedPromise error ->', e.message ?? e);
  }

  try {
    const nope = await rejectedPromise();
    console.log('rejectedPromise ->', nope);
  } catch (e) {
    console.log('rejectedPromise error ->', e.message ?? e);
  }
})();

module.exports = { resolvedPromise, rejectedPromise };
