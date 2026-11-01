import {useLayoutEffect, useRef, useState} from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate, NavLink, useLocation} from "react-router-dom";
import Home from "./pages/home";
import Me from "./pages/me";
import {internalUrls} from "./infos/urls";
import {pages} from "./infos/pages";
import Jobs from "./pages/jobs";
import Projects from "./pages/projects";
import {IoLogoLinkedin, IoLogoInstagram, IoMenu, IoClose} from "react-icons/io5";

function App() {
    return (
        <Router basename={import.meta.env.BASE_URL}>
            <AppShell />
        </Router>
    );
}

const narrowScreenQuery = "(max-width: 799px)";

function AppShell() {
    const {pathname} = useLocation();
    const menuRef = useRef<HTMLElement>(null);
    const [menuOpen, setMenuOpen] = useState(false);
    const [indicator, setIndicator] = useState({top: 0, height: 0});
    const [indicatorReady, setIndicatorReady] = useState(false);

    useLayoutEffect(() => {
        document.getElementById("root")?.classList.toggle("is-home", pathname === "/");
    }, [pathname]);

    useLayoutEffect(() => {
        const menu = menuRef.current;
        if (!menu) return;

        const placeIndicator = () => {
            const current = menu.querySelector<HTMLAnchorElement>('a[aria-current="page"]');
            if (!current) return;
            const menuBox = menu.getBoundingClientRect();
            const linkBox = current.getBoundingClientRect();
            const top = linkBox.top - menuBox.top;
            const height = linkBox.height;
            setIndicator((currentIndicator) => (
                currentIndicator.top === top && currentIndicator.height === height
                    ? currentIndicator
                    : {top, height}
            ));
        };

        placeIndicator();
        const frame = requestAnimationFrame(() => setIndicatorReady(true));
        const observer = typeof ResizeObserver === "undefined" ? undefined : new ResizeObserver(placeIndicator);
        observer?.observe(menu);

        return () => {
            cancelAnimationFrame(frame);
            observer?.disconnect();
        };
    }, [pathname]);

    const isNarrowScreen = () => window.matchMedia(narrowScreenQuery).matches;

    const openMenu = () => {
        if (isNarrowScreen()) setMenuOpen(true);
    }

    const closeMenu = () => {
        if (isNarrowScreen()) setMenuOpen(false);
    }

    return (
        <div className={menuOpen ? "App is-menu-open" : "App"}>
            <button type="button" id="menu-open" aria-label="Open menu" onClick={openMenu}><IoMenu /></button>
            <button type="button" id="menu-close" aria-label="Close menu" onClick={closeMenu}><IoClose /></button>
            <div className="app-body">
                <nav id="menu" aria-label="Pages" ref={menuRef}>
                    <span
                        className={indicatorReady ? "menu-indicator is-ready" : "menu-indicator"}
                        aria-hidden="true"
                        style={{transform: `translateY(${indicator.top}px)`, height: indicator.height}}
                    />
                    {
                        pages.map((page) => (
                            <NavLink
                                key={page.name}
                                to={page.link}
                                end={page.link === internalUrls.home()}
                                onClick={closeMenu}
                            >
                                {page.name}
                            </NavLink>
                        ))
                    }
                </nav>
                <main>
                    <Routes>
                        <Route path={internalUrls.home()} element={<Home />} />
                        <Route path={internalUrls.me()} element={<Me />} />
                        <Route path={internalUrls.jobs()} element={<Jobs />} />
                        <Route path={`${internalUrls.projects()}/:codename?`} element={<Projects />} />
                        <Route path="*" element={<Navigate to={internalUrls.home()} />} />
                    </Routes>
                </main>
            </div>
            <div id="footer">
                <div id="social">
                    <a href="https://www.linkedin.com/in/4lexcorrei4/" target="_blank" rel="noopener noreferrer"><IoLogoLinkedin /></a>
                    <a href="https://www.instagram.com/4lexcorrei4/" target="_blank" rel="noopener noreferrer"><IoLogoInstagram /></a>
                </div>
                <div id="copyright">&copy; {new Date().getFullYear()} Alexandre Correia</div>
            </div>
        </div>
    );
}

export default App;
