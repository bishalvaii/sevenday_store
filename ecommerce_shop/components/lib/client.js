import  SanityClient  from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = SanityClient({
    projectId: 'gm262i0u',
    dataset: 'production',
    apiVersion: '2022-05-07',
    useCdn: 'true',
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN

})

const builder = imageUrlBuilder(client)

 const urlFor = (source) => builder.image(source);
 export default urlFor