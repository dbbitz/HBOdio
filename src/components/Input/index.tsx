interface PropTypes {
  category: 'text' | 'email' | 'password';
  label: string;
  className?: string;
}

export const Input = ({ category, label, className }: PropTypes) => {
  return (
    <>
      {category === 'email' && (
        <input
          type="email"
          placeholder={label}
          className={`${className} text-paragraph font-medium text-[14px] bg-input p-2.5 gap-2.5 rounded border border-gray-600 w-full`}
        />
      )}
      {category === 'password' && (
        <input
          type="password"
          placeholder={label}
          className={`${className} text-paragraph font-medium text-[14px] bg-input p-2.5 gap-2.5 rounded border border-gray-600 w-full`}
        />
      )}
    </>
  );
};
