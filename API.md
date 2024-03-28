# replace this
# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RemixAwsCdkTypeScriptProject <a name="RemixAwsCdkTypeScriptProject" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject"></a>

#### Initializers <a name="Initializers" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.Initializer"></a>

```typescript
import { RemixAwsCdkTypeScriptProject } from '@rogerchi/projen-remix-project'

new RemixAwsCdkTypeScriptProject(options: RemixAwsCdkTypeScriptProjectOptions)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.Initializer.parameter.options">options</a></code> | <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions">RemixAwsCdkTypeScriptProjectOptions</a></code> | *No description.* |

---

##### `options`<sup>Required</sup> <a name="options" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.Initializer.parameter.options"></a>

- *Type:* <a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions">RemixAwsCdkTypeScriptProjectOptions</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addExcludeFromCleanup">addExcludeFromCleanup</a></code> | Exclude the matching files from pre-synth cleanup. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addGitIgnore">addGitIgnore</a></code> | Adds a .gitignore pattern. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addPackageIgnore">addPackageIgnore</a></code> | Adds patterns to be ignored by npm. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTask">addTask</a></code> | Adds a new task to this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTip">addTip</a></code> | Prints a "tip" message during synthesis. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.annotateGenerated">annotateGenerated</a></code> | Marks the provided file(s) as being generated. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.postSynthesize">postSynthesize</a></code> | Called after all components are synthesized. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.preSynthesize">preSynthesize</a></code> | Called before all components are synthesized. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.removeTask">removeTask</a></code> | Removes a task from a project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.runTaskCommand">runTaskCommand</a></code> | Returns the shell command to execute in order to run a task. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.synth">synth</a></code> | Synthesize all project files into `outdir`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindFile">tryFindFile</a></code> | Finds a file at the specified relative path within this project and all its subprojects. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindJsonFile">tryFindJsonFile</a></code> | Finds a json file by name. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindObjectFile">tryFindObjectFile</a></code> | Finds an object file (like JsonFile, YamlFile, etc.) by name. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryRemoveFile">tryRemoveFile</a></code> | Finds a file at the specified relative path within this project and removes it. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addBins">addBins</a></code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addBundledDeps">addBundledDeps</a></code> | Defines bundled dependencies. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addCompileCommand">addCompileCommand</a></code> | DEPRECATED. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addDeps">addDeps</a></code> | Defines normal dependencies. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addDevDeps">addDevDeps</a></code> | Defines development/test dependencies. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addFields">addFields</a></code> | Directly set fields in `package.json`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addKeywords">addKeywords</a></code> | Adds keywords to package.json (deduplicated). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addPeerDeps">addPeerDeps</a></code> | Defines peer dependencies. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addScripts">addScripts</a></code> | Replaces the contents of multiple npm package.json scripts. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTestCommand">addTestCommand</a></code> | DEPRECATED. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.hasScript">hasScript</a></code> | Indicates if a script by the name name is defined. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.removeScript">removeScript</a></code> | Removes the npm script (always successful). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.renderWorkflowSetup">renderWorkflowSetup</a></code> | Returns the set of workflow steps which should be executed to bootstrap a workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.setScript">setScript</a></code> | Replaces the contents of an npm package.json script. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addCdkDependency">addCdkDependency</a></code> | Adds an AWS CDK module dependencies. |

---

##### `toString` <a name="toString" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addExcludeFromCleanup` <a name="addExcludeFromCleanup" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addExcludeFromCleanup"></a>

```typescript
public addExcludeFromCleanup(globs: string): void
```

Exclude the matching files from pre-synth cleanup.

Can be used when, for example, some
source files include the projen marker and we don't want them to be erased during synth.

###### `globs`<sup>Required</sup> <a name="globs" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addExcludeFromCleanup.parameter.globs"></a>

- *Type:* string

The glob patterns to match.

---

##### `addGitIgnore` <a name="addGitIgnore" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addGitIgnore"></a>

```typescript
public addGitIgnore(pattern: string): void
```

Adds a .gitignore pattern.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addGitIgnore.parameter.pattern"></a>

- *Type:* string

The glob pattern to ignore.

---

##### `addPackageIgnore` <a name="addPackageIgnore" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addPackageIgnore"></a>

```typescript
public addPackageIgnore(pattern: string): void
```

Adds patterns to be ignored by npm.

###### `pattern`<sup>Required</sup> <a name="pattern" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addPackageIgnore.parameter.pattern"></a>

- *Type:* string

The pattern to ignore.

---

##### `addTask` <a name="addTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTask"></a>

```typescript
public addTask(name: string, props?: TaskOptions): Task
```

Adds a new task to this project.

This will fail if the project already has
a task with this name.

###### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTask.parameter.name"></a>

- *Type:* string

The task name to add.

---

###### `props`<sup>Optional</sup> <a name="props" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTask.parameter.props"></a>

- *Type:* projen.TaskOptions

Task properties.

---

##### ~~`addTip`~~ <a name="addTip" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTip"></a>

```typescript
public addTip(message: string): void
```

Prints a "tip" message during synthesis.

###### `message`<sup>Required</sup> <a name="message" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTip.parameter.message"></a>

- *Type:* string

The message.

---

##### `annotateGenerated` <a name="annotateGenerated" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.annotateGenerated"></a>

```typescript
public annotateGenerated(glob: string): void
```

Marks the provided file(s) as being generated.

This is achieved using the
github-linguist attributes. Generated files do not count against the
repository statistics and language breakdown.

