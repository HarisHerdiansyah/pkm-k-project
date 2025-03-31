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

// Dummy video data
const dummyVideos = [
  {
    id: 1,
    title: 'Introduction to React',
    duration: '10:30',
    category: 'Programming',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Advanced CSS Techniques',
    duration: '15:45',
    category: 'Web Design',
    status: 'Draft',
  },
  {
    id: 3,
    title: 'Node.js Basics',
    duration: '20:15',
    category: 'Programming',
    status: 'Published',
  },
  {
    id: 4,
    title: 'UI/UX Design Principles',
    duration: '18:00',
    category: 'Design',
    status: 'Published',
  },
  {
    id: 5,
    title: 'Python for Data Science',
    duration: '25:30',
    category: 'Data Science',
    status: 'Draft',
  },
];

export default function page() {
  return (
    <div className='space-y-6'>
      <div className='flex justify-end items-center'>
        <Button>
          <PlusCircle className='mr-2 h-4 w-4' /> Add Video
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Category</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyVideos.map((video) => (
            <TableRow key={video.id}>
              <TableCell>{video.title}</TableCell>
              <TableCell>{video.duration}</TableCell>
              <TableCell>{video.category}</TableCell>
              <TableCell>
                <span
                  className={`px-2 py-1 rounded-full text-xs font-semibold ${
                    video.status === 'Published'
                      ? 'bg-green-100 text-green-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}
                >
                  {video.status}
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
