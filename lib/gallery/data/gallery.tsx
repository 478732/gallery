import { hasDuplicateId } from '@/functions/hasDuplicateId'
import image4234 from '@/public/images/starter/a.webp'
import image141 from '@/public/images/starter/b.webp'
import image149 from '@/public/images/starter/c.webp'
import image4823 from '@/public/images/starter/d.webp'
import image848 from '@/public/images/starter/e.webp'
import image184 from '@/public/images/starter/f.webp'
import image18412 from '@/public/images/starter/g.webp'
import image5838 from '@/public/images/starter/h.webp'
import image1881 from '@/public/images/starter/i.webp'
import image81 from '@/public/images/starter/j.webp'
import image191 from '@/public/images/starter/k.webp'
import image138 from '@/public/images/starter/l.webp'
import image1911 from '@/public/images/starter/m.webp'
import image1831 from '@/public/images/starter/n.webp'
import image37 from '@/public/images/starter/o.webp'
import image188 from '@/public/images/starter/p.webp'
import image1823 from '@/public/images/starter/q.webp'
import type { GalleryItem } from '../utils/types'

export const images: GalleryItem[] = [
    { id: 0, image: image4234, alt: 'lorem itsum' },
    { id: 1, image: image141, alt: 'lorem itsum' },
    { id: 2, image: image149, alt: 'lorem itsum' },
    { id: 3, image: image4823, alt: 'lorem itsum' },
    { id: 4, image: image848, alt: 'lorem itsum' },
    { id: 5, image: image184, alt: 'lorem itsum' },
    { id: 6, image: image18412, alt: 'lorem itsum' },
    { id: 7, image: image5838, alt: 'lorem itsum' },
    { id: 8, image: image1881, alt: 'lorem itsum' },
    { id: 9, image: image81, alt: 'lorem itsum' },
    { id: 10, image: image191, alt: 'lorem itsum' },
    { id: 11, image: image138, alt: 'lorem itsum' },
    { id: 12, image: image1911, alt: 'lorem itsum' },
    { id: 13, image: image1831, alt: 'lorem itsum' },
    { id: 14, image: image37, alt: 'lorem itsum' },
    { id: 15, image: image188, alt: 'lorem itsum' },
    { id: 16, image: image1823, alt: 'lorem itsum' },
]

hasDuplicateId(images)
