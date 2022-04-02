# Ice modifiers

Requires fix/refactor

<APITable>

|     Modifier      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| :---------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       `as`        | Can be `as"program"` (alias: `as"command"`), and will cause to add script/program to `$PATH` instead of sourcing (see `pick`). Can also be `as"completion"` – use with plugins or snippets in whose only underscore-starting `_*` files you are interested in. The third possible value is `as"null"` – a shorthand for `pick"/dev/null" nocompletions` – i.e.: it disables the default script-file sourcing and also the installation of completions.                                                                                                                                                                                                            |
|   [`id-as`][6]    | Nickname a plugin or snippet, to e.g. create a short handler for long-url snippet.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|     `compile`     | Pattern (+ possible `{…}` expansion, like `{a/*,b*}`) to select additional files to compile, e.g. `compile"(pure\|async).zsh"` for `sindresorhus/pure`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
|    `nocompile`    | Don't try to compile `pick`-pointed files. If passed the exclamation mark (i.e. `nocompile'!'`), then do compile, but after `make'…'` and `atclone'…'` (useful if Makefile installs some scripts, to point `pick'…'` at the location of their installation).                                                                                                                                                                                                                                                                                                                                                                                                      |
|     `service`     | Make following plugin or snippet a _service_, which will be ran in background, and only in single Zshell instance. See [#zservice][7] topic.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|  `reset-prompt`   | Reset the prompt after loading the plugin/snippet (by issuing `zle .reset-prompt`). Note: normally it's sufficient to precede the value of `wait'…'` ice with `!`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
|  [`bindmap`][8]   | To hold `;`-separated strings like `Key(s)A -> Key(s)B`, e.g. `^R -> ^T; ^A -> ^B`. In general, `bindmap'…'`changes bindings (done with the `bindkey` builtin) the plugin does. The example would cause the plugin to map Ctrl-T instead of Ctrl-R, and Ctrl-B instead of Ctrl-A. **Does not work with snippets.**                                                                                                                                                                                                                                                                                                                                                |
| [`trackbinds`][8] | Shadow but only `bindkey` calls even with `zi light …`, i.e. even with investigating disabled (fast loading), to allow `bindmap` to remap the key-binds. The same effect has `zi light -b …`, i.e. additional `-b` option to the `light`-subcommand. **Does not work with snippets.**                                                                                                                                                                                                                                                                                                                                                                             |
| [`wrap-track`][9] | Takes a `;`-separated list of function names that are to be investigated (meaning gathering report and unload data) **once** during execution. It works by wrapping the functions with a investigating-enabling and disabling snippet of code. In summary, `wrap-track` allows to extend the investigating beyond the moment of loading of a plugin. Example use is to `wrap-track` a precmd function of a prompt (like `_p9k_precmd()` of powerlevel10k) or other plugin that _postpones its initialization till the first prompt_ (like e.g.: zsh-autosuggestions). **Does not work with snippets.**                                                            |
|     `aliases`     | Load the plugin with the aliases mechanism enabled. Use with plugins that define **and use** aliases in their scripts.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
|   `light-mode`    | Load the plugin without the investigating, i.e.: as if it would be loaded with the `light` command. Useful for the for-syntax, where there is no `load` nor `light` subcommand                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
|  [`extract`][10]  | Performs archive extraction supporting multiple formats like `zip`, `tar.gz`, etc. and also notably OS X `dmg` images. If it has no value, then it works in the _auto_ mode – it automatically extracts all files of known archive extensions IF they aren't located deeper than in a sub-directory (this is to prevent extraction of some helper archive files, typically located somewhere deeper in the tree). If no such files will be found, then it extracts all found files of known **type** – the type is being read by the `file` Unix command. If not empty, then takes names of the files to extract. Refer to the Wiki page for further information. |
|      `subst`      | Substitute the given string into another string when sourcing the plugin script, e.g.: `zi subst'autoload → autoload -Uz' …`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
|    `autoload`     | Autoload the given functions (from their files). Equvalent to calling `atinit'autoload the-function'`. Supports renaming of the function – pass `'… → new-name'` or `'… -> new-name'`, e.g.: `zi autoload'fun → my-fun; fun2 → my-fun2'`.                                                                                                                                                                                                                                                                                                                                                                                                                         |

</APITable>