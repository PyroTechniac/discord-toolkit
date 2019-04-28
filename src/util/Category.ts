import { Collection } from 'discord.js';
import { ToolkitModule } from '../structures/ToolkitModule';

export class Category extends Collection<string, ToolkitModule> {
    public id: string;
    public constructor(id: string, iterable) {
        super(iterable);

        this.id = id;
    }

    public reloadAll(): this {
        for (const m of Array.from(this.values())) {
            if (m.filepath) m.reload();
        }

        return this;
    }

    public removeAll(): this {
        for (const m of Array.from(this.values())) {
            if (m.filepath) m.remove();
        }

        return this;
    }

    public toString(): string {
        return this.id;
    }
}
