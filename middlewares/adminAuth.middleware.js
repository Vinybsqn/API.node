export function adminAuthMiddleware(req, res, next) {
    const adminUser = 'admin';
    const adminPassword = 'admin';

    const authHeader = req.headers.authorization;
    if (!authHeader) {
        return res.status(401).send('Authentication required');
    }

    const base64Credentials = authHeader.split(' ')[1];
    const credentials = Buffer.from(base64Credentials, 'base64').toString('ascii');
    const [username, password] = credentials.split(':');

    if (username === adminUser && password === adminPassword) {
        next();
    } else {
        res.status(403).send('Accès refusé');
    }
}
