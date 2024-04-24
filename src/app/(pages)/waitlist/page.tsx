import { WaitlistForm } from '@/components/forms/waitlist/waitlist-form';

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';

export default async function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 ">
      <WaitlistSignUpCard />
    </div>
  );
}

const WaitlistSignUpCard = () => {
  return (
    <Card className="mx-auto max-w-2xl">
      <CardHeader>
        <CardTitle className="text-4xl font-bold">
          Join the Waiting List
        </CardTitle>
        <CardDescription className="text-lg">
          Get notified when [insert-name] releases.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <WaitlistForm />
      </CardContent>
    </Card>
  );
};
