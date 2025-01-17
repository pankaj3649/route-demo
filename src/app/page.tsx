import Link from "next/link";

export default function Home(){
    return <div>
        <nav>
            <ul>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/blog">Blog</Link></li>
                <li><Link href="/docs">Docs</Link></li>
            </ul>
        </nav>
        Home...

    </div>
}