import { Category } from '../util/Category';
import { ToolkitHandler } from './ToolkitHandler';
import { ToolkitClient } from './ToolkitClient';

export class ToolkitModule {
    public id: string;
    public categoryID: string;
    public category: Category = null;
    public filepath: string = null;
    public client: ToolkitClient = null;
    public handler: ToolkitHandler = null;
    public constructor(id: string, { category = 'default' }: ToolkitModuleOptions = {}) {
        this.id = id;

        this.categoryID = category;
    }

    public reload(): this {
        return this.handler.reload(this.id);
    }

    public remove(): this {
        return this.handler.remove(this.id);
    }

    public toString(): string {
        return this.id;
    }
}

export interface ToolkitModuleOptions {
    category?: string;
}
