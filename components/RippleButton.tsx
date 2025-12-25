import { useRef, ReactNode, ButtonHTMLAttributes } from 'react';

export default function RippleButton({
  children,
  onPress,
  className = '',
}: {
  children: ReactNode;
  onPress: () => void;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Sorry a bit of non-react native magic
  const createRipple = (event: any) => {
    const button = buttonRef.current;
    if (!button) return;
    const rect = button.getBoundingClientRect();

    const ripple = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.position = 'absolute';
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${x}px`;
    ripple.style.top = `${y}px`;
    ripple.style.background = 'rgba(255,255,255,0.4)';
    ripple.style.borderRadius = '9999px';
    ripple.style.transform = 'scale(0)';
    ripple.style.opacity = '1';
    ripple.style.pointerEvents = 'none';
    ripple.style.animation = 'ripple 600ms ease-out';

    button.appendChild(ripple);

    ripple.addEventListener('animationend', () => ripple.remove());
  };

  return (
    <button
      ref={buttonRef}
      onClick={(event) => {
        createRipple(event);
        onPress();
      }}
      className={`relative overflow-hidden ${className} text-left`}>
      {children}
    </button>
  );
}
