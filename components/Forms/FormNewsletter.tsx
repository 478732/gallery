'use client'
import { FormError } from '@/components/Forms/FormError'
import FormInput from '@/components/Forms/FormInput'
import { FormLabel } from '@/components/Forms/FormLabel'
import { FormNetlify } from '@/components/Forms/FormNetlify'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { MyImage } from '@/components/MyImage'
import image813 from '@/public/images/starter/desk.jpeg'
import { CheckCircleIcon } from '@heroicons/react/16/solid'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'

interface Props {
    className?: string
}

type FormData = {
    email: string
}

const EMAIL_MAX_LENGTH = 254

export function FormNewsletter({ className }: Props) {
    const joinedClassName = clsx(className)

    const [status, setStatus] = useState('')
    const [error, setError] = useState('')

    const schema: ZodType<FormData> = z.object({
        email: z
            .string()
            .email()
            .max(
                EMAIL_MAX_LENGTH,
                `Please make your email shorter than ${EMAIL_MAX_LENGTH} characters`
            )
            .trim(),
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(schema),
    })

    return (
        <>
            <FormNetlify
                name="newsletter"
                className={joinedClassName}
                submitHandler={handleSubmit}
                statusState={{ status, setStatus }}
                errorState={{ error, setError }}
                successPage="">
                {status !== 'ok' && (
                    <>
                        <p className="mb-6 text-sm leading-6 text-primary-300">
                            The latest news, articles, and resources, sent to
                            your inbox weekly.
                        </p>
                        <FormLabel htmlFor="email-address" className="sr-only">
                            Email address
                        </FormLabel>
                        <FormInput
                            id="email-address"
                            className="w-full min-w-0 appearance-none rounded-md border-0 bg-white/5 px-3 py-1.5 text-base text-white shadow-sm outline-none ring-1 ring-inset ring-white/10 placeholder:text-primary-300 focus:ring-2 focus:ring-inset focus:ring-primary-500 sm:text-sm sm:leading-6"
                            type="email"
                            autoComplete="email"
                            placeholder="Enter your email"
                            maxLength={EMAIL_MAX_LENGTH}
                            required={true}
                            {...register('email')}
                        />
                        {errors.email && (
                            <FormError className="mt-4">
                                {errors.email.message}
                            </FormError>
                        )}
                        <div className="mt-4">
                            <button
                                type="submit"
                                className="button-outline-primary-light rounded-button-with-icon-xl lg:rounded-button-with-icon-lg rounded-outline-button-with-icon group flex w-full items-center justify-center">
                                Subscribe
                                <IconChevronAnimated
                                    className="button-icon-mr ml-2.5"
                                    color="stroke-[--buttonIconColor] group-hover:stroke-[--buttonIconHoverColor]"
                                />
                            </button>
                            <div className="mt-4 flex items-center justify-center gap-x-2 text-xs text-primary-300">
                                <CheckCircleIcon className="h-4 w-4" />
                                <span>No spam ever</span>
                            </div>
                        </div>
                    </>
                )}
                {status === 'ok' && (
                    <>
                        <div className="mx-auto h-auto w-72 lg:aspect-h-6 lg:aspect-w-16 lg:w-full">
                            <MyImage
                                src={image813}
                                alt="success image"
                                className="w-full rounded-xl object-cover shadow-xl"
                                sizes="
                                (min-width: 1024px) 574px,
                                576px
                            "
                            />
                        </div>
                        <p className="mt-5 text-sm font-medium text-white [text-wrap:balance] lg:mt-4">
                            {/* Thank you for joining the #howdyfam */}
                            Thank you for subscribing to our email updates.
                        </p>
                        <p className="mt-0.5 text-sm text-primary-300 [text-wrap:balance]">
                            You will receive an email shortly.
                        </p>
                    </>
                )}
            </FormNetlify>
        </>
    )
}
