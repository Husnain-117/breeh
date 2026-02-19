import { execSync } from 'child_process';
import { existsSync, unlinkSync } from 'fs';
import { resolve } from 'path';

const projectRoot = resolve(import.meta.dirname, '..');

// Remove old lock file if exists
const lockPath = resolve(projectRoot, 'package-lock.json');
if (existsSync(lockPath)) {
  unlinkSync(lockPath);
  console.log('Removed old package-lock.json');
}

// Generate a new lock file
try {
  console.log('Running npm install to generate fresh package-lock.json...');
  const output = execSync('npm install --package-lock-only', {
    cwd: projectRoot,
    encoding: 'utf-8',
    stdio: 'pipe',
    timeout: 120000,
  });
  console.log(output);
  console.log('Successfully generated package-lock.json');
} catch (err) {
  console.error('npm install --package-lock-only failed:', err.message);
  if (err.stdout) console.log('stdout:', err.stdout);
  if (err.stderr) console.log('stderr:', err.stderr);
}
