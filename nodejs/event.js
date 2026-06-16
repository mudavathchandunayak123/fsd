const EventEmitter = require('events');

// Create an EventEmitter object
const eventEmitter = new EventEmitter();

// Register an event listener
eventEmitter.on('greet', () => {
    console.log('Hello! Welcome to Node.js Events Module.');
});

// Emit (trigger) the event
eventEmitter.emit('greet');