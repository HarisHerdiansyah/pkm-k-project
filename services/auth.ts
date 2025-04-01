export type Payload = {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerUser = async (payload: Payload) => {
  try {
    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      throw new Error('Registration failed');
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
