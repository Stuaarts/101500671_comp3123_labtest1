const fs = require('fs');
const path = require('path');

const logDir = path.join(__dirname, 'Logs');

async function main() {
  try {
    const exists = fs.existsSync(logDir);

    if (exists) {
      console.log('Logs directory already exists. Skipping file creation.');
      return;
    }

    fs.mkdirSync(logDir);
    console.log('Created directory:', logDir);

    for (let i = 1; i <= 10; i++) {
      const filePath = path.join(logDir, `log${i}.txt`);
      fs.writeFileSync(filePath, `This is log file number ${i}\n`, 'utf-8');
      console.log('Created file:', `log${i}.txt`);
    }
  } catch (err) {
    console.log('Error:', err.message ?? err);
  }
}

main();
