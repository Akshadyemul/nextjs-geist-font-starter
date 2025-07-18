import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const PortfolioItem = ({ holding, onPress }) => {
  const isPositive = holding.gainLoss >= 0;
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(holding)}>
      <View style={styles.leftSection}>
        <Text style={styles.symbol}>{holding.symbol}</Text>
        <Text style={styles.name} numberOfLines={1}>{holding.name}</Text>
        <Text style={styles.shares}>{holding.shares} shares</Text>
      </View>
      
      <View style={styles.rightSection}>
        <Text style={styles.totalValue}>${holding.totalValue.toFixed(2)}</Text>
        <View style={styles.changeContainer}>
          <Text style={[styles.gainLoss, { color: isPositive ? '#10b981' : '#ef4444' }]}>
            {isPositive ? '+' : ''}${holding.gainLoss.toFixed(2)}
          </Text>
          <Text style={[styles.gainLossPercent, { color: isPositive ? '#10b981' : '#ef4444' }]}>
            ({isPositive ? '+' : ''}{holding.gainLossPercent.toFixed(2)}%)
          </Text>
        </View>
        <Text style={styles.avgPrice}>Avg: ${holding.avgPrice.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 4,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  leftSection: {
    flex: 1,
  },
  symbol: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  name: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 2,
    maxWidth: 180,
  },
  shares: {
    fontSize: 12,
    color: '#9ca3af',
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  totalValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 2,
  },
  gainLoss: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  gainLossPercent: {
    fontSize: 14,
    fontWeight: '500',
  },
  avgPrice: {
    fontSize: 12,
    color: '#9ca3af',
  },
});

export default PortfolioItem;
