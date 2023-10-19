import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to HeadlessRn.web.ts
// and on native platforms to HeadlessRn.ts
import HeadlessRnModule from './HeadlessRnModule';
import HeadlessRnView from './HeadlessRnView';
import { ChangeEventPayload, HeadlessRnViewProps } from './HeadlessRn.types';

// Get the native constant value.
export const PI = HeadlessRnModule.PI;

export function hello(): string {
  return HeadlessRnModule.hello();
}

export async function setValueAsync(value: string) {
  return await HeadlessRnModule.setValueAsync(value);
}

const emitter = new EventEmitter(HeadlessRnModule ?? NativeModulesProxy.HeadlessRn);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { HeadlessRnView, HeadlessRnViewProps, ChangeEventPayload };
