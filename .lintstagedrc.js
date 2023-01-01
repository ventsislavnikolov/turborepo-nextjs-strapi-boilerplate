module.exports = {
  "apps/**/*.{js,ts,jsx,tsx}": [
      "eslint --fix"
  ],
  "packages/ui/**/*.{js,ts,jsx,tsx}": [
      "eslint --fix"
  ],
  "*.json": [
      "prettier --write"
  ]
}
