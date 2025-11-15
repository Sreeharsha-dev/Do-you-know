import type React from 'react';

export interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  keyCapabilities: string[];
  image: string;
}

export interface CoreValue {
  title: string;
  description: string;
}
