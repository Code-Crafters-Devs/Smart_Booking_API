export const NavButtons = ({ onLogin, onSignup }) => (
  <div className="flex items-center space-x-4">
    <button
      onClick={onLogin}
      className="text-white hover:text-blue-200 px-4 py-2 rounded-lg transition-colors"
    >
      Login
    </button>
    <button
      onClick={onSignup}
      className="bg-white text-blue-900 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
    >
      Sign Up
    </button>
  </div>
);