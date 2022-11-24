import { CircleNotch } from 'phosphor-react';
import { MouseEventHandler } from 'react';

interface PropTypes {
  label: string;
  category: 'primary' | 'secondary';
  onClick?: MouseEventHandler;
  className?: string;
  loading?: boolean;
  disbled?: boolean;
}

/**
 * Archive: src/components/Button/index.tsx
 *
 * Description: Contains the rendered button component
 *
 * Date: 2022/11/23
 *
 * Author: @dbbitz
 */

export const Button = ({
  label,
  category,
  onClick,
  className,
  loading,
  disbled,
}: PropTypes) => {
  return (
    <>
      {category === 'primary' && (
        <button
          className={`bg-btn-primary-base hover:bg-btn-primary-hover text-title
               ${className} flex justify-center
              items-center min-w-[100px]`}
          onClick={onClick}
        >
          {loading ? <CircleNotch size={12} className="animate-spin" /> : label}
        </button>
      )}
      {category === 'secondary' && (
        <button
          className={`bg-btn-secondary-base hover:bg-btn-secondary-hover text-title 
          ${className} flex justify-center
         items-center min-w-[100px]`}
          onClick={onClick}
        >
          {loading ? <CircleNotch size={12} className="animate-spin" /> : label}
        </button>
      )}
    </>
  );
};
