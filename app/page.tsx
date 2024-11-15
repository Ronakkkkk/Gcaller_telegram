'use client';
import { useEffect, useState } from "react";
import type { WebApp, WebAppUser } from "@twa-dev/types";

interface UserData {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  language_code: string;
  is_premium?: boolean;
}

interface Contact {
  user_id: string;
  first_name: string;
  last_name?: string;
  phone_number: string;
}

export default function Home() {
  const [userData, setUserData] = useState<WebAppUser | null>(null);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [webApp, setWebApp] = useState<WebApp | null>(null);

  useEffect(() => {
    const initializeWebApp = async () => {
      setIsLoading(true);
      try {
        const WebApp = (await import('@twa-dev/sdk')).default;
        setWebApp(WebApp);
        WebApp.ready();
        WebApp.expand();

        setUserData(WebApp?.initDataUnsafe?.user ?? null);

        // Initialize the main button for contact sharing
        WebApp.MainButton.setText('Share Contact');
        WebApp.MainButton.onClick(requestContactShare);
        WebApp.MainButton.show();

      } catch (error) {
        console.error('Error initializing WebApp:', error);
        setError('Failed to initialize Telegram Web App');
      } finally {
        setIsLoading(false);
      }
    };

    initializeWebApp();
  }, []);

  const requestContactShare = () => {
    if (!webApp) return;

    try {
      // Use Telegram's native contact picker
      webApp.showPopup({
        title: 'Share Contact',
        message: 'Please select a contact to share',
        buttons: [
          { type: 'request_contact', text: 'Select Contact' },
          { type: 'cancel' }
        ]
      }, (buttonId: string, contact: Contact) => {
        if (buttonId === 'request_contact' && contact) {
          handleNewContact(contact);
        }
      });
    } catch (error) {
      console.error('Error requesting contact:', error);
      setError('Failed to request contact selection');
    }
  };

  const handleNewContact = (contact: Contact) => {
    try {
      // Format the contact data
      const newContact: Contact = {
        user_id: contact.user_id?.toString() || Date.now().toString(),
        first_name: contact.first_name,
        last_name: contact.last_name,
        phone_number: contact.phone_number
      };

      // Add the new contact to the list
      setContacts(prevContacts => {
        // Check if contact already exists
        const exists = prevContacts.some(c => c.user_id === newContact.user_id);
        if (!exists) {
          return [...prevContacts, newContact];
        }
        return prevContacts;
      });

      // Show success message
      webApp!.showPopup({
        message: 'Contact added successfully!',
        buttons: [{ type: 'ok' }]
      });

    } catch (error) {
      console.error('Error handling contact:', error);
      setError('Failed to add contact');
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-2xl font-bold mb-6">GCaller</h1>
      
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

      {/* Share Contacts Instructions */}
      <div className="mb-6 p-4 bg-blue-50 rounded text-center">
        <p>Click the button below to share contacts</p>
        <p className="text-sm text-gray-600 mt-2">
          You can share multiple contacts one at a time
        </p>
      </div>

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
      <div className="w-full max-w-md">
        <h2 className="text-xl font-semibold mb-2">
          Shared Contacts ({contacts.length})
        </h2>
        {contacts.length > 0 ? (
          <div className="bg-white shadow rounded-lg">
            {contacts.map((contact) => (
              <div key={contact.user_id} className="p-4 border-b last:border-b-0">
                <h3 className="font-medium">
                  {contact.first_name} {contact.last_name}
                </h3>
                <p className="text-gray-600">{contact.phone_number}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center p-4">
            No contacts shared yet. Use the button below to share contacts.
          </p>
        )}
      </div>
    </main>
  );
}