> [https://github.com/github/linguist/blob/master/docs/overrides.md](https://github.com/github/linguist/blob/master/docs/overrides.md)

###### `glob`<sup>Required</sup> <a name="glob" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.annotateGenerated.parameter.glob"></a>

- *Type:* string

the glob pattern to match (could be a file path).

---

##### `postSynthesize` <a name="postSynthesize" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.postSynthesize"></a>

```typescript
public postSynthesize(): void
```

Called after all components are synthesized.

Order is *not* guaranteed.

##### `preSynthesize` <a name="preSynthesize" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.preSynthesize"></a>

```typescript
public preSynthesize(): void
```

Called before all components are synthesized.

##### `removeTask` <a name="removeTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.removeTask"></a>

```typescript
public removeTask(name: string): Task
```

Removes a task from a project.

###### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.removeTask.parameter.name"></a>

- *Type:* string

The name of the task to remove.

---

##### `runTaskCommand` <a name="runTaskCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.runTaskCommand"></a>

```typescript
public runTaskCommand(task: Task): string
```

Returns the shell command to execute in order to run a task.

This will
typically be `npx projen TASK`.

###### `task`<sup>Required</sup> <a name="task" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.runTaskCommand.parameter.task"></a>

- *Type:* projen.Task

The task for which the command is required.

---

##### `synth` <a name="synth" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.synth"></a>

```typescript
public synth(): void
```

Synthesize all project files into `outdir`.

1. Call "this.preSynthesize()"
2. Delete all generated files
3. Synthesize all subprojects
4. Synthesize all components of this project
5. Call "postSynthesize()" for all components of this project
6. Call "this.postSynthesize()"

##### `tryFindFile` <a name="tryFindFile" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindFile"></a>

```typescript
public tryFindFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and all its subprojects.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be resolved
from the root of _this_ project.

---

##### ~~`tryFindJsonFile`~~ <a name="tryFindJsonFile" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindJsonFile"></a>

```typescript
public tryFindJsonFile(filePath: string): JsonFile
```

Finds a json file by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindJsonFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryFindObjectFile` <a name="tryFindObjectFile" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindObjectFile"></a>

```typescript
public tryFindObjectFile(filePath: string): ObjectFile
```

Finds an object file (like JsonFile, YamlFile, etc.) by name.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryFindObjectFile.parameter.filePath"></a>

- *Type:* string

The file path.

---

##### `tryRemoveFile` <a name="tryRemoveFile" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryRemoveFile"></a>

```typescript
public tryRemoveFile(filePath: string): FileBase
```

Finds a file at the specified relative path within this project and removes it.

###### `filePath`<sup>Required</sup> <a name="filePath" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.tryRemoveFile.parameter.filePath"></a>

- *Type:* string

The file path.

If this path is relative, it will be
resolved from the root of _this_ project.

---

##### `addBins` <a name="addBins" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addBins"></a>

```typescript
public addBins(bins: {[ key: string ]: string}): void
```

###### `bins`<sup>Required</sup> <a name="bins" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addBins.parameter.bins"></a>

- *Type:* {[ key: string ]: string}

---

##### `addBundledDeps` <a name="addBundledDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addBundledDeps"></a>

```typescript
public addBundledDeps(deps: string): void
```

Defines bundled dependencies.

Bundled dependencies will be added as normal dependencies as well as to the
`bundledDependencies` section of your `package.json`.

###### `deps`<sup>Required</sup> <a name="deps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addBundledDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### ~~`addCompileCommand`~~ <a name="addCompileCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addCompileCommand"></a>

```typescript
public addCompileCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addCompileCommand.parameter.commands"></a>

- *Type:* string

---

##### `addDeps` <a name="addDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addDeps"></a>

```typescript
public addDeps(deps: string): void
```

Defines normal dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addDevDeps` <a name="addDevDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addDevDeps"></a>

```typescript
public addDevDeps(deps: string): void
```

Defines development/test dependencies.

###### `deps`<sup>Required</sup> <a name="deps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addDevDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addFields` <a name="addFields" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addFields"></a>

```typescript
public addFields(fields: {[ key: string ]: any}): void
```

Directly set fields in `package.json`.

###### `fields`<sup>Required</sup> <a name="fields" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addFields.parameter.fields"></a>

- *Type:* {[ key: string ]: any}

The fields to set.

---

##### `addKeywords` <a name="addKeywords" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addKeywords"></a>

```typescript
public addKeywords(keywords: string): void
```

Adds keywords to package.json (deduplicated).

###### `keywords`<sup>Required</sup> <a name="keywords" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addKeywords.parameter.keywords"></a>

- *Type:* string

The keywords to add.

---

##### `addPeerDeps` <a name="addPeerDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addPeerDeps"></a>

```typescript
public addPeerDeps(deps: string): void
```

Defines peer dependencies.

When adding peer dependencies, a devDependency will also be added on the
pinned version of the declared peer. This will ensure that you are testing
your code against the minimum version required from your consumers.

###### `deps`<sup>Required</sup> <a name="deps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addPeerDeps.parameter.deps"></a>

- *Type:* string

Names modules to install.

By default, the the dependency will
be installed in the next `npx projen` run and the version will be recorded
in your `package.json` file. You can upgrade manually or using `yarn
add/upgrade`. If you wish to specify a version range use this syntax:
`module@^7`.

---

##### `addScripts` <a name="addScripts" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addScripts"></a>

```typescript
public addScripts(scripts: {[ key: string ]: string}): void
```

Replaces the contents of multiple npm package.json scripts.

###### `scripts`<sup>Required</sup> <a name="scripts" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addScripts.parameter.scripts"></a>

- *Type:* {[ key: string ]: string}

The scripts to set.

---

##### ~~`addTestCommand`~~ <a name="addTestCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTestCommand"></a>

```typescript
public addTestCommand(commands: string): void
```

DEPRECATED.

###### `commands`<sup>Required</sup> <a name="commands" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addTestCommand.parameter.commands"></a>

- *Type:* string

---

##### ~~`hasScript`~~ <a name="hasScript" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.hasScript"></a>

```typescript
public hasScript(name: string): boolean
```

Indicates if a script by the name name is defined.

###### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.hasScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `removeScript` <a name="removeScript" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.removeScript"></a>

```typescript
public removeScript(name: string): void
```

Removes the npm script (always successful).

###### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.removeScript.parameter.name"></a>

- *Type:* string

The name of the script.

---

##### `renderWorkflowSetup` <a name="renderWorkflowSetup" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.renderWorkflowSetup"></a>

```typescript
public renderWorkflowSetup(options?: RenderWorkflowSetupOptions): JobStep[]
```

Returns the set of workflow steps which should be executed to bootstrap a workflow.

###### `options`<sup>Optional</sup> <a name="options" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.renderWorkflowSetup.parameter.options"></a>

- *Type:* projen.javascript.RenderWorkflowSetupOptions

Options.

---

##### `setScript` <a name="setScript" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.setScript"></a>

```typescript
public setScript(name: string, command: string): void
```

Replaces the contents of an npm package.json script.

###### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.setScript.parameter.name"></a>

- *Type:* string

The script name.

---

###### `command`<sup>Required</sup> <a name="command" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.setScript.parameter.command"></a>

- *Type:* string

The command to execute.

---

##### `addCdkDependency` <a name="addCdkDependency" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addCdkDependency"></a>

```typescript
public addCdkDependency(modules: string): void
```

Adds an AWS CDK module dependencies.

###### `modules`<sup>Required</sup> <a name="modules" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.addCdkDependency.parameter.modules"></a>

- *Type:* string

The list of modules to depend on.

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.isProject">isProject</a></code> | Test whether the given construct is a project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.of">of</a></code> | Find the closest ancestor project for given construct. |

---

##### `isConstruct` <a name="isConstruct" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.isConstruct"></a>

```typescript
import { RemixAwsCdkTypeScriptProject } from '@rogerchi/projen-remix-project'

RemixAwsCdkTypeScriptProject.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isProject` <a name="isProject" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.isProject"></a>

```typescript
import { RemixAwsCdkTypeScriptProject } from '@rogerchi/projen-remix-project'

RemixAwsCdkTypeScriptProject.isProject(x: any)
```

Test whether the given construct is a project.

###### `x`<sup>Required</sup> <a name="x" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.isProject.parameter.x"></a>

- *Type:* any

---

##### `of` <a name="of" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.of"></a>

```typescript
import { RemixAwsCdkTypeScriptProject } from '@rogerchi/projen-remix-project'

RemixAwsCdkTypeScriptProject.of(construct: IConstruct)
```

Find the closest ancestor project for given construct.

When given a project, this it the project itself.

###### `construct`<sup>Required</sup> <a name="construct" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.of.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.buildTask">buildTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.compileTask">compileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.components">components</a></code> | <code>projen.Component[]</code> | Returns all the components within this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.deps">deps</a></code> | <code>projen.Dependencies</code> | Project dependencies. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.ejected">ejected</a></code> | <code>boolean</code> | Whether or not the project is being ejected. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.files">files</a></code> | <code>projen.FileBase[]</code> | All files in this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.gitattributes">gitattributes</a></code> | <code>projen.GitAttributesFile</code> | The .gitattributes file for this repository. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.gitignore">gitignore</a></code> | <code>projen.IgnoreFile</code> | .gitignore. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.logger">logger</a></code> | <code>projen.Logger</code> | Logging utilities. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.name">name</a></code> | <code>string</code> | Project name. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.outdir">outdir</a></code> | <code>string</code> | Absolute output directory of this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.packageTask">packageTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.postCompileTask">postCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.preCompileTask">preCompileTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.projectBuild">projectBuild</a></code> | <code>projen.ProjectBuild</code> | Manages the build process of the project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.projenCommand">projenCommand</a></code> | <code>string</code> | The command to use in order to run the projen CLI. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.root">root</a></code> | <code>projen.Project</code> | The root project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.subprojects">subprojects</a></code> | <code>projen.Project[]</code> | Returns all the subprojects within this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tasks">tasks</a></code> | <code>projen.Tasks</code> | Project tasks. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.testTask">testTask</a></code> | <code>projen.Task</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.defaultTask">defaultTask</a></code> | <code>projen.Task</code> | This is the "default" task, the one that executes "projen". |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.initProject">initProject</a></code> | <code>projen.InitProject</code> | The options used when this project is bootstrapped via `projen new`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.parent">parent</a></code> | <code>projen.Project</code> | A parent project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.autoApprove">autoApprove</a></code> | <code>projen.github.AutoApprove</code> | Auto approve set up for this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.devContainer">devContainer</a></code> | <code>projen.vscode.DevContainer</code> | Access for .devcontainer.json (used for GitHub Codespaces). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.github">github</a></code> | <code>projen.github.GitHub</code> | Access all github components. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.gitpod">gitpod</a></code> | <code>projen.Gitpod</code> | Access for Gitpod. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.vscode">vscode</a></code> | <code>projen.vscode.VsCode</code> | Access all VSCode components. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | The build output directory. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.artifactsJavascriptDirectory">artifactsJavascriptDirectory</a></code> | <code>string</code> | The location of the npm tarball after build (`${artifactsDirectory}/js`). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.bundler">bundler</a></code> | <code>projen.javascript.Bundler</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.entrypoint">entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.manifest">manifest</a></code> | <code>any</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.npmrc">npmrc</a></code> | <code>projen.javascript.NpmConfig</code> | The .npmrc file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.package">package</a></code> | <code>projen.javascript.NodePackage</code> | API for managing the node package. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The package manager to use. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.runScriptCommand">runScriptCommand</a></code> | <code>string</code> | The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.autoMerge">autoMerge</a></code> | <code>projen.github.AutoMerge</code> | Component that sets up mergify for merging approved pull requests. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.buildWorkflow">buildWorkflow</a></code> | <code>projen.build.BuildWorkflow</code> | The PR build GitHub workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.buildWorkflowJobId">buildWorkflowJobId</a></code> | <code>string</code> | The job ID of the build workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.jest">jest</a></code> | <code>projen.javascript.Jest</code> | The Jest configuration (if enabled). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Maximum node version required by this package. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum node.js version required by this package. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.npmignore">npmignore</a></code> | <code>projen.IgnoreFile</code> | The .npmignore file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.prettier">prettier</a></code> | <code>projen.javascript.Prettier</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.publisher">publisher</a></code> | <code>projen.release.Publisher</code> | Package publisher. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.release">release</a></code> | <code>projen.release.Release</code> | Release management. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.upgradeWorkflow">upgradeWorkflow</a></code> | <code>projen.javascript.UpgradeDependencies</code> | The upgrade workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.libdir">libdir</a></code> | <code>string</code> | The directory in which compiled .js files reside. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.srcdir">srcdir</a></code> | <code>string</code> | The directory in which the .ts sources reside. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.testdir">testdir</a></code> | <code>string</code> | The directory in which tests reside. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfig</code> | A typescript configuration file which covers all files (sources, tests, projen). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.watchTask">watchTask</a></code> | <code>projen.Task</code> | The "watch" task. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.docgen">docgen</a></code> | <code>boolean</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.eslint">eslint</a></code> | <code>projen.javascript.Eslint</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tsconfigEslint">tsconfigEslint</a></code> | <code>projen.javascript.TypescriptConfig</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app entrypoint. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkConfig">cdkConfig</a></code> | <code>projen.awscdk.CdkConfig</code> | cdk.json configuration. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkDeps">cdkDeps</a></code> | <code>projen.awscdk.AwsCdkDeps</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkTasks">cdkTasks</a></code> | <code>projen.awscdk.CdkTasks</code> | Common CDK tasks. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | The CDK version this app is using. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.remixDir">remixDir</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tailwind">tailwind</a></code> | <code>boolean</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `buildTask`<sup>Required</sup> <a name="buildTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.buildTask"></a>

```typescript
public readonly buildTask: Task;
```

- *Type:* projen.Task

---

##### `commitGenerated`<sup>Required</sup> <a name="commitGenerated" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean

Whether to commit the managed files by default.

---

##### `compileTask`<sup>Required</sup> <a name="compileTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.compileTask"></a>

```typescript
public readonly compileTask: Task;
```

- *Type:* projen.Task

---

##### `components`<sup>Required</sup> <a name="components" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.components"></a>

```typescript
public readonly components: Component[];
```

- *Type:* projen.Component[]

Returns all the components within this project.

---

##### `deps`<sup>Required</sup> <a name="deps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.deps"></a>

```typescript
public readonly deps: Dependencies;
```

- *Type:* projen.Dependencies

Project dependencies.

---

##### `ejected`<sup>Required</sup> <a name="ejected" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.ejected"></a>

```typescript
public readonly ejected: boolean;
```

- *Type:* boolean

Whether or not the project is being ejected.

---

##### `files`<sup>Required</sup> <a name="files" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.files"></a>

```typescript
public readonly files: FileBase[];
```

- *Type:* projen.FileBase[]

All files in this project.

---

##### `gitattributes`<sup>Required</sup> <a name="gitattributes" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.gitattributes"></a>

```typescript
public readonly gitattributes: GitAttributesFile;
```

- *Type:* projen.GitAttributesFile

The .gitattributes file for this repository.

---

##### `gitignore`<sup>Required</sup> <a name="gitignore" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.gitignore"></a>

```typescript
public readonly gitignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

.gitignore.

---

##### `logger`<sup>Required</sup> <a name="logger" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.logger"></a>

```typescript
public readonly logger: Logger;
```

- *Type:* projen.Logger

Logging utilities.

---

##### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Project name.

---

##### `outdir`<sup>Required</sup> <a name="outdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string

Absolute output directory of this project.

---

##### `packageTask`<sup>Required</sup> <a name="packageTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.packageTask"></a>

```typescript
public readonly packageTask: Task;
```

- *Type:* projen.Task

---

##### `postCompileTask`<sup>Required</sup> <a name="postCompileTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.postCompileTask"></a>

```typescript
public readonly postCompileTask: Task;
```

- *Type:* projen.Task

---

##### `preCompileTask`<sup>Required</sup> <a name="preCompileTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.preCompileTask"></a>

```typescript
public readonly preCompileTask: Task;
```

- *Type:* projen.Task

---

##### `projectBuild`<sup>Required</sup> <a name="projectBuild" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.projectBuild"></a>

```typescript
public readonly projectBuild: ProjectBuild;
```

- *Type:* projen.ProjectBuild

Manages the build process of the project.

---

##### `projenCommand`<sup>Required</sup> <a name="projenCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string

The command to use in order to run the projen CLI.

---

##### `root`<sup>Required</sup> <a name="root" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.root"></a>

```typescript
public readonly root: Project;
```

- *Type:* projen.Project

The root project.

---

##### `subprojects`<sup>Required</sup> <a name="subprojects" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.subprojects"></a>

```typescript
public readonly subprojects: Project[];
```

- *Type:* projen.Project[]

Returns all the subprojects within this project.

---

##### `tasks`<sup>Required</sup> <a name="tasks" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tasks"></a>

```typescript
public readonly tasks: Tasks;
```

- *Type:* projen.Tasks

Project tasks.

---

##### `testTask`<sup>Required</sup> <a name="testTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.testTask"></a>

```typescript
public readonly testTask: Task;
```

- *Type:* projen.Task

---

##### `defaultTask`<sup>Optional</sup> <a name="defaultTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.defaultTask"></a>

```typescript
public readonly defaultTask: Task;
```

- *Type:* projen.Task

This is the "default" task, the one that executes "projen".

Undefined if
the project is being ejected.

---

##### `initProject`<sup>Optional</sup> <a name="initProject" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.initProject"></a>

```typescript
public readonly initProject: InitProject;
```

- *Type:* projen.InitProject

The options used when this project is bootstrapped via `projen new`.

It
includes the original set of options passed to the CLI and also the JSII
FQN of the project type.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

A parent project.

If undefined, this is the root project.

---

##### `projectType`<sup>Required</sup> <a name="projectType" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.projectType"></a>

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType

---

##### `autoApprove`<sup>Optional</sup> <a name="autoApprove" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.autoApprove"></a>

```typescript
public readonly autoApprove: AutoApprove;
```

- *Type:* projen.github.AutoApprove

Auto approve set up for this project.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.devContainer"></a>

```typescript
public readonly devContainer: DevContainer;
```

- *Type:* projen.vscode.DevContainer

Access for .devcontainer.json (used for GitHub Codespaces).

This will be `undefined` if devContainer boolean is false

---

##### `github`<sup>Optional</sup> <a name="github" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.github"></a>

```typescript
public readonly github: GitHub;
```

- *Type:* projen.github.GitHub

Access all github components.

This will be `undefined` for subprojects.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.gitpod"></a>

```typescript
public readonly gitpod: Gitpod;
```

- *Type:* projen.Gitpod

Access for Gitpod.

This will be `undefined` if gitpod boolean is false

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.vscode"></a>

```typescript
public readonly vscode: VsCode;
```

- *Type:* projen.vscode.VsCode

Access all VSCode components.

This will be `undefined` for subprojects.

---

##### ~~`allowLibraryDependencies`~~<sup>Required</sup> <a name="allowLibraryDependencies" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.allowLibraryDependencies"></a>

- *Deprecated:* use `package.allowLibraryDependencies`

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean

---

##### `artifactsDirectory`<sup>Required</sup> <a name="artifactsDirectory" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string

The build output directory.

An npm tarball will be created under the `js`
subdirectory. For example, if this is set to `dist` (the default), the npm
tarball will be placed under `dist/js/boom-boom-1.2.3.tg`.

---

##### `artifactsJavascriptDirectory`<sup>Required</sup> <a name="artifactsJavascriptDirectory" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.artifactsJavascriptDirectory"></a>

```typescript
public readonly artifactsJavascriptDirectory: string;
```

- *Type:* string

The location of the npm tarball after build (`${artifactsDirectory}/js`).

---

##### `bundler`<sup>Required</sup> <a name="bundler" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.bundler"></a>

```typescript
public readonly bundler: Bundler;
```

- *Type:* projen.javascript.Bundler

---

##### ~~`entrypoint`~~<sup>Required</sup> <a name="entrypoint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.entrypoint"></a>

- *Deprecated:* use `package.entrypoint`

```typescript
public readonly entrypoint: string;
```

- *Type:* string

---

##### ~~`manifest`~~<sup>Required</sup> <a name="manifest" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.manifest"></a>

- *Deprecated:* use `package.addField(x, y)`

```typescript
public readonly manifest: any;
```

- *Type:* any

---

##### `npmrc`<sup>Required</sup> <a name="npmrc" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.npmrc"></a>

```typescript
public readonly npmrc: NpmConfig;
```

- *Type:* projen.javascript.NpmConfig

The .npmrc file.

---

##### `package`<sup>Required</sup> <a name="package" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.package"></a>

```typescript
public readonly package: NodePackage;
```

- *Type:* projen.javascript.NodePackage

API for managing the node package.

---

##### ~~`packageManager`~~<sup>Required</sup> <a name="packageManager" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.packageManager"></a>

- *Deprecated:* use `package.packageManager`

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager

The package manager to use.

---

##### `runScriptCommand`<sup>Required</sup> <a name="runScriptCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.runScriptCommand"></a>

```typescript
public readonly runScriptCommand: string;
```

- *Type:* string

The command to use to run scripts (e.g. `yarn run` or `npm run` depends on the package manager).

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.autoMerge"></a>

```typescript
public readonly autoMerge: AutoMerge;
```

- *Type:* projen.github.AutoMerge

Component that sets up mergify for merging approved pull requests.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: BuildWorkflow;
```

- *Type:* projen.build.BuildWorkflow

The PR build GitHub workflow.

`undefined` if `buildWorkflow` is disabled.

---

##### `buildWorkflowJobId`<sup>Optional</sup> <a name="buildWorkflowJobId" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.buildWorkflowJobId"></a>

```typescript
public readonly buildWorkflowJobId: string;
```

- *Type:* string

The job ID of the build workflow.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.jest"></a>

```typescript
public readonly jest: Jest;
```

- *Type:* projen.javascript.Jest

The Jest configuration (if enabled).

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string

Maximum node version required by this package.

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string

Minimum node.js version required by this package.

---

##### `npmignore`<sup>Optional</sup> <a name="npmignore" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.npmignore"></a>

```typescript
public readonly npmignore: IgnoreFile;
```

- *Type:* projen.IgnoreFile

The .npmignore file.

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.prettier"></a>

```typescript
public readonly prettier: Prettier;
```

- *Type:* projen.javascript.Prettier

---

##### ~~`publisher`~~<sup>Optional</sup> <a name="publisher" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.publisher"></a>

- *Deprecated:* use `release.publisher`.

```typescript
public readonly publisher: Publisher;
```

- *Type:* projen.release.Publisher

Package publisher.

This will be `undefined` if the project does not have a
release workflow.

---

##### `release`<sup>Optional</sup> <a name="release" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.release"></a>

```typescript
public readonly release: Release;
```

- *Type:* projen.release.Release

Release management.

---

##### `upgradeWorkflow`<sup>Optional</sup> <a name="upgradeWorkflow" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.upgradeWorkflow"></a>

```typescript
public readonly upgradeWorkflow: UpgradeDependencies;
```

- *Type:* projen.javascript.UpgradeDependencies

The upgrade workflow.

---

##### `docsDirectory`<sup>Required</sup> <a name="docsDirectory" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string

---

##### `libdir`<sup>Required</sup> <a name="libdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string

The directory in which compiled .js files reside.

---

##### `srcdir`<sup>Required</sup> <a name="srcdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string

The directory in which the .ts sources reside.

---

##### `testdir`<sup>Required</sup> <a name="testdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string

The directory in which tests reside.

---

##### `tsconfigDev`<sup>Required</sup> <a name="tsconfigDev" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

A typescript configuration file which covers all files (sources, tests, projen).

---

##### `watchTask`<sup>Required</sup> <a name="watchTask" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.watchTask"></a>

```typescript
public readonly watchTask: Task;
```

- *Type:* projen.Task

The "watch" task.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.eslint"></a>

```typescript
public readonly eslint: Eslint;
```

- *Type:* projen.javascript.Eslint

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `tsconfigEslint`<sup>Optional</sup> <a name="tsconfigEslint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tsconfigEslint"></a>

```typescript
public readonly tsconfigEslint: TypescriptConfig;
```

- *Type:* projen.javascript.TypescriptConfig

---

##### `appEntrypoint`<sup>Required</sup> <a name="appEntrypoint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string

The CDK app entrypoint.

---

##### `cdkConfig`<sup>Required</sup> <a name="cdkConfig" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkConfig"></a>

```typescript
public readonly cdkConfig: CdkConfig;
```

- *Type:* projen.awscdk.CdkConfig

cdk.json configuration.

---

##### `cdkDeps`<sup>Required</sup> <a name="cdkDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkDeps"></a>

```typescript
public readonly cdkDeps: AwsCdkDeps;
```

- *Type:* projen.awscdk.AwsCdkDeps

---

##### `cdkTasks`<sup>Required</sup> <a name="cdkTasks" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkTasks"></a>

```typescript
public readonly cdkTasks: CdkTasks;
```

- *Type:* projen.awscdk.CdkTasks

Common CDK tasks.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string

The CDK version this app is using.

---

##### `remixDir`<sup>Required</sup> <a name="remixDir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.remixDir"></a>

```typescript
public readonly remixDir: string;
```

- *Type:* string

---

##### `tailwind`<sup>Optional</sup> <a name="tailwind" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.tailwind"></a>

```typescript
public readonly tailwind: boolean;
```

- *Type:* boolean

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.DEFAULT_TASK">DEFAULT_TASK</a></code> | <code>string</code> | The name of the default task (the task executed when `projen` is run without arguments). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN">DEFAULT_TS_JEST_TRANFORM_PATTERN</a></code> | <code>string</code> | *No description.* |

---

##### `DEFAULT_TASK`<sup>Required</sup> <a name="DEFAULT_TASK" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.DEFAULT_TASK"></a>

```typescript
public readonly DEFAULT_TASK: string;
```

- *Type:* string

The name of the default task (the task executed when `projen` is run without arguments).

Normally
this task should synthesize the project files.

---

##### `DEFAULT_TS_JEST_TRANFORM_PATTERN`<sup>Required</sup> <a name="DEFAULT_TS_JEST_TRANFORM_PATTERN" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProject.property.DEFAULT_TS_JEST_TRANFORM_PATTERN"></a>

```typescript
public readonly DEFAULT_TS_JEST_TRANFORM_PATTERN: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### RemixAwsCdkTypeScriptProjectOptions <a name="RemixAwsCdkTypeScriptProjectOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions"></a>

#### Initializer <a name="Initializer" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.Initializer"></a>

```typescript
import { RemixAwsCdkTypeScriptProjectOptions } from '@rogerchi/projen-remix-project'

const remixAwsCdkTypeScriptProjectOptions: RemixAwsCdkTypeScriptProjectOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.name">name</a></code> | <code>string</code> | This is the name of your project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.commitGenerated">commitGenerated</a></code> | <code>boolean</code> | Whether to commit the managed files by default. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitIgnoreOptions">gitIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .gitignore file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitOptions">gitOptions</a></code> | <code>projen.GitOptions</code> | Configuration options for git. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.logging">logging</a></code> | <code>projen.LoggerOptions</code> | Configure logging options such as verbosity. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.outdir">outdir</a></code> | <code>string</code> | The root directory of the project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.parent">parent</a></code> | <code>projen.Project</code> | The parent project, if this project is part of a bigger project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenCommand">projenCommand</a></code> | <code>string</code> | The shell command to use in order to run the projen CLI. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJson">projenrcJson</a></code> | <code>boolean</code> | Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJsonOptions">projenrcJsonOptions</a></code> | <code>projen.ProjenrcJsonOptions</code> | Options for .projenrc.json. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.renovatebot">renovatebot</a></code> | <code>boolean</code> | Use renovatebot to handle dependency upgrades. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.renovatebotOptions">renovatebotOptions</a></code> | <code>projen.RenovatebotOptions</code> | Options for renovatebot. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoApproveOptions">autoApproveOptions</a></code> | <code>projen.github.AutoApproveOptions</code> | Enable and configure the 'auto approve' workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoMerge">autoMerge</a></code> | <code>boolean</code> | Enable automatic merging on GitHub. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoMergeOptions">autoMergeOptions</a></code> | <code>projen.github.AutoMergeOptions</code> | Configure options for automatic merging on GitHub. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.clobber">clobber</a></code> | <code>boolean</code> | Add a `clobber` task which resets the repo to origin. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.devContainer">devContainer</a></code> | <code>boolean</code> | Add a VSCode development environment (used for GitHub Codespaces). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.github">github</a></code> | <code>boolean</code> | Enable GitHub integration. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.githubOptions">githubOptions</a></code> | <code>projen.github.GitHubOptions</code> | Options for GitHub integration. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitpod">gitpod</a></code> | <code>boolean</code> | Add a Gitpod development environment. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.mergify">mergify</a></code> | <code>boolean</code> | Whether mergify should be enabled on this repository or not. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.mergifyOptions">mergifyOptions</a></code> | <code>projen.github.MergifyOptions</code> | Options for mergify. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projectType">projectType</a></code> | <code>projen.ProjectType</code> | Which type of project this is (library/app). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenCredentials">projenCredentials</a></code> | <code>projen.github.GithubCredentials</code> | Choose a method of providing GitHub API access for projen workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenTokenSecret">projenTokenSecret</a></code> | <code>string</code> | The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.readme">readme</a></code> | <code>projen.SampleReadmeProps</code> | The README setup. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.stale">stale</a></code> | <code>boolean</code> | Auto-close of stale issues and pull request. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.staleOptions">staleOptions</a></code> | <code>projen.github.StaleOptions</code> | Auto-close stale issues and pull requests. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.vscode">vscode</a></code> | <code>boolean</code> | Enable VSCode integration. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.allowLibraryDependencies">allowLibraryDependencies</a></code> | <code>boolean</code> | Allow the project to include `peerDependencies` and `bundledDependencies`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorEmail">authorEmail</a></code> | <code>string</code> | Author's e-mail. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorName">authorName</a></code> | <code>string</code> | Author's name. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorOrganization">authorOrganization</a></code> | <code>boolean</code> | Is the author an organization. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorUrl">authorUrl</a></code> | <code>string</code> | Author's URL / Website. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoDetectBin">autoDetectBin</a></code> | <code>boolean</code> | Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bin">bin</a></code> | <code>{[ key: string ]: string}</code> | Binary programs vended with your module. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bugsEmail">bugsEmail</a></code> | <code>string</code> | The email address to which issues should be reported. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bugsUrl">bugsUrl</a></code> | <code>string</code> | The url to your project's issue tracker. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bundledDeps">bundledDeps</a></code> | <code>string[]</code> | List of dependencies to bundle into this module. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.codeArtifactOptions">codeArtifactOptions</a></code> | <code>projen.javascript.CodeArtifactOptions</code> | Options for npm packages using AWS CodeArtifact. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.deps">deps</a></code> | <code>string[]</code> | Runtime dependencies of this module. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.description">description</a></code> | <code>string</code> | The description is just a string that helps people understand the purpose of the package. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.devDeps">devDeps</a></code> | <code>string[]</code> | Build dependencies for this module. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.entrypoint">entrypoint</a></code> | <code>string</code> | Module entrypoint (`main` in `package.json`). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.homepage">homepage</a></code> | <code>string</code> | Package's Homepage / Website. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.keywords">keywords</a></code> | <code>string[]</code> | Keywords to include in `package.json`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.license">license</a></code> | <code>string</code> | License's SPDX identifier. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.licensed">licensed</a></code> | <code>boolean</code> | Indicates if a license should be added. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.maxNodeVersion">maxNodeVersion</a></code> | <code>string</code> | Minimum node.js version to require via `engines` (inclusive). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.minNodeVersion">minNodeVersion</a></code> | <code>string</code> | Minimum Node.js version to require via package.json `engines` (inclusive). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmAccess">npmAccess</a></code> | <code>projen.javascript.NpmAccess</code> | Access level of the npm package. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmProvenance">npmProvenance</a></code> | <code>boolean</code> | Should provenance statements be generated when the package is published. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmRegistry">npmRegistry</a></code> | <code>string</code> | The host name of the npm registry to publish to. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmRegistryUrl">npmRegistryUrl</a></code> | <code>string</code> | The base URL of the npm package registry. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmTokenSecret">npmTokenSecret</a></code> | <code>string</code> | GitHub secret which contains the NPM token to use when publishing packages. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.packageManager">packageManager</a></code> | <code>projen.javascript.NodePackageManager</code> | The Node Package Manager used to execute scripts. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.packageName">packageName</a></code> | <code>string</code> | The "name" in package.json. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.peerDependencyOptions">peerDependencyOptions</a></code> | <code>projen.javascript.PeerDependencyOptions</code> | Options for `peerDeps`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.peerDeps">peerDeps</a></code> | <code>string[]</code> | Peer dependencies for this module. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.pnpmVersion">pnpmVersion</a></code> | <code>string</code> | The version of PNPM to use if using PNPM as a package manager. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.repository">repository</a></code> | <code>string</code> | The repository is the location where the actual code for your package lives. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.repositoryDirectory">repositoryDirectory</a></code> | <code>string</code> | If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.scopedPackagesOptions">scopedPackagesOptions</a></code> | <code>projen.javascript.ScopedPackagesOptions[]</code> | Options for privately hosted scoped packages. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.scripts">scripts</a></code> | <code>{[ key: string ]: string}</code> | npm scripts to include. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.stability">stability</a></code> | <code>string</code> | Package's Stability. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.yarnBerryOptions">yarnBerryOptions</a></code> | <code>projen.javascript.YarnBerryOptions</code> | Options for Yarn Berry. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.jsiiReleaseVersion">jsiiReleaseVersion</a></code> | <code>string</code> | Version requirement of `publib` which is used to publish modules to npm. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.majorVersion">majorVersion</a></code> | <code>number</code> | Major version to release from the default branch. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.minMajorVersion">minMajorVersion</a></code> | <code>number</code> | Minimal Major version to release. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmDistTag">npmDistTag</a></code> | <code>string</code> | The npmDistTag to use when publishing from the default branch. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.postBuildSteps">postBuildSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Steps to execute after build as part of the release workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.prerelease">prerelease</a></code> | <code>string</code> | Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre"). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.publishDryRun">publishDryRun</a></code> | <code>boolean</code> | Instead of actually publishing to package managers, just print the publishing command. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.publishTasks">publishTasks</a></code> | <code>boolean</code> | Define publishing tasks that can be executed manually as well as workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releasableCommits">releasableCommits</a></code> | <code>projen.ReleasableCommits</code> | Find commits that should be considered releasable Used to decide if a release is required. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseBranches">releaseBranches</a></code> | <code>{[ key: string ]: projen.release.BranchOptions}</code> | Defines additional release branches. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseEveryCommit">releaseEveryCommit</a></code> | <code>boolean</code> | Automatically release new versions every commit to one of branches in `releaseBranches`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseFailureIssue">releaseFailureIssue</a></code> | <code>boolean</code> | Create a github issue on every failed publishing task. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseFailureIssueLabel">releaseFailureIssueLabel</a></code> | <code>string</code> | The label to apply to issues indicating publish failures. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseSchedule">releaseSchedule</a></code> | <code>string</code> | CRON schedule to trigger new releases. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseTagPrefix">releaseTagPrefix</a></code> | <code>string</code> | Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseTrigger">releaseTrigger</a></code> | <code>projen.release.ReleaseTrigger</code> | The release trigger to use. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseWorkflowName">releaseWorkflowName</a></code> | <code>string</code> | The name of the default release workflow. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseWorkflowSetupSteps">releaseWorkflowSetupSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | A set of workflow steps to execute in order to setup the workflow container. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.versionrcOptions">versionrcOptions</a></code> | <code>{[ key: string ]: any}</code> | Custom configuration used when creating changelog with standard-version package. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowContainerImage">workflowContainerImage</a></code> | <code>string</code> | Container image to use for GitHub workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowRunsOn">workflowRunsOn</a></code> | <code>string[]</code> | Github Runner selection labels. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowRunsOnGroup">workflowRunsOnGroup</a></code> | <code>projen.GroupRunnerOptions</code> | Github Runner Group selection options. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.defaultReleaseBranch">defaultReleaseBranch</a></code> | <code>string</code> | The name of the main release branch. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.artifactsDirectory">artifactsDirectory</a></code> | <code>string</code> | A directory which will contain build artifacts. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoApproveUpgrades">autoApproveUpgrades</a></code> | <code>boolean</code> | Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.buildWorkflow">buildWorkflow</a></code> | <code>boolean</code> | Define a GitHub workflow for building PRs. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.buildWorkflowTriggers">buildWorkflowTriggers</a></code> | <code>projen.github.workflows.Triggers</code> | Build workflow triggers. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bundlerOptions">bundlerOptions</a></code> | <code>projen.javascript.BundlerOptions</code> | Options for `Bundler`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.checkLicenses">checkLicenses</a></code> | <code>projen.javascript.LicenseCheckerOptions</code> | Configure which licenses should be deemed acceptable for use by dependencies. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.codeCov">codeCov</a></code> | <code>boolean</code> | Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.codeCovTokenSecret">codeCovTokenSecret</a></code> | <code>string</code> | Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.copyrightOwner">copyrightOwner</a></code> | <code>string</code> | License copyright owner. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.copyrightPeriod">copyrightPeriod</a></code> | <code>string</code> | The copyright years to put in the LICENSE file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.dependabot">dependabot</a></code> | <code>boolean</code> | Use dependabot to handle dependency upgrades. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.dependabotOptions">dependabotOptions</a></code> | <code>projen.github.DependabotOptions</code> | Options for dependabot. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.depsUpgrade">depsUpgrade</a></code> | <code>boolean</code> | Use tasks and github workflows to handle dependency upgrades. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.depsUpgradeOptions">depsUpgradeOptions</a></code> | <code>projen.javascript.UpgradeDependenciesOptions</code> | Options for `UpgradeDependencies`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitignore">gitignore</a></code> | <code>string[]</code> | Additional entries to .gitignore. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.jest">jest</a></code> | <code>boolean</code> | Setup jest unit tests. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.jestOptions">jestOptions</a></code> | <code>projen.javascript.JestOptions</code> | Jest options. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.mutableBuild">mutableBuild</a></code> | <code>boolean</code> | Automatically update files modified during builds to pull-request branches. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmignore">npmignore</a></code> | <code>string[]</code> | Additional entries to .npmignore. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmignoreEnabled">npmignoreEnabled</a></code> | <code>boolean</code> | Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmIgnoreOptions">npmIgnoreOptions</a></code> | <code>projen.IgnoreFileOptions</code> | Configuration options for .npmignore file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.package">package</a></code> | <code>boolean</code> | Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.prettier">prettier</a></code> | <code>boolean</code> | Setup prettier. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.prettierOptions">prettierOptions</a></code> | <code>projen.javascript.PrettierOptions</code> | Prettier options. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenDevDependency">projenDevDependency</a></code> | <code>boolean</code> | Indicates of "projen" should be installed as a devDependency. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJs">projenrcJs</a></code> | <code>boolean</code> | Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJsOptions">projenrcJsOptions</a></code> | <code>projen.javascript.ProjenrcOptions</code> | Options for .projenrc.js. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenVersion">projenVersion</a></code> | <code>string</code> | Version of projen to install. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.pullRequestTemplate">pullRequestTemplate</a></code> | <code>boolean</code> | Include a GitHub pull request template. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.pullRequestTemplateContents">pullRequestTemplateContents</a></code> | <code>string[]</code> | The contents of the pull request template. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.release">release</a></code> | <code>boolean</code> | Add release management to this project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseToNpm">releaseToNpm</a></code> | <code>boolean</code> | Automatically release to npm when new versions are introduced. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseWorkflow">releaseWorkflow</a></code> | <code>boolean</code> | DEPRECATED: renamed to `release`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowBootstrapSteps">workflowBootstrapSteps</a></code> | <code>projen.github.workflows.JobStep[]</code> | Workflow steps to use in order to bootstrap this repo. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowGitIdentity">workflowGitIdentity</a></code> | <code>projen.github.GitIdentity</code> | The git identity to use in workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowNodeVersion">workflowNodeVersion</a></code> | <code>string</code> | The node version to use in GitHub workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowPackageCache">workflowPackageCache</a></code> | <code>boolean</code> | Enable Node.js package cache in GitHub workflows. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.disableTsconfig">disableTsconfig</a></code> | <code>boolean</code> | Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.disableTsconfigDev">disableTsconfigDev</a></code> | <code>boolean</code> | Do not generate a `tsconfig.dev.json` file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.docgen">docgen</a></code> | <code>boolean</code> | Docgen by Typedoc. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.docsDirectory">docsDirectory</a></code> | <code>string</code> | Docs directory. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.entrypointTypes">entrypointTypes</a></code> | <code>string</code> | The .d.ts file that includes the type declarations for this module. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.eslint">eslint</a></code> | <code>boolean</code> | Setup eslint. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.eslintOptions">eslintOptions</a></code> | <code>projen.javascript.EslintOptions</code> | Eslint options. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.libdir">libdir</a></code> | <code>string</code> | Typescript  artifacts output directory. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcTs">projenrcTs</a></code> | <code>boolean</code> | Use TypeScript for your projenrc file (`.projenrc.ts`). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcTsOptions">projenrcTsOptions</a></code> | <code>projen.typescript.ProjenrcOptions</code> | Options for .projenrc.ts. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.sampleCode">sampleCode</a></code> | <code>boolean</code> | Generate one-time sample in `src/` and `test/` if there are no files there. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.srcdir">srcdir</a></code> | <code>string</code> | Typescript sources directory. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.testdir">testdir</a></code> | <code>string</code> | Jest tests directory. Tests files should be named `xxx.test.ts`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsconfig">tsconfig</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom TSConfig. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsconfigDev">tsconfigDev</a></code> | <code>projen.javascript.TypescriptConfigOptions</code> | Custom tsconfig options for the development tsconfig.json file (used for testing). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsconfigDevFile">tsconfigDevFile</a></code> | <code>string</code> | The name of the development tsconfig.json file. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsJestOptions">tsJestOptions</a></code> | <code>projen.typescript.TsJestOptions</code> | Options for ts-jest. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.typescriptVersion">typescriptVersion</a></code> | <code>string</code> | TypeScript version to use. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.buildCommand">buildCommand</a></code> | <code>string</code> | A command to execute before synthesis. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkout">cdkout</a></code> | <code>string</code> | cdk.out directory. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.context">context</a></code> | <code>{[ key: string ]: any}</code> | Additional context to include in `cdk.json`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.featureFlags">featureFlags</a></code> | <code>boolean</code> | Include all feature flags in cdk.json. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.requireApproval">requireApproval</a></code> | <code>projen.awscdk.ApprovalLevel</code> | To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.watchExcludes">watchExcludes</a></code> | <code>string[]</code> | Glob patterns to exclude from `cdk watch`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.watchIncludes">watchIncludes</a></code> | <code>string[]</code> | Glob patterns to include in `cdk watch`. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkVersion">cdkVersion</a></code> | <code>string</code> | Minimum version of the AWS CDK to depend on. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkAssert">cdkAssert</a></code> | <code>boolean</code> | Warning: NodeJS only. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkAssertions">cdkAssertions</a></code> | <code>boolean</code> | Install the assertions library? |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkDependencies">cdkDependencies</a></code> | <code>string[]</code> | Which AWS CDKv1 modules this project requires. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkDependenciesAsDeps">cdkDependenciesAsDeps</a></code> | <code>boolean</code> | If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkTestDependencies">cdkTestDependencies</a></code> | <code>string[]</code> | AWS CDK modules required for testing. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkVersionPinning">cdkVersionPinning</a></code> | <code>boolean</code> | Use pinned version instead of caret version for CDK. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.constructsVersion">constructsVersion</a></code> | <code>string</code> | Minimum version of the `constructs` library to depend on. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.appEntrypoint">appEntrypoint</a></code> | <code>string</code> | The CDK app's entrypoint (relative to the source directory, which is "src" by default). |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.edgeLambdaAutoDiscover">edgeLambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.experimentalIntegRunner">experimentalIntegRunner</a></code> | <code>boolean</code> | Enable experimental support for the AWS CDK integ-runner. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.integrationTestAutoDiscover">integrationTestAutoDiscover</a></code> | <code>boolean</code> | Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.lambdaAutoDiscover">lambdaAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.lambdaExtensionAutoDiscover">lambdaExtensionAutoDiscover</a></code> | <code>boolean</code> | Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.lambdaOptions">lambdaOptions</a></code> | <code>projen.awscdk.LambdaFunctionCommonOptions</code> | Common options for all AWS Lambda functions. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.awsSdkV3Version">awsSdkV3Version</a></code> | <code>string</code> | AWS JavaScript SDK v3 version. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.nvmNodeVersion">nvmNodeVersion</a></code> | <code>string</code> | nvm node version. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.reactTypesVersion">reactTypesVersion</a></code> | <code>string</code> | React @types version. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.reactVersion">reactVersion</a></code> | <code>string</code> | React version. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.remixDir">remixDir</a></code> | <code>string</code> | Directory that remix project files should be in. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.remixVersion">remixVersion</a></code> | <code>string</code> | Remix version. |
| <code><a href="#@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tailwind">tailwind</a></code> | <code>boolean</code> | Enable tailwind. |

