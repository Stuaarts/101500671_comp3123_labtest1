// Lucas Tavares Criscuolo - Student ID: 101500671
const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

async function main() {
  try {
    const exists = fs.existsSync(logDir);
    // In case user tries to delete non-existing directory
    if (!exists) {
      console.log('Logs directory does not exist.');
      return;
    }

    const files = fs.readdirSync(logDir);
    if (files.length === 0) {
      console.log('No files to delete.');
    } else {
      for (const f of files) {
        console.log('Deleting file:', f);
        fs.unlinkSync(path.join(logDir, f));
      }
    }

    fs.rmdirSync(logDir);
    console.log('Removed directory:', logDir);
  } catch (err) {
    console.log('Error:', err.message ?? err);
  }
}

main();
