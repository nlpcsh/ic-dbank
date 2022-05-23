import type { Principal } from '@dfinity/principal';
export interface _SERVICE {
  'checkBalance' : () => Promise<number>,
  'greet' : (arg_0: string) => Promise<string>,
  'topUp' : (arg_0: number) => Promise<undefined>,
  'withdrawl' : (arg_0: number) => Promise<undefined>,
}
