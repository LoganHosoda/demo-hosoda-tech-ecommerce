import sanityClient from '@sanity/client';
import imageUrlbuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: 'efzee26l',
  dataset: 'production',
  apiVersion: '2022-10-29',
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = imageUrlbuilder(client);

export const urlFor = (source) => builder.image(source);