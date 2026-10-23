import React, { useEffect, useRef } from 'react';

interface Node {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
  radius: number;
  baseColor: string;
  pulsePhase: number;
  type: 'source' | 'processor' | 'warehouse';
}

interface Packet {
  fromIndex: number;
  toIndex: number;
  progress: number;
  speed: number;
  color: string;
  size: number;
}

export const DataPipelineCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: -1000, y: -1000, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let packetInterval: ReturnType<typeof setInterval>;
    let resizeTimer: ReturnType<typeof setTimeout>;
    let startTimer: ReturnType<typeof setTimeout>;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let isMobile = width < 768;

    let nodes: Node[] = [];
    let packets: Packet[] = [];

    const initNetwork = () => {
      // Keep rich network density on both desktop and mobile so connecting lines always form a full web
      const nodeCount = Math.min(Math.floor((width * height) / 18000), isMobile ? 42 : 75);
      nodes = [];
      packets = [];

      for (let i = 0; i < nodeCount; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        const types: ('source' | 'processor' | 'warehouse')[] = ['source', 'processor', 'warehouse'];
        const type = types[Math.floor(Math.random() * types.length)];

        nodes.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: (Math.random() - 0.5) * 0.45,
          vy: (Math.random() - 0.5) * 0.45,
          radius: type === 'warehouse' ? 3.5 : type === 'processor' ? 2.8 : 2.2,
          baseColor: type === 'warehouse' ? '#16C2C9' : type === 'processor' ? '#0D8C92' : '#11ACB2',
          pulsePhase: Math.random() * Math.PI * 2,
          type,
        });
      }
    };

    // Debounced resize handler to prevent recalculation thrashing on mobile address bar resize
    const updateSize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (!canvas) return;
        const newWidth = window.innerWidth;
        const newHeight = window.innerHeight;
        // Ignore minor vertical-only resizes on mobile (address bar hide/show)
        if (newWidth === width && Math.abs(newHeight - height) < 120) {
          return;
        }
        width = canvas.width = newWidth;
        height = canvas.height = newHeight;
        isMobile = width < 768;
        initNetwork();
      }, 150);
    };

    // Mouse & Touch tracking so lines react on both desktop and mobile
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX,
        y: e.clientY,
        active: true,
      };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current = {
          x: e.touches[0].clientX,
          y: e.touches[0].clientY,
          active: true,
        };
      }
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    // Packet spawner timer (paused when tab is hidden)
    const spawnPacket = () => {
      if (document.hidden || nodes.length < 2) return;
      const fromIndex = Math.floor(Math.random() * nodes.length);
      const fromNode = nodes[fromIndex];
      const candidates: number[] = [];
      for (let j = 0; j < nodes.length; j++) {
        if (j === fromIndex) continue;
        const dx = nodes[j].x - fromNode.x;
        const dy = nodes[j].y - fromNode.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 155) {
          candidates.push(j);
        }
      }

      if (candidates.length > 0) {
        const toIndex = candidates[Math.floor(Math.random() * candidates.length)];
        packets.push({
          fromIndex,
          toIndex,
          progress: 0,
          speed: 0.008 + Math.random() * 0.012,
          color: Math.random() > 0.4 ? '#16C2C9' : '#34D399',
          size: 2 + Math.random() * 1.5,
        });
      }
    };

    // Draw a single frame (also used for instant static first frame before animation loop starts)
    const drawFrame = () => {
      ctx.clearRect(0, 0, width, height);

      const mouse = mouseRef.current;
      const mouseRadius = 190;

      // 1. Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        let intensity = 0;
        if (mouse.active) {
          const dx = mouse.x - node.x;
          const dy = mouse.y - node.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < mouseRadius) {
            intensity = 1 - dist / mouseRadius;
            const force = intensity * 1.8;
            node.x += (dx / dist) * force;
            node.y += (dy / dist) * force;

            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(22, 194, 201, ${intensity * 0.75})`;
            ctx.lineWidth = 1 + intensity * 1.5;
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 4, 0, Math.PI * 2);
            ctx.fillStyle = '#16C2C9';
            if (!isMobile) {
              ctx.shadowColor = '#16C2C9';
              ctx.shadowBlur = 12;
            }
            ctx.fill();
            if (!isMobile) {
              ctx.shadowBlur = 0;
            }
          }
        }

        node.pulsePhase += 0.04;
        const pulse = Math.sin(node.pulsePhase) * 0.5 + 0.5;
        const currentRadius = node.radius + (intensity > 0 ? intensity * 2.5 : pulse * 0.8);

        if (isMobile) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius + 3.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(22, 194, 201, ${0.14 + pulse * 0.12})`;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = intensity > 0 ? '#16C2C9' : node.baseColor;
        if (!isMobile) {
          ctx.shadowColor = '#16C2C9';
          ctx.shadowBlur = intensity > 0 ? 16 : 6 + pulse * 6;
        }
        ctx.fill();
        if (!isMobile) {
          ctx.shadowBlur = 0;
        }

        if (node.type === 'warehouse' || intensity > 0.5) {
          ctx.beginPath();
          ctx.arc(node.x, node.y, currentRadius + 3, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(22, 194, 201, ${0.2 + intensity * 0.5})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }
      }

      // 2. Draw pipeline pathways (connecting lines)
      const maxDistance = 150;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.24;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(22, 194, 201, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // 3. Update and draw flowing data packets (ETL streaming)
      for (let k = packets.length - 1; k >= 0; k--) {
        const p = packets[k];
        p.progress += p.speed;

        if (p.progress >= 1) {
          packets.splice(k, 1);
          continue;
        }

        const nodeA = nodes[p.fromIndex];
        const nodeB = nodes[p.toIndex];

        if (!nodeA || !nodeB) {
          packets.splice(k, 1);
          continue;
        }

        const px = nodeA.x + (nodeB.x - nodeA.x) * p.progress;
        const py = nodeA.y + (nodeB.y - nodeA.y) * p.progress;

        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        if (!isMobile) {
          ctx.shadowColor = p.color;
          ctx.shadowBlur = 8;
        }
        ctx.fill();
        if (!isMobile) {
          ctx.shadowBlur = 0;
        }

        const tailX = nodeA.x + (nodeB.x - nodeA.x) * Math.max(0, p.progress - 0.05);
        const tailY = nodeA.y + (nodeB.y - nodeA.y) * Math.max(0, p.progress - 0.05);
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(tailX, tailY);
        ctx.strokeStyle = p.color === '#16C2C9' ? 'rgba(22, 194, 201, 0.4)' : 'rgba(52, 211, 153, 0.4)';
        ctx.lineWidth = p.size * 0.7;
        ctx.stroke();
      }

      const maxPackets = isMobile ? 45 : 90;
      if (packets.length > maxPackets) {
        packets.splice(0, packets.length - maxPackets);
      }
    };

    const render = () => {
      drawFrame();
      animationFrameId = requestAnimationFrame(render);
    };

    // Initialize nodes and paint the first static frame immediately so background lines are visible right away,
    // then defer the continuous 60fps loop by 300ms so LCP and FCP complete with zero main-thread contention.
    initNetwork();
    drawFrame();

    startTimer = setTimeout(() => {
      packetInterval = setInterval(spawnPacket, isMobile ? 160 : 120);
      animationFrameId = requestAnimationFrame(render);
    }, 300);

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: true });
    window.addEventListener('touchend', handleMouseLeave, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true });
    window.addEventListener('resize', updateSize, { passive: true });

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(animationFrameId);
      clearInterval(packetInterval);
      clearTimeout(resizeTimer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('touchend', handleMouseLeave);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', updateSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="data-pipeline-canvas"
      className="fixed inset-0 pointer-events-none z-0 opacity-75 w-full max-w-full overflow-hidden"
      aria-hidden="true"
    />
  );
};
