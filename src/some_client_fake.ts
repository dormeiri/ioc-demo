import {injectable} from 'inversify';
import {SomeClient} from './some_client';

@injectable()
/**
 * Fake clinet for communicating with some service.
 */
export class SomeClientFake implements SomeClient {
  /**
   * Fakes a request to some service.
   *
   * @return {Promise<any>}
   */
  requestSomething(): Promise<string> {
    return Promise.resolve('OK');
  }
}
