import { NavLogo } from './NavLogo';
import { NavButtons } from './NavButtons';

export const Navbar = ({ onLogin, onSignup }) => (
<nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-16">
        <NavLogo />
        <NavButtons onLogin={onLogin} onSignup={onSignup} />
    </div>
    </div>
</nav>
);