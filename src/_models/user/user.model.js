import UserInfosModel from './user.infos.model';
import UserKeydataModel from './user.keydata.model';

class UserModel {
  constructor(data) {
    this.id = data.id;
    this.infos = new UserInfosModel(data.userInfos);
    this.todayScore = data.todayScore || data.score;
    this.keyData = new UserKeydataModel(data.keyData);
  }
}

export default UserModel;
