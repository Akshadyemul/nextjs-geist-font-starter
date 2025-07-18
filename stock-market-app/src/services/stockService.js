import axios from 'axios';

// Mock API base URL - in production, replace with real stock API
const API_BASE_URL = 'https://api.example.com';

// Mock stock data for development
const mockStocks = [
  {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    price: 175.43,
    change: 2.15,
    changePercent: 1.24,
    volume: '45.2M',
    marketCap: '2.8T'
  },
  {
    symbol: 'GOOGL',
    name: 'Alphabet Inc.',
    price: 138.21,
    change: -1.87,
    changePercent: -1.33,
    volume: '28.1M',
    marketCap: '1.7T'
  },
  {
    symbol: 'MSFT',
    name: 'Microsoft Corporation',
    price: 378.85,
    change: 4.32,
    changePercent: 1.15,
    volume: '22.8M',
    marketCap: '2.8T'
  },
  {
    symbol: 'TSLA',
    name: 'Tesla, Inc.',
    price: 248.50,
    change: -8.75,
    changePercent: -3.40,
    volume: '89.4M',
    marketCap: '789B'
  },
  {
    symbol: 'AMZN',
    name: 'Amazon.com Inc.',
    price: 145.86,
    change: 1.23,
    changePercent: 0.85,
    volume: '31.7M',
    marketCap: '1.5T'
  },
  {
    symbol: 'NVDA',
    name: 'NVIDIA Corporation',
    price: 875.28,
    change: 15.67,
    changePercent: 1.82,
    volume: '42.1M',
    marketCap: '2.2T'
  }
];

const mockMarketIndices = [
  {
    name: 'S&P 500',
    symbol: 'SPX',
    value: 4567.89,
    change: 23.45,
    changePercent: 0.52
  },
  {
    name: 'Dow Jones',
    symbol: 'DJI',
    value: 35234.12,
    change: -89.34,
    changePercent: -0.25
  },
  {
    name: 'NASDAQ',
    symbol: 'IXIC',
    value: 14567.23,
    change: 67.89,
    changePercent: 0.47
  }
];

// Simulate real-time price updates
const simulatePriceUpdate = (stock) => {
  const randomChange = (Math.random() - 0.5) * 2; // Random change between -1 and 1
  const newPrice = stock.price + randomChange;
  const change = newPrice - stock.price;
  const changePercent = (change / stock.price) * 100;
  
  return {
    ...stock,
    price: parseFloat(newPrice.toFixed(2)),
    change: parseFloat(change.toFixed(2)),
    changePercent: parseFloat(changePercent.toFixed(2))
  };
};

export const stockService = {
  // Get live stock prices
  getLiveStocks: async () => {
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Simulate real-time updates
      const updatedStocks = mockStocks.map(stock => simulatePriceUpdate(stock));
      
      return {
        data: updatedStocks,
        success: true
      };
    } catch (error) {
      console.error('Error fetching live stocks:', error);
      return {
        data: mockStocks,
        success: false,
        error: error.message
      };
    }
  },

  // Get market indices
  getMarketIndices: async () => {
    try {
      await new Promise(resolve => setTimeout(resolve, 300));
      
      return {
        data: mockMarketIndices,
        success: true
      };
    } catch (error) {
      console.error('Error fetching market indices:', error);
      return {
        data: mockMarketIndices,
        success: false,
        error: error.message
      };
    }
  },

  // Search stocks
  searchStocks: async (query) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 200));
      
      const filteredStocks = mockStocks.filter(stock => 
        stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
        stock.name.toLowerCase().includes(query.toLowerCase())
      );
      
      return {
        data: filteredStocks,
        success: true
      };
    } catch (error) {
      console.error('Error searching stocks:', error);
      return {
        data: [],
        success: false,
        error: error.message
      };
    }
  },

  // Get stock historical data
  getStockHistory: async (symbol) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 400));
      
      // Generate mock historical data
      const days = 30;
      const basePrice = mockStocks.find(s => s.symbol === symbol)?.price || 100;
      const historicalData = [];
      
      for (let i = days; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        const randomVariation = (Math.random() - 0.5) * 10;
        const price = basePrice + randomVariation;
        
        historicalData.push({
          date: date.toISOString().split('T')[0],
          price: parseFloat(price.toFixed(2)),
          volume: Math.floor(Math.random() * 50000000) + 10000000
        });
      }
      
      return {
        data: historicalData,
        success: true
      };
    } catch (error) {
      console.error('Error fetching stock history:', error);
      return {
        data: [],
        success: false,
        error: error.message
      };
    }
  }
};
