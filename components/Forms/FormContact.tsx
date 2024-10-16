'use client'

import { FormError } from '@/components/Forms/FormError'
import FormInput from '@/components/Forms/FormInput'
import { FormLabel } from '@/components/Forms/FormLabel'
import { FormNetlify } from '@/components/Forms/FormNetlify'
import { IconChevronAnimated } from '@/components/IconChevronAnimated'
import { zodResolver } from '@hookform/resolvers/zod'
import clsx from 'clsx'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { z, ZodType } from 'zod'

interface Props {
    className?: string
}

type FormData = {
    firstName: string
    lastName: string
    email: string
    phoneNumber: string
    message: string
}

const FIRST_NAME_MAX_LENGTH = 30
const LAST_NAME_MAX_LENGTH = 30
const EMAIL_MAX_LENGTH = 254
const PHONE_NUMBER_MAX_LENGTH = 30
const MESSAGE_MAX_LENGTH = 1000

const inputClassName =
    'block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6 outline-none'
const labelClassName = 'block text-sm font-semibold leading-6 text-gray-900'

export function FormContact({ className }: Props) {
    const joinedClassName = clsx(className)

    const [status, setStatus] = useState('')
    const [error, setError] = useState('')

    const schema: ZodType<FormData> = z.object({
        firstName: z
            .string()
            .min(1, 'Your first name must contain at least 1 character')
            .max(
                FIRST_NAME_MAX_LENGTH,
                `Please make your first name shorter than ${FIRST_NAME_MAX_LENGTH} characters`
            )
            .trim(),
        lastName: z
            .string()
            .min(1, 'Your last name must contain at least 1 character')
            .max(
                LAST_NAME_MAX_LENGTH,
                `Please make your last name shorter than ${LAST_NAME_MAX_LENGTH} characters`
            )
            .trim(),
        email: z
            .string()
            .email()
            .max(
                EMAIL_MAX_LENGTH,
                `Please make your email shorter than ${EMAIL_MAX_LENGTH} characters`
            )
            .trim(),
        phoneNumber: z
            .string()
            .min(1, 'Your phone number must contain at least 1 character')
            .max(
                PHONE_NUMBER_MAX_LENGTH,
                `Please make your phone number shorter than ${PHONE_NUMBER_MAX_LENGTH} characters`
            )
            .trim(),
        message: z
            .string()
            .min(1, 'Your message must contain at least 1 character')
            .max(
                MESSAGE_MAX_LENGTH,
                `Please make your message shorter than ${MESSAGE_MAX_LENGTH} characters`
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
                name="contact"
                className={joinedClassName}
                submitHandler={handleSubmit}
                statusState={{ status, setStatus }}
                errorState={{ error, setError }}>
                <div className="mb-8">
                    <h3 className="text-[1.375rem] font-semibold">
                        Contact us
                    </h3>
                    <p className="mt-1 text-sm leading-6 text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                    <div>
                        <FormLabel
                            className={labelClassName}
                            htmlFor="first-name">
                            First name
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="text"
                                autoComplete="given-name"
                                placeholder="Jane"
                                maxLength={FIRST_NAME_MAX_LENGTH}
                                required={true}
                                {...register('firstName')}
                            />
                            {errors.firstName && (
                                <FormError className="mt-4">
                                    {errors.firstName.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div>
                        <FormLabel
                            className={labelClassName}
                            htmlFor="last-name">
                            Last name
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="text"
                                autoComplete="family-name"
                                placeholder="Doe"
                                maxLength={LAST_NAME_MAX_LENGTH}
                                required={true}
                                {...register('lastName')}
                            />
                            {errors.lastName && (
                                <FormError className="mt-4">
                                    {errors.lastName.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel className={labelClassName} htmlFor="email">
                            Email
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="email"
                                autoComplete="email"
                                placeholder="jane@email.com"
                                maxLength={EMAIL_MAX_LENGTH}
                                required={true}
                                {...register('email')}
                            />
                            {errors.email && (
                                <FormError className="mt-4">
                                    {errors.email.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel
                            className={labelClassName}
                            htmlFor="phone-number">
                            Phone number
                        </FormLabel>
                        <div className="mt-2.5">
                            <FormInput
                                className={inputClassName}
                                type="tel"
                                autoComplete="tel"
                                placeholder="555-555-5555"
                                maxLength={PHONE_NUMBER_MAX_LENGTH}
                                required={true}
                                {...register('phoneNumber')}
                            />
                            {errors.phoneNumber && (
                                <FormError className="mt-4">
                                    {errors.phoneNumber.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                    <div className="sm:col-span-2">
                        <FormLabel className={labelClassName} htmlFor="message">
                            Message
                        </FormLabel>
                        <div className="mt-2.5">
                            <textarea
                                rows={4}
                                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm outline-none ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary-600 sm:text-sm sm:leading-6"
                                defaultValue={''}
                                placeholder="Tell us about your needs"
                                maxLength={MESSAGE_MAX_LENGTH}
                                required
                                {...register('message')}
                            />
                            {errors.message && (
                                <FormError className="mt-4">
                                    {errors.message.message}
                                </FormError>
                            )}
                        </div>
                    </div>
                </div>
                <div className="mt-8 flex justify-end">
                    <button
                        type="submit"
                        className="button-primary rounded-button-with-icon-xl rounded-button-with-icon [background-image:--buttonGradient] hover:[background-image:--buttonHoverGradient]">
                        Send message
                        <IconChevronAnimated
                            className="button-icon-mr ml-2.5"
                            color="stroke-[--buttonIconColor] group-hover:stroke-[--buttonIconHoverColor]"
                        />
                    </button>
                </div>
            </FormNetlify>
        </>
    )
}
