export default function PhobiaGrid() {
  return (
    <>
      <div className='flex flex-col justify-between bg-theme1 h-[200px] w-[300px] rounded-md cursor-pointer md:justify-self-end xl:justify-self-end text-white overflow-hidden relative'>
        <div
          className='bg-center bg-cover w-full h-full hover:scale-125 transition-all'
          style={{
            backgroundImage: 'url(/grid/bg-acrophobia.png)',
          }}
        ></div>
      </div>

      <div className='flex flex-col justify-between bg-theme2 h-[200px] w-[300px] rounded-md cursor-pointer md:justify-self-start xl:justify-self-center overflow-hidden relative'>
        <div
          className='bg-center bg-cover w-full h-full hover:scale-125 transition-all'
          style={{
            backgroundImage: 'url(/grid/bg-claustrophobia.png)',
          }}
        ></div>
      </div>

      <div className='flex flex-col justify-between bg-theme3 h-[200px] w-[300px] rounded-md cursor-pointer md:justify-self-end xl:justify-self-start overflow-hidden relative'>
        <div
          className='bg-center bg-cover w-full h-full hover:scale-125 transition-all'
          style={{
            backgroundImage: 'url(/grid/bg-phasmophobia.png)',
          }}
        ></div>
      </div>

      <div className='flex flex-col justify-between bg-theme4 h-[200px] w-[300px] rounded-md cursor-pointer md:justify-self-start xl:justify-self-end overflow-hidden relative'>
        <div
          className='bg-center bg-cover w-full h-full hover:scale-125 transition-all'
          style={{
            backgroundImage: 'url(/grid/bg-thalassophobia.png)',
          }}
        ></div>
      </div>

      <div className='flex flex-col justify-between bg-theme5 h-[200px] w-[300px] rounded-md cursor-pointer md:justify-self-end xl:justify-self-center overflow-hidden relative'>
        <div
          className='bg-center bg-cover w-full h-full hover:scale-125 transition-all'
          style={{
            backgroundImage: 'url(/grid/bg-trypophobia.png)',
          }}
        ></div>
      </div>

      <div className='flex flex-col justify-between bg-theme6 h-[200px] w-[300px] rounded-md cursor-pointer md:justify-self-start xl:justify-self-start overflow-hidden relative'>
        <div
          className='bg-center bg-cover w-full h-full hover:scale-125 transition-all'
          style={{
            backgroundImage: 'url(/grid/bg-zoophobia.png)',
          }}
        ></div>
      </div>
    </>
  );
}
