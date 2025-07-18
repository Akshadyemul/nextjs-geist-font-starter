import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MarketIndexCard = ({ index }) => {
  const isPositive = index.change >= 0;
  
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{index.name}</Text>
      <Text style={styles.value}>{index.value.toLocaleString()}</Text>
      <View style={styles.changeContainer}>
        <Text style={[styles.change, { color: isPositive ? '#10b981' : '#ef4444' }]}>
          {isPositive ? '+' : ''}{index.change.toFixed(2)}
        </Text>
        <Text style={[styles.changePercent, { color: isPositive ? '#10b981' : '#ef4444' }]}>
          ({isPositive ? '+' : ''}{index.changePercent.toFixed(2)}%)
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    padding: 16,
    marginHorizontal: 8,
    borderRadius: 12,
    minWidth: 140,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  name: {
    fontSize: 14,
    color: '#6b7280',
    marginBottom: 4,
  },
  value: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
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

export default MarketIndexCard;
