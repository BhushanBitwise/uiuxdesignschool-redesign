import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export const MotionButton = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  icon = true,
  className = '',
  href,
  type = 'button',
  fullWidth = false
}) => {
  const baseStyles = "relative inline-flex items-center justify-center font-medium rounded-full cursor-pointer transition-all duration-300 select-none overflow-hidden group shadow-sm active:scale-95";

  const sizeStyles = {
    sm: "px-4 py-2 text-xs gap-1.5",
    md: "px-6 py-3 text-sm gap-2",
    lg: "px-8 py-4 text-base gap-2.5 font-semibold"
  };

  const variantStyles = {
    primary: "bg-gradient-to-r from-indigo-600 via-indigo-700 to-violet-700 text-white shadow-indigo-200 hover:shadow-indigo-300 hover:shadow-lg hover:brightness-105",
    secondary: "bg-white text-slate-800 border border-slate-200 hover:border-indigo-400 hover:bg-slate-50/80 shadow-slate-100 hover:shadow-md",
    emerald: "bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-emerald-200 hover:shadow-emerald-300 hover:shadow-lg",
    outline: "bg-transparent text-indigo-600 border-2 border-indigo-600 hover:bg-indigo-50",
    amber: "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-amber-200 hover:shadow-amber-300 hover:shadow-lg"
  };

  const content = (
    <motion.button
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.97 }}
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {/* Motion Primitives Shimmer overlay */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-transform" />

      <span className="relative z-10 flex items-center gap-2">
        {children}
        {icon && (
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        )}
      </span>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} className={fullWidth ? 'w-full inline-block' : 'inline-block'}>
        {content}
      </a>
    );
  }

  return content;
};

export default MotionButton;
