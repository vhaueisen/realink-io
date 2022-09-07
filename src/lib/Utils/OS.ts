export enum OS {
    Windows_Phone,
    Android,
    iOS,
    Desktop
}

/**
 * Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {OS}
 */
export const getOS = (): OS => {
    var userAgent = (navigator as any).userAgent || (navigator as any).vendor || (window as any).opera;
    if (/windows phone/i.test(userAgent)) {
        return OS.Windows_Phone;
    }

    if (/android/i.test(userAgent)) {
        return OS.Android;
    }

    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
        return OS.iOS;
    }

    return OS.Desktop;
}