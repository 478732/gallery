import Script from 'next/script'

export function WufooFormContact() {
    return (
        <>
            <div
                id="wufoo-r1n6q9sp16e6wu6"
                className="-mx-6 overflow-hidden bg-white/10 min-[719px]:mx-0 min-[719px]:rounded-2xl">
                {' '}
                Fill out my{' '}
                <a href="https://hr8732.wufoo.com/forms/r1n6q9sp16e6wu6">
                    online form
                </a>
                .{' '}
            </div>
            <Script src="scripts/forms/wufoo-contact.js" />
        </>
    )
}
