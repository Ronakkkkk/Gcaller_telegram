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

interface Contact {
  id: string;
  first_name: string;
  last_name?: string;
  phone_number: string;
  username?: string;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [webApp, setWebApp] = useState<any>(null);

  useEffect(() => {
    const initializeWebApp = async () => {
      try {
        const WebApp = (await import('@twa-dev/sdk')).default;
        setWebApp(WebApp);
        WebApp.ready();
        WebApp.expand();

        if (WebApp.initDataUnsafe.user) {
          setUserData(WebApp.initDataUnsafe.user as UserData);
        }

        // Set up the main button for contact access
        WebApp.MainButton.setText('SHARE CONTACTS');
        WebApp.MainButton.onClick(requestContactAccess);
        WebApp.MainButton.show();

      } catch (error) {
        console.error('Error initializing WebApp:', error);
        setError('Failed to initialize Telegram Web App');
      }
    };

    initializeWebApp();
  }, []);

  const requestContactAccess = async () => {
    if (!webApp) return;

    setIsLoading(true);
    setError(null);

    try {
      // Request contacts access through Telegram's native UI
      webApp.showPopup({
        title: 'Share Contacts',
        message: 'Would you like to share your contacts with GCaller?',
        buttons: [
          {
            id: 'share_contacts',
            type: 'request_contact',
            text: 'Share Contacts'
          },
          {
            id: 'cancel',
            type: 'cancel',
            text: 'Cancel'
          }
        ]
      }, (buttonId: string) => {
        if (buttonId === 'share_contacts') {
          // When user agrees to share contacts
          handleContactShare();
        }
      });
    } catch (error) {
      console.error('Error requesting contacts:', error);
      setError('Failed to request contact access');
    } finally {
      setIsLoading(false);
    }
  };

  const handleContactShare = async () => {
    if (!webApp) return;

    try {
      // You'll need to implement your own backend endpoint to handle contact sharing
      // For now, we'll just simulate receiving contacts
      const sampleContacts: Contact[] = [
        {
          id: '1',
          first_name: 'John',
          last_name: 'Doe',
          phone_number: '+1234567890',
          username: 'johndoe'
        },
        // Add more sample contacts as needed
      ];

      setContacts(sampleContacts);
      
      // Show success message
      webApp.showPopup({
        title: 'Success',
        message: 'Contacts shared successfully!',
        buttons: [{
          type: 'ok'
        }]
      });

    } catch (error) {
      console.error('Error handling contacts:', error);
      setError('Failed to process contacts');
    }
  };

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
      <h1 className="text-2xl font-bold mb-6">GCaller</h1>
      
      {/* Toggle Fullscreen Button */}
      <button
        onClick={toggleFullscreen}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Toggle Fullscreen
      </button>

      {/* Error Display */}
      {error && (
        <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Loading State */}
      {isLoading && (
        <div className="mb-4">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        </div>
      )}

      {/* User Data Display */}
      {userData && (
        <div className="mb-6 p-4 bg-gray-100 rounded">
          <h2 className="text-xl font-semibold mb-2">User Information</h2>
          <ul>
            <li>ID: {userData.id}</li>
            <li>First Name: {userData.first_name}</li>
            <li>Last Name: {userData.last_name || "N/A"}</li>
            <li>Username: {userData.username || "N/A"}</li>
            <li>Language Code: {userData.language_code}</li>
            <li>Is Premium: {userData.is_premium ? "Yes" : "No"}</li>
          </ul>
        </div>
      )}

      {/* Contacts Display */}
      {contacts.length > 0 && (
        <div className="w-full max-w-md">
          <h2 className="text-xl font-semibold mb-2">Shared Contacts</h2>
          <div className="bg-white shadow rounded-lg">
            {contacts.map((contact) => (
              <div key={contact.id} className="p-4 border-b last:border-b-0">
                <h3 className="font-medium">
                  {contact.first_name} {contact.last_name}
                </h3>
                <p className="text-gray-600">{contact.phone_number}</p>
                {contact.username && (
                  <p className="text-gray-500">@{contact.username}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}