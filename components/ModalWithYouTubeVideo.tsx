import { Modal } from '@/components/Modal'

interface Props {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    videoId: string
}

export function ModalWithYouTubeVideo({ isOpen, setIsOpen, videoId }: Props) {
    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <div className="aspect-h-9 aspect-w-16">
                    <iframe
                        width="560"
                        height="315"
                        src={`https://www.youtube-nocookie.com/embed/${videoId}?&autoplay=1&rel=0&color=white`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
                </div>
            </Modal>
        </>
    )
}
