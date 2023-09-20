/** @type {import("eslint").Linter.Config} */
module.exports = {
	extends: [
		"next",
		"next/core-web-vitals",
		"plugin:@typescript-eslint/recommended",
		"plugin:jsx-a11y/recommended",
		"plugin:react/recommended",
		"plugin:react-hooks/recommended"
	],
	parser        : "@typescript-eslint/parser",
	parserOptions : {
		ecmaFeatures: {
			jsx: true
		},
		ecmaVersion : 12,
		project     : "./tsconfig.json",
		sourceType  : "module"
	},
	plugins: [
		"@typescript-eslint",
		"react",
		"react-hooks"
	],
	settings: {
		react: {
			version: "detect"
		}
	},
	root  : true,
	rules : {
		"@typescript-eslint/no-misused-promises": [
			2,
			{
				"checksVoidReturn": {
					"attributes": false
				}
			}
		],
		"@typescript-eslint/consistent-type-imports": [
			"warn",
			{
				"fixStyle" : "inline-type-imports",
				"prefer"   : "type-imports"
			}
		],
		"@typescript-eslint/no-unused-vars": [
			"warn",
			{
				"argsIgnorePattern": "^_"
			}
		],
		"@typescript-eslint/member-delimiter-style": [
			"error",
			{
				"multiline": {
					"delimiter"   : "semi",
					"requireLast" : true
				},
				"singleline": {
					"delimiter"   : "semi",
					"requireLast" : false
				}
			}
		],
		"@typescript-eslint/indent": [
			"error",
			"tab"
		],
		"@typescript-eslint/semi": [
			"error",
			"always"
		],
		"no-param-reassign"                 : "error",
		"@next/next/no-html-link-for-pages" : "off",
		"jsx-a11y/anchor-is-valid"          : [
			"error",
			{
				"components": [
					"Link"
				],
				"specialLink": [
					"hrefLeft",
					"hrefRight"
				],
				"aspects": [
					"invalidHref",
					"preferButton"
				]
			}
		],
		"react/no-unknown-property": [
			2,
			{
				"ignore": [
					"angle",
					"aoMap",
					"args",
					"attach",
					"attachArray",
					"camera",
					"castShadow",
					"clearcoat",
					"clearcoatRoughness",
					"container",
					"decay",
					"depthWrite",
					"displacementMap",
					"displacementScale",
					"dispose",
					"distance",
					"emissive",
					"envMapIntensity",
					"frustumCulled",
					"geometry",
					"global",
					"groundColor",
					"intensity",
					"jsx",
					"linewidth",
					"map",
					"material",
					"metalness",
					"normalMap",
					"normalScale",
					"object",
					"penumbra",
					"position",
					"receiveShadow",
					"ref",
					"reflectivity",
					"rotation",
					"rotation-x",
					"rotation-y",
					"roughness",
					"roughnessMap",
					"scene",
					"shadow-bias",
					"side",
					"textGeometry",
					"transparent"
				]
			}
		],
		"array-bracket-spacing": [
			"error",
			"always"
		],
		"comma-dangle": [
			"error",
			"never"
		],
		"key-spacing": [
			"error",
			{
				"align": {
					"beforeColon" : true,
					"afterColon"  : true,
					"on"          : "colon"
				}
			}
		],
		"linebreak-style": [
			"error",
			"unix"
		],
		"no-multi-spaces": [
			"error"
		],
		"object-curly-newline": [
			"error",
			{
				"ObjectExpression": {
					"multiline"     : true,
					"minProperties" : 1
				},
				"ObjectPattern": {
					"multiline": true
				},
				"ImportDeclaration": {
					"multiline"     : true,
					"minProperties" : 3
				},
				"ExportDeclaration": {
					"multiline"     : true,
					"minProperties" : 3
				}
			}
		],
		"object-curly-spacing": [
			"error",
			"always"
		],
		"object-property-newline" : "error",
		"quotes"                  : [
			"error",
			"double"
		],
		"template-curly-spacing": [
			"error",
			"always"
		],
		"react/jsx-curly-spacing": [
			"error",
			{
				"when"     : "always",
				"children" : {
					"when": "always"
				}
			}
		],
		"react/jsx-first-prop-new-line": [
			"error",
			"multiline"
		],
		"react/jsx-max-props-per-line": [
			"error",
			{
				"maximum": 1
			}
		],
		"react/prop-types"         : 0,
		"react/react-in-jsx-scope" : "off"
	}
};