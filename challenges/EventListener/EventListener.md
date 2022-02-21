# Event Listener

A simplified event listener based on [Backbone's](http://backbonejs.org/#Events)
implementation, or more loosely similar to
[jQuery events](https://api.jquery.com/category/events/) or the DOM's
[EventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/EventTarget)
api. This challenge should be a good way to explore how asynchronisity works.

## To Start

- `cd into this directory`
- `npx node-static ./` - or - `npm install -g node-static && static ./`
- Open web browser to http://127.0.0.1:8080

## How it Works

```js
import { EventListener } from "./index";
const myEvents = new EventListener();

myEvents.on("click", function () {
  console.log("lalala");
});

myEvents.on("click", function () {
  console.log("lalala2");
});

myEvents.trigger("click");
// > "lalala"
// > "lalala2"

myEvents.off("click");

myEvents.trigger("click");
// >
```

## on

- http://backbonejs.org/#Events-on
- http://api.jquery.com/on/
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener

## trigger

- http://backbonejs.org/#Events-trigger
- http://api.jquery.com/trigger/
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/dispatchEvent

## off

- http://backbonejs.org/#Events-off
- http://api.jquery.com/off/
- https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener
