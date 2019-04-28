import { ToolkitError } from '../util/ToolkitError';
import { ToolkitHandlerEvents } from '../util/Constants';
import { ToolkitModule, ToolkitModuleOptions } from './ToolkitModule';
import { Category } from '../util/Category';
import { Collection } from 'discord.js';
import { EventEmitter } from 'events';
import * as fs from 'fs';
import * as path from 'path';

export class ToolkitHandler extends EventEmitter {
    public constructor() {
        super();
    }
}
