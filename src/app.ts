import {handle} from './handler';

const INTERVAL = 1000;

setInterval(async () => {
  try {
    await handle();
  } catch (err) {
    console.error(err);
  }
}, INTERVAL);
