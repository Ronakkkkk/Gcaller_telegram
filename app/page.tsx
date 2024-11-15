'use client';

import { useEffect, useState } from "react";

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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    // Import WebApp dynamically only on the client side
    const initializeWebApp = async () => {
      try {
        const WebApp = (await import('@twa-dev/sdk')).default;

        // Store WebApp instance
        setWebApp(WebApp);

        // Signal that the web app is ready for display
        WebApp.ready();

        // Expand to full screen immediately
        WebApp.expand();

        // Check if user data is available
        if (WebApp.initDataUnsafe.user) {
          setUserData(WebApp.initDataUnsafe.user as UserData);
        }

        // Set up the main button for contact verification
        WebApp.MainButton.setText('VERIFY CONTACTS');
        WebApp.MainButton.onClick(handleContactVerification);
        WebApp.MainButton.show();

      } catch (error) {
        console.error('Error initializing WebApp:', error);
      }
    };

    initializeWebApp();
  }, []);

  function handleContactVerification() {
    console.log("Contact verification initiated!");
    // Additional verification logic here
  }

  // Function to toggle fullscreen
  const toggleFullscreen = () => {
    if (webApp) {
      if (webApp.isExpanded) {
        webApp.collapse();
      } else {
        webApp.expand();
      }
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold">GCaller</h1>
      
      {/* Optional: Add a button to toggle fullscreen */}
      <button 
        onClick={toggleFullscreen}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Fullscreen
      </button>

      {userData ? (
        <div>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || "N/A"}</li>
            <li>Username: {userData.username || "N/A"}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? "Yes" : "No"}</li>
          </ul>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </main>
  );
}