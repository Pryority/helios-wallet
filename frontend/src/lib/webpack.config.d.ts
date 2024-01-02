import WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");
export const entry: string;
export namespace module {
    const rules: ({
        test: RegExp;
        use: string;
        exclude: RegExp;
        type?: undefined;
    } | {
        test: RegExp;
        type: string;
        use?: undefined;
        exclude?: undefined;
    })[];
}
export namespace resolve {
    const extensions: string[];
}
export namespace output {
    const filename: string;
    const globalObject: string;
    const path: string;
    namespace library {
        const name: string;
        const type: string;
    }
}
export namespace experiments {
    const asyncWebAssembly: boolean;
}
export const plugins: WasmPackPlugin[];
