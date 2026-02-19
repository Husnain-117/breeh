import { execSync } from 'child_process';

try {
  console.log('Running npm install to regenerate package-lock.json...');
  const output = execSync('npm install', {
    cwd: '/vercel/share/v0-project',
    encoding: 'utf-8',
    stdio: 'pipe',
    timeout: 120000,
  });
  console.log(output);
  console.log('Successfully regenerated package-lock.json');
} catch (error) {
  console.error('Error running npm install:', error.message);
  if (error.stdout) console.log('stdout:', error.stdout);
  if (error.stderr) console.error('stderr:', error.stderr);
  process.exit(1);
}
