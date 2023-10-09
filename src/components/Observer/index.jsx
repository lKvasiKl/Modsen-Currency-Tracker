class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(observer) {
    this.observers.push(observer);
  }

  unsubscribe(observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifySubscribers() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

const observer = new Observer();

export default observer;
