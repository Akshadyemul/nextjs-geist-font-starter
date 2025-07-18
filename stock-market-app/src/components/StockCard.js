import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const StockCard = ({ stock, onPress }) => {
  const isPositive = stock.change >= 0;
  
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress && onPress(stock)}>
      <View style={styles.leftSection}>
        <Text style={styles.symbol}>{stock.symbol}</Text>
        <Text style={styles.name} numberOfLines={1}>{stock.name}</Text>
      </View>
      
      <View style={styles.rightSection}>
        <Text style={styles.price}>${stock.price.toFixed(2)}</Text>
        <View style={styles.changeContainer}>
          <Text style={[styles.change, { color: isPositive ? '#10b981' : '#ef4444' }]}>
            {isPositive ? '+' : ''}{stock.change.toFixed(2)}
          </Text>
          <Text style={[styles.changePercent, { color: isPositive ? '#10b981' : '#ef4444' }]}>
            ({isPositive ? '+' : ''}{stock.changePercent.toFixed(2)}%)
          </Text>
        </View>
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
    maxWidth: 200,
  },
  rightSection: {
    alignItems: 'flex-end',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 2,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  change: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 4,
  },
  changePercent: {
    fontSize: 14,
    fontWeight: '500',
  },
});

export default StockCard;
