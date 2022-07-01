import { AnyAction } from "redux";

// action with a payload
export type ActionWithPayload<T, P> = {
    type: T;
    payload: P;
}

// action without a payload
export type Action<T> = {
    type: T;
}

// function overloading - make multiple type definitions of the same name

// if action is passed both a type and payload, it returns an action with a payload
export function createAction<T extends string, P>(type: T, payload: P): ActionWithPayload<T, P>;

// if action is passed with just a type and no payload, it just returns an action
export function createAction<T extends string>(type: T, payload: void): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
    return { type, payload };
}