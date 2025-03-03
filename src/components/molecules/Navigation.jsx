import ScrollSpy from 'react-scrollspy-navigation';

function Navigation() {
    return(
        <ScrollSpy activeClass="bg-slate-900 text-slate-100 rounded-md font-bold" offsetTop={75} rootMargin="75px">
            <nav className="sticky top-0 lg:hidden p-4 bg-white/30 backdrop-blur-sm">
                <ul className="py-2 px-3 bg-slate-100 flex justify-between rounded-lg">
                    <li><a className="py-1 px-3" href="#about">About</a></li>
                    <li><a className="py-1 px-3" href="#experience">Experience</a></li>
                    <li><a className="py-1 px-3" href="#projects">Projects</a></li>
                </ul>
            </nav>
        </ScrollSpy>
    )
}

export default Navigation;