import { Button } from '../../components/Button';
import { List } from 'phosphor-react';
import { Input } from '../../components/Input';

export const Login = () => {
  return (
    <>
      <header className="bg-brand-300 w-full h-[51px] flex justify-between items-center gap-2.5 p-3">
        <div className="flex flex-row gap-5">
          <span>
            <List className="text-title text-xs md:text-sm" />
          </span>
          <span className="text-title text-xs md:text-sm">FILMES</span>
          <span className="text-title text-xs md:text-sm">SÉRIES</span>
        </div>
        <div className="bg-logo w-[46px] h-[15px] md:w-[92px] md:h-[30px] bg-cover flex justify-center items-center" />
        <div className="flex flex-row justify-center gap-5 items-center">
          <Button
            label="ASSINE AGORA"
            category="primary"
            className="text-xs px-3 py-2 tracking-widest rounded-3xl"
          />
        </div>
      </header>
      <section className="flex flex-col justify-center items-center p-3 gap-3 w-[full] h-full">
        <span className="text-paragraph text-2xl">Entrar</span>
        <div className="bg-body-200 flex flex-col justify-center items-start p-5 gap-5 w-full rounded-lg md:w-[1200px] md:p-10 md:gap-10">
          <div className="flex flex-col items-start gap-4 w-full ">
            <span className="text-paragraph text-xs">
              Você tem uma conta da HBO Max?
            </span>
            <Input category="email" className="" />
            <Input category="password" className="" />
          </div>
          <div className="flex flex-row justify-between items-start gap-10">
            <Button label="ENTRAR" category="secondary" className='py-2.5 px-5 rounded text-xs font-medium ' />
            <span className='text-brand-200 text-xs flex items-center h-full'>Esqueceu a senha?</span>
          </div>
        </div>
      </section>
    </>
  );
};
