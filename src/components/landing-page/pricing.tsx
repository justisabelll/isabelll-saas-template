'use client';

import { useState } from 'react';
import { Check } from 'lucide-react';
import { RadioGroup } from '@headlessui/react';

const plans = [
  {
    name: 'Basic',
    price: 10,
    description: 'For users that want to get started quickly',
    features: ['Basic features', 'Unlimited access to the platform'],
    mostPopular: false,
  },
  {
    name: 'Pro',
    price: 30,
    description: 'For users that want to get started quickly',
    features: ['Basic features', 'Unlimited access to the platform'],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    price: 60,
    description: 'For users that want to get started quickly',
    features: ['Basic features', 'Unlimited access to the platform'],
    mostPopular: false,
  },
];

const frequencies = [
  { value: 'monthly', label: 'Monthly', priceSuffix: '/month' },
  { value: 'annually', label: 'Annually', priceSuffix: '/year' },
];

const tiers = plans.map((plan) => ({
  name: plan.name,
  id: `tier-${plan.name.toLowerCase()}`,
  price: { monthly: `$${plan.price}`, annually: `$${plan.price * 12}` },
  description: plan.description,
  features: plan.features,
  mostPopular: plan.mostPopular,
}));
function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Pricing() {
  const [frequency, setFrequency] = useState(
    frequencies.find((f) => f.value === 'monthly') || frequencies[0]
  );

  return (
    <div className="py-12 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-primary">
            Pricing
          </h2>
          <p className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            Pricing plans for teams of&nbsp;all&nbsp;sizes
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 ">
          Choose an affordable plan that's packed with the best features for
          engaging your audience, creating customer loyalty, and driving sales.
        </p>
        <div className="mt-16 flex justify-center">
          <RadioGroup
            value={frequency}
            onChange={setFrequency}
            className="grid grid-cols-2 gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 ring-1 ring-inset ring-ring dark:ring-ring"
          >
            <RadioGroup.Label className="sr-only">
              Payment frequency
            </RadioGroup.Label>
            {frequencies.map((option) => (
              <RadioGroup.Option
                key={option.value}
                value={option}
                className={({ checked }) =>
                  classNames(
                    'cursor-pointer rounded-full px-2.5 py-1',
                    checked ? 'bg-primary text-primary-foreground' : ''
                  )
                }
              >
                <span>{option.label}</span>
              </RadioGroup.Option>
            ))}
          </RadioGroup>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3 ">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={classNames(
                tier.mostPopular
                  ? 'ring-2 ring-primary'
                  : 'ring-1 ring-ring dark:ring-ring',
                'rounded-3xl p-8 xl:p-10 bg-card '
              )}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={classNames(
                    tier.mostPopular ? 'text-primary' : '',
                    'text-lg font-semibold leading-8'
                  )}
                >
                  {tier.name}
                </h3>
                {tier.mostPopular ? (
                  <p className="rounded-full bg-accent px-2.5 py-1 text-xs font-semibold leading-5 text-primary">
                    Most popular
                  </p>
                ) : null}
              </div>
              <p className="mt-4 text-sm leading-6  ">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight ">
                  {tier.price[frequency.value as keyof typeof tier.price]}
                </span>
                <span className="text-sm font-semibold leading-6 ">
                  {frequency.priceSuffix}
                </span>
              </p>
              <a
                aria-describedby={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? 'bg-primary text-primary-foreground shadow-sm hover:bg-primary'
                    : 'bg-secondary ring-1 ring-inset ring-primary hover:ring-primary',
                  'mt-6 block rounded-md py-2 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                )}
              >
                Get Started
              </a>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6  xl:mt-10"
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// credit tailwindui
