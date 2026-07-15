import { useEffect, useState } from 'react';

const Error = () => {
  const [rotation, setRotation] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // ====== THEME COLORS (change these to customize) ======
  const colors = {
    primary: '#f59e0b',     // amber-500
    primaryDark: '#d97706',  // amber-600
    bgStart: '#0c0a1e',     // dark purple
    bgEnd: '#1a1035',       // deeper purple
    textPrimary: '#fef3c7', // amber-50
    textSecondary: '#fcd34d', // amber-300
    cardBg: 'rgba(12, 10, 30, 0.8)',
    cardBorder: 'rgba(245, 158, 11, 0.15)',
  };
  // =====================================================

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="relative min-h-screen overflow-hidden flex items-center justify-center px-4"
      style={{
        background: `radial-gradient(ellipse at 30% 20%, ${colors.bgEnd}, ${colors.bgStart} 70%)`,
      }}
    >
      {/* Animated background circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute rounded-full"
          style={{
            width: '500px',
            height: '500px',
            top: '-100px',
            right: '-100px',
            background: `radial-gradient(circle, ${colors.primary}10, transparent 70%)`,
            animation: 'floatCircle 8s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '400px',
            height: '400px',
            bottom: '-50px',
            left: '-50px',
            background: `radial-gradient(circle, ${colors.primary}08, transparent 70%)`,
            animation: 'floatCircle 10s ease-in-out infinite reverse',
          }}
        />
        <div 
          className="absolute rounded-full"
          style={{
            width: '300px',
            height: '300px',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            background: `radial-gradient(circle, ${colors.primary}05, transparent 70%)`,
            animation: 'pulse 4s ease-in-out infinite',
          }}
        />
      </div>

      {/* Main Card */}
      <div 
        className="relative max-w-md w-full text-center p-8 md:p-10 rounded-3xl"
        style={{
          backgroundColor: colors.cardBg,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.cardBorder}`,
          boxShadow: `0 30px 80px rgba(0,0,0,0.5), 0 0 80px ${colors.primary}10`,
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Animated Compass/Icon */}
        <div className="relative mb-8 flex justify-center">
          <div 
            className="w-32 h-32 rounded-full flex items-center justify-center relative"
            style={{
              border: `3px solid ${colors.primary}30`,
              transition: 'transform 0.5s ease',
              transform: isHovering ? 'scale(1.1)' : 'scale(1)',
            }}
          >
            {/* Rotating ring */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                border: `2px solid ${colors.primary}20`,
                borderTopColor: colors.primary,
                borderRightColor: colors.primary,
                animation: 'spin 3s linear infinite',
              }}
            />
            
            {/* Inner icon */}
            <svg 
              className="w-16 h-16 relative z-10"
              style={{ 
                color: colors.primary,
                transform: `rotate(${rotation}deg)`,
                transition: 'transform 0.1s linear',
              }}
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              strokeWidth="1.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
        </div>

        {/* 404 Text with creative styling */}
        <div className="relative mb-6">
          <h1 
            className="text-8xl md:text-9xl font-black leading-none tracking-tight"
            style={{
              color: 'transparent',
              WebkitTextStroke: `2px ${colors.primary}`,
              textShadow: `0 0 40px ${colors.primary}20`,
            }}
          >
            404
          </h1>
          <div 
            className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 rounded-full"
            style={{ backgroundColor: colors.primary }}
          />
        </div>

        {/* Title with creative emoji */}
        <h2 
          className="text-2xl md:text-3xl font-bold mb-3 flex items-center justify-center gap-2"
          style={{ color: colors.textPrimary }}
        >
          <span>🌍</span>
          Lost in Space
          <span>🚀</span>
        </h2>

        {/* Description */}
        <p 
          className="text-sm md:text-base mb-8 leading-relaxed"
          style={{ color: colors.textSecondary }}
        >
          The page you're looking for has drifted into the cosmos.
        </p>

        {/* Creative Button with arrow */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="/"
            className="group px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
            style={{
              backgroundColor: colors.primary,
              color: colors.bgStart,
              boxShadow: `0 4px 20px ${colors.primary}40`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateX(4px)';
              e.currentTarget.style.boxShadow = `0 6px 30px ${colors.primary}60`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateX(0)';
              e.currentTarget.style.boxShadow = `0 4px 20px ${colors.primary}40`;
            }}
          >
            <span>Navigate Home</span>
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>

        {/* Creative footer with dots */}
        <div className="mt-8 flex items-center justify-center gap-3 text-xs" style={{ color: colors.textSecondary + '60' }}>
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: colors.primary, animationDelay: '0s' }} />
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: colors.primary, animationDelay: '0.2s' }} />
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: colors.primary, animationDelay: '0.4s' }} />
          </span>
          <span>✦</span>
          <span>Page not found</span>
          <span>✦</span>
          <span className="flex gap-1">
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: colors.primary, animationDelay: '0.6s' }} />
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: colors.primary, animationDelay: '0.8s' }} />
            <span className="w-2 h-2 rounded-full animate-bounce" style={{ backgroundColor: colors.primary, animationDelay: '1s' }} />
          </span>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes floatCircle {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
        
        @keyframes pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.3; }
          50% { transform: translate(-50%, -50%) scale(1.5); opacity: 0.6; }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
      `}</style>
    </div>
  );
};

export default Error;