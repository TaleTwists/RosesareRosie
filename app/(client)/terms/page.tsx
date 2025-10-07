import React from 'react';
import Container from '@/components/Container';
import Title from '@/components/Title';

const TermsPage = () => {
  return (
    <Container>
      <div className="min-h-screen bg-shop_dark_green text-white px-6 py-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="mb-16">
            <Title className="text-3xl">
              TERMS OF SERVICE
            </Title>
            <p className="text-md text-gray-400 tracking-wider">
              Last Updated: October 6, 2025
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-16">
            {/* Welcome Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">Welcome to RosieWig</h2>
              </div>
              <div className="md:col-span-2 space-y-4 text-gray-300 text-sm leading-relaxed">
                <p className="tracking-wide">
                  The RosieWig Services Agreement is a legal agreement between
                  RosieWig and the entity or person (“you”, “your”, or “user”)
                  who registered on the RosieWig signup page to utilize our
                  hiring services, assessment services, and other business
                  solutions that may be offered by RosieWig and its affiliated
                  entities (each, a “Service”). This Agreement outlines the
                  terms of service that govern your use of the Services. If any
                  aspect of this Agreement is unclear, please contact us before
                  commencing use of the Services.
                </p>
                <p>
                  Access to or use of any Services is contingent upon your
                  acceptance of and adherence to all stipulated terms and
                  conditions in this Agreement.
                </p>
              </div>
            </div>

            {/* Account Terms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">Account Terms</h2>
              </div>
              <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed space-y-4">
                <p>
                  To access and use the Services, you must complete the
                  registration process for a RosieWig account (“Account”).
                  Successful registration requires providing your legal name, a
                  valid email address, and any other mandatory information.
                  RosieWig reserves the right to decline or terminate an account
                  at its sole discretion without explanation.
                </p>
                <p>
                  You must be of legal age (18 years or older) to open an
                  account and use the Services. By accepting services provided
                  by RosieWig, you affirm that your use is business-related and
                  not intended for personal, household, or family use.
                </p>
                <p>
                  The primary email address you provide is your responsibility
                  and must be capable of both sending and receiving messages.
                  Email correspondence from this address will serve as the valid
                  means of authentication.
                </p>
                <p>
                  The security of your password and account lies with you.
                  RosieWig will not be liable for any loss or damage resulting
                  from your failure to maintain account security. Technical
                  assistance is available only to RosieWig users. Questions
                  regarding these Terms should be directed to RosieWig Support.
                </p>
                <p>
                  You agree not to reproduce, duplicate, copy, sell, resell, or
                  exploit any part of the Service, its use, or access without
                  explicit written permission from RosieWig. You also agree not
                  to circumvent or bypass technical limitations of the Services
                  or engage in decompiling, disassembling, or reverse
                  engineering them.
                </p>
                <p>
                  You understand that your Materials may be transmitted without
                  encryption and may involve (a) transmission across various
                  networks and (b) modification to comply with technical
                  requirements of connecting networks or devices. “Materials”
                  refers to text, images, copyrighted content, products,
                  services, or other data you or your affiliates provide to
                  RosieWig or its partners.
                </p>
              </div>
            </div>

            {/* Sharing Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">
                  Sharing Information with Third Parties
                </h2>
              </div>
              <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  We only share your information with trusted affiliated
                  partners for analytical purposes and with service providers
                  responsible for managing customer accounts and payments. We
                  will never sell or publicly share your personal information
                  beyond our brand and verified partners.
                </p>
              </div>
            </div>

            {/* Company Terms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">Company Terms</h2>
              </div>
              <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  To establish a new company through your RosieWig account, you
                  must provide organization details, a valid email address, and
                  any other required information. RosieWig retains the right to
                  reject or terminate organization accounts at its discretion
                  without the need for explanation.
                </p>
              </div>
            </div>

            {/* Account Activation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">Account Activation</h2>
              </div>
              <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  The individual signing up for the Service by creating an
                  Account will be considered the contracting party (“Company
                  Owner”) and authorized to use the corresponding Account. It is
                  your responsibility to ensure that the Company Owner’s name
                  (including the legal name of the company, if applicable)
                  appears correctly on the company’s website.
                </p>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">Changes to These Terms</h2>
              </div>
              <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  RosieWig reserves the right to modify, update, or replace any
                  part of these Terms of Service at any time. We will notify
                  users of major updates via email or by posting a notice on our
                  website. Continued use of the Service after such changes
                  constitutes acceptance of the revised Terms.
                </p>
              </div>
            </div>

            {/* Limitation of Liability */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <h2 className="text-lg font-semibold">
                  Limitation of Liability
                </h2>
              </div>
              <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
                <p>
                  RosieWig shall not be held responsible for any indirect,
                  incidental, or consequential damages arising from your use of
                  our Services. Your sole remedy for dissatisfaction with the
                  Service is to discontinue its use.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default TermsPage;
