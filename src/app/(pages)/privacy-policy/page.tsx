import { config } from '@/config';

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto my-10 overflow-hidden">
      <div className="p-6">
        <pre className="whitespace-pre-wrap">
          <PrivacyPolicy />
        </pre>
      </div>
    </main>
  );
}

const PolicyStyling = {
  container: 'prose max-w-none font-sans ',
  h1: 'text-2xl font-bold mt-4 mb-2',
  h2: 'text-xl font-bold mt-4 mb-2',
  p: 'mb-2',
  ul: 'list-disc pl-8 mb-2',
};

const PrivacyPolicy = () => {
  return (
    <div className={PolicyStyling.container}>
      <h1 className={PolicyStyling.h1}>{config.appName} Privacy Policy</h1>
      <p className={PolicyStyling.p}>Last updated: April 13, 2024</p>

      <p className={PolicyStyling.p}>
        Thank you for choosing to be part of our community at Isabelll SaaS
        Starter ("Company", "we", "us", "our"). We are committed to protecting
        your personal information and your right to privacy. If you have any
        questions or concerns about this privacy policy, or our practices with
        regards to your personal information, please contact us at
        example@example.com.
      </p>

      <h2 className={PolicyStyling.h2}>Information We Collect</h2>
      <p className={PolicyStyling.p}>
        When you visit our website saas.starter.vercel.app ("Site") and use our
        services, we collect the following information:
      </p>
      <ul className={PolicyStyling.ul}>
        <li>
          <strong>Personal Information:</strong> We collect your name, email
          address, and payment information when you use our services.
        </li>
        <li>
          <strong>Non-Personal Information:</strong> We also collect web cookies
          to enhance your experience on our Site.
        </li>
      </ul>

      <h2 className={PolicyStyling.h2}>Use of Your Information</h2>
      <p className={PolicyStyling.p}>
        We use the information we collect from you for order processing purposes
        only.
      </p>

      <h2 className={PolicyStyling.h2}>Sharing Your Information</h2>
      <p className={PolicyStyling.p}>
        Your information is not shared with any third parties, and we ensure its
        confidentiality and security.
      </p>

      <h2 className={PolicyStyling.h2}>Children's Privacy</h2>
      <p className={PolicyStyling.p}>
        Our services do not address anyone under the age of 13, and we do not
        knowingly collect personal information from children.
      </p>

      <h2 className={PolicyStyling.h2}>Changes to Our Privacy Policy</h2>
      <p className={PolicyStyling.p}>
        We may update our Privacy Policy from time to time. We will notify you
        of any changes by posting the new Privacy Policy on this page and
        updating the "Last updated" date. We will also inform you via email.
      </p>

      <h2 className={PolicyStyling.h2}>Contact Us</h2>
      <p className={PolicyStyling.p}>
        If you have any questions about this Privacy Policy, you can contact us
        at: example@example.com
      </p>
    </div>
  );
};
