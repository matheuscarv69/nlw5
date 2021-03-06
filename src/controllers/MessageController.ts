import { Request, Response } from 'express';

import { MessageService } from '../services/MessageService';


class MessageController {

  async create(req: Request, res: Response): Promise<Response> {
    const { admin_id, text, user_id } = req.body;

    const messageService = new MessageService();

    const message = await messageService.create({
      admin_id,
      text,
      user_id
    });


    return res.json(message);
  }

  async showByUser(req: Request, res: Response): Promise<Response> {
    const { user_id } = req.params;

    const messageService = new MessageService();

    const list = await messageService.listByUser(user_id);

    return res.json(list);

  }

}

export default new MessageController();