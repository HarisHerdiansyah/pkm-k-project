'use server';

import { revalidatePath } from 'next/cache';

export async function insertProduct(payload: FormData) {
  try {
    const response = await fetch('/api/cms/products', {
      method: 'post',
      body: payload,
    });

    if (!response.ok) throw new Error('Insert Product Failed');
    return response;
  } catch (error) {
    console.error('Error:', error);
  }
}

export async function deleteProduct(id: string) {
  try {
    const response = await fetch(`/api/cms/products/${id}`, {
      method: 'delete',
    });
    if (!response.ok) throw new Error('Delete Product Failed');
    revalidatePath('/cms/products');
  } catch (error) {
    console.error('Error', error);
  }
}
