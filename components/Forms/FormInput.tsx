import { forwardRef } from 'react'

interface Props {
    id?: string
    className: string
    name: string
    type: string
    autoComplete: string
    placeholder: string
    required: boolean
}

const FormInput = forwardRef<HTMLInputElement, Props>(
    (
        { id, className, type, autoComplete, placeholder, required, ...rest },
        ref
    ) => {
        return (
            <>
                <input
                    id={id}
                    className={className}
                    ref={ref}
                    type={type}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    required={required}
                    {...rest}
                />
            </>
        )
    }
)

FormInput.displayName = 'FormInput'

export default FormInput
