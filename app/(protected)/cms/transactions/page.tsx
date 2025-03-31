import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Info, PlusCircle } from 'lucide-react';

const dummyTransactions = [
  {
    id: 'TRX001',
    date: '2023-05-01',
    amount: 100.0,
    status: 'Completed',
    customer: 'John Doe',
    type: 'Product',
  },
  {
    id: 'TRX002',
    date: '2023-05-02',
    amount: 75.5,
    status: 'Pending',
    customer: 'Jane Smith',
    type: 'Product',
  },
  {
    id: 'TRX003',
    date: '2023-05-03',
    amount: 200.0,
    status: 'Completed',
    customer: 'Bob Johnson',
    type: 'Product',
  },
  {
    id: 'TRX004',
    date: '2023-05-04',
    amount: 50.0,
    status: 'Failed',
    customer: 'Alice Brown',
    type: 'Product',
  },
  {
    id: 'TRX005',
    date: '2023-05-05',
    amount: 150.0,
    status: 'Completed',
    customer: 'Charlie Davis',
    type: 'Product',
  },
  {
    id: 'TRX006',
    date: '2023-05-06',
    amount: 80.0,
    status: 'Pending',
    customer: 'Eva Wilson',
    type: 'Subscription',
  },
  {
    id: 'TRX007',
    date: '2023-05-07',
    amount: 120.0,
    status: 'Completed',
    customer: 'Frank Miller',
    type: 'Subscription',
  },
  {
    id: 'TRX008',
    date: '2023-05-08',
    amount: 90.0,
    status: 'Failed',
    customer: 'Grace Taylor',
    type: 'Subscription',
  },
  {
    id: 'TRX009',
    date: '2023-05-09',
    amount: 180.0,
    status: 'Completed',
    customer: 'Henry Clark',
    type: 'Subscription',
  },
  {
    id: 'TRX010',
    date: '2023-05-10',
    amount: 60.0,
    status: 'Pending',
    customer: 'Ivy Martinez',
    type: 'Subscription',
  },
];

export default function page() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-end items-center'>
        <Button>
          <PlusCircle className='mr-2 h-4 w-4' /> Add Product
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Type</TableHead>
            <TableHead>Detail</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell>{transaction.date}</TableCell>
              <TableCell>${transaction.amount.toFixed(2)}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    transaction.status === 'Completed'
                      ? 'bg-green-100 text-green-800'
                      : transaction.status === 'Pending'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {transaction.status}
                </span>
              </TableCell>
              <TableCell>{transaction.customer}</TableCell>
              <TableCell>{transaction.type}</TableCell>
              <TableCell>
                <Info className='cursor-pointer' />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
