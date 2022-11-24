import { List } from 'phosphor-react';
import { Button } from '../../components/Button';
import { Banner } from '../../components/Banner';

export const Catalog = () => {
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
        
        <div className="bg-banner-logo w-[46px] h-[15px] md:w-[92px] md:h-[30px] bg-cover flex justify-center items-center" />
        <span className="text-title text-xs md:text-sm">USER</span>
      </header>

      <section className="bg-home-mobile flex flex-col justify-center items-center w-full h-full bg-cover p-3 md:bg-home-desktop">
        <div className="flex flex-col justify-start items-start p-3 gap-5 rounded-lg h-full">
          
          <div className="flex flex-col gap-5">
            <div className='bg-banner-main w-[280px] h-[84px] md:w-[480px] md:h-[144px] bg-cover'></div>
            <span className="text-paragraph text-xs flex flex-col items-start md:w-[456px] md:text-lg">
              HBO apresenta "A Casa do Dragão", uma série original baseada no
              livro de George R.R. Martin "Fogo & Sangue". Situado 200 anos
              antes dos eventos de "A Guerra dos Tronos", a série segue a
              emocionante história da Casa Targaryen.
            </span>
            <Button
              label="SAIBA MAIS"
              category="secondary"
              className="w-[117px] h-[40px] text-xs font-medium md:w-[129px] md:h-[40px]"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-full gap-4">
            <span className="text-paragraph text-2xl w-full">Catálogo</span>
            <div className="flex flex-col justify-center items-center gap-4 h-full w-full md:flex-row md:items-start">
              <Banner image='bg-banner-got'/>
              <Banner image='bg-banner-sopranos'/>
              <Banner image='bg-banner-sucession'/>
              <Banner image='bg-banner-sixFeetUnder'/>
              <Banner image='bg-banner-roma'/>
              <Banner image='bg-banner-trueDetective'/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
