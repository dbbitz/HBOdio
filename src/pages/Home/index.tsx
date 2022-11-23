export const Home = () => {
    return (
      <>
        <header className="bg-brand-300 w-full h-[51px] flex justify-between items-center gap-2.5 p-3">
          <div className="bg-logo w-[46px] h-[15px] md:w-[92px] md:h-[30px] bg-cover" />
          <div className="flex flex-row justify-center gap-5 items-center">
            <span className="text-title text-xs md:text-sm">ENTRAR</span>
            <button
              className="bg-brand-100 text-title rounded-2xl
               text-xs w-[110px] h-[31px] flex flex-row justify-center
              items-center px-2 py-2.5 md:text-sm md:w-[145px] md:h-[37px] md:rounded-3xl"
            >
              ASSINE AGORA
            </button>
          </div>
        </header>
        <section className="bg-home-mobile flex flex-col justify-center items-center w-full h-full bg-cover md:bg-home-desktop">
          <div className="flex flex-col justify-center items-center gap-3 mt-[300px] w-[205px] h[182px]">
              <span className="text-paragraph font-normal text-lg ">Assinaturas a partir de</span>
              <span>
                  <span className="text-4xl text-title">R$14,16</span><span className="text-sm text-paragraph ">/mês*</span>
              </span>
              <button
              className="bg-brand-100 text-title rounded-3xl
               text-lg w-[205px] h-[42px] flex flex-row justify-center
              items-center px-2 py-2.5 md:text-sm md:w-[145px] md:h-[37px] md:rounded-3xl"
            >ASSINE AGORA</button>
            <span className="text-paragraph font-normal text-center text-sm ">*Aplicado ao plano anual com o pagamento antecipado</span>
          </div>
        </section>
      </>
    );
  };
  
