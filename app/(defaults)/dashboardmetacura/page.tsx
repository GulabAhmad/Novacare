import React from 'react'
import DasboardMetacura from '@/components/dasboards/DasboardMetacura'
import RouteProtection from '@/components/auth/RouteProtection'

const page = () => {
  return (
    <RouteProtection allowedUserTypes={['patient']}>
      <div>
        <DasboardMetacura />
      </div>
    </RouteProtection>
  )
}

export default page
