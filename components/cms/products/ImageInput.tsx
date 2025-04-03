'use client';

import Image from 'next/image';
import { useDropzone } from 'react-dropzone';
import { Trash2 } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import { Updater } from 'use-immer';
import { ProductPayload } from './ProductForm';

export default function ImageInput({
  product,
  setProduct,
}: {
  product: ProductPayload;
  setProduct: Updater<ProductPayload>;
}) {
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
    },
    onDrop: (acceptedFiles) => {
      const files = acceptedFiles.map((accFile: File) => {
        return {
          key: uuidv4(),
          preview: URL.createObjectURL(accFile),
          name: accFile.name,
          fileData: accFile,
        };
      });
      setProduct((draft) => {
        files.forEach((file) => draft.productImage.push(file));
      });
    },
  });

  const onDeleteDroppedFile = (key: string) => {
    setProduct((draft) => {
      const i = draft.productImage.findIndex((d) => d.key === key);
      if (i !== -1) draft.productImage.splice(i, 1);
    });
  };

  return (
    <div id='image-input' className='my-5'>
      <h3 className='text-lg mb-2'>Image Input</h3>
      <div className='grid grid-cols-2 gap-x-6'>
        <div
          {...getRootProps()}
          className='flex flex-col justify-center items-center bg-slate-50 border-2 border-dashed border-gray-400 h-[100px] cursor-pointer'
        >
          <input {...getInputProps()} />
          <p>Drag and drop some files here, or click to select files</p>
        </div>
        {product.productImage.length > 0 && (
          <div className='flex flex-wrap gap-2 max-h-[500px] overflow-y-auto border-2 border-dashed border-gray-400 p-2'>
            {product.productImage.map((file) => (
              <div key={file.key} className=' relative'>
                <div
                  className='w-8 h-8 bg-red-500 hover:bg-red-600 cursor-pointer rounded-md flex items-center justify-center absolute right-[6] top-[6]'
                  onClick={() => onDeleteDroppedFile(file.key)}
                >
                  <Trash2 color='white' />
                </div>
                <Image
                  src={file.preview}
                  alt={file.name}
                  width={200}
                  height={100}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
