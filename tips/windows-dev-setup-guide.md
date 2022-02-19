# Windows

## Downloads

Fortunately, Microsoft has made a tutorial for installing all the things you
will need! Use [this tutorial](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows) to install:

- VS Code
- NVM
- node.js (via NVM)
- git

To complete this guide, you will prooobably need to run PowerShell as an administrator (right-click)

## Settings

You will want to
[set your PowerShell execution policy](https://docs.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.2)
to allow running scripts in PowerShell (note: according to the linked docs, this
is not a security feature, but is just to protect regular users from doing dumb
shit with scripts they don't understand).

```
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```
