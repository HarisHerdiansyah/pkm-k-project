import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

export default function LoaderOverlay({ loading }: { loading: boolean }) {
  return (
    <div className='overlay-white flex flex-col items-center justify-center'>
      <ClimbingBoxLoader color='#8200DB' loading={loading} />
      <p className='text-[#8200DB] text-3xl'>Loading . . .</p>
    </div>
  );
}
