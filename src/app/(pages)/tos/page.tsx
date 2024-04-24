import { config } from '@/config';

export default function TosPage() {
  return (
    <main className="max-w-4xl mx-auto my-10 overflow-hidden">
      <div className="p-6">
        <pre className="whitespace-pre-wrap">
          <TermsOfService />
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

const TermsOfService = () => {
  return (
    <div className={PolicyStyling.container}>
      <h1 className={PolicyStyling.h1}>{config.appName} Terms of Service</h1>
      <p className={PolicyStyling.p}>Last updated: April 13, 2024</p>
      <p className={PolicyStyling.p}>
        By accessing and using the Isabelll SaaS Starter website ("Website"),
        you agree to the following terms and conditions (the "Terms"). Please
        read them carefully as they form a binding legal agreement between you
        and Isabelll SaaS Starter. If you do not agree to these terms, please do
        not use our Website.
      </p>
      <h2 className={PolicyStyling.h2}>Intellectual Property</h2>
      <p className={PolicyStyling.p}>
        The Website and its original content, features, and functionality are
        and will remain the exclusive property of Isabelll SaaS Starter and its
        licensors. Our trademarks and trade dress may not be used in connection
        with any product or service without the prior written consent of
        Isabelll SaaS Starter.
      </p>
      <h2 className={PolicyStyling.h2}>Your Account</h2>
      <p className={PolicyStyling.p}>
        If you choose to create an account on our Website, you are responsible
        for maintaining the security of your account and you are fully
        responsible for all activities that occur under the account and any
        other actions taken in connection with it. You must notify us
        immediately upon becoming aware of any breach of security or
        unauthorized use of your account.
      </p>
      <h2 className={PolicyStyling.h2}>Links to Other Web Sites</h2>
      <p className={PolicyStyling.p}>
        Our Website may contain links to third-party web sites or services that
        are not owned or controlled by Isabelll SaaS Starter. Isabelll SaaS
        Starter has no control over, and assumes no responsibility for, the
        content, privacy policies, or practices of any third party web sites or
        services. We strongly advise you to read the terms and conditions and
        privacy policies of any third-party web sites or services that you
        visit.
      </p>
      <h2 className={PolicyStyling.h2}>Termination</h2>
      <p className={PolicyStyling.p}>
        We may terminate or suspend your account and bar access to the Website
        immediately, without prior notice or liability, under our sole
        discretion, for any reason whatsoever and without limitation, including
        but not limited to a breach of the Terms.
      </p>
      <h2 className={PolicyStyling.h2}>Governing Law</h2>
      <p className={PolicyStyling.p}>
        These Terms shall be governed and construed in accordance with the laws
        of the location of Isabelll SaaS Starter without regard to its conflict
        of law provisions.
      </p>
      <h2 className={PolicyStyling.h2}>Changes</h2>
      <p className={PolicyStyling.p}>
        We reserve the right, at our sole discretion, to modify or replace these
        Terms at any time. If a revision is material we will provide at least 30
        days' notice prior to any new terms taking effect. What constitutes a
        material change will be determined at our sole discretion.
      </p>
      <h2 className={PolicyStyling.h2}>Contact Us</h2>
      <p className={PolicyStyling.p}>
        If you have any questions about these Terms, please contact us at
        example@example.com.
      </p>
    </div>
  );
};
