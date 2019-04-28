import { Category } from '../util/Category';

export class ToolkitModule {
    public id: string;
    public categoryID: string;
    public category: Category = null;
    public filepath: string = null;
    public client: any = null;
    public handler: any = null;
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
