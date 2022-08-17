import React, { useState } from 'react'
import { Button, Card, DataTable, Stack } from '@shopify/polaris'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../graphQL/queries'
import { useEffect } from 'react'
import Pagination from '../misslaniuos/Pagination'

const AllProducts = () => {
  const { loading, error, data } = useQuery(GET_PRODUCTS(10))

  const [rows, setrows] = useState([
    ['Emerald Silk Gown', '$875.00', 124689, 140, '$122,500.00'],
    ['Mauve Cashmere Scarf', '$230.00', 124533, 83, '$19,090.00'],
    [
      'Navy Merino aki chinos and yellow belt',
      '$445.00',
      124518,
      32,
      '$14,240.00',
    ],
  ])

  const [productList, setProductList] = useState([])

  useEffect(() => {
    if (data) {
      setProductList(data.products.edges)
    }
  }, [loading])

  return (
    <div style={{}}>
      <Card>
        <DataTable
          columnContentTypes={[
            'text',
            'numeric',
            'numeric',
            'numeric',
            'numeric',
          ]}
          headings={[
            'Product',
            'Price',
            'SKU Number',
            'Net quantity',
            'Net sales',
          ]}
          rows={rows}
          hasFixedFirstColumn
          footerContent={
            <Stack distribution='center'>
              <Pagination label='top Clas Table' />
            </Stack>
          }
        />
      </Card>
    </div>
  )
}

export default AllProducts
