Lesson 5 - Node Static Server
==================

Well, shit.  Your website is cool, but you've gotta put it on the web!  Contrary to popular belief, websites are actually much cooler when they're ACTUALLY ON THE INTERNET.  Go figure.  You're going to need a server to put your files on the internet.  There are many ways to do this, and one of the most popular is to use Express, because it's fast and easy...

If you scroll down this blog post, it's pretty easy to see that this is NOT what we're doing today.  But if getting your website up asap is your goal, here ya go.  Knock yourself out:

```javascript
var express = require('express');
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 3000);
```

But, why would I go through the trouble to write a 3000 word blog post on how to build a Node.js server when we can just use Express and be done in 4 lines?  Taking the time to go through something like this is not only interesting, but also plays an important part in understanding just how data flows on the internet.  Aka it's fun and really interesting.

In simple words, the goal here is to use this server as an introduction to all the cool things Node.js can do!  There's a ton of useful functionality that Node includes, and it's alot more fun to learn about it by building stuff than by reading the [Node.js Documentation](https://nodejs.org/api/).

Before we get right into it, let's go over a real basic understanding of what we're building.  Asking the important questions like:
### What's a server?
In the simplest terms, a [server](http://en.wikipedia.org/wiki/Server_%28computing%29) is an application that can take requests from a client and respond to them.  In web terms, we usually take client to mean some random person on a web browser that happens upon your website.  It's your server's job to take their requests and respond accordingly!
### What's a Static File Server?
Just what it sounds like!  It's a server that serves [static files](http://en.wikipedia.org/wiki/Static_web_page) (files that don't change).  This is referring to the idea that our files are served in the same way they were stored.

### Alright it's time to do it!
Let's get at it!  For this tutorial, I'm going to assume that you have basic javascript knowledge, but know nothing or very little about the glorious creature that is Node.js.  By the end, though, I hope you will feel comfortable both making a server of your own, and diving deeper into Node.js!

Follow along in the [Node Static Server exercise folder](https://github.com/ivebencrazy/learn-js-from-ben/tree/master/lessons/node-static-server/exercise) by adding code to the `server.js` file.  It'll contain our file structure and a sample website for us to serve!

But now we're ready!  Let's get down to business!

## Declaring our Dependencies

So first, we want to declare our dependencies.  I will go into more detail on what each of them are as we use them in the program, but here we're just going to list them out and get a brief explanation.  Your code should look like this:

```javascript
// Declare our dependencies.
var http = require('http');
var url  = require('url');
var path = require('path');
var fs   = require('fs');
```

Let's first look at this syntax.  `require` is our way of telling Node that we're using these resources.  Since all the tools we are using are built-in features of Node, we don't have to include any special files in our directory.  Nevertheless, Node compartmentalizes these objects, so we still have to require them.

Let's take a look at the dependencies we're using:

#### `http`
[http](https://nodejs.org/api/http.html#http_http) contains a whole bunch of tools to help us send web requests.  We're going to use this right off the bat in order to start building our server!

#### `url`
[url](https://nodejs.org/api/url.html#url_url) holds tools to format and parse the web urls we receive.

#### `path`
[path](https://nodejs.org/api/path.html#path_path) has some pretty basic, but useful things that help us format and parse filesystem locations.

#### `fs`
[fs](https://nodejs.org/api/fs.html#fs_file_system) gives us access to a stupid amount of utilities to access, write, edit, and delete to our filesystem.  This is how we interact with our computer.

## Building the Structure

Alright!  So we've got the resources we need to start making our server!  Let's start building by writing just a single line of code:

```javascript
/* The dependencies we wrote go here! */
var port = process.argv[2] || 3000;
```

This is the port number that our server is going to run on.  With this setup, we can specify any port we want, but if we don't specify anything at all, our server will default to port 3000.  What this means is that if our server is running and we type http://localhost:3000 into our web browser, our server's response wil show up there!

#### `process.argv[2]`
The `process.argv[2]` is just there in case we want to declare a custom port number.  The [process](https://nodejs.org/api/process.html#process_process) object and its methods are included in Node.js, and they give us access to information about the processes that we're running.  In this case, [argv](https://nodejs.org/api/process.html#process_process_argv)[2] is telling us the first argument that we pass in when we run our server.  Here's a little example I stole from the Node.js documentation.  It will help us understand exactly how that works:

```
$ node process.js param1 param2 param3
```
```
//argv[0] = node
//argv[1] = /Users/ben/work/node/process.js
//argv[2] = param1
//argv[3] = param2
//argv[4] = param3
```

So as we can see, argv is simply telling us each of the arguments that we passed into the terminal window.  The first index is the initial command (node), while the second index is the filepath to our javascript file.  Therefore, the parameters we passed in start being recorded at argv[2].  When we  start our server, our command will look more like this: `node server.js`, and our server will default to port 3000.  But with our fancy argv, we can set easily set up our server to run on another port, like port 1337 `node server.js 1337`.  Sweet!

Let's look at the rest of our setup code!

```javascript
/*  Our previously written code  */
var server = http.createServer(serverCallback);
server.listen(port);
console.log("Server running at: http://localhost:" + port);
```

Alright.   We finally see our server!  You might have noticed that we're also using one of our dependencies for the first time.

#### `http.createServer()`
createServer() is creating a [server object](https://nodejs.org/api/http.html#http_class_http_server) that runs our callback function `serverCallback` whenever our server is called.  You'll notice that we haven't actually written `serverCallback` yet, but don't worry!  That's what we're doing in the next section!  Oooooo.  And if you don't know what a callback function is, you can read all about them in [this brilliant blog post](http://javascriptissexy.com/understand-javascript-callback-functions-and-use-them/).  Callbacks are and invaluable concept to understand in Node.js (and in javascript), so take your time and learn them right.

#### `server.listen(port)`
[server.listen(port)](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback) simply tells our server to listen for web requests directed at the port we specified earlier.  Before we go into the next section, let's just keep track of where we are.  Hopefully at this point, your code looks like this:

```javascript
// Declare our dependencies.
var http = require('http');
var url  = require('url');
var path = require('path');
var fs   = require('fs');

// Set our port number
var port = process.argv[2] || 3000;

// Start our server using the serverCallback function
var server = http.createServer(serverCallback);

// Have our server listen to requests at our specified port
server.listen(port);

// Log out to our console, so we know where our server is running!
console.log("Server running at: http://localhost:" + port)
```

## Creating the Function of our Server

So now we have the basic structure to our server!  Now we need to tell it what to do when a request comes in.  Let's make our callback function:

```javascript
/*  Our dependencies are up here */

var serverCallback = function(incomingMessage, response){

  var uri = url.parse(incomingMessage.url).pathname;
  var file = path.join(process.cwd(), uri);

  fs.open(file, 'r', function(error) {

    if(error) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found')
      response.end();
      return;
    });

    fs.readFile(file, function(error, file) {

      if(error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write(error + '\n');
        response.end();
        return;
      });

      response.writeHead(200);
      response.write(file);
      response.end();
    });
  });
};

/*  Our port number and server setup is down here */
```

I know I know it's a lot.  But let's take it piece by piece.  We'll start by just looking at the first line:

```javascript
var serverCallback = function(incomingMessage, response){
```


### Our Parameters
Our callback function takes two parameters, "incomingMessage" and "response".  What are these?

#### `incomingMessage`
[IncomingMessage](https://nodejs.org/api/http.html#http_http_incomingmessage) is the message we're receiving from the client (aka a visitor's browser).  We'll be looking through this to see what the user is looking for.  However, since we're just serving a static website, we won't do much else with it here.

#### `response`
You may look at this next parameter and say "Wait a sec.  Aren't we the ones sending a response?  Why are we taking a parameter?"  Well, you're absolutely right.  But our [response](https://nodejs.org/api/http.html#http_class_http_serverresponse) parameter isn't actually the message we're sending back.  This response is a super cool object that Node gives us to help us build our message!  How convenient!  And if you look towards the bottom of our new code, you can see it being used to write a file!  But we'll come right back to that.  For nowwww, let's take a glance at our second line of code - and it's a doozy of one.

## Getting our file Paths

```javascript
var uri = url.parse(incomingMessage.url).pathname;
var file = path.join(process.cwd(), uri);
```

So actually, I lied.  This is not neaaaarly as complicated as it seems.  All this does is get the location of the file that our client is requesting.  There's a few pieces doing different things, so let's do that thing where we break it down.

#### `path.join(argument1, argument2, argument3, etc....)`

This one's super easy.  We got it from our path dependency(remember that?).  Basically, all this does is glues together all its arguments as a file path.  Aight.  So why do we use [path.join](https://nodejs.org/api/path.html#path_path_join_path1_path2)?  Why not just use join?  Well, you certainly could, but path.join is butter, because it's built specifically with filesystems in mind.  It has a lot of under-the-hood things to help your file path stay formated correctly every time regardless of the kinds of paths you're glueing.  So let's now take a look at the two paths we're glueing together:

#### `process.cwd()`

Remember process?  We used it earlier to get the arguments from our console!  Well our homie is back again, this time helping us out by giving us our current working directory!

>##### `process.cwd()` vs `__dirname`
You might occasionally see [__dirname](https://nodejs.org/docs/latest/api/globals.html#globals_dirname) used in this context as well.  The difference is that while `process.cwd()` gives us our working directory (ie where you invoked the `node` command in your terminal),  `__dirname` gives us the location of our javascript file (ie server.js).  For our purposes, either would work fine.

>>**You might want to use  `process.cwd()`**

>>if you moved your serverCallback function to another directory.  Since `__dirname` is in fact not global, but rather local to each module, it could give you a directory you don't expect.

>>**You might want to use  `__dirname`**

>>if you intend to daemonize your server (aka have an application from another directory run your server).  Since the process would run from another directory, `process.cwd()` wouldn't give you the directory you wanted.

#### `url.parse(incomingMessage.url).pathname`

[url.parse](https://nodejs.org/docs/latest/api/url.html#url_url_parse_urlstr_parsequerystring_slashesdenotehost) is a method from our url dependency.  It lets us take a url path, and turn it into a [url object](https://nodejs.org/docs/latest/api/url.html#url_url), giving us a few different ways to look at the information.  One property of that is pathname, which just gives us the path of our url.  In this case, we're getting the path of incomingMessage.url!  Again, the reasoning of using this rather than using the straight incomingMessage.url property has to do with formatting and the fact that the path might not be exactly what you expect.  A small example would be if there was query information at the back of the message.  Basically, Node's just watching our backs for inconsistencies.

### Finding our First File

```javascript
if(fs.statSync(file).isDirectory()){
  file += 'index.html';
}
```

## Status Codes
Before we go over the last part of our code, we should talk about status codes. Status codes are a standardized and helpful way for a server to succinctly communicate what has happened with a incoming request.  You can read what all of them mean [here](http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html), but I'll just go over the one's we're implementing into our server.

#### `404 - Page Not Found`
This response is telling our client that the page they're looking for isn't on our website!  We want to send the client this code if they're looking for a page that doesn't exist.  An example of this is if we tried to access our website at http://localhost:3000/gobblygook.  Since "gobblygook" isn't a path in our filesystem, it won't go through.  A lot of websites has pretty silly 404 pages, so try typing in some random text the next time you visit https://github.com/gobblygook!

#### `500 - Internal Server Error`
This response is basically telling our client that we messed up somewhere.  Hopefully this will never run, but just in case, we've got it here.

#### `200 - SUCCESS!!!`
We got your request, and successfully processed it!  In our case, we'll also be sending back our wesite data with our response as well.

## Sending a Response
We're almost there!  After this code, our server should interpret a request, and send a response!  Let's take a look at the part of our code that writes and sends messages:

```javascript
fs.open(file, 'r', function(error) {

  if(error) {
    response.writeHead(404, {'Content-Type': 'text/plain'});
    response.write('404 Not Found')
    response.end();
    return;
  });

  fs.readFile(fileText, function(error, file) {

    if(error) {
      response.writeHead(500, {'Content-Type': 'text/plain'});
      response.write(error);
      response.end();
      return;
    });

    response.writeHead(200);
    response.write(fileText);
    response.end();
  });
});
```

This code will, as a whole, open the file that the client asks for, read that file, write it to the response, and then send it on its way.  You'll also notice our status codes throughout this code.  But let's get on with it!  Let's look at our first new line of code:

## Opening our Files
#### `fs.open(file, 'r', function(error) {`
[fs.open](https://nodejs.org/api/fs.html#fs_fs_open_path_flags_mode_callback) is part of our fs dependency we declared at the top of our file.  If you remember, fs deals with the filesystem around our server, so you can expect open to do something with that.

An fs.open call usually looks like this:  `fs.open(path, flags, callback)`.
Let's look at our arguments:

- **Path** - The path is where our file is.  That part's pretty obvious.

- **Flags** - Flags just tell fs.open how it should open a file.  You can read more about them in the documentation, but we are using the 'r' tag when we call the function.  This is telling fs.open that we are only going to be reading the file, and won't be editing it.

- **Callback** - Our callback function is what's going to run after we open the file.  Since we can't read or write from the file until we open it, we're just going to throw all of it into an anonymous function to pass as the last argument.


So what happens if the file doesn't exist?  If the file that the client is looking for doesn't exist, we need to send them our 404 page!  Fortunately, fs.open will pass an error to the callback function if it can't find the file.  That's where our next bit of code comes in...

### Sending our 404 Response
```javascript
if(error) {
  response.writeHead(404, {'Content-Type': 'text/plain'});
  response.write('404 Not Found')
  response.end();
  return;
});
```
If this code encounters an error, we will send our client a 404 page!  That's perfect, because our fs.open only returns an error if it can't find the file!  Let's look at exactly how that works:
#### `response.writeHead()`
writeHead() just writes to the header of our response.  In this , we're telling our response that our status code is a 404, and that the content we're sending back to the client is plain text.  Easy as pie.  We'll talk more about headers in my next blog post, where we'll talk about deploying our server.
#### `response.write()`
write() will do the actual writing to our response message.  Since we don't actually have any files to send, we'll just send a string back as a text response.  If a user starts typing in random things, we'll default them to this error text.
#### `response.end()`
end() signals the end of our data!  Our response is done, so we can send it back now!
#### `return;`
The reason we use return here is because we don't want the rest of the code to run, since we already sent back our response.  Return will escape us out of our serverCallback function and that will be that!

We've now finished writing our first response!  Albeit it's not quite the response we want to be sending, but it's a response nonetheless.  Break time!  Drink some sparkling cider or something!

## Reading our Files
#### `fs.readFile(file, function(error, fileText) {`
Nice !  At this point, we know that our file exists, so we're looking good!  Now, [fs.readFile](https://nodejs.org/api/fs.html#fs_fs_readfile_filename_options_callback) takes our file and reads it!  This will take the 'file', which is the location of our file, and give us the gravy inside (that's the text).

An fs.readFile call usually looks like this: `fs.readFile(filename, callback)`
It takes two arguments:

- **filename** - our file.  duh.
- **callback** - another callback function!  Within which we will be reading our files and sending the client our html file!  The first parameter that fs.Readfile passes into our callback is an error, and the second is our text!

So now we're inside our readFile callback, and somehow we have trouble reading the file. Then our error will kick in.  Maybe our file's corrupted!  Maybe the [nargles](http://harrypotter.wikia.com/wiki/Nargle) took them all and messed them all up! We will never quite know, but we should probably send a 500 response to tell the client we messed up.

### Sending our 500 Response
Waaaaaait a second!  This is EXACTLY THE SAME THING AS THE 400 RESPONSE!

... ... ...Yup.  It is.  Knock yourself out.  You know how to do this one.  However let's be a little more specific this time.  With a 404, we knew exactly why our code wasn't working, but with this, it's more unclear, so we'd like to be more specific and know why our code is breaking.  Let's pass in the error text itself as a response, so that the user can see exactly what went wrong!  Easy!

### ACTUALLY Sending our Files (Finally!)
We finally got here!  This is the part where we send our files to the client!  And look at that!  It's also really similar to the way we sent our first two responses!  There's only a few little differences:

#### `response.writeHead()`
This time, we're just writing the status code.  We haven't been super specific on the type of content we're serving, so that could be a way in which our server could improve, but most client browsers are pretty smart.

#### `response.write()`
So if you didn't notice, we're passing in the text of our file, rather than the file path itself.  If we were to pass in 'file', we'd just be passing in the location of our file (a string).  But since we're putting in our file text, it means we've sent our file successfully!!!  YAAAAAAYYYYYYYYYYY!!!!! IT WORRRRKKKKKSSSSSS!!!!!!!

Quickly! Quickly!  cd into the folder with your server.js file and type in the magic words with me!
`node server.js`

Then mozy on over to http://localhost:3000 and what do we find?

![Flappy Bird!](./images/flappy-bird.png?raw=true)


Alright!!!  We did it!!! If it doesn't quite work, I've made a gist of what your code should look like, so make a few adjustments and your code looks like this:


```javascript
// Declare our dependencies.
var http = require('http');
var url  = require('url');
var path = require('path');
var fs   = require('fs');

// The function we run on every incoming message
var serverCallback = function(incomingMessage, response) {

  // Get the location of our file
  var file = path.join(process.cwd(), url.parse(incomingMessage.url).pathname);

  // Attempt to open our file
  fs.open(file, 'r', function(error) {

    // If the file doesn't exist on our server, send a 404 response
    if(error) {
      response.writeHead(404, {'Content-Type': 'text/plain'});
      response.write('404 Not Found\n');
      response.end();
      return;
    }

    // If the requested file is a directory, append our index.html
    if(fs.statSync(file).isDirectory()){
      file += 'index.html';
    }

    // Read our file
    fs.readFile(file, function(error, fileText) {

      // If there's an error, we have an error!  Send back a 500 response.
      if(error) {
        response.writeHead(500, {'Content-Type': 'text/plain'});
        response.write(error + "\n");
        response.end();
        return;
      }

      // Send back a 200 response with the requested data.
      response.writeHead(200);
      response.write(fileText);
      response.end();
    });
  });
};

// Set our port number
var port = process.argv[2] || 3000;

// Start our server using the serverCallback function
var server = http.createServer(serverCallback);

// Have our server listen to requests at our specified port
server.listen(port);

// Log out to our console, so we know where our server is running!
console.log("Server running at: http://localhost:" + port);
```

At this point, your server should work!  WOOOOOO!!!!  Keep in mind that if we want other people to access our server, we haven't set that up quiiite yet.  However, I'll be posting a new blog post to help us do that really soon, so stay tuned!


### So how does our Shiny New Server Work?

*Note: Illustrations coming soon*

We can't go through all the trouble of building this thing and not even know how it works, right?  So let's follow what happens when a request reaches our server.  Let's pretend that this is the absolute first request that is sent to our server, and our server is holding the `index.html` file that was included in our [exercise directory](https://github.com/ivebencrazy/learn-js-from-ben/tree/master/lessons/node-static-server/exercise):

#### Step 1:
**Our request reaches the server, and our serverCallback begins!**  It doesn't matter kind of request it is, because we're only responding with our files.  So whether it's a GET or a POST or whatever, we'll always respond with our files.

#### Step 2:
**We will figure out what file the client is looking for...**  Our Line 11 code will help us with that!  We'll save the output to `file`, and that will be the location of the file we need to send back!

#### Step 3:
**Open the file**  So next we open the file, primed for reading because of our 'r' tag.  Since our client is hopefully smart, it's a valid request and we don't have to send them a 404 response.

#### Step 4:
**Append `index.html` to the file path**  So if you run your server and look at http://localhost:3000 in your favorite web browser, that first web request has a path of `/`!  It's empty, because they don't know that they're looking for our index.html page!  So we're helping them find it here.

#### Step 5:
**Read the file, and send back our index.html**  So now we have the location of our index.html file.  fs will help us read the file and send our index.html file.

#### Step 6 (This happens on the user's browser):
**The client's browser reads the dependencies of index.html**  The browser reads the index.html file, and says WAIT.  I NEED MORE STUFF.  So then guess what happens?

#### Step 7:
**We get more requests!** This time for the .css and .js files.  Maybe in the future, we'll have a cooler site with even more .css and .js files, but our server will still be able to serve them!


**Additional Resources**
 - [Learn Express](https://www.codecademy.com/learn/learn-express)
 