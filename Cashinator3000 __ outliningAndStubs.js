class Cashinator3000 {/********//********//********/

constructor(productName, SKU, ppu, taxable) {
  //--CASHIER-- :: Initialize register csv=> productName, SKU, ppu, taxable
    this.priceList = {};
    //--CASHIER-- :: Initialize /w amt of seedMoney  
    this.totalCash = 0.00;
    //--CASHIER-- :: Initialize  /w salesTaxPercentage
    this.salesTaxPercentage = 0.00;

}
  //--CASHIER-- :: ability to: view curBalance of totalCash
  curBalance() {

  }
  //--CASHIER-- :: ability to: initiate transaction --(id, timeStamp)--
  newTransaction() {

  }
  //--CASHIER-- :: ability to: scan an item => added to curTransaction
  addItemToCurTransaction() {

  }
      //--CUSTOMER-- :: ability to: view last item scanned + currentTotal
  customerDisplay() {

  } 
  //--CASHIER-- :: ability to: input payment => close out transaction
      // calculate changeAmt
            // minimize on # of pieces of currency
  reconcileCurTransaction() {

    return changeDue;
  }
  //--CUSTOMER-- :: ability to: see grandTotal & # changeAmt
  customerFinalDisplay() {

  }
  //--CUSTOMER-- :: ability to: see itemized receipt of transaction
  printReceipt() {

  }
  //--CASHIER-- :: ability to: view report of all transactions since register init. 
      // transaction: {id, #itemsPurch, grandTotal}
  transactionList() {

  }
  //--CASHIER-- :: search all items purchsased since init. 
      // ability to: partial string match on productName
  search() {
    
  }

};/********//********//********//********//********/