import { persistentAtom } from '@nanostores/persistent';

export type Theme = 'light' | 'dark';

export const theme = persistentAtom<Theme>('theme', 'light');

export const toggleTheme = () => theme.set(theme.get() === 'dark' ? 'light' : 'dark');
