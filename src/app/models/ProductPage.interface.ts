export interface ProductAdvantageItem {
    icon: string;
    label: string;
    color: string;
}

export const productAdvantageList: ProductAdvantageItem[] = [
    {color: 'var(--primary-color-normal)', icon: 'circle-play', label: '12 hours video'},
    {color: 'var(--tertiary-color-normal)', icon: 'file-certificate', label: 'Certificate'},
    {color: 'var(--quaternery-color-normal)', icon: 'calendar', label: '12 Article'},
    {color: 'var(--gray-color-dark)', icon: 'video', label: 'Watch Offline'},
    {color: 'var(--secondary-color-normal)', icon: 'clock', label: 'Lifetime access'},
];
