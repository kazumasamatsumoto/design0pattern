class Reported {
  private data: any[];
  private format: string;
  private outputPath: string;

  constructor(data: any[], format: string, outputPath: string) {
    this.data = data;
    this.format = format;
    this.outputPath = outputPath;
  }

  // データ処理
  processData(): any[] {
    console.log("Processing data...");
    return this.data.map((item) => ({
      ...item,
      processed: true,
    }));
  }

  // フォーマット変換
  formatData(): string {
    if (this.format === "CSV") {
      return this.convertToCSV();
    } else if (this.format === "PDF") {
      return this.convertToPDF();
    }
    return this.convertToJSON();
  }

  private convertToCSV(): string {
    console.log("Converting to CSV...");
    return "csv data";
  }

  private convertToPDF(): string {
    console.log("Converting to PDF...");
    return "pdf data";
  }

  private convertToJSON(): string {
    console.log("Converting to JSON...");
    return "json data";
  }

  // ファイル保存
  saveReport(): void {
    console.log(`Saving report to ${this.outputPath}`);
  }

  // メール送信
  emailReport(recipient: string): void {
    console.log(`Sending report to ${recipient}`);
  }
}
