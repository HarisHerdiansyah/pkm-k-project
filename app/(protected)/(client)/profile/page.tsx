'use client';

import type React from 'react';
import { useState } from 'react';
import { CreditCard, Edit2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
}

interface Subscription {
  plan: string;
  status: string;
  nextBilling: string;
  amount: number;
}

export default function ProfilePage() {
  // In a real app, this would come from your auth/user management system
  const [profile, setProfile] = useState<UserProfile>({
    name: 'John Doe',
    email: 'john@example.com',
    avatarUrl: '/placeholder.svg?height=100&width=100',
  });

  // Mock subscription data
  const [subscription] = useState<Subscription>({
    plan: 'Premium Plan',
    status: 'Active',
    nextBilling: 'March 1, 2024',
    amount: 49.99,
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProfile(editedProfile);
    setIsEditing(false);
  };

  return (
    <div className='container mx-auto px-4 py-8'>
      <h1 className='text-3xl font-bold mb-8'>My Profile</h1>

      <div className='grid md:grid-cols-3 gap-8'>
        {/* Profile Summary Card */}
        <Card className='md:col-span-1'>
          <CardHeader className='text-center'>
            <div className='relative w-32 h-32 mx-auto mb-4 bg-slate-300 rounded-full'></div>
            <CardTitle>{profile.name}</CardTitle>
            <CardDescription>{profile.email}</CardDescription>
          </CardHeader>
          <CardContent>
            <Button
              variant='outline'
              className='w-full cursor-pointer'
              onClick={() => setIsEditing(true)}
            >
              <Edit2 className='w-4 h-4 mr-2' />
              Edit Profile
            </Button>
          </CardContent>
        </Card>

        {/* Main Content Area */}
        <div className='md:col-span-2'>
          <Tabs defaultValue='profile' className='space-y-4'>
            <TabsList>
              <TabsTrigger
                value='profile'
                className='flex items-center gap-2 cursor-pointer'
              >
                <User className='w-4 h-4' />
                Profile Details
              </TabsTrigger>
              <TabsTrigger
                value='subscription'
                className='flex items-center gap-2 cursor-pointer'
              >
                <CreditCard className='w-4 h-4' />
                Subscription
              </TabsTrigger>
            </TabsList>

            {/* Profile Details Tab */}
            <TabsContent value='profile'>
              <Card>
                <CardHeader>
                  <CardTitle>Profile Details</CardTitle>
                  <CardDescription>
                    Manage your profile information
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {isEditing ? (
                    <form onSubmit={handleEditSubmit} className='space-y-4'>
                      <div className='space-y-2'>
                        <Label htmlFor='name'>Name</Label>
                        <Input
                          id='name'
                          value={editedProfile.name}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              name: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className='space-y-2'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                          id='email'
                          type='email'
                          value={editedProfile.email}
                          onChange={(e) =>
                            setEditedProfile({
                              ...editedProfile,
                              email: e.target.value,
                            })
                          }
                        />
                      </div>
                      <div className='flex gap-4'>
                        <Button type='submit' className='cursor-pointer'>
                          Save Changes
                        </Button>
                        <Button
                          type='button'
                          className='cursor-pointer'
                          variant='outline'
                          onClick={() => {
                            setEditedProfile(profile);
                            setIsEditing(false);
                          }}
                        >
                          Cancel
                        </Button>
                      </div>
                    </form>
                  ) : (
                    <div className='space-y-4'>
                      <div className='space-y-2'>
                        <Label>Name</Label>
                        <p className='text-lg'>{profile.name}</p>
                      </div>
                      <Separator />
                      <div className='space-y-2'>
                        <Label>Email</Label>
                        <p className='text-lg'>{profile.email}</p>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            {/* Subscription Tab */}
            <TabsContent value='subscription'>
              <Card>
                <CardHeader>
                  <CardTitle>Subscription Details</CardTitle>
                  <CardDescription>
                    Manage your subscription and billing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className='space-y-6'>
                    {/* Current Plan */}
                    <div className='space-y-4'>
                      <h3 className='text-lg font-semibold'>Current Plan</h3>
                      <Card>
                        <CardContent className='p-6'>
                          <div className='flex justify-between items-start'>
                            <div className='space-y-1'>
                              <h4 className='font-semibold'>
                                {subscription.plan}
                              </h4>
                              <p className='text-sm text-muted-foreground'>
                                Next billing date: {subscription.nextBilling}
                              </p>
                            </div>
                            <div className='text-right'>
                              <div className='font-semibold'>
                                ${subscription.amount}/month
                              </div>
                              <span className='inline-block px-2 py-1 text-xs rounded-full bg-primary/10 text-primary'>
                                {subscription.status}
                              </span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>

                    {/* Billing History */}
                    <div className='space-y-4'>
                      <h3 className='text-lg font-semibold'>Billing History</h3>
                      <div className='space-y-4'>
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className='flex justify-between items-center'
                          >
                            <div>
                              <p className='font-medium'>
                                {new Date(2024, 1 - i, 1).toLocaleDateString(
                                  'en-US',
                                  {
                                    year: 'numeric',
                                    month: 'long',
                                    day: 'numeric',
                                  },
                                )}
                              </p>
                              <p className='text-sm text-muted-foreground'>
                                {subscription.plan}
                              </p>
                            </div>
                            <div className='text-right'>
                              <p className='font-medium'>
                                ${subscription.amount}
                              </p>
                              <p className='text-sm text-muted-foreground'>
                                Paid
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Subscription Management */}
                    <div className='space-y-4'>
                      <h3 className='text-lg font-semibold'>
                        Manage Subscription
                      </h3>
                      <div className='flex gap-4'>
                        <Button variant='outline'>Change Plan</Button>
                        <Button variant='destructive'>
                          Cancel Subscription
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
