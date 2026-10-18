import React from 'react'
import {ArrowUp} from '@carbon/icons-react'

const LETTERS = [
    {
        char: 'S',
        svg: (
            <svg viewBox="0 0 240 240" className="footer-glyph-svg" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M 86 24 H 200 Q 214 24 214 38 V 54 Q 214 68 200 68 H 84 Q 72 68 72 80 V 130 Q 72 144 58 144 H 42 Q 28 144 28 130 V 84 Q 28 68 48 68 H 58 Q 72 68 72 54 V 38 Q 72 24 86 24 Z M 182 112 H 198 Q 212 112 212 126 V 156 Q 212 172 192 172 H 182 Q 168 172 168 186 V 202 Q 168 216 154 216 H 40 Q 26 216 26 202 V 186 Q 26 172 40 172 H 156 Q 168 172 168 160 V 126 Q 168 112 182 112 Z"
                />
            </svg>
        )
    },
    {
        char: 'A',
        svg: (
            <svg viewBox="0 0 240 240" className="footer-glyph-svg" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M 108 24 H 148 Q 170 24 177 46 L 216 176 Q 219 186 219 196 V 204 Q 219 216 207 216 H 185 Q 173 216 173 204 V 192 Q 173 182 170 172 L 142 78 Q 139 68 128 68 H 104 Q 93 68 90 78 L 62 172 Q 59 182 59 192 V 204 Q 59 216 47 216 H 33 Q 21 216 21 204 V 192 Q 21 180 25 168 L 53 82 Q 58 68 74 68 H 84 Q 96 68 96 56 V 36 Q 96 24 108 24 Z"
                />
            </svg>
        )
    },
    {
        char: 'I',
        svg: (
            <svg viewBox="0 0 240 240" className="footer-glyph-svg" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M 42 24 H 130 Q 142 24 142 36 V 160 Q 142 172 154 172 H 198 Q 212 172 212 186 V 202 Q 212 216 198 216 H 110 Q 98 216 98 204 V 80 Q 98 68 86 68 H 42 Q 28 68 28 54 V 38 Q 28 24 42 24 Z"
                />
            </svg>
        )
    },
    {
        char: 'F',
        svg: (
            <svg viewBox="0 0 240 240" className="footer-glyph-svg" aria-hidden="true">
                <path
                    fill="currentColor"
                    d="M 86 24 H 200 Q 214 24 214 38 V 54 Q 214 68 200 68 H 84 Q 72 68 72 80 V 104 Q 72 112 80 112 H 184 Q 198 112 198 126 V 142 Q 198 156 184 156 H 80 Q 72 156 72 164 V 202 Q 72 216 58 216 H 42 Q 28 216 28 202 V 84 Q 28 68 48 68 H 58 Q 72 68 72 54 V 38 Q 72 24 86 24 Z"
                />
            </svg>
        )
    }
]

export function CarbonFooter() {
    const scrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }

    const currentYear = new Date().getFullYear()

    return (
        <footer className="labs-footer" aria-label="Footer">
            <div className="labs-footer__container">
                <div className="labs-footer__meta">
                    <div className="labs-footer__meta-left">
                        <span className="labs-footer__year">© {currentYear}</span>
                        <span className="labs-footer__rights">Made with 💙 by Saif</span>
                    </div>
                    <div className="labs-footer__meta-right">
                        <button
                            type="button"
                            onClick={scrollToTop}
                            className="labs-footer__top-btn"
                            aria-label="Back to top">
                            <span>BACK TO TOP</span>
                            <ArrowUp size={14}/>
                        </button>
                    </div>
                </div>

                <div className="labs-footer__grid" role="img" aria-label="SAIF">
                    {LETTERS.map((item, idx) => (
                        <div key={item.char} className="labs-footer__cell">
                            {idx === 0 && (
                                <>
                                    <span className="labs-footer__dot labs-footer__dot--tl"/>
                                    <span className="labs-footer__dot labs-footer__dot--bl"/>
                                </>
                            )}
                            {idx === LETTERS.length - 1 && (
                                <>
                                    <span className="labs-footer__dot labs-footer__dot--tr"/>
                                    <span className="labs-footer__dot labs-footer__dot--br"/>
                                </>
                            )}
                            {item.svg}
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    )
}

