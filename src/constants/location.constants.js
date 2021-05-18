export const LOCATIONS = [
  {
    id: 1,
    name: 'Balbriggan'
  },
  {
    id: 2,
    name: 'Dun Laoghaire'
  },
  {
    id: 3,
    name: 'City Centre',
    bank: true,
    feature: 'Bank',
    actions: [
      {
        label: 'Deposit Funds',
        action: 'depositFunds'
      },
      {
        label: 'Withdraw Funds',
        action: 'withdrawFunds'
      }
    ]
  },
  {
    id: 4,
    name: 'Finglas',
    gundealer: true,
    feature: 'Guns',
    actions: [
      {
        label: 'Buy Gun',
        action: 'buyGun'
      }
    ]
  },
  {
    id: 5,
    name: 'Dalkey'
  },
  {
    id: 6,
    name: 'Clontarf',
    loanshark: true,
    feature: 'Loan Shark',
    actions: [
      {
        label: 'Pay Debt',
        action: 'payDebt'
      }
    ]
  },
  {
    id: 7,
    name: 'Ballsbridge',
    hospital: true,
    feature: 'Hospital',
    actions: [
      {
        label: 'Recover Health',
        action: 'recoverHealth'
      }
    ]
  },
  {
    id: 8,
    name: 'Ranelagh'
  }
];
