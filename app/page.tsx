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

        // Adding test contacts immediately for debugging
        setContacts([
          {
            id: '1',
            first_name: 'Johnny',
            last_name: 'Doe',
            phone_number: '+1234567890',
            username: 'johndoe'
          },
          {
            id: '2',
            first_name: 'Jane',
            last_name: 'Smith',
            phone_number: '+1987654321',
            username: 'janesmith'
          }
        ]);

      } catch (error) {
        console.error('Error initializing WebApp:', error);
        setError('Failed to initialize Telegram Web App');
      }
    };

    initializeWebApp();
  }, []);

  const handleShareContacts = () => {
    if (!webApp) return;
    
    setIsLoading(true);
    try {
      // Add these contacts to demonstrate functionality
      const newContacts: Contact[] = [
        {
          id: '3',
          first_name: 'Alice',
          last_name: 'Johnson',
          phone_number: '+1122334455',
          username: 'alicej'
        },
        {
          id: '4',
          first_name: 'Bob',
          last_name: 'Wilson',
          phone_number: '+5544332211',
          username: 'bobw'
        }
      ];
      
      setContacts(prevContacts => [...prevContacts, ...newContacts]);
      console.log('Contacts updated:', contacts); // Debug log
      
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
    } finally {
      setIsLoading(false);
    }
  };

  

  console.log('Current contacts:', contacts); // Debug log

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-6">GCaller</h1>
      
      {/* Share Contacts Button */}
      <button
        onClick={handleShareContacts}
        className="mb-4 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Share Contacts
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

      {/* Debug Info */}
      <div className="mb-4 p-4 bg-yellow-100 rounded">
        <p>Number of contacts: {contacts.length}</p>
      </div>

      {/* Contacts Display */}
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">Contacts ({contacts.length})</h2>
        {contacts.length > 0 ? (
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
        ) : (
          <p className="text-gray-500">No contacts shared yet</p>
        )}
      </div>
    </main>
  );
}