---

##### `name`<sup>Required</sup> <a name="name" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string
- *Default:* $BASEDIR

This is the name of your project.

---

##### `commitGenerated`<sup>Optional</sup> <a name="commitGenerated" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.commitGenerated"></a>

```typescript
public readonly commitGenerated: boolean;
```

- *Type:* boolean
- *Default:* true

Whether to commit the managed files by default.

---

##### `gitIgnoreOptions`<sup>Optional</sup> <a name="gitIgnoreOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitIgnoreOptions"></a>

```typescript
public readonly gitIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .gitignore file.

---

##### `gitOptions`<sup>Optional</sup> <a name="gitOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitOptions"></a>

```typescript
public readonly gitOptions: GitOptions;
```

- *Type:* projen.GitOptions

Configuration options for git.

---

##### `logging`<sup>Optional</sup> <a name="logging" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.logging"></a>

```typescript
public readonly logging: LoggerOptions;
```

- *Type:* projen.LoggerOptions
- *Default:* {}

Configure logging options such as verbosity.

---

##### `outdir`<sup>Optional</sup> <a name="outdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.outdir"></a>

```typescript
public readonly outdir: string;
```

- *Type:* string
- *Default:* "."

The root directory of the project.

Relative to this directory, all files are synthesized.

If this project has a parent, this directory is relative to the parent
directory and it cannot be the same as the parent or any of it's other
subprojects.

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.parent"></a>

```typescript
public readonly parent: Project;
```

- *Type:* projen.Project

The parent project, if this project is part of a bigger project.

---

##### `projenCommand`<sup>Optional</sup> <a name="projenCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenCommand"></a>

```typescript
public readonly projenCommand: string;
```

- *Type:* string
- *Default:* "npx projen"

The shell command to use in order to run the projen CLI.

Can be used to customize in special environments.

---

##### `projenrcJson`<sup>Optional</sup> <a name="projenrcJson" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJson"></a>

```typescript
public readonly projenrcJson: boolean;
```

- *Type:* boolean
- *Default:* false

Generate (once) .projenrc.json (in JSON). Set to `false` in order to disable .projenrc.json generation.

---

##### `projenrcJsonOptions`<sup>Optional</sup> <a name="projenrcJsonOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJsonOptions"></a>

```typescript
public readonly projenrcJsonOptions: ProjenrcJsonOptions;
```

- *Type:* projen.ProjenrcJsonOptions
- *Default:* default options

Options for .projenrc.json.

---

##### `renovatebot`<sup>Optional</sup> <a name="renovatebot" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.renovatebot"></a>

```typescript
public readonly renovatebot: boolean;
```

- *Type:* boolean
- *Default:* false

Use renovatebot to handle dependency upgrades.

---

##### `renovatebotOptions`<sup>Optional</sup> <a name="renovatebotOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.renovatebotOptions"></a>

```typescript
public readonly renovatebotOptions: RenovatebotOptions;
```

- *Type:* projen.RenovatebotOptions
- *Default:* default options

Options for renovatebot.

---

##### `autoApproveOptions`<sup>Optional</sup> <a name="autoApproveOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoApproveOptions"></a>

```typescript
public readonly autoApproveOptions: AutoApproveOptions;
```

- *Type:* projen.github.AutoApproveOptions
- *Default:* auto approve is disabled

Enable and configure the 'auto approve' workflow.

---

##### `autoMerge`<sup>Optional</sup> <a name="autoMerge" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoMerge"></a>

```typescript
public readonly autoMerge: boolean;
```

- *Type:* boolean
- *Default:* true

Enable automatic merging on GitHub.

Has no effect if `github.mergify`
is set to false.

---

##### `autoMergeOptions`<sup>Optional</sup> <a name="autoMergeOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoMergeOptions"></a>

```typescript
public readonly autoMergeOptions: AutoMergeOptions;
```

- *Type:* projen.github.AutoMergeOptions
- *Default:* see defaults in `AutoMergeOptions`

Configure options for automatic merging on GitHub.

Has no effect if
`github.mergify` or `autoMerge` is set to false.

---

##### `clobber`<sup>Optional</sup> <a name="clobber" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.clobber"></a>

```typescript
public readonly clobber: boolean;
```

- *Type:* boolean
- *Default:* true, but false for subprojects

Add a `clobber` task which resets the repo to origin.

---

##### `devContainer`<sup>Optional</sup> <a name="devContainer" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.devContainer"></a>

```typescript
public readonly devContainer: boolean;
```

- *Type:* boolean
- *Default:* false

Add a VSCode development environment (used for GitHub Codespaces).

---

##### `github`<sup>Optional</sup> <a name="github" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.github"></a>

```typescript
public readonly github: boolean;
```

- *Type:* boolean
- *Default:* true

Enable GitHub integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `githubOptions`<sup>Optional</sup> <a name="githubOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.githubOptions"></a>

```typescript
public readonly githubOptions: GitHubOptions;
```

- *Type:* projen.github.GitHubOptions
- *Default:* see GitHubOptions

Options for GitHub integration.

---

##### `gitpod`<sup>Optional</sup> <a name="gitpod" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitpod"></a>

```typescript
public readonly gitpod: boolean;
```

- *Type:* boolean
- *Default:* false

Add a Gitpod development environment.

---

##### ~~`mergify`~~<sup>Optional</sup> <a name="mergify" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.mergify"></a>

- *Deprecated:* use `githubOptions.mergify` instead

```typescript
public readonly mergify: boolean;
```

- *Type:* boolean
- *Default:* true

Whether mergify should be enabled on this repository or not.

---

##### ~~`mergifyOptions`~~<sup>Optional</sup> <a name="mergifyOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.mergifyOptions"></a>

- *Deprecated:* use `githubOptions.mergifyOptions` instead

```typescript
public readonly mergifyOptions: MergifyOptions;
```

- *Type:* projen.github.MergifyOptions
- *Default:* default options

Options for mergify.

---

##### ~~`projectType`~~<sup>Optional</sup> <a name="projectType" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projectType"></a>

- *Deprecated:* no longer supported at the base project level

```typescript
public readonly projectType: ProjectType;
```

- *Type:* projen.ProjectType
- *Default:* ProjectType.UNKNOWN

Which type of project this is (library/app).

---

##### `projenCredentials`<sup>Optional</sup> <a name="projenCredentials" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenCredentials"></a>

```typescript
public readonly projenCredentials: GithubCredentials;
```

- *Type:* projen.github.GithubCredentials
- *Default:* use a personal access token named PROJEN_GITHUB_TOKEN

Choose a method of providing GitHub API access for projen workflows.

---

##### ~~`projenTokenSecret`~~<sup>Optional</sup> <a name="projenTokenSecret" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenTokenSecret"></a>

- *Deprecated:* use `projenCredentials`

```typescript
public readonly projenTokenSecret: string;
```

- *Type:* string
- *Default:* "PROJEN_GITHUB_TOKEN"

The name of a secret which includes a GitHub Personal Access Token to be used by projen workflows.

This token needs to have the `repo`, `workflows`
and `packages` scope.

---

##### `readme`<sup>Optional</sup> <a name="readme" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.readme"></a>

```typescript
public readonly readme: SampleReadmeProps;
```

- *Type:* projen.SampleReadmeProps
- *Default:* { filename: 'README.md', contents: '# replace this' }

The README setup.

---

*Example*

```typescript
"{ filename: 'readme.md', contents: '# title' }"
```


##### `stale`<sup>Optional</sup> <a name="stale" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.stale"></a>

```typescript
public readonly stale: boolean;
```

- *Type:* boolean
- *Default:* false

Auto-close of stale issues and pull request.

See `staleOptions` for options.

---

##### `staleOptions`<sup>Optional</sup> <a name="staleOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.staleOptions"></a>

```typescript
public readonly staleOptions: StaleOptions;
```

- *Type:* projen.github.StaleOptions
- *Default:* see defaults in `StaleOptions`

Auto-close stale issues and pull requests.

To disable set `stale` to `false`.

---

##### `vscode`<sup>Optional</sup> <a name="vscode" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.vscode"></a>

```typescript
public readonly vscode: boolean;
```

- *Type:* boolean
- *Default:* true

Enable VSCode integration.

Enabled by default for root projects. Disabled for non-root projects.

---

##### `allowLibraryDependencies`<sup>Optional</sup> <a name="allowLibraryDependencies" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.allowLibraryDependencies"></a>

```typescript
public readonly allowLibraryDependencies: boolean;
```

- *Type:* boolean
- *Default:* true

Allow the project to include `peerDependencies` and `bundledDependencies`.

This is normally only allowed for libraries. For apps, there's no meaning
for specifying these.

---

##### `authorEmail`<sup>Optional</sup> <a name="authorEmail" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorEmail"></a>

```typescript
public readonly authorEmail: string;
```

- *Type:* string

Author's e-mail.

---

##### `authorName`<sup>Optional</sup> <a name="authorName" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorName"></a>

```typescript
public readonly authorName: string;
```

- *Type:* string

Author's name.

---

##### `authorOrganization`<sup>Optional</sup> <a name="authorOrganization" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorOrganization"></a>

```typescript
public readonly authorOrganization: boolean;
```

- *Type:* boolean

Is the author an organization.

---

##### `authorUrl`<sup>Optional</sup> <a name="authorUrl" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.authorUrl"></a>

```typescript
public readonly authorUrl: string;
```

- *Type:* string

Author's URL / Website.

---

##### `autoDetectBin`<sup>Optional</sup> <a name="autoDetectBin" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoDetectBin"></a>

```typescript
public readonly autoDetectBin: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically add all executables under the `bin` directory to your `package.json` file under the `bin` section.

