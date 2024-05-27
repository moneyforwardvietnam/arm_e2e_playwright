const { test, expect } = require('@playwright/test');
const fs = require('fs');
const path = require('path');
const csv = require('csv-parser');
// const iconv = require('iconv-lite');
import { OpportunityPage } from '@pages/TransactionsMenu/Opportunity/OpportunityPages.page'

//test.describe('ARM-6327_TestSuite', async () => {
 

test('Assert Opportunit Import CSV column headers - UTF-8でダウンロード', async ({ page }) => {
  test.info().annotations.push({ type: "test_id", description: "C165183" });
  const expectedHeadersImportCSVTemplate = 
  ["取引No",
  "取引先コード",
  "取引先部門コード 任意",
  "請求先コード",
  "契約開始日",
  "契約終了日",
  "部門コード 任意",
  "債権の勘定科目コード 任意",
  "債権の補助科目コード 任意",
  "品目コード",
  "単価",
  "数量",
  "売上計上回数 任意",
  "支払回数",
  "メモ 任意",
  "計算方法 任意"];
  const opportunityPage = new OpportunityPage(page);
  await opportunityPage.NavigateToOpportunity();
  await page.getByRole('button', { name: 'インポート' }).click();
  await page.locator('li').filter({ hasText: 'CSVファイル' }).click();
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'UTF-8でダウンロード' }).click();
  const download = await downloadPromise;

  const downloadPath = path.join('src/data/Opportunity/ARM-6094');
  await fs.promises.mkdir(downloadPath, { recursive: true });
  const filePath = path.join(downloadPath, await download.suggestedFilename());
  await download.saveAs(filePath);

  // Read and parse the CSV file
  const headers = await new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('headers', (headers) => {
        resolve(headers);
      })
      .on('error', (error) => {
        reject(error);
      });
  });

  // Assert the headers
  expect(headers).toEqual(expectedHeadersImportCSVTemplate);
});

// test('Assert Opportunit Import CSV column headers - Shift-JISでダウンロード', async ({ page }) => {
//   test.info().annotations.push({ type: "test_id", description: "C165184" });
  
//   const opportunityPage = new OpportunityPage(page);
//   await opportunityPage.NavigateToOpportunity();
//   await page.getByRole('button', { name: 'インポート' }).click();
//   await page.locator('li').filter({ hasText: 'CSVファイル' }).click();
//   const downloadPromise = page.waitForEvent('download');
//   await page.getByRole('button', { name: 'Shift-JISでダウンロード' }).click();
//   const download = await downloadPromise;

//   const downloadPath = path.join('src/data/Opportunity/ARM-6094');
//   await fs.promises.mkdir(downloadPath, { recursive: true });
//   const filePath = path.join(downloadPath, await download.suggestedFilename());
//   await download.saveAs(filePath);

//   // Read and parse the CSV file
//   const headers = await new Promise((resolve, reject) => {
//     const results = [];
//     fs.createReadStream(filePath)
//       .pipe(iconv.decodeStream('Shift_JIS'))
//       .pipe(csv())
//       .on('headers', (headers) => {
//         resolve(headers);
//       })
//       .on('error', (error) => {
//         reject(error);
//       });
//   });

//   // Assert the headers
//   expect(headers).toEqual(expectedHeadersImportCSVTemplate);
// });
//});