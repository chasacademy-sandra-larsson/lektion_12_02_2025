import LanguageSwitcher from "./LanguageSwitcher";

function Header() {

    return (
        <header className="flex justify-between item-center px-4 py-2 shadow-sm">
             <h1>Logo</h1>
             <nav>
                <LanguageSwitcher/>
             </nav>
        </header>
    )
}

export default Header;