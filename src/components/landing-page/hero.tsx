import { Button } from '@/components/ui/button';
import Image from 'next/image';

export const Hero = () => {
  return (
    <section className="container grid grid-cols-1 md:grid-cols-2 items-center gap-8 pt-10 pb-10 md:py-12 justify-items-center">
      <div className="flex max-w-[980px] flex-col items-start gap-4 text-left">
        <h1 className="text-4xl font-extrabold leading-tight tracking-tighter sm:text-4xl md:text-6xl lg:text-7xl ">
          Build Faster.
        </h1>
        <div>
          <span className="text-lg font-semibold">Isabell SaaS Starter</span>
          <p className="max-w-[700px] text-xl text-muted-foreground sm:text-2xl">
            A nice template for starting your next SaaS project.
          </p>
        </div>
        <div className="flex gap-6 items-center">
          <Button size={'xl'} className="">
            Get Started
          </Button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="w-full h-full max-w-[600px] max-h-[600px] relative">
          <Image
            src="/assets/placeholder.svg"
            alt="Placeholder"
            width={600}
            height={600}
            className="rounded-md"
          />
        </div>
      </div>
    </section>
  );
};
