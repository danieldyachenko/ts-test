interface User {
  name: string;
}

type Observable<T extends {}> = T & {
  handlers: Array<Function>;
  observe: (handler: Function) => void;
};

function makeObservable<T extends {}>(target: T) {
  const observableTarget: Observable<T> = {
    ...target,
    handlers: [],
    observe(handler: Function) {
      this.handlers.push(handler);
    },
  };

  Object.defineProperty(observableTarget, 'handlers', {
    enumerable: false,
    configurable: false,
    writable: false,
  });

  return new Proxy(observableTarget, {
    set(target, property, value) {
      const success = Reflect.set(target, property, value);
      if (success) {
        observableTarget.handlers.forEach(handler => handler(property, value));
      }
      return success;
    },
  });
}

const user: Observable<User> = makeObservable<User>({
  name: 'Даниил',
});

user.observe((key: string, value: string): void => {
  console.log(`SET ${key}=${value}`); // Как-то реагируем на изменения
});

user.name = 'Андрей'; // SET name=Андрей
user.name = 'Никита'; // SET name=Никита


