import React from 'react'
import { useState, useEffect } from 'react'
import * as backendAPI from '../utilities/backendAPI'

export default function MenuItemDetail() {

  const [itemDetail, setItemDetail] = useState('')

  async function getDetail() {
    const detail = await backendAPI.getDetail()
    setItemDetail(detail)
    console.log(itemDetail)
  }

  useEffect(() => {
    getDetail();
  }, [])

  return (
    <div>MenuItemDetail</div>
  )
}