---

##### `bin`<sup>Optional</sup> <a name="bin" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bin"></a>

```typescript
public readonly bin: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Binary programs vended with your module.

You can use this option to add/customize how binaries are represented in
your `package.json`, but unless `autoDetectBin` is `false`, every
executable file under `bin` will automatically be added to this section.

---

##### `bugsEmail`<sup>Optional</sup> <a name="bugsEmail" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bugsEmail"></a>

```typescript
public readonly bugsEmail: string;
```

- *Type:* string

The email address to which issues should be reported.

---

##### `bugsUrl`<sup>Optional</sup> <a name="bugsUrl" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bugsUrl"></a>

```typescript
public readonly bugsUrl: string;
```

- *Type:* string

The url to your project's issue tracker.

---

##### `bundledDeps`<sup>Optional</sup> <a name="bundledDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bundledDeps"></a>

```typescript
public readonly bundledDeps: string[];
```

- *Type:* string[]

List of dependencies to bundle into this module.

These modules will be
added both to the `dependencies` section and `bundledDependencies` section of
your `package.json`.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

##### `codeArtifactOptions`<sup>Optional</sup> <a name="codeArtifactOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.codeArtifactOptions"></a>

```typescript
public readonly codeArtifactOptions: CodeArtifactOptions;
```

- *Type:* projen.javascript.CodeArtifactOptions
- *Default:* undefined

Options for npm packages using AWS CodeArtifact.

This is required if publishing packages to, or installing scoped packages from AWS CodeArtifact

---

##### `deps`<sup>Optional</sup> <a name="deps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.deps"></a>

```typescript
public readonly deps: string[];
```

- *Type:* string[]
- *Default:* []

Runtime dependencies of this module.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'express', 'lodash', 'foo@^2' ]
```


