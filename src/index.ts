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

  const descriptor = {
    writable: false,
    configurable: false,
    enumerable: false,
  };

  Object.defineProperties(observableTarget, {
    handlers: descriptor,
    observe: descriptor,
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

user.observe((key: string, value: string) => {
  console.log(`SET ${key}=${value}`); // Как-то реагируем на изменения
});

user.name = 'Андрей'; // SET name=Андрей

//Задачка

function reverse(s: string, k: number): string | Function {
  if (k === 0) {
    return s;
  }

  const arr: string[] = s.split('');
  arr.shift();
  arr.splice(k - 1, 0, s[0]);
  const newS = arr.join('');
  const newK = --k;

  return reverse(newS, newK);
}

const newStr = reverse('qwert', 5);
console.log(newStr);
