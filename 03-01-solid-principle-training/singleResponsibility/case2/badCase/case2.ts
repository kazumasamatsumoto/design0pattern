class Case2BadCaseOrder {
  private items: string[];
  private totalAmount: number;
  private customerEmail: string;

  constructor(items: string[], totalAmount: number, customerEmail: string) {
    this.items = items;
    this.totalAmount = totalAmount;
    this.customerEmail = customerEmail;
  }

  processOrder(): void {
    this.validateOrder();
    this.saveToDatabase();
    this.sendConfirmationEmail();
    this.updateInventory();
  }

  private updateInventory(): void {
    console.log("Updateing inventory...");
    this.items.forEach((item) => {
      console.log(`Reducing stock for ${item}`);
    });
  }

  private validateOrder(): boolean {
    return this.items.length > 0 && this.totalAmount > 0;
  }

  private saveToDatabase(): void {
    console.log("Saving order to database...");
  }

  private sendConfirmationEmail(): void {
    console.log(`Sending confirmation email to ${this.customerEmail}`);
  }
}
