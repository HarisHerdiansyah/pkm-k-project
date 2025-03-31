import { Download } from 'lucide-react';
import { DateTime } from 'luxon';
import clsx from 'clsx';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

const users = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    registerAt: DateTime.now().toLocaleString(DateTime.DATETIME_FULL),
    subscribe: true,
    plan: '6-Month',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    registerAt: DateTime.now().toLocaleString(DateTime.DATETIME_FULL),
    subscribe: true,
    plan: '3-Month',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    email: 'bob@example.com',
    registerAt: DateTime.now().toLocaleString(DateTime.DATETIME_FULL),
    subscribe: true,
    plan: '1-Month',
  },
];

export default function page() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-end items-center'>
        <Button>
          <Download className='mr-2 h-4 w-4' /> Download
        </Button>
      </div>
      <Table className='table-auto'>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Register Time</TableHead>
            <TableHead>Subscription</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.registerAt}</TableCell>
              <TableCell className='space-x-2'>
                <Badge
                  className={clsx({
                    'bg-red-500': !user.subscribe,
                    'bg-green-500': user.subscribe,
                  })}
                >
                  {user.subscribe ? 'Active' : 'Inactive'}
                </Badge>
                {user.subscribe && (
                  <Badge
                    className={clsx({
                      'bg-amber-400 text-black': user.plan.includes('6'),
                      'bg-zinc-600': user.plan.includes('3'),
                      'bg-amber-600': user.plan.includes('1'),
                    })}
                  >
                    {user.plan}
                  </Badge>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
