const Messages = {
    FILE_NOT_FOUND: (filename: string): string => `File '${filename}' not found`,
    MODULE_NOT_FOUND: (constructor: string, id: string): string => `${constructor} '${id}' does not exist`,
    ALREADY_LOADED: (constructor: string, id: string): string => `${constructor} '${id}' is already loaded`,
    NOT_RELOADABLE: (constructor: string, id: string): string => `${constructor} '${id}' is not reloadable`,
    INVALID_CLASS_TO_HANDLE: (given: string, expected: string): string => `Class to handle ${given} is not a subclass of ${expected}`,
    ALIAS_CONFLICT: (alias: string, id: string, conflict: string): string => `Alias '${alias}' of '${id}' already exists on '${conflict}'`,
    COMMAND_UTIL_EXPLICIT: 'The command handler options `handleEdits` and `storeMessages` require the `commandUtil` option to be true',
    UNKNOWN_MATCH_TYPE: (match: string): string => `Unknown match type '${match}'`,
    NOT_INSTANTIABLE: (constructor: string): string => `${constructor} is not instantable`,
    NOT_IMPLEMENTED: (constructor: string, method: string): string => `${constructor}#${method} has not been implemented`,
    INVALID_TYPE: (name: string, expected: string, vowel: boolean = false): string => `Value of '${name}' was not ${vowel ? 'an' : 'a'} ${expected}`
};

export class ToolkitError extends Error {
    private code: string;
    public constructor(key: string, ...args: string[]) {
        if (Messages[key] == null) throw new TypeError(`Error key '${key}' does not exist`); // eslint-disable-line no-eq-null
        const message = typeof Messages[key] === 'function' ? Messages[key](...args) : Messages[key];
        super(message);
        this.code = key;
    }

    public get name(): string {
        return `ToolkitError [${this.code}]`;
    }
}
