import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Privacy = () => {
  const lastUpdated = '28 January 2026';

  return (
    <>
      <SEO
title="Privacy Policy | SEO Kings"
    description="How SEO Kings collects, uses and protects your data when you use our local SEO services in Bath & BANES."
        canonical="/privacy"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Privacy Policy
            </h1>
            <p className="text-gray-400">
              Last updated: {lastUpdated}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/5 rounded-2xl p-8 sm:p-12">
            <div className="prose prose-invert prose-lg max-w-none">
              
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-gray-300 leading-relaxed">
                  SEO Kings ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Personal Information</h3>
                <p className="text-gray-300 leading-relaxed">
                  We may collect personal information that you voluntarily provide to us when you:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Fill out our contact form</li>
                  <li>Request a free SEO audit</li>
                  <li>Subscribe to our newsletter</li>
                  <li>Engage with us on social media</li>
                  <li>Enter into a service agreement with us</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  This information may include:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Business name</li>
                  <li>Website URL</li>
                  <li>Any other information you choose to provide</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mt-6 mb-3">Automatically Collected Information</h3>
                <p className="text-gray-300 leading-relaxed">
                  When you visit our website, we may automatically collect certain information about your device, including:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Referring website</li>
                  <li>Pages viewed and time spent on those pages</li>
                  <li>Date and time of your visit</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Respond to your enquiries and provide customer support</li>
                  <li>Deliver our SEO and digital marketing services</li>
                  <li>Send you marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Analyse website usage and trends</li>
                  <li>Protect against fraudulent or illegal activity</li>
                  <li>Comply with legal obligations</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">3. Cookies and Tracking Technologies</h2>
                <p className="text-gray-300 leading-relaxed">
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that are sent to your browser from a website and stored on your device.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We use the following types of cookies:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li><strong className="text-white">Essential cookies:</strong> Required for the website to function properly</li>
                  <li><strong className="text-white">Analytics cookies:</strong> Help us understand how visitors interact with our website</li>
                  <li><strong className="text-white">Marketing cookies:</strong> Used to deliver relevant advertisements</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our website.
                </p>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">4. Sharing Your Information</h2>
                <p className="text-gray-300 leading-relaxed">
                  We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li><strong className="text-white">Service providers:</strong> We may share information with third-party vendors who assist us in operating our website and conducting our business</li>
                  <li><strong className="text-white">Legal requirements:</strong> We may disclose information if required by law or in response to valid requests by public authorities</li>
                  <li><strong className="text-white">Business transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
                <p className="text-gray-300 leading-relaxed">
                  We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights (UK GDPR)</h2>
                <p className="text-gray-300 leading-relaxed">
                  Under UK data protection law, you have the following rights:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li><strong className="text-white">Right of access:</strong> You can request copies of your personal data</li>
                  <li><strong className="text-white">Right to rectification:</strong> You can request correction of inaccurate data</li>
                  <li><strong className="text-white">Right to erasure:</strong> You can request deletion of your data in certain circumstances</li>
                  <li><strong className="text-white">Right to restrict processing:</strong> You can request limitation of how we use your data</li>
                  <li><strong className="text-white">Right to data portability:</strong> You can request transfer of your data to another organisation</li>
                  <li><strong className="text-white">Right to object:</strong> You can object to processing of your data in certain circumstances</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  To exercise any of these rights, please contact us using the details below.
                </p>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">7. Data Retention</h2>
                <p className="text-gray-300 leading-relaxed">
                  We will retain your personal information only for as long as necessary to fulfil the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Typically, we retain client data for 6 years after the end of our business relationship.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">8. Third-Party Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read the privacy policy of every website you visit.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">9. Children's Privacy</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. If we become aware that we have collected personal data from a child without parental consent, we will take steps to remove that information.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">10. Changes to This Privacy Policy</h2>
                <p className="text-gray-300 leading-relaxed">
                  We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last updated" date. You are advised to review this privacy policy periodically for any changes.
                </p>
              </div>

              {/* Section 11 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">11. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about this Privacy Policy or our data practices, please contact us:
                </p>
                <div className="mt-4 p-6 bg-dark-lighter rounded-xl border border-white/5">
                  <p className="text-white font-semibold">SEO Kings</p>
                  <p className="text-gray-300 mt-2">Bath, Somerset, United Kingdom</p>
                  <p className="text-gray-300 mt-1">
                    Phone: <a href="tel:07702264921" className="text-primary-light hover:text-white transition-colors">07702 264 921</a>
                  </p>
                </div>
              </div>

            </div>

            {/* Back Link */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <Link 
                to="/"
                className="inline-flex items-center gap-2 text-primary-light hover:text-white transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
