import { useEffect, useState } from "react";

export const useMount = (cb?: () => void) => {
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        if (!mounted) return
        if (cb) cb()
        setMounted(true)
    }, [])

    return {
        isMounted: mounted
    }
}