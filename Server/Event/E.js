const EventEmitter = require('events');
const emitter = new EventEmitter();

// Emit event with arguments
emitter.on('userJoined', (username, userId) => {
  console.log(`${username} (${userId}) has joined the chat`);
});
emitter.emit('userJoined', 'Kai', 42);
//  Outputs: Kai (42) has joined the chat


// emitter.on("Heyy",()=>{
//   console.log("hellooo");
  
// })

// emitter.emit(Heyy)


// Register an event listener
emitter.on('greet', () => {
  console.log('Hello there!');
});

// Emit the event
emitter.emit('greet');



emitter.on('userJoined',(username, userId)=>{
  console.log(`${username}  (${userId}) has joined`);
  
});

emitter.emit('userJoined','uma',23);
