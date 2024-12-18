import React from 'react';
import Image from 'next/image';

interface CircularAvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}

const CircularAvatar: React.FC<CircularAvatarProps> = ({ 
  src, 
  alt, 
  size = 'md', 
  className = '' 
}) => {
  // Size variations
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
    
  };

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-2  ${className}`}>
      <Image 
        src={src}
        alt={alt}
        width={200}
        height={200}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default CircularAvatar;