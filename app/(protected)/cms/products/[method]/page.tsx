import { ProductForm } from '@/components/cms/products';

export default async function page({
  params,
}: {
  params: Promise<{ method: string }>;
}) {
  const { method } = await params;

  return (
    <>
      <h2 className='text-xl'>
        {method.toLowerCase() === 'add' ? 'Add New Product' : 'Edit Product'}
      </h2>
      <ProductForm />
    </>
  );
}
