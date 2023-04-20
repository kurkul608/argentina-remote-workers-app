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
		"plugin:import/errors",
		"plugin:import/warnings",
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
		"react/self-closing-comp": [
			"error",
			{
				component: true,
				html: true,
			},
		],
		"react/jsx-first-prop-new-line": ["error", "multiline"],
		"import/no-unresolved": [2, { caseSensitive: false }],
		"no-unused-vars": "off",
		"@typescript-eslint/no-unused-vars": ["error"],
	},
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true,
				project: "./tsconfig.json",
			},
			node: {
				paths: ["src"],
			},
		},
	},
};
