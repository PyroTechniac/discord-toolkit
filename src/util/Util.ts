import { EventEmitter } from 'events';

export interface AnyObj {
    [k: string]: any;
}

export class Util {
    public static isPromise(value: any): boolean {
        return value && typeof value.then === 'function' && typeof value.catch === 'function';
    }

    public static isEventEmitter(value: any): value is typeof EventEmitter {
        return value && typeof value.on === 'function' && typeof value.once === 'function';
    }

    public static prefixCompare(aKey: string, bKey: string): 0 | 1 | -1 | number {
        if (aKey === '' && bKey === '') return 0;
        if (aKey === '') return 1;
        if (bKey === '') return -1;
        if (typeof aKey === 'function' && typeof bKey === 'function') return 0;
        if (typeof aKey === 'function') return 1;
        if (typeof bKey === 'function') return -1;
        return aKey.length === bKey.length ? aKey.localeCompare(bKey) : bKey.length - aKey.length;
    }

    public static intoArray<V>(x: V): V[] {
        if (Array.isArray(x)) {
            return x;
        }
        return [x];
    }

    public static intoCallable(thing: any): any {
        if (typeof thing === 'function') return thing;

        return (): any => thing;
    }

    public static flatMap(xs: any[], f: any): any {
        const res: any[] = [];
        for (const x of xs) {
            res.push(...f(x));
        }
        return res;
    }

    public static deepAssign(o1: AnyObj, ...os: AnyObj[]): any {
        for (const o of os) {
            for (const [k, v] of Object.entries(o)) {
                const vIsObject = v && typeof v === 'object';
                const o1kIsObject = Object.prototype.hasOwnProperty.call(o1, k) && o1[k] && typeof o1[k] === 'object';
                if (vIsObject && o1kIsObject) {
                    Util.deepAssign(o1[k], v);
                } else {
                    o1[k] = v;
                }
            }
        }

        return o1;
    }

    public static choice<V>(...xs: V[]): V {
        for (const x of xs) {
            if (x != null) { // eslint-disable-line no-eq-null
                return x;
            }
        }
        return null;
    }
}
