module.exports = {
  "presets": [
    [
      "@babel/preset-env", {
        "targets": {
          "node": "current"
        }
      }
    ]
  ],
  "plugins": [
    "@babel/plugin-proposal-nullish-coalescing-operator",
    "@babel/plugin-proposal-optional-chaining"
  ],
  "env": {
    "debug": {
      "sourceMaps": "inline",
      "retainLines": true
    }
  }
}