import { SignUp } from '@clerk/nextjs';
import { baseUrl } from '@/seo/sitemap';

export default function Page() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md">
        <SignUp
          afterSignUpUrl="/"
          redirectUrl="/"
          afterSignInUrl="/"
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
