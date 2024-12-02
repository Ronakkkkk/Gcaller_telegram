import { redirect } from 'next/navigation'

export default function HomePage() {
  // Redirect to splash screen for onboarding
  redirect('/splash')
}