/* istanbul ignore file */

import { injectable } from "inversify";
import { SomeClient } from "./some_client";

@injectable()
/**
 * Clinet for communicating with some service.
 */
export class SomeClientImpl implements SomeClient {
  /**
   * Requests from some service to do something.
   */
  requestSomething(): Promise<string> {
    throw new Error("Connection error");
  }
}
