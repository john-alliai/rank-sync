// Minimal type stubs for offline builds
declare module 'react' {
  export function useState<T>(initial: T): [T, (value: T) => void];
  export function useEffect(fn: () => void, deps?: any[]): void;
  export function useRef<T>(initial: T): { current: T };
  export const Fragment: any;
  const React: any;
  export default React;
}

declare module 'react/jsx-runtime' {
  export const jsx: any;
  export const jsxs: any;
  export const Fragment: any;
}

declare module 'react-dom' {
  export const render: any;
}

declare module 'framer-motion' {
  export const motion: any;
  export const AnimatePresence: any;
}

declare module 'astro/client' {
  export const clientAddress: any;
}
declare namespace JSX { interface IntrinsicElements { [key: string]: any; } }