##### `description`<sup>Optional</sup> <a name="description" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description is just a string that helps people understand the purpose of the package.

It can be used when searching for packages in a package manager as well.
See https://classic.yarnpkg.com/en/docs/package-json/#toc-description

---

##### `devDeps`<sup>Optional</sup> <a name="devDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.devDeps"></a>

```typescript
public readonly devDeps: string[];
```

- *Type:* string[]
- *Default:* []

Build dependencies for this module.

These dependencies will only be
available in your build environment but will not be fetched when this
module is consumed.

The recommendation is to only specify the module name here (e.g.
`express`). This will behave similar to `yarn add` or `npm install` in the
sense that it will add the module as a dependency to your `package.json`
file with the latest version (`^`). You can specify semver requirements in
the same syntax passed to `npm i` or `yarn add` (e.g. `express@^2`) and
this will be what you `package.json` will eventually include.

---

*Example*

```typescript
[ 'typescript', '@types/express' ]
```


##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.entrypoint"></a>

```typescript
public readonly entrypoint: string;
```

- *Type:* string
- *Default:* "lib/index.js"

Module entrypoint (`main` in `package.json`).

Set to an empty string to not include `main` in your package.json

---

##### `homepage`<sup>Optional</sup> <a name="homepage" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.homepage"></a>

```typescript
public readonly homepage: string;
```

- *Type:* string

Package's Homepage / Website.

---

##### `keywords`<sup>Optional</sup> <a name="keywords" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.keywords"></a>

```typescript
public readonly keywords: string[];
```

- *Type:* string[]

Keywords to include in `package.json`.

---

##### `license`<sup>Optional</sup> <a name="license" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.license"></a>

```typescript
public readonly license: string;
```

- *Type:* string
- *Default:* "Apache-2.0"

License's SPDX identifier.

See https://github.com/projen/projen/tree/main/license-text for a list of supported licenses.
Use the `licensed` option if you want to no license to be specified.

---

##### `licensed`<sup>Optional</sup> <a name="licensed" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.licensed"></a>

