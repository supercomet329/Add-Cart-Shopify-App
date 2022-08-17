import React, { useCallback, useState } from 'react'
import { Page, Tabs as PolarisTabs } from '@shopify/polaris'
import AllProducts from '../AllProducts'

const tabs = [
  {
    id: 'all-customers-1',
    content: 'All Products',
    accessibilityLabel: 'All customers',
    panelID: 'all-customers-content-1',
    component: <AllProducts />,
  },
  {
    id: 'accepts-marketing-1',
    content: 'Accepts marketing',
    panelID: 'accepts-marketing-content-1',
    component: <h1>Accepts marketing</h1>,
  },
  {
    id: 'repeat-customers-1',
    content: 'Repeat customers',
    panelID: 'repeat-customers-content-1',
    component: <h1>Repeat customers</h1>,
  },
  {
    id: 'prospects-1',
    content: 'Prospects',
    panelID: 'prospects-content-1',
    component: <h1>Prospects</h1>,
  },
]

const Tabs = () => {
  const [selected, setSelected] = useState(0)

  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    []
  )

  return (
    <>
      <PolarisTabs tabs={tabs} selected={selected} onSelect={handleTabChange} />
      <Page fullWidth>{tabs[selected].component}</Page>
    </>
  )
}

export default Tabs
