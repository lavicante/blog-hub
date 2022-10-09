module.exports = {
  '*.{js,ts,jsx,tsx}': ['npm run lint:fix', 'npm run prettier:code'],
  '*.scss': ['lint:scss:fix', 'npm run prettier:code'],
  '*.json': ['npm run prettier:json'],
  '*.graphql': ['npm run prettier:gql'],
};
