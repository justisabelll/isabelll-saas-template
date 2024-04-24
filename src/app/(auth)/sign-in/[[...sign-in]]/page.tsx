import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-md">
        <SignIn
          appearance={{
            variables: {
              //colorPrimary: '#ffffff', // hides the clerk logo
              colorPrimary: '#000000',
            },
            elements: {
              card: 'rounded-md border border-gray-200 shadow-lg',
              formButtonPrimary: 'bg-black text-white',
              footerActionLink: 'text-black',
            },
          }}
        />
      </div>
    </div>
  );
}
