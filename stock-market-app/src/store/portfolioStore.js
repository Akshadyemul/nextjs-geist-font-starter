import { create } from 'zustand';

const usePortfolioStore = create((set, get) => ({
  // Portfolio holdings
  holdings: [
    {
      symbol: 'AAPL',
      name: 'Apple Inc.',
      shares: 10,
      avgPrice: 150.00,
      currentPrice: 175.43,
      totalValue: 1754.30,
      totalCost: 1500.00,
      gainLoss: 254.30,
      gainLossPercent: 16.95,
    },
    {
      symbol: 'GOOGL',
      name: 'Alphabet Inc.',
      shares: 5,
      avgPrice: 140.00,
      currentPrice: 138.21,
      totalValue: 691.05,
      totalCost: 700.00,
      gainLoss: -8.95,
      gainLossPercent: -1.28,
    },
    {
      symbol: 'MSFT',
      name: 'Microsoft Corporation',
      shares: 8,
      avgPrice: 350.00,
      currentPrice: 378.85,
      totalValue: 3030.80,
      totalCost: 2800.00,
      gainLoss: 230.80,
      gainLossPercent: 8.24,
    },
  ],

  // Portfolio summary
  totalValue: 5476.15,
  totalCost: 5000.00,
  totalGainLoss: 476.15,
  totalGainLossPercent: 9.52,
  dayChange: 45.67,
  dayChangePercent: 0.84,

  // Actions
  addHolding: (holding) => set((state) => ({
    holdings: [...state.holdings, holding],
  })),

  removeHolding: (symbol) => set((state) => ({
    holdings: state.holdings.filter(h => h.symbol !== symbol),
  })),

  updateHolding: (symbol, updates) => set((state) => ({
    holdings: state.holdings.map(h => 
      h.symbol === symbol ? { ...h, ...updates } : h
    ),
  })),

  updatePrices: (stockPrices) => set((state) => {
    const updatedHoldings = state.holdings.map(holding => {
      const stockPrice = stockPrices.find(s => s.symbol === holding.symbol);
      if (stockPrice) {
        const totalValue = holding.shares * stockPrice.price;
        const gainLoss = totalValue - holding.totalCost;
        const gainLossPercent = (gainLoss / holding.totalCost) * 100;
        
        return {
          ...holding,
          currentPrice: stockPrice.price,
          totalValue,
          gainLoss,
          gainLossPercent,
        };
      }
      return holding;
    });

    // Calculate portfolio totals
    const totalValue = updatedHoldings.reduce((sum, h) => sum + h.totalValue, 0);
    const totalCost = updatedHoldings.reduce((sum, h) => sum + h.totalCost, 0);
    const totalGainLoss = totalValue - totalCost;
    const totalGainLossPercent = (totalGainLoss / totalCost) * 100;

    return {
      holdings: updatedHoldings,
      totalValue,
      totalCost,
      totalGainLoss,
      totalGainLossPercent,
    };
  }),

  // Get portfolio performance data
  getPerformanceData: () => {
    const state = get();
    return {
      totalValue: state.totalValue,
      totalCost: state.totalCost,
      totalGainLoss: state.totalGainLoss,
      totalGainLossPercent: state.totalGainLossPercent,
      dayChange: state.dayChange,
      dayChangePercent: state.dayChangePercent,
    };
  },

  // Get top performers
  getTopPerformers: () => {
    const state = get();
    return state.holdings
      .sort((a, b) => b.gainLossPercent - a.gainLossPercent)
      .slice(0, 3);
  },

  // Get worst performers
  getWorstPerformers: () => {
    const state = get();
    return state.holdings
      .sort((a, b) => a.gainLossPercent - b.gainLossPercent)
      .slice(0, 3);
  },
}));

export default usePortfolioStore;
