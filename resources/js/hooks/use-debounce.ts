import { useEffect, useMemo, useRef, useState } from 'react';

// `never[]` in the parameter position lets any callable satisfy the base
// constraint via contravariance, without resorting to `any`.
type UnknownFunction = (...args: never[]) => unknown;

/**
 * Function returned by `useDebouncedFn`
 * Keeps the original parameters but delays execution
 */
export type DebouncedFunction<T extends UnknownFunction> = ((
    ...args: Parameters<T>
) => void) & {
    cancel: () => void;
    flush: () => void;
};

/**
 * Returns a debounced version of a value
 * The returned value updates only after `delay` ms without changes
 */
export function useDebouncedValue<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => clearTimeout(timerId);
    }, [value, delay]);

    return debouncedValue;
}

/**
 * Returns a debounced function that delays execution until
 * `delay` ms have passed since the last call
 *
 * The returned function also exposes:
 * - `cancel()` → cancel a pending execution
 * - `flush()` → execute immediately if pending
 */
export function useDebouncedFn<T extends UnknownFunction>(
    fn: T,
    delay: number = 300,
): DebouncedFunction<T> {
    const fnRef = useRef(fn);
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const lastArgsRef = useRef<Parameters<T> | null>(null);

    useEffect(() => {
        fnRef.current = fn;
    }, [fn]);

    const debounced = useMemo(() => {
        // Cancels any scheduled execution
        function cancel(): void {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        }

        // Executes the pending call immediately and clears the timer
        function flush(): void {
            if (timerRef.current !== null && lastArgsRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
                fnRef.current(...lastArgsRef.current);
            }
        }

        // Debounced wrapper that resets the timer on every call
        // Only the last call within the delay window is executed
        const debounced = ((...args: Parameters<T>) => {
            lastArgsRef.current = args;

            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
            }

            timerRef.current = setTimeout(() => {
                fnRef.current(...args);
                timerRef.current = null;
            }, delay);
        }) as DebouncedFunction<T>;

        debounced.cancel = cancel;
        debounced.flush = flush;

        return debounced;
    }, [delay]);

    useEffect(() => {
        return () => {
            if (timerRef.current !== null) {
                clearTimeout(timerRef.current);
                timerRef.current = null;
            }
        };
    }, []);

    return debounced;
}
