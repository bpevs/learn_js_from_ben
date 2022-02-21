import { EventListener } from "./index.js";

var events;
var myEvent;
var myEvent2;
var myEvent3;

beforeEach(function () {
  // Create a new EventListener for every test
  events = new EventListener();

  // Create fake functions we can track for testing purposes
  myEvent = expect.createSpy();
  myEvent2 = expect.createSpy();
  myEvent3 = expect.createSpy();
});

describe("Event Listener", function () {
  it("Should be able to add a listener", function () {
    // Add an event handler
    events.on("hello", myEvent);

    // Expect an event to exist in our storage
    expect(events._events["hello"][0]).toBe(myEvent);
  });

  it("Should be able to trigger a listener", function () {
    // Add an event handler
    events.on("hello", myEvent);

    // Trigger an event
    events.trigger("hello");

    // Expect our handler to have been called
    expect(myEvent.calls.length).toEqual(1, "Listener never triggered");
  });

  it("Should be able to remove all listeners for a given event", function () {
    // Add event handlers
    events.on("hello", myEvent);
    events.on("hello", myEvent2);

    // Remove an event handler
    events.off("hello");

    // Trigger an event
    events.trigger("hello");

    // Expect our handler to have never been called
    expect(myEvent.calls.length).toEqual(0, "Listener was not removed");
  });

  it("Should be able to remove a listener", function () {
    // Add an event handler
    events.on("hello", myEvent);
    events.on("hello", myEvent2);

    // Trigger an event
    events.trigger("hello");

    // Remove a specific event handler
    events.off("hello", myEvent);

    // Trigger an event
    events.trigger("hello");

    // Expect event1 to only have been called the first time
    // Expect event2 to have been called both times
    expect(myEvent.calls.length).toEqual(1, "Listener was not removed");
    expect(myEvent2.calls.length).toEqual(2, "Listener was not removed");
  });

  it("Should not break if removing an non-existent listener", function () {
    // Remove a specific event handler
    events.off("hello", myEvent);

    // Trigger an event
    events.trigger("hello");

    // Expect nothing to have happened
    expect(myEvent.calls.length).toEqual(0, "Listener was not removed");
  });
});

describe("Multiple Events", function () {
  it("Should be able to add multiple listeners to the same name", function () {
    // Add event handlers
    events.on("hello", myEvent);
    events.on("hello", myEvent2);
    events.on("hello", myEvent3);

    // Trigger event
    events.trigger("hello");

    // Expect all handlers to have been called
    expect(myEvent.calls.length).toEqual(1);
    expect(myEvent2.calls.length).toEqual(1);
    expect(myEvent3.calls.length).toEqual(1);
  });

  it("Should be able to add multiple names", function () {
    // Add event handlers for different events
    events.on("hello", myEvent);
    events.on("hello2", myEvent2);
    events.on("hello3", myEvent3);

    // Fire each event, and expect the respective handler to be called
    events.trigger("hello");
    expect(myEvent.calls.length).toEqual(1);
    expect(myEvent2).toNotHaveBeenCalled();
    expect(myEvent3).toNotHaveBeenCalled();

    events.trigger("hello3");
    expect(myEvent.calls.length).toEqual(1);
    expect(myEvent2).toNotHaveBeenCalled();
    expect(myEvent3.calls.length).toEqual(1);

    events.trigger("hello2");
    expect(myEvent.calls.length).toEqual(1);
    expect(myEvent2.calls.length).toEqual(1);
    expect(myEvent3.calls.length).toEqual(1);
  });
});

// Extra credit! You will want to use the arguments keyword and apply method to complete this
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
describe("Dealing with Arguments", function () {
  it("Should pass any additional arguments to the handler", function () {
    // Add an event
    events.on("hello", myEvent);

    // Trigger an event, passing in arguments
    events.trigger("hello", "one", "two", "three");

    // Expect handler to have been called with the given arguments
    expect(myEvent).toHaveBeenCalledWith("one", "two", "three");
  });
});
