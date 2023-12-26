import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-links">
                    <Link to="/">home</Link>
                    <Link to="/shop">shop</Link>
                    <Link to="/menu">menu</Link>
                </div>
                <div className="footer-name">
                    <h1>blue jay cafe</h1>
                </div>
                <p>© 2023, Blue Jay Cafe NYC.</p>
            </div>
        </>
    )
}