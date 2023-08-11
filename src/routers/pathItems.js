import React from 'react'
import namePath from '../routers/namePath'
import Main from '../components/Main/Main'
import ProductCard from '../components/ProductCard/ProductCard'
import Auctions from '../components/Auctions/Auctions'
import MyRates from '../components/MyRates/MyRates'
import MyBuy from '../components/MyBuy/MyBuy'
import MySales from '../components/MySales/MySales'

const pathItems = [
  { path: namePath.DEFAULT, element: <Main /> },
  { path: namePath.PRODUCTCARD_ID, element: <ProductCard /> },
  { path: namePath.AUCTIONS, element: <Auctions /> },
  { path: namePath.MYRATES, element: <MyRates /> },
  { path: namePath.MYBUY, element: <MyBuy /> },
  { path: namePath.MYSALES, element: <MySales /> },
]
export { pathItems }
