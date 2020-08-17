# Mt VScode settings

## here is my current vscode settings:

```json
{
    "workbench.colorTheme": "CodeSandbox Black",
    "workbench.iconTheme": "material-icon-theme",
    "window.zoomLevel": 0,
    // editor
    "editor.cursorSmoothCaretAnimation": true,
    "editor.definitionLinkOpensInPeek": true,
    "editor.cursorSurroundingLines": 500,
    "editor.suggestSelection": "first",
    "editor.cursorBlinking": "smooth",
    "editor.cursorStyle": "line-thin",
    "editor.codeActionsOnSave": {
        "source.organizeImports": true
    },
    "editor.renderWhitespace": "all",
    "editor.smoothScrolling": true,
    "editor.renameOnType": true,
    "editor.padding.bottom": 5,
    "editor.padding.top": 50,
    "editor.cursorWidth": 10,
    "editor.lineHeight": 30,
    "editor.fontSize": 14,
    // files
    "files.autoSave": "onFocusChange",
    "files.restoreUndoStack": true,
    "files.trimTrailingWhitespace": true,
    // git props
    "gitlens.views.repositories.files.layout": "tree",
    "gitlens.views.repositories.location": "scm",
    "gitlens.views.compare.location": "gitlens",
    "gitlens.views.search.location": "gitlens",
    "diffEditor.ignoreTrimWhitespace": false,
    "diffEditor.renderSideBySide": false,
    "git.enableSmartCommit": true,
    "git.confirmSync": false,
    "git.autofetch": true,
    // terminal
    "terminal.integrated.fontSize": 14,
    // make cmder default terminal
    "terminal.external.windowsExec": "C:\\Cmder\\Cmder.exe",
    "terminal.integrated.shell.windows": "C:\\WINDOWS\\sysnative\\cmd.exe",
    "terminal.integrated.shellArgs.windows": [
      "/k",
      "C:\\Cmder\\vendor\\bin\\vscode_init.cmd"
    ],
    // using fira code
    "editor.fontFamily": "'Fira Code'",
    "editor.fontLigatures": true,
    // "editor.fontWeight": "300", // Light
    "editor.fontWeight": "400", // Regular
    // "editor.fontWeight": "500", // Medium
    // "editor.fontWeight": "600", // Bold
    // tailwind fix error
    "css.validate": false,
    "editor.minimap.size": "fill",
    "editor.minimap.enabled": false,
    "editor.wordWrap": "on",
    // javaScript
    "javascript.suggest.autoImports": true,
    "typescript.suggest.autoImports": true,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "typescript.updateImportsOnFileMove.enabled": "always",
    // add snippets for vue
    "emmet.includeLanguages": {
        "vue-html": "html"
    },
}
```

Feel free to contribute
