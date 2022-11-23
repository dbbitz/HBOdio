interface PropTypes {
  category: 'text' | 'email' | 'password';
  className?: string;
}

export const Input = ({ category, className }: PropTypes) => {
  return (
    <>
      {category === 'password' && (
        <input type="password" placeholder="Senha" className={`${className} text-paragraph font-medium text-[14px] bg-input p-2.5 gap-2.5 rounded border border-gray-600 w-full`} />
      )}
      {category === 'email' && (
        <input
          type="email"
          placeholder="Endereço de e-mail"
          className={`${className} text-paragraph font-medium text-[14px] bg-input p-2.5 gap-2.5 rounded border border-gray-600 w-full`}
        />
      )}
    </>
  );
};
