interface ConfigProps {
  appName: string;
  appDescription: string;
  domainName: string;
  supportEmail: string;
  blog: {
    title: {
      default: string;
      template: string;
    };
    description: string;
    keywords: string[];
  };
}

export const config: ConfigProps = {
  appName: 'Isabelll Saas Starter',
  appDescription: 'Boilerplate to help people create their saas faster',
  domainName:
    process.env.NODE_ENV === 'development'
      ? 'localhost:3000'
      : 'https://example.com',
  supportEmail: 'example@example.com',
  blog: {
    title: {
      default: 'Isabelll Saas Starter Blog',
      template: '%s | Isabelll Saas Starter Blog',
    },
    description: 'A blog about helping people create their saas faster.',
    keywords: [
      'blog',
      'web development',
      'javascript',
      'react',
      'nextjs',
      'typescript',
    ],
  },
};

interface SubscriptionsPaymentsConfigProps {
  mode: 'subscriptions';
  stripe: {
    plans: {
      priceId: string;
      link?: string;
      name: string;
      description: string;
      price: number;
      priceAnchor: string;
      isFeatured?: boolean;
      features: { name: string }[];
    }[];
  };
}

// Interface for configuring one-time payments through Stripe
interface OneTimePaymentsConfigProps {
  mode: 'payment';
  stripe: {
    products: {
      productId: string; // Unique identifier for the product
      name: string; // Name of the product
      description: string; // Description of the product
      price: number; // Price of the product
      currency: string; // Currency code (e.g., USD, EUR)
    }[];
  };
}

// Interface for configuring a credit-based payment system through Stripe
interface CreditBasedPaymentsConfigProps {
  stripe: {
    creditPackages: {
      packageId: string; // Unique identifier for the credit package
      name: string; // Name of the credit package
      description: string; // Description of the credit package
      credits: number; // Number of credits included in the package
      price: number; // Price of the credit package
      currency: string; // Currency code (e.g., USD, EUR)
    }[];
  };
}
