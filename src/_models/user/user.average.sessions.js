class UserAverageSessionsModel {
  constructor(data) {
    this.userId = data.userId;
    this.sessions = data.sessions.map((session) => ({
      day: { 1: 'L', 2: 'M', 3: 'M', 4: 'J', 5: 'V', 6: 'S', 7: 'D' }[
        session.day
      ],
      sessionLength: session.sessionLength,
    }));
  }
}

export default UserAverageSessionsModel;
