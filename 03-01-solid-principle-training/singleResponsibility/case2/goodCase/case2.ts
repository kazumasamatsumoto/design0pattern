// 注文エンティティ
class Case2GoodCaseOrder {
  constructor(
    public items: string[],
    public totalAmount: number,
    public customerEmail: string
  ) {}
}

class OrderValidator {
  validate(order: Case2GoodCaseOrder): boolean {
    return order.items.length > 0 && order.totalAmount > 0;
  }
}

// 在庫管理
class Case2GoodCaseInventoryManager {
  updateInventory(items: string[]): void {
    console.log("Updating inventory...");
    items.forEach((item) => {
      console.log(`Reducing stock for ${item}`);
    });
  }
}

// データベース操作
class OrderRepository {
  save(order: Case2GoodCaseOrder): void {
    console.log("Saving order to database...");
  }
}

// メール通知
class OrderNotificationService {
  sendConfirmationEmail(email: string): void {
    console.log(`Sending confirmation email to ${email}`);
  }
}

// 注文処理の調整役
class OrderProcessor {
  constructor(
    private validator: OrderValidator,
    private inventory: Case2GoodCaseInventoryManager,
    private repository: OrderRepository,
    private notification: OrderNotificationService
  ) {}

  processOrder(order: Case2GoodCaseOrder): void {
    if (this.validator.validate(order)) {
      this.inventory.updateInventory(order.items);
      this.repository.save(order);
      this.notification.sendConfirmationEmail(order.customerEmail);
    }
  }
}
