import React from 'react';

export interface ServiceFeature {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

export interface Step {
  number: string;
  title: string;
  description: string;
}