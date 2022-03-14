import {container, Type} from './ioc_config';
import {SomeClient} from './some_client';

/**
 * Some application function that handles something
 *
 * @return {Promise<string>}
 */
export function handle(): Promise<string> {
  const someClient = container.get<SomeClient>(Type.SomeClient);

  console.log('Requesting from some service to do something...');
  const result = someClient.requestSomething();
  console.log('Done');

  return result;
}
