module.exports = {
	env: {
		browser: true,
		es2021: true,
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:react/recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	overrides: [],
	parser: "@typescript-eslint/parser",
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
	},
	plugins: ["react", "@typescript-eslint"],
	rules: {
		indent: "off",
		"linebreak-style": ["error", "unix"],
		quotes: ["error", "double"],
		semi: ["error", "always"],
		"@typescript-eslint/no-var-requires": 0,
		"no-console": ["error", { allow: ["warn", "error"] }],
	},
};
