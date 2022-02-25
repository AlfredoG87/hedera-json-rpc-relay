declare module "koa-jsonrpc" {
  export default function (...opts: any): koaJsonRpc;
  export class koaJsonRpc {
    constructor(...opts: any);
    use(name: string, func: any): void;
    app(): any;
  }
}
