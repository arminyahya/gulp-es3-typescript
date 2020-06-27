export default class DidgahDeferred<T = any> {
  private resolver: (value?: T) => void
  private rejecter: (value?: unknown) => void

  private promiseInstance: Promise<T>

  constructor() {
    this.promiseInstance = new Promise<T>((executor, reject) => {
      this.resolver = executor
      this.rejecter = reject
    })
    this.catch = this.catch.bind(this)
    this.then = this.then.bind(this)
    this.done = this.done.bind(this)
    this.fail = this.fail.bind(this)
    this.always = this.always.bind(this)
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }

  static create<T>(): DidgahDeferred<T> {
    return new DidgahDeferred<T>()
  }

  resolve(value?: T): DidgahDeferred<T> {
    this.resolver(value)
    return this
  }

  reject(value?: unknown): DidgahDeferred<T> {
    this.rejecter(value)
    return this
  }

  then<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): DidgahDeferred<T> {
    this.promiseInstance = this.promiseInstance.then<TResult1, TResult2>(onfulfilled, onrejected) as any
    return (this as unknown) as DidgahDeferred<T>
  }

  catch<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
  ): DidgahDeferred<T | TResult> {
    this.promiseInstance = this.promiseInstance.catch(onrejected) as any
    return (this as unknown) as DidgahDeferred<T>
  }

  finally(onfinally?: (() => void) | undefined | null): DidgahDeferred<T> {
    // @ts-ignore
    this.promiseInstance = this.promiseInstance.finally(onfinally)
    return this
  }

  done<TResult1 = T, TResult2 = never>(
    onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null,
    onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null
  ): DidgahDeferred<TResult1 | TResult2> {
    return this.then(onfulfilled, onrejected) as any
  }

  fail<TResult = never>(
    onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null
  ): DidgahDeferred<T | TResult> {
    return this.catch(onrejected)
  }

  always(onfinally?: (() => void) | undefined | null): DidgahDeferred<T> {
    return this.finally(onfinally)
  }

  promise(): Promise<T> {
    return this.promiseInstance
  }
}

export class Task<T> {
  task: () => DidgahDeferred<T>
  constructor(task: () => DidgahDeferred<T>) {
    this.task = task
  }

  run() {
    return this.task()
  }
}
