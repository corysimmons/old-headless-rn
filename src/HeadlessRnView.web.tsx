import * as React from 'react';

import { HeadlessRnViewProps } from './HeadlessRn.types';

export default function HeadlessRnView(props: HeadlessRnViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
