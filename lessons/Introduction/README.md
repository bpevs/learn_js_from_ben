Introduction
============
**Prerequisites:**
 - [Intro to HTML](https://www.codecademy.com/learn/learn-html)
 - [Intro to CSS](https://www.codecademy.com/learn/learn-css)
 - [Chrome DevTools Tutorial](https://www.codeschool.com/courses/discover-devtools) level 1
 - [Intro to Javascript](https://www.codecademy.com/learn/introduction-to-javascript) lessons 1-9
 - [Chrome DevTools Tutorial](https://www.codeschool.com/courses/discover-devtools) level 2-3

Bookmarks
---------
 - [MDN Web Docs](https://developer.mozilla.org/en-US/)
   This is essentially your dictionary. You'll be referencing this website a lot for what you can do with Javascript and other web technologies.
 - [Github](https://github.com)
   Please make a Github account. This will let us more easily share code.

Downloads
-----------
The only thing I'm assuming is the use of a MacOS Mavericks or above (please look up "About this Mac", and make sure you are higher than version OS X 10.9.0 Mavericks). These suggestions are based around usefulness vs easy of installation and use.

#### Web Browser
There are a lot of them. To start, please download [Chrome](https://www.google.com/chrome/) if you don't already have it. It has great devtools, and is usually quite standard for web developers to write on.

#### Code Editor
There are a few options here. These are text editors with tools specifically to help make coding easier. I will suggest [Atom](https://atom.io) for now, just because it's free and easy to set up with pretty standard settings. Some other popular ones for website development are Sublime, WebStorm, and Visual Studio Code.

#### [Git](https://git-scm.com/)
How to install (from the [Git website](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)):

 - Open terminal (Applications > Utilities > Terminal)
 - Type `git --version` and enter
 - If you don’t have it installed already, it will prompt you to install it.
 - Restart the Terminal

#### [NVM](https://github.com/creationix/nvm)
Node Version Manager. This is to help us install Node.js. 

 - Open terminal
 - Paste the command `curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.8/install.sh | bash`
 - Restart the Terminal

This runs the installation script to install NVM. 
If you type `nvm`, a huge list of commands should pop up.

#### [Node.js](https://nodejs.org/en/)
Install this with NVM like this: 

 - `nvm install 8.9.0`
 - `nvm use 8.9.0`
 - `nvm alias default 8.9.0`

Now type `node`. A little arrow should pop up on the side. Type 2 + 2. Should look something like this:

![Node is running!](./images/node-is-running.png)

Press `ctrl-c` to exit.
We want node so that we can run non-website Javascript on our computer.


Learning Resources
---------
#### [coderbyte.com](https://coderbyte.com)
Please make an account here. We'll probably end up doing a lot of the easy and medium challenges on this site. It's a good site for short practice things, just getting you more familiar solving problems with code. Feel free to approach these exercieses all out of order at your leisure, and do them when you want change it up from tutorials.

#### [NodeSchool](https://nodeschool.io)
Another site with useful tutorials. I would like to check up after you do codecademy tutorials, but those should put you in a place where you can start taking a look at tutorials from nodeschool:
 - javascripting
 - learnyouhtml
 - how-to-markdown
 - learnyounode (this might be too difficult for you at this moment? Let me know if you try it.)

Some parts of these should be review, but seeing it in different contexts with different examples just gets you a bit more used to seeing code.
