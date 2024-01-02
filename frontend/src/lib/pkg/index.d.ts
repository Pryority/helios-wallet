/* tslint:disable */
/* eslint-disable */
/**
*/
export class Client {
  free(): void;
/**
* @param {string} execution_rpc
* @param {string | undefined} consensus_rpc
* @param {string} network
* @param {string | undefined} [checkpoint]
*/
  constructor(execution_rpc: string, consensus_rpc: string | undefined, network: string, checkpoint?: string);
/**
* @returns {Promise<void>}
*/
  sync(): Promise<void>;
/**
* @returns {Promise<void>}
*/
  wait_synced(): Promise<void>;
/**
* @returns {number}
*/
  chain_id(): number;
/**
* @returns {Promise<number>}
*/
  get_block_number(): Promise<number>;
/**
* @param {any} addr
* @param {any} block
* @returns {Promise<string>}
*/
  get_balance(addr: any, block: any): Promise<string>;
/**
* @param {string} hash
* @returns {Promise<any>}
*/
  get_transaction_by_hash(hash: string): Promise<any>;
/**
* @param {any} addr
* @param {any} block
* @returns {Promise<number>}
*/
  get_transaction_count(addr: any, block: any): Promise<number>;
/**
* @param {any} hash
* @returns {Promise<number>}
*/
  get_block_transaction_count_by_hash(hash: any): Promise<number>;
/**
* @param {any} block
* @returns {Promise<number>}
*/
  get_block_transaction_count_by_number(block: any): Promise<number>;
/**
* @param {any} block
* @param {boolean} full_tx
* @returns {Promise<any>}
*/
  get_block_by_number(block: any, full_tx: boolean): Promise<any>;
/**
* @param {any} addr
* @param {any} block
* @returns {Promise<string>}
*/
  get_code(addr: any, block: any): Promise<string>;
/**
* @param {any} opts
* @param {any} block
* @returns {Promise<string>}
*/
  call(opts: any, block: any): Promise<string>;
/**
* @param {any} opts
* @returns {Promise<number>}
*/
  estimate_gas(opts: any): Promise<number>;
/**
* @returns {Promise<any>}
*/
  gas_price(): Promise<any>;
/**
* @returns {Promise<any>}
*/
  max_priority_fee_per_gas(): Promise<any>;
/**
* @param {string} tx
* @returns {Promise<any>}
*/
  send_raw_transaction(tx: string): Promise<any>;
/**
* @param {any} tx
* @returns {Promise<any>}
*/
  get_transaction_receipt(tx: any): Promise<any>;
/**
* @param {any} filter
* @returns {Promise<any>}
*/
  get_logs(filter: any): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_client_free: (a: number) => void;
  readonly client_new: (a: number, b: number, c: number, d: number, e: number, f: number, g: number, h: number) => number;
  readonly client_sync: (a: number) => number;
  readonly client_wait_synced: (a: number) => number;
  readonly client_chain_id: (a: number) => number;
  readonly client_get_block_number: (a: number) => number;
  readonly client_get_balance: (a: number, b: number, c: number) => number;
  readonly client_get_transaction_by_hash: (a: number, b: number, c: number) => number;
  readonly client_get_transaction_count: (a: number, b: number, c: number) => number;
  readonly client_get_block_transaction_count_by_hash: (a: number, b: number) => number;
  readonly client_get_block_transaction_count_by_number: (a: number, b: number) => number;
  readonly client_get_block_by_number: (a: number, b: number, c: number) => number;
  readonly client_get_code: (a: number, b: number, c: number) => number;
  readonly client_call: (a: number, b: number, c: number) => number;
  readonly client_estimate_gas: (a: number, b: number) => number;
  readonly client_gas_price: (a: number) => number;
  readonly client_max_priority_fee_per_gas: (a: number) => number;
  readonly client_send_raw_transaction: (a: number, b: number, c: number) => number;
  readonly client_get_transaction_receipt: (a: number, b: number) => number;
  readonly client_get_logs: (a: number, b: number) => number;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly wasm_bindgen__convert__closures__invoke0_mut__h92b36cf230b8789f: (a: number, b: number) => void;
  readonly wasm_bindgen__convert__closures__invoke1_mut__h1ba473a243a67dff: (a: number, b: number, c: number) => void;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h55d3e81ed7b363af: (a: number, b: number, c: number, d: number) => void;
}

export type SyncInitInput = BufferSource | WebAssembly.Module;
/**
* Instantiates the given `module`, which can either be bytes or
* a precompiled `WebAssembly.Module`.
*
* @param {SyncInitInput} module
*
* @returns {InitOutput}
*/
export function initSync(module: SyncInitInput): InitOutput;

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function __wbg_init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
