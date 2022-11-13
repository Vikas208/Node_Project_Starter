import App from '@src/app';
import Auth from '@src/Routes/auth.routes';
import 'module-alias/register';
// Initialize App
new App([new Auth()]);
