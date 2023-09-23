import { ITeam } from './ITeam';

export interface ITeamsModel {
  findAll(): Promise<ITeam[]>,
  findByOne(id: ITeam['id']): Promise<ITeam | null>
}
