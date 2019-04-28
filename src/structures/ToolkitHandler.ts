import { ToolkitError } from '../util/ToolkitError';
import { ToolkitHandlerEvents, LoadPredicate } from '../util/Constants';
import { ToolkitModule, ToolkitModuleOptions } from './ToolkitModule';
import { Category } from '../util/Category';
import { Collection } from 'discord.js';
import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';

export class ToolkitHandler extends EventEmitter {
    public modules: Collection<string, ToolkitModule> = new Collection();
    public classToHandle: typeof ToolkitModule = ToolkitModule;
    public extensions: Set<string>;
    public constructor(options: ToolkitHandlerOptions) {
        super();

        this.extensions = new Set(options.extensions);
    }

    public remove(id: string): ToolkitModule {
        const mod = this.modules.get(id);
        if (!mod) throw new ToolkitError('MODULE_NOT_FOUND', this.classToHandle.name);
    }
}

export type ToolkitHandlerOptions = {
    automateCategories?: boolean;
    classToHandle?: typeof ToolkitModule;
    directory?: string;
    extensions?: string[] | Set<string>;
    loadFilter?: LoadPredicate;
}
