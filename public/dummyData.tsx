type ResponseI = [
  CategoryI
]

type CategoryI = {
  id: number,
  category: {
    name: string,
    expenses: ExpensesI[]
  }
}

type ExpensesI = {
  Name: string,
  Cost: number
}


const data: ResponseI = [
  {
    id: 1,
    category: {
      name: 'Groceries',
      expenses: [
        { Name: 'H.E.B', Cost: 50.00 },
        { Name: 'Randells', Cost: 75.00 }
      ]
    }
  },
  {
    id: 2,
    category: {
      name: 'Shopping',
      expenses: [
        { id: 1, Name: 'Shein', Cost: 100.00 },
        { id: 2, Name: 'Old Navy', Cost: 81.00 },
        { id: 3, Name: 'Payless', Cost: 25.00 }
      ]
    }
  },
  {
    id: 3,
    category: {
      name: 'Utilities',
      expenses: []
    }
  }
]