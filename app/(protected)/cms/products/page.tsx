import Link from 'next/link';
import { PlusCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { db } from '@/lib/prisma';
import type { Products } from '@prisma/client';
import { toIDR } from '@/lib/utils';
import { BtnAction } from '@/components/cms/products';

function ProductTable({ dataProducts }: { dataProducts: Products[] }) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className='table-fixed'>
        {dataProducts.map((prod, i) => (
          <TableRow key={prod.product_id}>
            <TableCell>{i + 1}</TableCell>
            <TableCell>{prod.item_name}</TableCell>
            <TableCell>{toIDR(prod.price)}</TableCell>
            <BtnAction id={prod.product_id} />
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default async function Products() {
  const dataProducts = await db.products.findMany({
    select: {
      product_id: true,
      item_name: true,
      price: true,
      description: true,
    },
  });

  return (
    <div className='space-y-6'>
      <div className='flex justify-end items-center'>
        <Link href='/cms/products/add'>
          <Button className='bg-theme1 text-black hover:bg-red-400'>
            <PlusCircle className='mr-2 h-4 w-4' /> Add Product
          </Button>
        </Link>
      </div>
      {dataProducts.length > 0 ? (
        <ProductTable dataProducts={dataProducts} />
      ) : (
        <h1 className='text-center'>-- Product Empty --</h1>
      )}
    </div>
  );
}
