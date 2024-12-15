import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs';
import './globals.css';
import Provider from './provider'

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <SignedOut>
          <SignInButton />
          </SignedOut>
          <SignedIn>
              
           </SignedIn>
          <Provider>
            {children}
            </Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
