import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { PlusCircle } from 'lucide-react';

const products = [
  { id: 1, name: 'Product A', price: 19.99, stock: 100 },
  { id: 2, name: 'Product B', price: 29.99, stock: 50 },
  { id: 3, name: 'Product C', price: 39.99, stock: 75 },
];

export default function page() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-end items-center'>
        <Link href='/cms/products/add'>
          <Button className='bg-theme1 text-black hover:bg-red-400'>
            <PlusCircle className='mr-2 h-4 w-4' /> Add Product
          </Button>
        </Link>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Stock</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className='table-fixed'>
          {products.map((product) => (
            <TableRow key={product.id}>
              <TableCell>{product.id}</TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>${product.price.toFixed(2)}</TableCell>
              <TableCell>{product.stock}</TableCell>
              <TableCell className='space-x-3'>
                <Link href='/cms/products/edit'>
                  <Button
                    size='sm'
                    className='bg-yellow-400 hover:bg-yellow-500 text-black border-none'
                  >
                    Edit
                  </Button>
                </Link>
                <Button variant='destructive' size='sm'>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
