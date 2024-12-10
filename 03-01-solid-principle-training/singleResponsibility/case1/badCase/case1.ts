// ex1) ユーザー管理システム
// 悪い例として複数の責任が混在している状態

class User {
  private id: string;
  private name: string;
  private email: string;
  private password: string;

  constructor(name: string, email: string, password: string) {
    this.id = Math.random().toString();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  // データ検証
  validateEmail(): boolean {
    return this.email.includes("@");
  }
  validatePassword(): boolean {
    return this.password.length >= 8;
  }

  // DB操作
  saveToDatabase(): void {
    console.log(`Saving user ${this.name} to database`);
  }
  deleteFromDatabase(): void {
    console.log(`Deleting user ${this.name} from database`);
  }
  // メール送信
  sendWelcomeEmail(): void {
    console.log(`Sending welcome email to ${this.email}`);
  }
  sendPasswordReset(): void {
    console.log(`Sending password reset to ${this.email}`);
  }
}
