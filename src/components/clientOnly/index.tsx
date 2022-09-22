import { useEffect, useState } from "react";

interface propsClientOnly {
    children: any
}

export default function ClientOnly({ children, ...delegated }: propsClientOnly) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return null;
    }

    return <div {...delegated}>{children}</div>;
}