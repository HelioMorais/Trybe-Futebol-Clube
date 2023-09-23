import { Request, Response } from 'express';
import MatchService from '../services/MatchService';

export default class MatchController {
  constructor(
    private _matchService = new MatchService(),
  ) { }

  public async findAllTeams(_req: Request, res: Response) {
    const serviceResponse = await this._matchService.findAllMatches();
    res.status(200).json(serviceResponse.data);
  }
}