```typescript
public readonly licensed: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates if a license should be added.

---

##### `maxNodeVersion`<sup>Optional</sup> <a name="maxNodeVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.maxNodeVersion"></a>

```typescript
public readonly maxNodeVersion: string;
```

- *Type:* string
- *Default:* no max

Minimum node.js version to require via `engines` (inclusive).

---

##### `minNodeVersion`<sup>Optional</sup> <a name="minNodeVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.minNodeVersion"></a>

```typescript
public readonly minNodeVersion: string;
```

- *Type:* string
- *Default:* no "engines" specified

Minimum Node.js version to require via package.json `engines` (inclusive).

---

##### `npmAccess`<sup>Optional</sup> <a name="npmAccess" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmAccess"></a>

```typescript
public readonly npmAccess: NpmAccess;
```

- *Type:* projen.javascript.NpmAccess
- *Default:* for scoped packages (e.g. `foo@bar`), the default is `NpmAccess.RESTRICTED`, for non-scoped packages, the default is `NpmAccess.PUBLIC`.

Access level of the npm package.

---

##### `npmProvenance`<sup>Optional</sup> <a name="npmProvenance" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmProvenance"></a>

```typescript
public readonly npmProvenance: boolean;
```

- *Type:* boolean
- *Default:* true for public packages, false otherwise

Should provenance statements be generated when the package is published.

A supported package manager is required to publish a package with npm provenance statements and
you will need to use a supported CI/CD provider.

Note that the projen `Release` and `Publisher` components are using `publib` to publish packages,
which is using npm internally and supports provenance statements independently of the package manager used.

> [https://docs.npmjs.com/generating-provenance-statements](https://docs.npmjs.com/generating-provenance-statements)

---

##### ~~`npmRegistry`~~<sup>Optional</sup> <a name="npmRegistry" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmRegistry"></a>

- *Deprecated:* use `npmRegistryUrl` instead

```typescript
public readonly npmRegistry: string;
```

- *Type:* string

The host name of the npm registry to publish to.

Cannot be set together with `npmRegistryUrl`.

---

##### `npmRegistryUrl`<sup>Optional</sup> <a name="npmRegistryUrl" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmRegistryUrl"></a>

```typescript
public readonly npmRegistryUrl: string;
```

- *Type:* string
- *Default:* "https://registry.npmjs.org"

The base URL of the npm package registry.

Must be a URL (e.g. start with "https://" or "http://")

---

##### `npmTokenSecret`<sup>Optional</sup> <a name="npmTokenSecret" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmTokenSecret"></a>

```typescript
public readonly npmTokenSecret: string;
```

- *Type:* string
- *Default:* "NPM_TOKEN"

GitHub secret which contains the NPM token to use when publishing packages.

---

##### `packageManager`<sup>Optional</sup> <a name="packageManager" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.packageManager"></a>

```typescript
public readonly packageManager: NodePackageManager;
```

- *Type:* projen.javascript.NodePackageManager
- *Default:* NodePackageManager.YARN_CLASSIC

The Node Package Manager used to execute scripts.

---

##### `packageName`<sup>Optional</sup> <a name="packageName" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.packageName"></a>

```typescript
public readonly packageName: string;
```

- *Type:* string
- *Default:* defaults to project name

The "name" in package.json.

---

##### `peerDependencyOptions`<sup>Optional</sup> <a name="peerDependencyOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.peerDependencyOptions"></a>

```typescript
public readonly peerDependencyOptions: PeerDependencyOptions;
```

- *Type:* projen.javascript.PeerDependencyOptions

Options for `peerDeps`.

---

##### `peerDeps`<sup>Optional</sup> <a name="peerDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.peerDeps"></a>

```typescript
public readonly peerDeps: string[];
```

- *Type:* string[]
- *Default:* []

Peer dependencies for this module.

Dependencies listed here are required to
be installed (and satisfied) by the _consumer_ of this library. Using peer
dependencies allows you to ensure that only a single module of a certain
library exists in the `node_modules` tree of your consumers.

Note that prior to npm@7, peer dependencies are _not_ automatically
installed, which means that adding peer dependencies to a library will be a
breaking change for your customers.

Unless `peerDependencyOptions.pinnedDevDependency` is disabled (it is
enabled by default), projen will automatically add a dev dependency with a
pinned version for each peer dependency. This will ensure that you build &
test your module against the lowest peer version required.

---

##### `pnpmVersion`<sup>Optional</sup> <a name="pnpmVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.pnpmVersion"></a>

```typescript
public readonly pnpmVersion: string;
```

- *Type:* string
- *Default:* "7"

The version of PNPM to use if using PNPM as a package manager.

---

##### `repository`<sup>Optional</sup> <a name="repository" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.repository"></a>

```typescript
public readonly repository: string;
```

- *Type:* string

The repository is the location where the actual code for your package lives.

See https://classic.yarnpkg.com/en/docs/package-json/#toc-repository

---

##### `repositoryDirectory`<sup>Optional</sup> <a name="repositoryDirectory" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.repositoryDirectory"></a>

```typescript
public readonly repositoryDirectory: string;
```

- *Type:* string

If the package.json for your package is not in the root directory (for example if it is part of a monorepo), you can specify the directory in which it lives.

---

##### `scopedPackagesOptions`<sup>Optional</sup> <a name="scopedPackagesOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.scopedPackagesOptions"></a>

```typescript
public readonly scopedPackagesOptions: ScopedPackagesOptions[];
```

- *Type:* projen.javascript.ScopedPackagesOptions[]
- *Default:* fetch all scoped packages from the public npm registry

Options for privately hosted scoped packages.

---

##### ~~`scripts`~~<sup>Optional</sup> <a name="scripts" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.scripts"></a>

- *Deprecated:* use `project.addTask()` or `package.setScript()`

```typescript
public readonly scripts: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}
- *Default:* {}

npm scripts to include.

If a script has the same name as a standard script,
the standard script will be overwritten.
Also adds the script as a task.

---

##### `stability`<sup>Optional</sup> <a name="stability" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.stability"></a>

```typescript
public readonly stability: string;
```

- *Type:* string

Package's Stability.

---

##### `yarnBerryOptions`<sup>Optional</sup> <a name="yarnBerryOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.yarnBerryOptions"></a>

```typescript
public readonly yarnBerryOptions: YarnBerryOptions;
```

- *Type:* projen.javascript.YarnBerryOptions
- *Default:* Yarn Berry v4 with all default options

Options for Yarn Berry.

---

##### `jsiiReleaseVersion`<sup>Optional</sup> <a name="jsiiReleaseVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.jsiiReleaseVersion"></a>

```typescript
public readonly jsiiReleaseVersion: string;
```

- *Type:* string
- *Default:* "latest"

Version requirement of `publib` which is used to publish modules to npm.

---

##### `majorVersion`<sup>Optional</sup> <a name="majorVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.majorVersion"></a>

```typescript
public readonly majorVersion: number;
```

- *Type:* number
- *Default:* Major version is not enforced.

Major version to release from the default branch.

If this is specified, we bump the latest version of this major version line.
If not specified, we bump the global latest version.

---

##### `minMajorVersion`<sup>Optional</sup> <a name="minMajorVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.minMajorVersion"></a>

```typescript
public readonly minMajorVersion: number;
```

- *Type:* number
- *Default:* No minimum version is being enforced

Minimal Major version to release.

This can be useful to set to 1, as breaking changes before the 1.x major
release are not incrementing the major version number.

Can not be set together with `majorVersion`.

---

##### `npmDistTag`<sup>Optional</sup> <a name="npmDistTag" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmDistTag"></a>

```typescript
public readonly npmDistTag: string;
```

- *Type:* string
- *Default:* "latest"

The npmDistTag to use when publishing from the default branch.

To set the npm dist-tag for release branches, set the `npmDistTag` property
for each branch.

---

##### `postBuildSteps`<sup>Optional</sup> <a name="postBuildSteps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.postBuildSteps"></a>

```typescript
public readonly postBuildSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* []

Steps to execute after build as part of the release workflow.

---

##### `prerelease`<sup>Optional</sup> <a name="prerelease" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.prerelease"></a>

```typescript
public readonly prerelease: string;
```

- *Type:* string
- *Default:* normal semantic versions

Bump versions from the default branch as pre-releases (e.g. "beta", "alpha", "pre").

---

##### `publishDryRun`<sup>Optional</sup> <a name="publishDryRun" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.publishDryRun"></a>

```typescript
public readonly publishDryRun: boolean;
```

- *Type:* boolean
- *Default:* false

Instead of actually publishing to package managers, just print the publishing command.

---

##### `publishTasks`<sup>Optional</sup> <a name="publishTasks" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.publishTasks"></a>

```typescript
public readonly publishTasks: boolean;
```

- *Type:* boolean
- *Default:* false

Define publishing tasks that can be executed manually as well as workflows.

Normally, publishing only happens within automated workflows. Enable this
in order to create a publishing task for each publishing activity.

---

##### `releasableCommits`<sup>Optional</sup> <a name="releasableCommits" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releasableCommits"></a>

```typescript
public readonly releasableCommits: ReleasableCommits;
```

- *Type:* projen.ReleasableCommits
- *Default:* ReleasableCommits.everyCommit()

Find commits that should be considered releasable Used to decide if a release is required.

---

##### `releaseBranches`<sup>Optional</sup> <a name="releaseBranches" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseBranches"></a>

```typescript
public readonly releaseBranches: {[ key: string ]: BranchOptions};
```

- *Type:* {[ key: string ]: projen.release.BranchOptions}
- *Default:* no additional branches are used for release. you can use `addBranch()` to add additional branches.

Defines additional release branches.

A workflow will be created for each
release branch which will publish releases from commits in this branch.
Each release branch _must_ be assigned a major version number which is used
to enforce that versions published from that branch always use that major
version. If multiple branches are used, the `majorVersion` field must also
be provided for the default branch.

---

##### ~~`releaseEveryCommit`~~<sup>Optional</sup> <a name="releaseEveryCommit" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseEveryCommit"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.continuous()` instead

```typescript
public readonly releaseEveryCommit: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically release new versions every commit to one of branches in `releaseBranches`.

---

##### `releaseFailureIssue`<sup>Optional</sup> <a name="releaseFailureIssue" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseFailureIssue"></a>

```typescript
public readonly releaseFailureIssue: boolean;
```

- *Type:* boolean
- *Default:* false

Create a github issue on every failed publishing task.

---

##### `releaseFailureIssueLabel`<sup>Optional</sup> <a name="releaseFailureIssueLabel" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseFailureIssueLabel"></a>

```typescript
public readonly releaseFailureIssueLabel: string;
```

- *Type:* string
- *Default:* "failed-release"

The label to apply to issues indicating publish failures.

Only applies if `releaseFailureIssue` is true.

---

##### ~~`releaseSchedule`~~<sup>Optional</sup> <a name="releaseSchedule" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseSchedule"></a>

- *Deprecated:* Use `releaseTrigger: ReleaseTrigger.scheduled()` instead

```typescript
public readonly releaseSchedule: string;
```

- *Type:* string
- *Default:* no scheduled releases

CRON schedule to trigger new releases.

---

##### `releaseTagPrefix`<sup>Optional</sup> <a name="releaseTagPrefix" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseTagPrefix"></a>

```typescript
public readonly releaseTagPrefix: string;
```

- *Type:* string
- *Default:* "v"

Automatically add the given prefix to release tags. Useful if you are releasing on multiple branches with overlapping version numbers.

Note: this prefix is used to detect the latest tagged version
when bumping, so if you change this on a project with an existing version
history, you may need to manually tag your latest release
with the new prefix.

---

##### `releaseTrigger`<sup>Optional</sup> <a name="releaseTrigger" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseTrigger"></a>

```typescript
public readonly releaseTrigger: ReleaseTrigger;
```

- *Type:* projen.release.ReleaseTrigger
- *Default:* Continuous releases (`ReleaseTrigger.continuous()`)

The release trigger to use.

---

##### `releaseWorkflowName`<sup>Optional</sup> <a name="releaseWorkflowName" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseWorkflowName"></a>

```typescript
public readonly releaseWorkflowName: string;
```

- *Type:* string
- *Default:* "release"

The name of the default release workflow.

---

##### `releaseWorkflowSetupSteps`<sup>Optional</sup> <a name="releaseWorkflowSetupSteps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseWorkflowSetupSteps"></a>

```typescript
public readonly releaseWorkflowSetupSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]

A set of workflow steps to execute in order to setup the workflow container.

---

##### `versionrcOptions`<sup>Optional</sup> <a name="versionrcOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.versionrcOptions"></a>

