/* istanbul ignore file */

import 'reflect-metadata';
import {Container} from 'inversify';
import {SomeClientFake} from './some_client_fake';
import {SomeClient} from './some_client';
import {SomeClientImpl} from './some_client_impl';

export const container = new Container();

export enum Type {
  SomeClient = 'SomeClient',
}

const useFakes = process.env.NODE_ENV === 'test';

container
    .bind<SomeClient>(Type.SomeClient)
    .to(useFakes ? SomeClientFake : SomeClientImpl);
