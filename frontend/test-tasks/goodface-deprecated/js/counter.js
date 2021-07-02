
export const increment = 'increment';
export const decrement = 'decrement';

export function count(min, max) {
    let counter = 0;
    const add = () => counter < max ? ++counter : counter;
    const sub = () => counter > min ? --counter : counter;
    return function (dispatch) {
        if (dispatch === increment) return add;
        if (dispatch === decrement) return sub;
    };
};