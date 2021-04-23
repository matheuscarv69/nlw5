import { Router } from 'express';

import SettingsController from './controllers/SettingsController';
import UserController from './controllers/UserController';
import MessageController from './controllers/MessageController'

const routes = Router();

/**
 * Tipos de parametros
 * 
 * Routes Params => Parametros de rota
 * Query Params => Filtros e buscas
 * Body Params => dados no corpo da requisição 
 */

routes.post("/settings", SettingsController.create);
routes.get("/settings/:username", SettingsController.findByUsername);
routes.put("/settings/:username", SettingsController.update);

routes.post("/users", UserController.create)

routes.post("/messages", MessageController.create)

routes.get("/messages/:user_id", MessageController.showByUser)

export { routes };