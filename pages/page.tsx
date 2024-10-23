'use client';

import { useEffect, useState } from 'react';

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const initializeWebApp = async () => {
      try {
        const { default: WebApp } = await import('@twa-dev/sdk'); // Import only on client side
        if (WebApp.initDataUnsafe?.user) {
          setUserData(WebApp.initDataUnsafe.user as UserData);
        }
        WebApp.MainButton.setText('VERIFY CONTACTS');
        WebApp.MainButton.onClick(handleContactVerification);
        WebApp.MainButton.show();
      } catch (error) {
        console.error('Error initializing WebApp:', error);
      }
    };

    initializeWebApp();
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      {userData ? (
        <div>
          <h1 className="text-2xl font-bold">GCaller</h1>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name}</li>
            <li>Username: {userData.username}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </div>
      ) : (
        <p>Ronak</p>
      )}
    </main>
  );
}

function handleContactVerification() {
  console.log('Contact verification not yet implemented.');
}
