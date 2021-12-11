import Link from "next/link";

const Layout = ({ children }) => {

    return (
        <div className="layout-container">
            <header>
                <Link href="/">
                    <a>
                        <h1>Recipe Den</h1>
                        <h2>Let's all bake!</h2>
                    </a>
                </Link>
            </header>
            <div className="page-content">
                { children }
            </div>
            <footer>
                &copy; Copyright 2021 Recipe Den
            </footer>
        </div>
    )
}

export default Layout;