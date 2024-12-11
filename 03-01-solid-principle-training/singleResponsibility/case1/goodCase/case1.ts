// ユーザーエンティティ
class GoodCaseUser {
  constructor(
    public id: string,
    public name: string,
    public email: string,
    public password: string
  ) {}
}

// バリデーション担当
class UserValidator {
  validateEmail(email: string): boolean {
    return email.includes("@");
  }
  validatePassword(password: string): boolean {
    return password.length >= 8;
  }
}

// データベース操作担当
class UserRepository {
  save(user: GoodCaseUser): void {
    console.log(`Saving user ${user.name} from database`);
  }
  delete(user: GoodCaseUser): void {
    console.log(`Deleting user ${user.name} from database`);
  }
}

// メール送信担当
class UserNotificationService {
  sendWelcomeEmila(user: GoodCaseUser): void {
    console.log(`Sending welcome email to ${user.email}`);
  }
  sendPasswordReset(user: GoodCaseUser): void {
    console.log(`Sending password reset to ${user.email}`);
  }
}
