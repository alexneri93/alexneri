import ScrollSpy from 'react-scrollspy-navigation';

function NavigationDesktop() {
    
    return(
        <ScrollSpy activeClass="bg-slate-900 text-slate-100 rounded-md font-bold">
            <nav className="hidden mt-10 py-2 px-3 bg-slate-100 flex-col rounded-lg lg:inline-flex">
                <a className="py-1 px-3" href="#about">About</a>
                <a className="py-1 px-3" href="#experience">Experience</a>
                <a className="py-1 px-3" href="#projects">Projects</a>
            </nav>
        </ScrollSpy>
    )
}

export default NavigationDesktop;