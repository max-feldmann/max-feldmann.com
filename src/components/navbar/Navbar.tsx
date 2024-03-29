export default function Navbar() {
    return (
        <header className="bg-base-300">
            <div className="navbar">
                <div className="flex-1">
                  <a className="btn btn-ghost text-xl">Max Feldmann</a>
                </div>
                <div className="flex-none">
                  <ul className="menu menu-horizontal px-1">
                    <li><a>Work</a></li>
                    <li><a>Work</a></li>
                    <li><a>Work</a></li>
                  </ul>
                </div>
            </div>
        </header>
    )
}