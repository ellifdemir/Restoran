import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/resultsList'


export default function SearchScreen() {
  const[searchApi,results]=useResults();
  console.log(results);
  const filterPrice=(price)=>{
    return results.filter((results)=>{
      return results.price===price
    })
  }

  return (
    <View>
      <SearchBar/>
      <ResultsList title="Ucuz Restoranlar" results={filterPrice('₺')}/>
      <ResultsList title="Uygun Restoranlar" results={filterPrice('₺₺')}/>
      <ResultsList title="Pahalı Restoranlar" results={filterPrice('₺₺₺')}/>
    </View>
  )
}

const styles = StyleSheet.create({})