import { Routes, Route } from 'react-router-dom'
import LayoutBlock from '../components/LayoutBlock/LayoutBlock'
import { pathItems } from '../routers/pathItems'
import namePath from '../routers/namePath'
import React from 'react'
import LoaderBlock from '../components/LoaderBlock/LoaderBlock'

function RoutesItem() {
  return (
    <React.Suspense fallback={LoaderBlock}>
      <Routes>
        <Route path={namePath.DEFAULT} element={<LayoutBlock />}>
          {pathItems.map(({ element, path }) => (
            <Route key={element} path={path} element={element} />
          ))}
        </Route>
      </Routes>
    </React.Suspense>
  )
}

export default RoutesItem
