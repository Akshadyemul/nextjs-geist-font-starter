# Stock Market App

A comprehensive React Native stock market application built with Expo, featuring live stock data, portfolio management, educational content, and user profiles.

## Features

### 🏠 Home Screen
- Live stock prices with real-time updates
- Market indices overview (S&P 500, Dow Jones, NASDAQ)
- Stock search functionality
- Pull-to-refresh for latest data
- Market status indicator

### 📊 Portfolio Screen
- Portfolio value tracking
- Individual stock holdings management
- Gain/loss calculations
- Performance insights
- Best and worst performers
- Portfolio diversification overview

### 📚 Learn Trading Screen
- Comprehensive trading education
- Categorized lessons (Basics, Technical Analysis, Strategies, Risk Management)
- Progress tracking
- Trading glossary
- Daily tips and insights
- Difficulty levels for different experience levels

### 👤 Profile Screen
- User profile management
- Trading statistics
- App preferences and settings
- Notification controls
- Security settings
- Support and legal information

## Technology Stack

- **React Native** with Expo
- **React Navigation** for tab navigation
- **TanStack Query** for data fetching and caching
- **Zustand** for state management
- **Expo Vector Icons** for UI icons
- **React Native Chart Kit** for data visualization

## Project Structure

```
stock-market-app/
├── App.js                          # Main app entry point
├── app.json                        # Expo configuration
├── package.json                    # Dependencies
├── babel.config.js                 # Babel configuration
├── src/
│   ├── navigation/
│   │   └── TabNavigator.js         # Bottom tab navigation
│   ├── screens/
│   │   ├── HomeScreen.js           # Market data and search
│   │   ├── PortfolioScreen.js      # Portfolio management
│   │   ├── LearnTradingScreen.js   # Educational content
│   │   └── ProfileScreen.js        # User profile and settings
│   ├── components/
│   │   ├── StockCard.js            # Individual stock display
│   │   ├── MarketIndexCard.js      # Market index display
│   │   └── PortfolioItem.js        # Portfolio holding item
│   ├── services/
│   │   └── stockService.js         # API service layer
│   └── store/
│       └── portfolioStore.js       # Portfolio state management
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stock-market-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Install Expo CLI** (if not already installed)
   ```bash
   npm install -g @expo/cli
   ```

## Running the App

1. **Start the development server**
   ```bash
   npm start
   ```

2. **Run on specific platform**
   ```bash
   # iOS Simulator
   npm run ios
   
   # Android Emulator
   npm run android
   
   # Web Browser
   npm run web
   ```

3. **Using Expo Go**
   - Install Expo Go on your mobile device
   - Scan the QR code displayed in the terminal
   - The app will load on your device

## Key Features Implementation

### Live Stock Data
- Mock API with simulated real-time price updates
- Automatic refresh every 30 seconds
- Pull-to-refresh functionality
- Error handling and loading states

### Portfolio Management
- Real-time portfolio value calculation
- Gain/loss tracking with percentages
- Performance insights and analytics
- Holdings management

### Educational Content
- Structured learning path
- Progress tracking
- Multiple difficulty levels
- Interactive glossary
- Daily tips and insights

### User Experience
- Clean, modern UI design
- Smooth animations and transitions
- Responsive layout
- Dark/light mode support
- Comprehensive settings

## API Integration

The app currently uses mock data for demonstration purposes. To integrate with real stock APIs:

1. Replace the mock functions in `src/services/stockService.js`
2. Add API keys to environment variables
3. Update the API endpoints and data structures
4. Handle rate limiting and error responses

### Recommended APIs
- Alpha Vantage
- IEX Cloud
- Finnhub
- Yahoo Finance API

## State Management

### Portfolio Store (Zustand)
- Holdings management
- Portfolio calculations
- Performance tracking
- Local state persistence

### Query Client (TanStack Query)
- API data caching
- Background refetching
- Error handling
- Loading states

## Customization

### Styling
- All styles are defined in StyleSheet objects
- Consistent color scheme and typography
- Easy to modify themes and colors

### Data Structure
- Modular service layer for easy API integration
- Flexible data models
- Type-safe implementations

## Development Notes

### Mock Data
The app includes comprehensive mock data for:
- Stock prices and market data
- Portfolio holdings
- Educational content
- User profiles

### Real-time Updates
- Simulated price changes every 30 seconds
- Background refresh capabilities
- Optimistic updates for better UX

### Performance
- Efficient list rendering with FlatList
- Image optimization
- Minimal re-renders with proper state management

## Future Enhancements

- [ ] Real-time WebSocket connections
- [ ] Advanced charting and technical indicators
- [ ] News integration
- [ ] Social trading features
- [ ] Push notifications
- [ ] Offline support
- [ ] Advanced portfolio analytics
- [ ] Options and futures trading
- [ ] Cryptocurrency support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

---

Built with ❤️ using React Native and Expo
