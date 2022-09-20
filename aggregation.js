{
    "_id" : ObjectId("6329937363cdba7058dfbe5b"),
    "id" : "312456",
    "name" : "Yunjin Huh",
    "age" : 28,
    "jobRole" : "Store Manager",
    "salary" : "120000"
},

{
    "_id" : ObjectId("632993ec63cdba7058dfbe79"),
    "id" : "345342",
    "name" : "Kazuha Nakamura",
    "age" : 25,
    "jobRole" : "Store Associate",
    "salary" : "45000"
},

{
    "_id" : ObjectId("6329948c63cdba7058dfbea6"),
    "id" : "334566",
    "name" : "Sakura Miyawaki",
    "age" : 35,
    "jobRole" : "Cashier",
    "salary" : "67500"
},

{
    "_id" : ObjectId("6329950e63cdba7058dfbed0"),
    "id" : "245345",
    "name" : "Chaewon Kim",
    "age" : 40,
    "jobRole" : "Senior Cashier",
    "salary" : "72500"
},

{
    "_id" : ObjectId("6329963f63cdba7058dfbf46"),
    "id" : "445364",
    "name" : "Eunchae Hong",
    "age" : 22,
    "jobRole" : "Store Associate",
    "salary" : "35000"
},

/*Inventory*/

{
    "_id" : ObjectId("632996fd63cdba7058dfbf6f"),
    "id" : "LS0000123",
    "name" : "XYZ Chocolate Bar - 100g",
    "price" : "5.23",
    "quantity" : "25000",
    "category" : [ 
        "chocolates", 
        "sweets"
    ]
},

{
    "_id" : ObjectId("6329976163cdba7058dfbf83"),
    "id" : "LS0003123",
    "name" : "Milk Non-fat - 1lt",
    "price" : "3",
    "quantity" : "1000",
    "category" : [ 
        "dairy", 
        "healthy"
    ]
},

{
    "_id" : ObjectId("632997b263cdba7058dfbf93"),
    "id" : "LS0004566",
    "name" : "Eggs - 12 Pack",
    "price" : "6",
    "quantity" : "5000",
    "category" : [ 
        "poultry", 
        "generic"
    ]
},

{
    "_id" : ObjectId("632997f963cdba7058dfbf9e"),
    "id" : "LS0008542",
    "name" : "Whole Chicken",
    "price" : "12.59",
    "quantity" : "1250",
    "category" : [ 
        "poultry", 
        "meat"
    ]
},

{
    "_id" : ObjectId("6329985463cdba7058dfbfa9"),
    "id" : "LS0008542",
    "name" : "Carrots (Packed) - 250g",
    "price" : "3.50",
    "quantity" : "3000",
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
},

{
    "_id" : ObjectId("632998ae63cdba7058dfbfc1"),
    "id" : "LS0009846",
    "name" : "Beans (Packed) - 250g",
    "price" : "6.75",
    "quantity" : "6000",
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
},

{
    "_id" : ObjectId("632999bf63cdba7058dfc060"),
    "id" : "LS0009100",
    "name" : "Bell Pepper (Packed) - 250 g",
    "price" : "4.95",
    "quantity" : "12000",
    "category" : [ 
        "vegetables", 
        "healthy", 
        "organic"
    ]
},

{
    "_id" : ObjectId("63299a0863cdba7058dfc07b"),
    "id" : "LS0002688",
    "name" : "ZZ Butter - 500 g",
    "price" : "25",
    "quantity" : "500",
    "category" : [ 
        "dairy", 
        "healthy", 
        "premium"
    ]
},

/*Payments*/

{
    "_id" : ObjectId("63299c1963cdba7058dfc0bf"),
    "id" : "BL2021005",
    "grossAmount" : "105.65",
    "discounts" : "10",
    "netAmount" : "95.65",
    "date/time" : "ISODate(2021-01-01T16:00:00Z)"
},

{
    "_id" : ObjectId("63299c9f63cdba7058dfc0dd"),
    "id" : "BL2021006",
    "grossAmount" : "45.25",
    "discounts" : "0",
    "netAmount" : "45.25",
    "date/time" : "ISODate(2021-01-01T16:15:55Z)"
},

{
    "_id" : ObjectId("63299cf563cdba7058dfc0ee"),
    "id" : "BL2021007",
    "grossAmount" : "153.33",
    "discounts" : "20.33",
    "netAmount" : "133",
    "date/time" : "ISODate(2021-01-01T16:31:08Z)"
},

{
    "_id" : ObjectId("63299d3863cdba7058dfc0f9"),
    "id" : "BL2021008",
    "grossAmount" : "21",
    "discounts" : "0",
    "netAmount" : "21",
    "date/time" : "ISODate(2021-01-01T20:25:52Z)"
},

{
    "_id" : ObjectId("63299da063cdba7058dfc10c"),
    "id" : "BL2021009",
    "grossAmount" : "89.72",
    "discounts" : "0.72",
    "netAmount" : "89",
    "date/time" : "ISODate(2021-01-01T08:45:12Z)"
},

{
    "_id" : ObjectId("63299df763cdba7058dfc128"),
    "id" : "BL2021010",
    "grossAmount" : "33.5",
    "discounts" : "20.5",
    "netAmount" : "13",
    "date/time" : "(2021-01-01T11:02:35Z)"
},

/*Promo*/

{
    "_id" : ObjectId("63299f3b63cdba7058dfc17a"),
    "id" : "PROMO01",
    "name" : "Sales Promo",
    "period" : "7",
    "dailySales" : "20, 50, 12, 30, 45, 15, 60"
},

{
    "_id" : ObjectId("63299f6f63cdba7058dfc192"),
    "id" : "PROMO02",
    "name" : "Milk Promo",
    "period" : "2",
    "dailySales" : "120, 200"
},

{
    "_id" : ObjectId("63299f9a63cdba7058dfc1a1"),
    "id" : "PROMO03",
    "name" : "Meat Promo",
    "period" : "3",
    "dailySales" : "101, 205"
},

{
    "_id" : ObjectId("63299fc663cdba7058dfc1b3"),
    "id" : "PROMO04",
    "name" : "New Year Promo",
    "period" : "7",
    "dailySales" : "68, 88, 105, 188, 74, 278, 350"
}

