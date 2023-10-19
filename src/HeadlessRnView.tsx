import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { HeadlessRnViewProps } from './HeadlessRn.types';

const NativeView: React.ComponentType<HeadlessRnViewProps> =
  requireNativeViewManager('HeadlessRn');

export default function HeadlessRnView(props: HeadlessRnViewProps) {
  return <NativeView {...props} />;
}
