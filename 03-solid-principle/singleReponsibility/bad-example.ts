export {};

class Empliyee {
  constructor(public name: string, public department: string) {}

  calculatePay() {
    this.getRegularHours();
    console.log(`${this.name}の給与を計算しました。`);
  }

  reportHours() {
    this.getRegularHours();
    console.log(`${this.name}の労働時間をレポートしました`);
  }

  save() {
    console.log(`${this.name}を保存しました`);
  }

  private getRegularHours() {
    console.log("経理部門・人事部門共通のロジック");
  }
}
