declare namespace JSX {
    interface IntrinsicElements {
        'youverse-document-scan': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
            cancelVerification?: boolean;
            changeCamera?: boolean;
            documentPositionCheck?: boolean;
            titleText?: string;
            infoText?: string;
            license?: string;
            color?: string;
            locale?: string;
            scanTimeout?: number;
            captureOnTimeout?: boolean;
        };
    }
}

declare global {
    interface HTMLElementTagNameMap {
        'youverse-document-scan': YouverseDocumentScan;
    }
}

interface YouverseDocumentScan extends HTMLElement {
    cancelVerification?: boolean;
    changeCamera?: boolean;
    documentPositionCheck?: boolean;
    titleText?: string;
    infoText?: string;
    license?: string;
    color?: string;
    locale?: string;
    scanTimeout?: number;
    captureOnTimeout?: boolean;
}

export default YouverseDocumentScan;