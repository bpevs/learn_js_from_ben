# Learn JS

I'm making this repository, since I seem to keep teaching people how to code.
This way I can keep common resources in the same place, which will be helpful.

The layout of this repository is basically:

- `tracks`: this will be where we define when to do what lessons
- `lessons`: all the full lessons, in no particular order
- `tips`: various small hints and tips can be put here

## Bookmarks

Before we start in earnest, you will want to save these resources.

- [MDN Web Docs](https://developer.mozilla.org/en-US/) This is essentially your
  dictionary. You'll be referencing this website a lot for what you can do with
  Javascript and other web technologies.
- [Github](https://github.com) Please make a Github account. This will let us
  more easily share code.
- [coderbyte.com](https://coderbyte.com) There are a few of these "interview
  question" practice sites. I selected this one somewhat arbitrarily. Please
  make an account here. We'll probably end up doing a lot of the easy and medium
  challenges on this site. I don't think studying interview questions is really
  that useful for interviews, but I DO think that studying interview questions
  is great for beginners to become more familiar with code and how to solve
  problems. Feel free to approach these exercises all out of order at your
  leisure, and do them when you want change it up from lessons or tutorials.

## Downloads

The only thing I'm assuming is the use of a MacOS Mavericks or above (please
look up "About this Mac", and make sure you are higher than version OS X 10.9.0
Mavericks). These suggestions are based around usefulness vs easy of
installation and use.

### Web Browser

There are a lot of them. To start, please download
[Chrome](https://www.google.com/chrome/). It has great devtools, and is usually
the standard for web developers to write on, since it has such a large
marketshare.

### Code Editor

There are a few options here. These are text editors with tools specifically to
help make coding easier. I will suggest
[Visual Studio Code](https://code.visualstudio.com/) for now, just because it's
free and easy to set up with pretty standard settings. Some other popular ones
for website development are Sublime and WebStorm.

### [Git](https://git-scm.com/)

How to install (from the
[Git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)):

- Open terminal (Applications > Utilities > Terminal)
- Type `git --version` and enter
- If you don’t have it installed already, it will prompt you to install it.
- Restart the Terminal

### [NVM](https://github.com/creationix/nvm)

Node Version Manager. This is to help us install Node.js.

- Open terminal
- Paste the command
  `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
- Restart the Terminal

This runs the installation script to install NVM.  If you type `nvm`, a huge
list of commands should pop up.

### [Node.js](https://nodejs.org/en/)

Install this with NVM like this:

- `nvm install 16.14.0`
- `nvm use 16.14.0`
- `nvm alias default 16.14.0`

Now type `node`. A little arrow should pop up on the side. Type 2 + 2. Should
look something like this:

![Node is running!](./images/node-is-running.png)

Press `ctrl-c` to exit. We want node so that we can run non-website Javascript
on our computer.

### Prerequisite Learning

Probably before we do anything else, I recommend doing
[NodeSchool's](https://nodeschool.io) javascripting tutorial.

```
npm install -g javascripting
javascripting
```
