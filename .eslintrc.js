module.exports = {
  env: {
    jest: true,
  },
  extends: ['standard', 'standard-react', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
