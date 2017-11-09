module.exports = {
  env: {
    jest: true,
  },
  parser: 'babel-eslint',
  extends: ['standard', 'standard-react', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
  },
}
