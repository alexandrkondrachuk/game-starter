import gameMiddleware from './game-middleware';
import loginMiddleware from './login-middleware';

export const rootMiddleware = [gameMiddleware, loginMiddleware];