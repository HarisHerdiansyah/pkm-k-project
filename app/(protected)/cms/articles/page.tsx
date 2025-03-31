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

const articles = [
  {
    id: 1,
    title: 'Getting Started with Next.js',
    author: 'John Doe',
    status: 'Published',
  },
  {
    id: 2,
    title: 'React Hooks Explained',
    author: 'Jane Smith',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'CSS Grid Layout',
    author: 'Bob Johnson',
    status: 'Published',
  },
];

export default function page() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-end items-center'>
        <Button>
          <PlusCircle className='mr-2 h-4 w-4' /> Add Article
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Title</TableHead>
            <TableHead>Author</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {articles.map((article) => (
            <TableRow key={article.id}>
              <TableCell>{article.id}</TableCell>
              <TableCell>{article.title}</TableCell>
              <TableCell>{article.author}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    article.status === 'Published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {article.status}
                </span>
              </TableCell>
              <TableCell>
                <Button variant='outline' size='sm' className='mr-2'>
                  Edit
                </Button>
                <Button variant='outline' size='sm'>
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
