import Script from 'next/script'

interface Props {
    className?: string
}

export function WufooFormNewsletter(props: Props) {
    return (
        <>
            <div id="wufoo-zrf51ut1wj5bqg" className={props.className}>
                {' '}
                Fill out my
                <a href="https://hr8732.wufoo.com/forms/zrf51ut1wj5bqg">
                    online form
                </a>
                .{' '}
            </div>
            <Script src="scripts/forms/wufoo-newsletter.js" />
        </>
    )
}
