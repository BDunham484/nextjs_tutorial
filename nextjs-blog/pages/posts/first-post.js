import Link from 'next/link';
import Image from 'next/image';

export default function FirstPost() {
    return (
        <>
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
            <Image
            src="/images/i'm-confused.jpg"
            height={400}
            width={400}
            alt="I'm Confused"
            />
        </>
    )
}