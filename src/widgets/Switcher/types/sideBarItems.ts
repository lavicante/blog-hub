import React from 'react';

export interface ISidebarItem {
  path: string;
  text: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  privateRoute?: boolean;
}
