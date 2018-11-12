ESLint-plugin-json
===================

Collection of bare-bones useful JSON eslint rules

# Installation

Insert in you `package.json` file:

```
  "dependencies": {
    "eslint-plugin-json": "git+https://git@github.com/minhduchua/eslint-plugin-json"
  }
```

Use your `.eslintrc.json` to configure rules, for example:

```
	"rules": {
		"json/no-json-stringify": 2,
		"json/try-json-parse": 2
  }
```
