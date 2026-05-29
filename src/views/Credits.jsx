'use client';
import React from 'react';
import Link from 'next/link';
import SEO from '../components/SEO';

const images = [
  {
    description: 'Frome — St John the Baptist Church',
    file: 'frome.webp',
    author: 'Dave Kelly',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:St_John_the_Baptist,_Frome_(geograph_3219045).jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
  {
    description: 'Bradford on Avon — Town panorama',
    file: 'bradford-on-avon.webp',
    author: 'David Iliff (Diliff)',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bradford-on-Avon_panorama,_Wiltshire,_UK_-_Diliff.jpg',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    description: 'Corsham — High Street',
    file: 'corsham.webp',
    author: 'Michael Garlick',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Corsham_High_Street_-_geograph.org.uk_-_4289990.jpg',
    licence: 'CC BY-SA 2.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/2.0/',
  },
  {
    description: 'Shepton Mallet — Market Place',
    file: 'shepton-mallet.webp',
    author: 'Wurzeller',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Shepton_Mallet_marketplace08.jpg',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
  {
    description: 'Melksham — Market Place',
    file: 'melksham.webp',
    author: 'Wikimedia Commons contributor',
    source: 'Wikimedia Commons',
    sourceUrl: 'https://commons.wikimedia.org/wiki/File:Melksham_Market_Place.jpg',
    licence: 'CC BY-SA 3.0',
    licenceUrl: 'https://creativecommons.org/licenses/by-sa/3.0/',
  },
];

const Credits = () => {
  return (
    <>

      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">Image Credits</h1>
            <p className="text-gray-400">
              The following images are used on this website under Creative Commons licences. We are grateful to the photographers who made their work freely available.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-dark-card border border-white/[0.06] rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left px-6 py-4 text-gray-400 font-medium">Image</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium">Author</th>
                  <th className="text-left px-6 py-4 text-gray-400 font-medium">Licence</th>
                </tr>
              </thead>
              <tbody>
                {images.map((img, i) => (
                  <tr key={img.file} className={i < images.length - 1 ? 'border-b border-white/[0.06]' : ''}>
                    <td className="px-6 py-4">
                      <a
                        href={img.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary transition-colors"
                      >
                        {img.description}
                      </a>
                      <div className="text-gray-600 text-xs mt-0.5">{img.source}</div>
                    </td>
                    <td className="px-6 py-4 text-gray-400">{img.author}</td>
                    <td className="px-6 py-4">
                      <a
                        href={img.licenceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary-light transition-colors text-xs font-mono"
                      >
                        {img.licence}
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="text-gray-600 text-xs mt-6 leading-relaxed">
            All other images and graphics on this site are original works owned by SEO Kings or used with explicit permission. If you believe an image has been credited incorrectly, please{' '}
            <Link href="/contact" className="text-primary hover:text-primary-light transition-colors">
              contact us
            </Link>.
          </p>
        </div>
      </section>
    </>
  );
};

export default Credits;
