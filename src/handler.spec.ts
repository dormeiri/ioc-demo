import {handle} from './handler';

describe('handle', () => {
  it('success', async () => {
    expect(await handle()).toEqual('OK');
  });
});