```typescript
public readonly versionrcOptions: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* standard configuration applicable for GitHub repositories

Custom configuration used when creating changelog with standard-version package.

Given values either append to default configuration or overwrite values in it.

---

##### `workflowContainerImage`<sup>Optional</sup> <a name="workflowContainerImage" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowContainerImage"></a>

```typescript
public readonly workflowContainerImage: string;
```

- *Type:* string
- *Default:* default image

Container image to use for GitHub workflows.

---

##### `workflowRunsOn`<sup>Optional</sup> <a name="workflowRunsOn" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowRunsOn"></a>

```typescript
public readonly workflowRunsOn: string[];
```

- *Type:* string[]
- *Default:* ["ubuntu-latest"]

Github Runner selection labels.

---

##### `workflowRunsOnGroup`<sup>Optional</sup> <a name="workflowRunsOnGroup" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowRunsOnGroup"></a>

```typescript
public readonly workflowRunsOnGroup: GroupRunnerOptions;
```

- *Type:* projen.GroupRunnerOptions

Github Runner Group selection options.

---

##### `defaultReleaseBranch`<sup>Required</sup> <a name="defaultReleaseBranch" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.defaultReleaseBranch"></a>

```typescript
public readonly defaultReleaseBranch: string;
```

- *Type:* string
- *Default:* "main"

The name of the main release branch.

---

##### `artifactsDirectory`<sup>Optional</sup> <a name="artifactsDirectory" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.artifactsDirectory"></a>

```typescript
public readonly artifactsDirectory: string;
```

- *Type:* string
- *Default:* "dist"

A directory which will contain build artifacts.

---

##### `autoApproveUpgrades`<sup>Optional</sup> <a name="autoApproveUpgrades" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.autoApproveUpgrades"></a>

```typescript
public readonly autoApproveUpgrades: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically approve deps upgrade PRs, allowing them to be merged by mergify (if configued).

Throw if set to true but `autoApproveOptions` are not defined.

---

##### `buildWorkflow`<sup>Optional</sup> <a name="buildWorkflow" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.buildWorkflow"></a>

```typescript
public readonly buildWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

Define a GitHub workflow for building PRs.

---

##### `buildWorkflowTriggers`<sup>Optional</sup> <a name="buildWorkflowTriggers" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.buildWorkflowTriggers"></a>

```typescript
public readonly buildWorkflowTriggers: Triggers;
```

- *Type:* projen.github.workflows.Triggers
- *Default:* "{ pullRequest: {}, workflowDispatch: {} }"

Build workflow triggers.

---

##### `bundlerOptions`<sup>Optional</sup> <a name="bundlerOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.bundlerOptions"></a>

```typescript
public readonly bundlerOptions: BundlerOptions;
```

- *Type:* projen.javascript.BundlerOptions

Options for `Bundler`.

---

##### `checkLicenses`<sup>Optional</sup> <a name="checkLicenses" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.checkLicenses"></a>

```typescript
public readonly checkLicenses: LicenseCheckerOptions;
```

- *Type:* projen.javascript.LicenseCheckerOptions
- *Default:* no license checks are run during the build and all licenses will be accepted

Configure which licenses should be deemed acceptable for use by dependencies.

This setting will cause the build to fail, if any prohibited or not allowed licenses ares encountered.

---

##### `codeCov`<sup>Optional</sup> <a name="codeCov" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.codeCov"></a>

```typescript
public readonly codeCov: boolean;
```

- *Type:* boolean
- *Default:* false

Define a GitHub workflow step for sending code coverage metrics to https://codecov.io/ Uses codecov/codecov-action@v3 A secret is required for private repos. Configured with `@codeCovTokenSecret`.

---

##### `codeCovTokenSecret`<sup>Optional</sup> <a name="codeCovTokenSecret" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.codeCovTokenSecret"></a>

```typescript
public readonly codeCovTokenSecret: string;
```

- *Type:* string
- *Default:* if this option is not specified, only public repositories are supported

Define the secret name for a specified https://codecov.io/ token A secret is required to send coverage for private repositories.

---

##### `copyrightOwner`<sup>Optional</sup> <a name="copyrightOwner" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.copyrightOwner"></a>

```typescript
public readonly copyrightOwner: string;
```

- *Type:* string
- *Default:* defaults to the value of authorName or "" if `authorName` is undefined.

License copyright owner.

---

##### `copyrightPeriod`<sup>Optional</sup> <a name="copyrightPeriod" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.copyrightPeriod"></a>

```typescript
public readonly copyrightPeriod: string;
```

- *Type:* string
- *Default:* current year

The copyright years to put in the LICENSE file.

---

##### `dependabot`<sup>Optional</sup> <a name="dependabot" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.dependabot"></a>

```typescript
public readonly dependabot: boolean;
```

- *Type:* boolean
- *Default:* false

Use dependabot to handle dependency upgrades.

Cannot be used in conjunction with `depsUpgrade`.

---

##### `dependabotOptions`<sup>Optional</sup> <a name="dependabotOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.dependabotOptions"></a>

```typescript
public readonly dependabotOptions: DependabotOptions;
```

- *Type:* projen.github.DependabotOptions
- *Default:* default options

Options for dependabot.

---

##### `depsUpgrade`<sup>Optional</sup> <a name="depsUpgrade" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.depsUpgrade"></a>

```typescript
public readonly depsUpgrade: boolean;
```

- *Type:* boolean
- *Default:* true

Use tasks and github workflows to handle dependency upgrades.

Cannot be used in conjunction with `dependabot`.

---

##### `depsUpgradeOptions`<sup>Optional</sup> <a name="depsUpgradeOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.depsUpgradeOptions"></a>

```typescript
public readonly depsUpgradeOptions: UpgradeDependenciesOptions;
```

- *Type:* projen.javascript.UpgradeDependenciesOptions
- *Default:* default options

Options for `UpgradeDependencies`.

---

##### `gitignore`<sup>Optional</sup> <a name="gitignore" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.gitignore"></a>

```typescript
public readonly gitignore: string[];
```

- *Type:* string[]

Additional entries to .gitignore.

---

##### `jest`<sup>Optional</sup> <a name="jest" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.jest"></a>

```typescript
public readonly jest: boolean;
```

- *Type:* boolean
- *Default:* true

Setup jest unit tests.

---

##### `jestOptions`<sup>Optional</sup> <a name="jestOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.jestOptions"></a>

```typescript
public readonly jestOptions: JestOptions;
```

- *Type:* projen.javascript.JestOptions
- *Default:* default options

Jest options.

---

##### `mutableBuild`<sup>Optional</sup> <a name="mutableBuild" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.mutableBuild"></a>

```typescript
public readonly mutableBuild: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically update files modified during builds to pull-request branches.

This means
that any files synthesized by projen or e.g. test snapshots will always be up-to-date
before a PR is merged.

Implies that PR builds do not have anti-tamper checks.

---

##### ~~`npmignore`~~<sup>Optional</sup> <a name="npmignore" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmignore"></a>

- *Deprecated:* - use `project.addPackageIgnore`

```typescript
public readonly npmignore: string[];
```

- *Type:* string[]

Additional entries to .npmignore.

---

##### `npmignoreEnabled`<sup>Optional</sup> <a name="npmignoreEnabled" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmignoreEnabled"></a>

```typescript
public readonly npmignoreEnabled: boolean;
```

- *Type:* boolean
- *Default:* true

Defines an .npmignore file. Normally this is only needed for libraries that are packaged as tarballs.

---

##### `npmIgnoreOptions`<sup>Optional</sup> <a name="npmIgnoreOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.npmIgnoreOptions"></a>

```typescript
public readonly npmIgnoreOptions: IgnoreFileOptions;
```

- *Type:* projen.IgnoreFileOptions

Configuration options for .npmignore file.

---

##### `package`<sup>Optional</sup> <a name="package" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.package"></a>

```typescript
public readonly package: boolean;
```

- *Type:* boolean
- *Default:* true

Defines a `package` task that will produce an npm tarball under the artifacts directory (e.g. `dist`).

---

##### `prettier`<sup>Optional</sup> <a name="prettier" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.prettier"></a>

```typescript
public readonly prettier: boolean;
```

- *Type:* boolean
- *Default:* false

Setup prettier.

---

##### `prettierOptions`<sup>Optional</sup> <a name="prettierOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.prettierOptions"></a>

```typescript
public readonly prettierOptions: PrettierOptions;
```

- *Type:* projen.javascript.PrettierOptions
- *Default:* default options

Prettier options.

---

##### `projenDevDependency`<sup>Optional</sup> <a name="projenDevDependency" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenDevDependency"></a>

```typescript
public readonly projenDevDependency: boolean;
```

- *Type:* boolean
- *Default:* true

Indicates of "projen" should be installed as a devDependency.

---

##### `projenrcJs`<sup>Optional</sup> <a name="projenrcJs" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJs"></a>

```typescript
public readonly projenrcJs: boolean;
```

- *Type:* boolean
- *Default:* true if projenrcJson is false

Generate (once) .projenrc.js (in JavaScript). Set to `false` in order to disable .projenrc.js generation.

---

##### `projenrcJsOptions`<sup>Optional</sup> <a name="projenrcJsOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcJsOptions"></a>

```typescript
public readonly projenrcJsOptions: ProjenrcOptions;
```

- *Type:* projen.javascript.ProjenrcOptions
- *Default:* default options

Options for .projenrc.js.

---

##### `projenVersion`<sup>Optional</sup> <a name="projenVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenVersion"></a>

```typescript
public readonly projenVersion: string;
```

- *Type:* string
- *Default:* Defaults to the latest version.

Version of projen to install.

---

##### `pullRequestTemplate`<sup>Optional</sup> <a name="pullRequestTemplate" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.pullRequestTemplate"></a>

```typescript
public readonly pullRequestTemplate: boolean;
```

- *Type:* boolean
- *Default:* true

Include a GitHub pull request template.

---

##### `pullRequestTemplateContents`<sup>Optional</sup> <a name="pullRequestTemplateContents" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.pullRequestTemplateContents"></a>

```typescript
public readonly pullRequestTemplateContents: string[];
```

- *Type:* string[]
- *Default:* default content

The contents of the pull request template.

---

##### `release`<sup>Optional</sup> <a name="release" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.release"></a>

```typescript
public readonly release: boolean;
```

- *Type:* boolean
- *Default:* true (false for subprojects)

Add release management to this project.

---

##### `releaseToNpm`<sup>Optional</sup> <a name="releaseToNpm" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseToNpm"></a>

```typescript
public readonly releaseToNpm: boolean;
```

- *Type:* boolean
- *Default:* false

Automatically release to npm when new versions are introduced.

---

##### ~~`releaseWorkflow`~~<sup>Optional</sup> <a name="releaseWorkflow" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.releaseWorkflow"></a>

- *Deprecated:* see `release`.

```typescript
public readonly releaseWorkflow: boolean;
```

- *Type:* boolean
- *Default:* true if not a subproject

DEPRECATED: renamed to `release`.

---

##### `workflowBootstrapSteps`<sup>Optional</sup> <a name="workflowBootstrapSteps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowBootstrapSteps"></a>

```typescript
public readonly workflowBootstrapSteps: JobStep[];
```

- *Type:* projen.github.workflows.JobStep[]
- *Default:* "yarn install --frozen-lockfile && yarn projen"

Workflow steps to use in order to bootstrap this repo.

---

##### `workflowGitIdentity`<sup>Optional</sup> <a name="workflowGitIdentity" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowGitIdentity"></a>

```typescript
public readonly workflowGitIdentity: GitIdentity;
```

- *Type:* projen.github.GitIdentity
- *Default:* GitHub Actions

The git identity to use in workflows.

---

##### `workflowNodeVersion`<sup>Optional</sup> <a name="workflowNodeVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowNodeVersion"></a>

```typescript
public readonly workflowNodeVersion: string;
```

- *Type:* string
- *Default:* same as `minNodeVersion`

The node version to use in GitHub workflows.

---

##### `workflowPackageCache`<sup>Optional</sup> <a name="workflowPackageCache" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.workflowPackageCache"></a>

```typescript
public readonly workflowPackageCache: boolean;
```

- *Type:* boolean
- *Default:* false

Enable Node.js package cache in GitHub workflows.

---

##### `disableTsconfig`<sup>Optional</sup> <a name="disableTsconfig" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.disableTsconfig"></a>

```typescript
public readonly disableTsconfig: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.json` file (used by jsii projects since tsconfig.json is generated by the jsii compiler).

---

##### `disableTsconfigDev`<sup>Optional</sup> <a name="disableTsconfigDev" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.disableTsconfigDev"></a>

```typescript
public readonly disableTsconfigDev: boolean;
```

- *Type:* boolean
- *Default:* false

Do not generate a `tsconfig.dev.json` file.

---

##### `docgen`<sup>Optional</sup> <a name="docgen" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.docgen"></a>

```typescript
public readonly docgen: boolean;
```

- *Type:* boolean
- *Default:* false

Docgen by Typedoc.

---

##### `docsDirectory`<sup>Optional</sup> <a name="docsDirectory" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.docsDirectory"></a>

```typescript
public readonly docsDirectory: string;
```

- *Type:* string
- *Default:* "docs"

Docs directory.

---

