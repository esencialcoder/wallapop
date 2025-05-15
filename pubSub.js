export const pubSub = (() => {
  const subscribers = {};

  function subscribe(eventName, callback) {
    if (!subscribers[eventName]) {
      subscribers[eventName] = [];
    }
    subscribers[eventName].push(callback);
  }

  function publish(eventName, data) {
    if (!subscribers[eventName]) return;
    subscribers[eventName].forEach((callback) => callback(data));
  }

  return {
    subscribe,
    publish,
  };
})();
