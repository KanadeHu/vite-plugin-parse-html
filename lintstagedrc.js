module.exports = {
  '*.{js,jsx,ts,tsx}': ['eslint --fix', 'prettier --write'],
  '{!(package)*.json': ['prettier --write--parser json'],
  'package.json': ['prettier --write'],
  '*.md': ['prettier --write'],
}
