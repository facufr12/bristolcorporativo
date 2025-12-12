import React from 'react';

export type ViewState = 'colors' | 'typography' | 'buttons' | 'forms' | 'tables' | 'layouts' | 'components' | 'login' | 'landing-pages';

export interface NavItem {
  id: ViewState;
  label: string;
  icon: React.ReactNode;
}

export interface ColorSwatchProps {
  name: string;
  hex: string;
  shade: string;
  textColor?: string;
}