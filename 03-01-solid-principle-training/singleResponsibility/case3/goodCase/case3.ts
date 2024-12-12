// レポートデータ構造
class ReportData {
  constructor(public rawData: any[]) {}
}

// データ処理
class DataProcessor {
  process(data: ReportData): any[] {
    console.log("Processing data...");
    return data.rawData.map((item) => ({
      ...item,
      processed: true,
    }));
  }
}

// 形式変換インターフェース
interface IFormatter {
  format(data: any[]): string;
}

// CSV形式変換
class CSVFormatter implements IFormatter {
  format(data: any[]): string {
    console.log("Converting to CSV...");
    return "csv data";
  }
}

// PDF形式変換
class PDFFormatter implements IFormatter {
  format(data: any[]): string {
    console.log("Converting to PDF...");
    return "pdf data";
  }
}

// JSON形式変換
class JSONFormatter implements IFormatter {
  format(data: any[]): string {
    console.log("Converting to JSON...");
    return "json data";
  }
}

// ファイル保存
class ReportStorage {
  save(content: string, path: string): void {
    console.log(`Saving report to ${path}`);
  }
}

// メール送信
class ReportDistributor {
  email(content: string, recipient: string): void {
    console.log(`Sending report to ${recipient}`);
  }
}

// レポート生成の調整役
class ReportGenerator {
  constructor(
    private processor: DataProcessor,
    private formatter: IFormatter,
    private storage: ReportStorage,
    private distributor: ReportDistributor
  ) {}

  generateReport(
    data: ReportData,
    outputPath: string,
    recipient?: string
  ): void {
    const processedData = this.processor.process(data);
    const formattedContent = this.formatter.format(processedData);
    this.storage.save(formattedContent, outputPath);

    if (recipient) {
      this.distributor.email(formattedContent, recipient);
    }
  }
}
