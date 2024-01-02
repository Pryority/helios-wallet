export declare function createHeliosProvider(config: Config): Promise<HeliosProvider>;
export declare class HeliosProvider {
    #private;
    constructor(config: Config);
    sync(): Promise<void>;
    waitSynced(): Promise<void>;
    request(req: Request): Promise<any>;
}
export type Config = {
    executionRpc: string;
    consensusRpc?: string;
    checkpoint?: string;
    network?: Network;
};
export declare enum Network {
    MAINNET = "mainnet",
    GOERLI = "goerli"
}
type Request = {
    method: string;
    params: any[];
};
export {};
