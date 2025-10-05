import React from 'react';
import Container from '@/components/Container';
import Title from '@/components/Title';


const PrivacyPage = () => {
  return (
    <Container>
        <div className="min-h-screen bg-shop_dark_green text-white px-6 py-16">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-5xl font-bold mb-3 tracking-wide">PRIVACY POLICY</h1>
          <p className="text-sm text-gray-400 tracking-wider">STAY INFORMED, STAY PROTECTED</p>
        </div>

        {/* Content Sections */}
        <div className="space-y-16">
          {/* Personal Statement */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold">Personal Statement</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                We are committed to providing a secure and user-friendly experience for every customer. Transparency is central to our operations, as reflected in our Terms and Conditions.
              </p>
              <p>
                When you visit rosiewig.com, certain personal information may be collected through your login details and order information.
              </p>
            </div>
          </div>  

          {/* What information do we gather */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold">What Information Do We Collect?</h2>
            </div>
            <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
              <p>
                We collect the information you provide when creating an account, subscribing to our newsletter, or making a purchase. This typically includes details such as your name, address, email, and contact information.
              </p>
            </div>
          </div>

          {/* What third-parties */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold">Sharing Information with Third Parties</h2>
            </div>
            <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
              <p>
                We only share your information with our trusted affiliate partners for analytical purposes and with service providers responsible for managing customer accounts and payments.
We will never sell or publicly share your personal information beyond our brand and verified partners.
              </p>
            </div>
          </div>

          {/* Website Media */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold">Website Media</h2>
            </div>
            <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
              <p>
               We (rosiewig.com) own all media content displayed on this website, except for licensed icons. All photography and video content are produced by AbDan Studios.
              </p>
            </div>
          </div>

          {/* Disclosure of Your Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold">Disclosure of Your Information</h2>
            </div>
            <div className="md:col-span-2 space-y-4 text-gray-300 text-sm leading-relaxed">
              <p>
                You have the right to request access to your data. If any information is incorrect, you can request for it to be corrected or removed.
              </p>
              <p>
               You may unsubscribe from our newsletter or delete your account at any time. Please note, however, that this may limit your access to sales updates and future orders.
              </p>
            </div>
          </div>

          {/* Updates */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <h2 className="text-lg font-semibold">Updates</h2>
            </div>
            <div className="md:col-span-2 text-gray-300 text-sm leading-relaxed">
              <p>
                Our Privacy Policy may be updated or improved periodically. All revisions will be posted on this page.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default PrivacyPage;