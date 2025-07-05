import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  mobile: ReactNode;
  desktop: ReactNode;
}

export default function MiddlewareHybridLayout({ 
  children, 
  mobile, 
  desktop 
}: LayoutProps) {
  // Middlewareによってリライトされるため、
  // 実際には mobile または desktop のいずれかが表示される
  return (
    <>
      {children}
      {mobile}
      {desktop}
    </>
  );
} 