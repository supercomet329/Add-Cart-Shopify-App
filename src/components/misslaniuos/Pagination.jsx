import { Pagination as PolarisPagination } from '@shopify/polaris'
import React from 'react'

const Pagination = ({ label }) => {
  return (
    <PolarisPagination
      label={label}
      hasPrevious
      onPrevious={() => {
        console.log('Previous')
      }}
      hasNext
      onNext={() => {
        console.log('Next')
      }}
    />
  )
}

export default Pagination
