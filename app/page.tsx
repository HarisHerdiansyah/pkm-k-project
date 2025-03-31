import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, MoveRight } from 'lucide-react';
import PhobiaGrid from '@/components/PhobiaGrid';

export default function Landing() {
  return (
    <>
      <div
        className='min-h-screen flex flex-col items-center justify-center text-center gap-y-6 p-4 sm:p-8 md:px-16'
        style={{ backgroundImage: 'url(/background/pastel-bg.jpg)' }}
      >
        <Image
          src='/logo/logo.png'
          alt='Logo Mufiko'
          width={400}
          height={300}
        />
        <p className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-tight md:leading-tight lg:leading-relaxed'>
          Overcome Your Phobias, Reclaim Your Life
        </p>
        <Link href='/login'>
          <button className='flex-none cursor-pointer rounded-xl bg-red-400 px-6 sm:px-8 py-2 sm:py-2.5 text-white hover:bg-red-500 transition-colors text-sm md:text-base'>
            Try Now
          </button>
        </Link>
      </div>

      <section className='p-4 sm:p-8 md:p-12 lg:p-16'>
        <div className='text-center'>
          <p className='mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl'>
            Anywhere and Anytime!
          </p>
          <p className='text-lg sm:text-xl md:text-2xl'>
            Six virtual environment created for treat your phobia
          </p>
        </div>
        <div className='my-6 sm:my-8 md:10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3 gap-4 justify-items-center'>
          <PhobiaGrid />
        </div>
      </section>

      <section className='p-4 sm:p-8 md:p-12 lg:p-16 grid grid-cols-1 lg:grid-cols-2 items-center place-items-center bg-[url(/background/pastel-bg.jpg)]'>
        <div className='mb-6 md:mb-10'>
          <p className='mb-2 sm:mb-4 text-2xl sm:text-3xl md:text-4xl'>
            Explore our products!
          </p>
          <p className='mb-6 sm:mb-8 md:mb-10 text-lg sm:text-xl md:text-2xl'>
            More than just relaxing perfume
          </p>
        </div>
        <div className='flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8'>
          <div className='flex-none grid h-[400px] w-[200px] grid-rows-2 gap-y-3 p-3 rounded-md bg-white'>
            <Image src='/perfume.jpg' alt='Product' width={188} height={188} />
            <div className='flex flex-col items-start justify-between'>
              <article>
                <p className='mb-2 sm:mb-4 text-base sm:text-lg font-semibold'>
                  Product 1
                </p>
                <p>Rp180000</p>
              </article>
              <button className='flex w-full cursor-pointer justify-center gap-2 rounded-xl bg-theme6 py-2 hover:bg-purple-400'>
                <ShoppingCart />
                Buy
              </button>
            </div>
          </div>
          <div className='flex-none grid h-[400px] w-[200px] bg-theme6 rounded-md'>
            <div className='w-full h-full flex justify-center items-center'>
              <button className='flex cursor-pointer items-center gap-x-3 rounded-full bg-primary-foreground px-4 py-2.5'>
                <p>See All</p>
                <div className='flex h-8 w-8 items-center justify-center rounded-full bg-white'>
                  <MoveRight color='black' />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className='p-4 sm:p-8 md:p-12 lg:p-16'>
        <p className='mb-4 text-center text-2xl sm:text-3xl md:text-4xl'>
          Articles
        </p>
        <div className='my-6 sm:my-8 md:my-10 flex flex-wrap items-center justify-center gap-4 sm:gap-5'>
          {[1, 2, 3].map((article) => (
            <div
              key={article}
              className='bg-white h-[300px] w-[300px] border rounded-md p-3'
            >
              <div className='mb-3 h-[180px] w-full bg-slate-300 rounded-md'></div>
              <p className='mb-1 cursor-pointer text-base sm:text-lg font-semibold transition-all hover:underline'>
                Title {article}
              </p>
              <p className='line-clamp-2 text-sm sm:text-base'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Ratione, eaque? Quis voluptates atque repudiandae doloribus
                nostrum recusandae commodi odio, dicta voluptatibus ab quaerat
                dolorem eligendi eum eveniet similique? Quasi, nostrum.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
