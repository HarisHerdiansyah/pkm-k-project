import PhobiaGrid from '@/components/PhobiaGrid';

export default function page() {
  return (
    <>
      <h1 className='text-2xl'>Choose your environment:</h1>
      <div className='my-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 p-3 gap-4 justify-items-center'>
        <PhobiaGrid />
      </div>
    </>
  );
}
