const authorizeRole = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ error: 'Unauthorized' });
    
    const roleName = req.user.role.name.toLowerCase();
    if (!allowedRoles.includes(roleName)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    
    next();
  };
};

module.exports = authorizeRole;