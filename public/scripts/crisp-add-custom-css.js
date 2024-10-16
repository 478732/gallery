const transitionValue = 'all 0.5s linear'
const marginBottomTransitionValue = 'margin 1s ease-in-out'

let widget = null

const interval = setInterval(intervalCallBack, 1000)
let counter = 0
const maxAttempts = 10

function intervalCallBack() {
    if (!widget) {
        if (counter > maxAttempts) {
            clearInterval(interval)
        }
        widget = document.querySelector('.crisp-client')
        counter++
    } else {
        clearInterval(interval)

        const container = widget.querySelector('[aria-label="Open chat"]')
        const chatWidget = widget.querySelector('[aria-label="Open chat"] > span:last-of-type')
        const newMessageBubble = widget.querySelector(
            '[data-id="chat_opened"] > span:last-of-type'
        )
        const messagePreviewBox = widget.querySelector(
            '[data-id="new_messages"]'
        )

        if (chatWidget) {
            chatWidget.style.setProperty('width', '54px', 'important')
            chatWidget.style.setProperty('height', '54px', 'important')
            chatWidget.style.setProperty(
                'transition',
                transitionValue,
                'important'
            )
        }

        if (newMessageBubble) {
            newMessageBubble.style.setProperty('width', '17px', 'important')
            newMessageBubble.style.setProperty('height', '17px', 'important')
            newMessageBubble.style.setProperty(
                'line-height',
                '17px',
                'important'
            )
            newMessageBubble.style.setProperty('font-size', '9px', 'important')

            newMessageBubble.style.setProperty(
                'border-color',
                '#ee334b',
                'important'
            )
            newMessageBubble.style.setProperty(
                'transition',
                transitionValue,
                'important'
            )
        }

        if (container) {
            container.style.setProperty(
                'transition',
                marginBottomTransitionValue,
                'important'
            )
        }

        if (messagePreviewBox) {
            messagePreviewBox.style.setProperty(
                'transition',
                marginBottomTransitionValue,
                'important'
            )
        }

        function updateStylesBasedOnScreenWidth(localMediaQuery) {
            const marginBottomValue = localMediaQuery.matches ? '0px' : '3.5rem'

            if (container) {
                container.style.setProperty(
                    'margin-bottom',
                    marginBottomValue,
                    'important'
                )
            }

            if (messagePreviewBox) {
                messagePreviewBox.style.setProperty(
                    'margin-bottom',
                    marginBottomValue,
                    'important'
                )
            }
        }

        const mediaQuery = window.matchMedia('(min-width: 1024px)')
        updateStylesBasedOnScreenWidth(mediaQuery)
        mediaQuery.addEventListener('change', function () {
            updateStylesBasedOnScreenWidth(mediaQuery)
        })
    }
}
