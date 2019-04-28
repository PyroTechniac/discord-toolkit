import { Client, ClientOptions } from 'discord.js';

export class ToolkitClient extends Client {
    public constructor(options: any = {}, clientOptions: ClientOptions) {
        super(clientOptions || options);
    }
}
