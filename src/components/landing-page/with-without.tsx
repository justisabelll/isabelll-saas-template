import { CheckIcon, XIcon } from 'lucide-react';

export const WithWithout = () => {
  const withoutItems = [
    'Spend days configuring your stack',
    'Struggle with integrating third-party services',
    'Face potential security risks due to misconfigurations',
    'Deal with inconsistent UI/UX design',
    'Waste time on boilerplate code instead of your product',
  ];

  const withItems = [
    'Jumpstart with a pre-configured stack',
    'Seamless integration of essential services',
    'Built-in security best practices',
    'Consistent and modern UI/UX design',
    'Focus on your product from day one',
  ];

  return (
    <section className="container mx-auto my-12 p-8">
      <h2 className="text-4xl font-bold text-center mb-8">
        Tired of wasting time setting up your project?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-red-700 font-medium ">
        <div className="bg-red-100 p-12 rounded-lg ">
          <h3 className="text-2xl font-semibold mb-4">
            Without Isabelll SaaS Starter
          </h3>
          <ul className="space-y-2">
            {withoutItems.map((item) => (
              <li key={item}>
                <XIcon size={18} color="red" className="inline-block mr-2" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-green-100 p-12 rounded-lg text-green-700">
          <h3 className="text-2xl font-semibold mb-4 ">
            With Isabelll SaaS Starter
          </h3>
          <ul className="space-y-2">
            {withItems.map((item) => (
              <li key={item}>
                <CheckIcon
                  size={18}
                  color="green"
                  className="inline-block mr-2"
                />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
