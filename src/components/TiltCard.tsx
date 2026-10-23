import React, { useRef, useState, useEffect } from 'react';

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number;
  glowColor?: string;
  id?: string;
}

export const TiltCard: React.FC<TiltCardProps> = ({
  children,
  className = '',
  maxTilt = 6,
  id,
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [transformStyle, setTransformStyle] = useState<string>('none');
  const [glarePosition, setGlarePosition] = useState<{ x: number; y: number; opacity: number }>({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [canHover, setCanHover] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)');
    setCanHover(mq.matches);
    const listener = (e: MediaQueryListEvent) => setCanHover(e.matches);
    mq.addEventListener('change', listener);
    return () => mq.removeEventListener('change', listener);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!canHover) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setTransformStyle(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.012, 1.012, 1.012)`
    );

    setGlarePosition({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.12,
    });
  };

  const handleMouseEnter = () => {
    if (!canHover) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    if (!canHover) return;
    setIsHovered(false);
    setTransformStyle('none');
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      ref={cardRef}
      id={id}
      onMouseMove={canHover ? handleMouseMove : undefined}
      onMouseEnter={canHover ? handleMouseEnter : undefined}
      onMouseLeave={canHover ? handleMouseLeave : undefined}
      style={
        canHover
          ? {
              transform: transformStyle,
              transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
              transformStyle: 'preserve-3d',
              willChange: isHovered ? 'transform' : 'auto',
              backfaceVisibility: 'hidden',
            }
          : undefined
      }
      className={`relative rounded-2xl group transition-shadow duration-300 ${
        isHovered ? 'shadow-[0_12px_36px_rgba(0,0,0,0.35)]' : ''
      } ${className}`}
    >
      {canHover && (
        <>
          {/* Subtle refined gradient border on hover */}
          <div
            className={`absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-cyan-500/40 via-indigo-500/25 to-cyan-500/40 transition-opacity duration-500 pointer-events-none -z-10 ${
              isHovered ? 'opacity-100 blur-[1px]' : 'opacity-0'
            }`}
          />

          {/* Internal glare highlight following cursor */}
          <div
            className="absolute inset-0 rounded-2xl pointer-events-none transition-opacity duration-300 z-10"
            style={{
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, ${glarePosition.opacity}), transparent 60%)`,
            }}
          />
        </>
      )}

      {children}
    </div>
  );
};
