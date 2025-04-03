'use client';

import { useRouter } from 'next/navigation';
import { TableCell } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { deleteProduct } from '@/services/products';

export default function BtnAction({ id }: { id: string }) {
  const router = useRouter();

  const onDelete = async () => {
    await deleteProduct(id);
  };

  return (
    <TableCell className='space-x-3'>
      <Button
        size='sm'
        className='bg-yellow-400 hover:bg-yellow-500 text-black border-none'
        onClick={() => router.push('/cms/products/edit')}
      >
        Edit
      </Button>
      <Button variant='destructive' size='sm' onClick={onDelete}>
        Delete
      </Button>
    </TableCell>
  );
}