##### `entrypointTypes`<sup>Optional</sup> <a name="entrypointTypes" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.entrypointTypes"></a>

```typescript
public readonly entrypointTypes: string;
```

- *Type:* string
- *Default:* .d.ts file derived from the project's entrypoint (usually lib/index.d.ts)

The .d.ts file that includes the type declarations for this module.

---

##### `eslint`<sup>Optional</sup> <a name="eslint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.eslint"></a>

```typescript
public readonly eslint: boolean;
```

- *Type:* boolean
- *Default:* true

Setup eslint.

---

##### `eslintOptions`<sup>Optional</sup> <a name="eslintOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.eslintOptions"></a>

```typescript
public readonly eslintOptions: EslintOptions;
```

- *Type:* projen.javascript.EslintOptions
- *Default:* opinionated default options

Eslint options.

---

##### `libdir`<sup>Optional</sup> <a name="libdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.libdir"></a>

```typescript
public readonly libdir: string;
```

- *Type:* string
- *Default:* "lib"

Typescript  artifacts output directory.

---

##### `projenrcTs`<sup>Optional</sup> <a name="projenrcTs" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcTs"></a>

```typescript
public readonly projenrcTs: boolean;
```

- *Type:* boolean
- *Default:* false

Use TypeScript for your projenrc file (`.projenrc.ts`).

---

##### `projenrcTsOptions`<sup>Optional</sup> <a name="projenrcTsOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.projenrcTsOptions"></a>

```typescript
public readonly projenrcTsOptions: ProjenrcOptions;
```

- *Type:* projen.typescript.ProjenrcOptions

Options for .projenrc.ts.

---

##### `sampleCode`<sup>Optional</sup> <a name="sampleCode" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.sampleCode"></a>

```typescript
public readonly sampleCode: boolean;
```

- *Type:* boolean
- *Default:* true

Generate one-time sample in `src/` and `test/` if there are no files there.

---

##### `srcdir`<sup>Optional</sup> <a name="srcdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.srcdir"></a>

```typescript
public readonly srcdir: string;
```

- *Type:* string
- *Default:* "src"

Typescript sources directory.

---

##### `testdir`<sup>Optional</sup> <a name="testdir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.testdir"></a>

```typescript
public readonly testdir: string;
```

- *Type:* string
- *Default:* "test"

Jest tests directory. Tests files should be named `xxx.test.ts`.

If this directory is under `srcdir` (e.g. `src/test`, `src/__tests__`),
then tests are going to be compiled into `lib/` and executed as javascript.
If the test directory is outside of `src`, then we configure jest to
compile the code in-memory.

---

##### `tsconfig`<sup>Optional</sup> <a name="tsconfig" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsconfig"></a>

```typescript
public readonly tsconfig: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* default options

Custom TSConfig.

---

##### `tsconfigDev`<sup>Optional</sup> <a name="tsconfigDev" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsconfigDev"></a>

```typescript
public readonly tsconfigDev: TypescriptConfigOptions;
```

- *Type:* projen.javascript.TypescriptConfigOptions
- *Default:* use the production tsconfig options

Custom tsconfig options for the development tsconfig.json file (used for testing).

---

##### `tsconfigDevFile`<sup>Optional</sup> <a name="tsconfigDevFile" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsconfigDevFile"></a>

```typescript
public readonly tsconfigDevFile: string;
```

- *Type:* string
- *Default:* "tsconfig.dev.json"

The name of the development tsconfig.json file.

---

##### `tsJestOptions`<sup>Optional</sup> <a name="tsJestOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tsJestOptions"></a>

```typescript
public readonly tsJestOptions: TsJestOptions;
```

- *Type:* projen.typescript.TsJestOptions

Options for ts-jest.

---

##### `typescriptVersion`<sup>Optional</sup> <a name="typescriptVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.typescriptVersion"></a>

```typescript
public readonly typescriptVersion: string;
```

- *Type:* string
- *Default:* "latest"

TypeScript version to use.

NOTE: Typescript is not semantically versioned and should remain on the
same minor, so we recommend using a `~` dependency (e.g. `~1.2.3`).

---

##### `buildCommand`<sup>Optional</sup> <a name="buildCommand" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.buildCommand"></a>

```typescript
public readonly buildCommand: string;
```

- *Type:* string
- *Default:* no build command

A command to execute before synthesis.

This command will be called when
running `cdk synth` or when `cdk watch` identifies a change in your source
code before redeployment.

---

##### `cdkout`<sup>Optional</sup> <a name="cdkout" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkout"></a>

```typescript
public readonly cdkout: string;
```

- *Type:* string
- *Default:* "cdk.out"

cdk.out directory.

---

##### `context`<sup>Optional</sup> <a name="context" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.context"></a>

```typescript
public readonly context: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}
- *Default:* no additional context

Additional context to include in `cdk.json`.

---

##### `featureFlags`<sup>Optional</sup> <a name="featureFlags" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.featureFlags"></a>

```typescript
public readonly featureFlags: boolean;
```

- *Type:* boolean
- *Default:* true

Include all feature flags in cdk.json.

---

##### `requireApproval`<sup>Optional</sup> <a name="requireApproval" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.requireApproval"></a>

```typescript
public readonly requireApproval: ApprovalLevel;
```

- *Type:* projen.awscdk.ApprovalLevel
- *Default:* ApprovalLevel.BROADENING

To protect you against unintended changes that affect your security posture, the AWS CDK Toolkit prompts you to approve security-related changes before deploying them.

---

##### `watchExcludes`<sup>Optional</sup> <a name="watchExcludes" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.watchExcludes"></a>

```typescript
public readonly watchExcludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to exclude from `cdk watch`.

---

##### `watchIncludes`<sup>Optional</sup> <a name="watchIncludes" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.watchIncludes"></a>

```typescript
public readonly watchIncludes: string[];
```

- *Type:* string[]
- *Default:* []

Glob patterns to include in `cdk watch`.

---

##### `cdkVersion`<sup>Required</sup> <a name="cdkVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkVersion"></a>

```typescript
public readonly cdkVersion: string;
```

- *Type:* string
- *Default:* "2.1.0"

Minimum version of the AWS CDK to depend on.

---

##### ~~`cdkAssert`~~<sup>Optional</sup> <a name="cdkAssert" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkAssert"></a>

- *Deprecated:* The

```typescript
public readonly cdkAssert: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.0.0 < 2.0.0

Warning: NodeJS only.

Install the

---

##### `cdkAssertions`<sup>Optional</sup> <a name="cdkAssertions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkAssertions"></a>

```typescript
public readonly cdkAssertions: boolean;
```

- *Type:* boolean
- *Default:* will be included by default for AWS CDK >= 1.111.0 < 2.0.0

Install the assertions library?

Only needed for CDK 1.x. If using CDK 2.x then
assertions is already included in 'aws-cdk-lib'

---

##### ~~`cdkDependencies`~~<sup>Optional</sup> <a name="cdkDependencies" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkDependencies"></a>

- *Deprecated:* For CDK 2.x use "deps" instead. (or "peerDeps" if you're building a library)

```typescript
public readonly cdkDependencies: string[];
```

- *Type:* string[]

Which AWS CDKv1 modules this project requires.

---

##### ~~`cdkDependenciesAsDeps`~~<sup>Optional</sup> <a name="cdkDependenciesAsDeps" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkDependenciesAsDeps"></a>

- *Deprecated:* Not supported in CDK v2.

```typescript
public readonly cdkDependenciesAsDeps: boolean;
```

- *Type:* boolean
- *Default:* true

If this is enabled (default), all modules declared in `cdkDependencies` will be also added as normal `dependencies` (as well as `peerDependencies`).

This is to ensure that downstream consumers actually have your CDK dependencies installed
when using npm < 7 or yarn, where peer dependencies are not automatically installed.
If this is disabled, `cdkDependencies` will be added to `devDependencies` to ensure
they are present during development.

Note: this setting only applies to construct library projects

---

##### ~~`cdkTestDependencies`~~<sup>Optional</sup> <a name="cdkTestDependencies" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkTestDependencies"></a>

- *Deprecated:* For CDK 2.x use 'devDeps' (in node.js projects) or 'testDeps' (in java projects) instead

```typescript
public readonly cdkTestDependencies: string[];
```

- *Type:* string[]

AWS CDK modules required for testing.

---

##### `cdkVersionPinning`<sup>Optional</sup> <a name="cdkVersionPinning" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.cdkVersionPinning"></a>

```typescript
public readonly cdkVersionPinning: boolean;
```

- *Type:* boolean

Use pinned version instead of caret version for CDK.

You can use this to prevent mixed versions for your CDK dependencies and to prevent auto-updates.
If you use experimental features this will let you define the moment you include breaking changes.

---

##### `constructsVersion`<sup>Optional</sup> <a name="constructsVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.constructsVersion"></a>

```typescript
public readonly constructsVersion: string;
```

- *Type:* string
- *Default:* for CDK 1.x the default is "3.2.27", for CDK 2.x the default is "10.0.5".

Minimum version of the `constructs` library to depend on.

---

##### `appEntrypoint`<sup>Optional</sup> <a name="appEntrypoint" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.appEntrypoint"></a>

```typescript
public readonly appEntrypoint: string;
```

- *Type:* string
- *Default:* "main.ts"

The CDK app's entrypoint (relative to the source directory, which is "src" by default).

---

##### `edgeLambdaAutoDiscover`<sup>Optional</sup> <a name="edgeLambdaAutoDiscover" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.edgeLambdaAutoDiscover"></a>

```typescript
public readonly edgeLambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `cloudfront.experimental.EdgeFunction` for each `.edge-lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `experimentalIntegRunner`<sup>Optional</sup> <a name="experimentalIntegRunner" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.experimentalIntegRunner"></a>

```typescript
public readonly experimentalIntegRunner: boolean;
```

- *Type:* boolean
- *Default:* false

Enable experimental support for the AWS CDK integ-runner.

---

##### `integrationTestAutoDiscover`<sup>Optional</sup> <a name="integrationTestAutoDiscover" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.integrationTestAutoDiscover"></a>

```typescript
public readonly integrationTestAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically discovers and creates integration tests for each `.integ.ts` file in under your test directory.

---

##### `lambdaAutoDiscover`<sup>Optional</sup> <a name="lambdaAutoDiscover" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.lambdaAutoDiscover"></a>

```typescript
public readonly lambdaAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaFunction` for each `.lambda.ts` handler in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaExtensionAutoDiscover`<sup>Optional</sup> <a name="lambdaExtensionAutoDiscover" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.lambdaExtensionAutoDiscover"></a>

```typescript
public readonly lambdaExtensionAutoDiscover: boolean;
```

- *Type:* boolean
- *Default:* true

Automatically adds an `awscdk.LambdaExtension` for each `.lambda-extension.ts` entrypoint in your source tree. If this is disabled, you can manually add an `awscdk.AutoDiscover` component to your project.

---

##### `lambdaOptions`<sup>Optional</sup> <a name="lambdaOptions" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.lambdaOptions"></a>

```typescript
public readonly lambdaOptions: LambdaFunctionCommonOptions;
```

- *Type:* projen.awscdk.LambdaFunctionCommonOptions
- *Default:* default options

Common options for all AWS Lambda functions.

---

##### `awsSdkV3Version`<sup>Optional</sup> <a name="awsSdkV3Version" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.awsSdkV3Version"></a>

```typescript
public readonly awsSdkV3Version: string;
```

- *Type:* string
- *Default:* "3.229.0"

AWS JavaScript SDK v3 version.

---

##### `nvmNodeVersion`<sup>Optional</sup> <a name="nvmNodeVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.nvmNodeVersion"></a>

```typescript
public readonly nvmNodeVersion: string;
```

- *Type:* string
- *Default:* "16"

nvm node version.

---

##### `reactTypesVersion`<sup>Optional</sup> <a name="reactTypesVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.reactTypesVersion"></a>

```typescript
public readonly reactTypesVersion: string;
```

- *Type:* string
- *Default:* "^18"

React @types version.

---

##### `reactVersion`<sup>Optional</sup> <a name="reactVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.reactVersion"></a>

```typescript
public readonly reactVersion: string;
```

- *Type:* string
- *Default:* "^18"

React version.

---

##### `remixDir`<sup>Optional</sup> <a name="remixDir" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.remixDir"></a>

```typescript
public readonly remixDir: string;
```

- *Type:* string
- *Default:* 'remix'

Directory that remix project files should be in.

---

##### `remixVersion`<sup>Optional</sup> <a name="remixVersion" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.remixVersion"></a>

```typescript
public readonly remixVersion: string;
```

- *Type:* string
- *Default:* "1.9.0"

Remix version.

---

##### `tailwind`<sup>Optional</sup> <a name="tailwind" id="@rogerchi/projen-remix-project.RemixAwsCdkTypeScriptProjectOptions.property.tailwind"></a>

```typescript
public readonly tailwind: boolean;
```

- *Type:* boolean
- *Default:* true

Enable tailwind.

---



