interface Props {
    className?: string
}

export function IconCheckInRibbon({ className }: Props) {
    return (
        <svg
            className={className}
            // width="27"
            // height="27"
            viewBox="0 0 27 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.792 0.346008C13.602 0.126008 13.326 0 13.035 0C12.744 0 12.468 0.126008 12.278 0.346008L10.261 2.683L7.346 1.668C7.072 1.572 6.76901 1.601 6.51701 1.746C6.26501 1.892 6.089 2.139 6.035 2.425L5.45699 5.457L2.425 6.035C2.139 6.09 1.89099 6.266 1.74599 6.517C1.60099 6.769 1.57201 7.07201 1.66801 7.34601L2.68301 10.261L0.346001 12.278C0.126001 12.468 0 12.744 0 13.035C0 13.326 0.126001 13.602 0.346001 13.792L2.68301 15.809L1.66801 18.724C1.57201 18.998 1.60099 19.301 1.74599 19.553C1.89099 19.804 2.139 19.98 2.425 20.035L5.45699 20.613L6.035 23.645C6.089 23.931 6.26501 24.178 6.51701 24.324C6.76901 24.469 7.072 24.498 7.346 24.402L10.261 23.387L12.278 25.724C12.468 25.944 12.744 26.07 13.035 26.07C13.326 26.07 13.602 25.944 13.792 25.724L15.809 23.387L18.723 24.402C18.998 24.498 19.301 24.469 19.552 24.324C19.804 24.178 19.98 23.931 20.035 23.645L20.613 20.613L23.645 20.035C23.93 19.98 24.178 19.804 24.324 19.553C24.469 19.301 24.498 18.998 24.402 18.724L23.387 15.809L25.723 13.792C25.943 13.602 26.07 13.326 26.07 13.035C26.07 12.744 25.943 12.468 25.723 12.278L23.387 10.261L24.402 7.34601C24.498 7.07201 24.469 6.769 24.324 6.517C24.178 6.266 23.93 6.09 23.645 6.035L20.613 5.457L20.035 2.425C19.98 2.139 19.804 1.892 19.552 1.746C19.301 1.601 18.998 1.572 18.723 1.668L15.809 2.683L13.792 0.346008ZM7.671 14.107L10.532 16.968C10.923 17.359 11.556 17.359 11.947 16.968L18.399 10.516C18.789 10.126 18.789 9.492 18.399 9.10201C18.009 8.71101 17.375 8.71101 16.985 9.10201L11.239 14.847L9.085 12.693C8.695 12.302 8.061 12.302 7.671 12.693C7.28 13.083 7.28 13.716 7.671 14.107Z"
                fill="currentColor"
            />
        </svg>
    )
}
