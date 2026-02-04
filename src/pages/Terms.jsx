import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const Terms = () => {
  const lastUpdated = '28 January 2026';

  return (
    <>
      <SEO
title="Terms of Service | SEO Kings"
    description="Terms and conditions for SEO Kings local SEO services in Bath & North East Somerset."
        canonical="/terms"
      />

      {/* Hero Section */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Terms of Service
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
                  Welcome to SEO Kings. These Terms of Service ("Terms") govern your use of our website and services. By accessing our website or engaging our services, you agree to be bound by these Terms.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Please read these Terms carefully before using our services. If you do not agree to these Terms, you should not use our website or services.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">1. Definitions</h2>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  <li><strong className="text-white">"SEO Kings", "we", "our", "us":</strong> Refers to SEO Kings, a digital marketing agency based in Bath, Somerset</li>
                  <li><strong className="text-white">"Client", "you", "your":</strong> Refers to the individual or business engaging our services</li>
                  <li><strong className="text-white">"Services":</strong> Refers to all SEO, web design, and digital marketing services we provide</li>
                  <li><strong className="text-white">"Website":</strong> Refers to seo-kings.co.uk and all associated pages</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">2. Services</h2>
                <p className="text-gray-300 leading-relaxed">
                  SEO Kings provides the following services:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Search Engine Optimisation (SEO)</li>
                  <li>Local SEO services</li>
                  <li>Google Business Profile management</li>
                  <li>Website design and development</li>
                  <li>Digital marketing consultancy</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  The specific scope of services will be outlined in a separate service agreement or proposal provided to you before commencement of work.
                </p>
              </div>

              {/* Section 3 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">3. Client Responsibilities</h2>
                <p className="text-gray-300 leading-relaxed">
                  As a client, you agree to:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Provide accurate and complete information as required for service delivery</li>
                  <li>Grant necessary access to your website, hosting, and relevant third-party accounts</li>
                  <li>Respond to communications and requests in a timely manner</li>
                  <li>Review and approve content, changes, or recommendations within agreed timeframes</li>
                  <li>Ensure you have the right to use any content, images, or materials you provide</li>
                  <li>Comply with all applicable laws and regulations</li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">4. No Guarantee of Results</h2>
                <p className="text-gray-300 leading-relaxed">
                  While we strive to achieve the best possible results for our clients, we cannot guarantee specific rankings, traffic levels, or conversion rates. Search engine algorithms are controlled by third parties (Google, Bing, etc.) and are subject to change without notice.
                </p>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We will use industry best practices and proven strategies to improve your online visibility, but results may vary based on factors including:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Competition in your industry and local area</li>
                  <li>Current state of your website and online presence</li>
                  <li>Search engine algorithm changes</li>
                  <li>Market conditions and consumer behaviour</li>
                  <li>Your implementation of our recommendations</li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">5. Payment Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  Payment terms will be specified in your service agreement. General terms include:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Invoices are due within 14 days of issue unless otherwise agreed</li>
                  <li>Monthly retainer fees are invoiced in advance</li>
                  <li>Project-based work may require a deposit before commencement</li>
                  <li>Late payments may incur interest at 4% above the Bank of England base rate</li>
                  <li>We reserve the right to suspend services for overdue accounts</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  All prices are quoted in GBP and are exclusive of VAT unless otherwise stated.
                </p>
              </div>

              {/* Section 6 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">6. Contract Duration and Cancellation</h2>
                <p className="text-gray-300 leading-relaxed">
                  The duration of our engagement will be specified in your service agreement. Unless otherwise stated:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Monthly SEO services require 30 days' written notice to cancel</li>
                  <li>Project-based work cannot be cancelled once commenced without payment for work completed</li>
                  <li>We may terminate services immediately if you breach these Terms</li>
                  <li>Upon termination, all outstanding fees become immediately due</li>
                </ul>
              </div>

              {/* Section 7 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">7. Intellectual Property</h2>
                <p className="text-gray-300 leading-relaxed">
                  Upon full payment:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>You will own any custom content, designs, or code created specifically for you</li>
                  <li>We retain ownership of our proprietary tools, processes, and methodologies</li>
                  <li>Third-party software, plugins, or licenses remain subject to their respective terms</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  We reserve the right to showcase your project in our portfolio and case studies unless you request otherwise in writing.
                </p>
              </div>

              {/* Section 8 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">8. Confidentiality</h2>
                <p className="text-gray-300 leading-relaxed">
                  We will treat all information provided by you as confidential and will not disclose it to third parties except:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>When necessary to provide our services</li>
                  <li>When required by law</li>
                  <li>With your prior written consent</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  This confidentiality obligation continues after termination of our agreement.
                </p>
              </div>

              {/* Section 9 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">9. Limitation of Liability</h2>
                <p className="text-gray-300 leading-relaxed">
                  To the maximum extent permitted by law:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                  <li>We are not liable for indirect, incidental, special, or consequential damages</li>
                  <li>We are not liable for any loss of profit, revenue, data, or business opportunities</li>
                  <li>We are not liable for changes to search engine algorithms or third-party platforms</li>
                </ul>
                <p className="text-gray-300 leading-relaxed mt-4">
                  Nothing in these Terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded by law.
                </p>
              </div>

              {/* Section 10 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">10. Indemnification</h2>
                <p className="text-gray-300 leading-relaxed">
                  You agree to indemnify and hold harmless SEO Kings, its directors, employees, and agents from any claims, losses, or damages (including legal fees) arising from:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Your breach of these Terms</li>
                  <li>Your violation of any law or third-party rights</li>
                  <li>Content or materials you provide to us</li>
                  <li>Your use of our services</li>
                </ul>
              </div>

              {/* Section 11 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">11. Website Use</h2>
                <p className="text-gray-300 leading-relaxed">
                  When using our website, you agree not to:
                </p>
                <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2">
                  <li>Use the website for any unlawful purpose</li>
                  <li>Attempt to gain unauthorised access to our systems</li>
                  <li>Interfere with the proper functioning of the website</li>
                  <li>Copy, reproduce, or distribute our content without permission</li>
                  <li>Use automated systems to extract data from the website</li>
                </ul>
              </div>

              {/* Section 12 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">12. Third-Party Links</h2>
                <p className="text-gray-300 leading-relaxed">
                  Our website may contain links to third-party websites. These links are provided for your convenience only. We have no control over and accept no responsibility for the content, privacy policies, or practices of third-party websites.
                </p>
              </div>

              {/* Section 13 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">13. Force Majeure</h2>
                <p className="text-gray-300 leading-relaxed">
                  We shall not be liable for any failure or delay in performing our obligations where such failure or delay results from circumstances beyond our reasonable control, including but not limited to acts of God, natural disasters, war, terrorism, riots, government actions, or internet outages.
                </p>
              </div>

              {/* Section 14 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">14. Changes to Terms</h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the new Terms.
                </p>
              </div>

              {/* Section 15 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">15. Governing Law</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms shall be governed by and construed in accordance with the laws of England and Wales. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of England and Wales.
                </p>
              </div>

              {/* Section 16 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">16. Severability</h2>
                <p className="text-gray-300 leading-relaxed">
                  If any provision of these Terms is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
                </p>
              </div>

              {/* Section 17 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">17. Entire Agreement</h2>
                <p className="text-gray-300 leading-relaxed">
                  These Terms, together with any service agreement or proposal, constitute the entire agreement between you and SEO Kings regarding the subject matter hereof and supersede all prior agreements and understandings.
                </p>
              </div>

              {/* Section 18 */}
              <div className="mb-10">
                <h2 className="text-2xl font-bold text-white mb-4">18. Contact Us</h2>
                <p className="text-gray-300 leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us:
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

export default Terms;
