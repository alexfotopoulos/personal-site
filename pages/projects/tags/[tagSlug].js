import { useRouter } from "next/router";

export default function TagPage() {
    
    const router = useRouter();

    return (
        <h1>{`Projects related to: ${router.query.tagSlug}`}</h1>
    );
};