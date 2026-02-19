import { execSync } from 'child_process';
import { existsSync, unlinkSync } from 'fs';

const projectRoot = '/vercel/share/v0-project';

// Remove old lock file if exists
const lockPath = projectRoot + '/package-lock.json';
if (existsSync(lockPath)) {
  unlinkSync(lockPath);
  console.log('Removed old package-lock.json');
}

console.log('Current working directory will be:', projectRoot);
console.log('package.json exists:', existsSync(projectRoot + '/package.json'));

// Generate a new lock file
try {
  console.log('Running npm install --package-lock-only...');
  const output = execSync('cd /vercel/share/v0-project && npm install --package-lock-only 2>&1', {
    cwd: projectRoot,
    encoding: 'utf-8',
    env: {
      ...process.env,
      HOME: '/tmp',
      npm_config_cache: '/tmp/.npm',
    },
    timeout: 120000,
  });
  console.log(output);
  console.log('Lock file exists after install:', existsSync(lockPath));
  console.log('Successfully generated package-lock.json');
} catch (err) {
  console.error('Failed:', err.message);
  if (err.stdout) console.log('stdout:', err.stdout);
  if (err.stderr) console.error('stderr:', err.stderr);
}
