class ChartObserver {
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

const chartObserver = new ChartObserver();

export default chartObserver;
