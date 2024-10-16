import { hasDuplicateId } from '@/functions/hasDuplicateId'

export const location = {
    telephone: '504-123-4567',
    email: 'email@email.com',
    address: {
        street: '3786 Manhatten Street',
        city: 'New York',
        state: 'New York',
        zip: '73241',
        map: 'https://www.google.com/maps',
    },
    hours: [
        {
            id:1,
            day: 'Mon, Wed, Fri',
            time: '9:00 AM - 5:00 PM',
        },
        {
            id:2,
            day: 'Tuesday',
            time: '9:00 AM - 5:00 PM',
        },
        {
            id:3,
            day: 'Wednesday',
            time: '9:00 AM - 5:00 PM',
        },
    ],
}

hasDuplicateId(location.hours)