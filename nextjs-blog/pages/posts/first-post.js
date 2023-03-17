import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
    return (
        <>
            <Layout>
                <Head>
                    <title>First Post</title>
                </Head>
                <Script
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={() =>
                        console.log(`script loaded correctly, window.FB has been populated`)
                    }
                />
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
            </Layout>
        </>
    );
}