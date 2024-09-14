'use client'; // This makes sure it's a client-side component

import { Provider } from 'react-redux';
import { makeStore } from '../lib/store'; // Adjust the import path if necessary
import { ReactNode } from 'react';

const store = makeStore();

export default function ClientProvider({ children }: { children: ReactNode }) {
  return <Provider store={store}>{children}</Provider>;
}
