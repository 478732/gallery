import { MyImage } from '@/components/MyImage'
import { hasDuplicateId } from '@/functions/hasDuplicateId'
import image183 from '@/public/images/starter/headshot-tim.jpg'
import image812 from '@/public/images/starter/workstation.jpg'
import { StaticImageData } from 'next/image'

export interface InterfaceBlogPost {
    id: number
    title: string | React.ReactNode
    body: React.ReactNode
    slug: string
    imageSrc: StaticImageData
    imageAlt: string
    imageSizes: string
    publishedDate: string
    publishedDateTime: string
    lastModifiedDateTime: string
    authorName: string
    authorHref: string
    authorImageSrc: StaticImageData
    authorImageAlt: string
    readTimeInMinutes: number
}

export const blogPosts: InterfaceBlogPost[] = [
    {
        id: 4234,
        title: 'Boost your conversion rate',
        slug: 'a-blog-example',
        imageSrc: image812,
        imageAlt: 'blog image',
        imageSizes: `
            (min-width: 1024px) 33vw,
            100vw
        `,
        publishedDate: 'December 17, 2023',
        publishedDateTime: '2023-05-12T23:50:21.817Z',
        lastModifiedDateTime: '2023-05-12T23:50:21.817Z',
        authorName: 'Michael Washington',
        authorHref: '',
        authorImageSrc: image183,
        authorImageAlt: 'Michael headshot',
        readTimeInMinutes: 3,
        body: (
            <>
                <p>
                    Experience the results you deserve with our expert service,
                    trusted by thousands of happy customers.
                </p>
                <figure className="not-prose my-12 lg:-mx-20">
                    <div className="relative overflow-hidden rounded-2xl">
                        <MyImage
                            src={image812}
                            alt=""
                            priority={true}
                            sizes="
                            (min-width: 1024px) 1856px,
                            92vw
                        "
                        />
                    </div>
                    <figcaption className="mt-4 px-3 text-xs font-semibold text-gray-500 lg:mx-20 lg:px-0">
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Autem accusamus aspernatur tempore perspiciatis
                        praesentium quaerat quod ad ipsam quae, dicta
                        necessitatibus pariatur consequatur
                    </figcaption>
                </figure>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsam ad excepturi esse nostrum debitis! Animi sint, eaque
                    esse nihil repellat dignissimos dolore! Reprehenderit,
                    architecto similique quasi nesciunt amet vero culpa, facere
                    explicabo tempora eos nostrum id consectetur nisi natus sint
                    fugiat animi. Velit libero voluptatem est adipisci minima
                    quibusdam suscipit animi? Hic obcaecati neque ut nulla iure,
                    eius sequi itaque sapiente, sunt corporis porro. Tenetur rem
                    assumenda reprehenderit deleniti sunt ipsam, beatae porro
                    provident est atque blanditiis sit dolorem explicabo ea
                    aliquid consequatur, quisquam doloribus inventore harum vel
                    cumque numquam? In quae omnis rem optio. Commodi tempore
                    molestiae quidem deserunt.
                </p>
            </>
        ),
    },
]

hasDuplicateId(blogPosts)

