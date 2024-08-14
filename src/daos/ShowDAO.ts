import { Show, ShowModel } from "../domains/ShowModel";

export default class ShowDAO {
  async save(show: Show) {
    try {
      const savedShow = await ShowModel.create(show);
      return savedShow;
    } catch (error) {
      console.error("Error saving show:", error);
      throw error; 
    }
  }
}
