class UserPerformanceModel {
  constructor(data) {
    this.userId = data.userId;
    this.kind = data.kind;
    this.data = data.data.map((performance) => ({
      value: performance.value,
      kind: this.kind[performance.kind],
    }));
  }
}

export default UserPerformanceModel;
