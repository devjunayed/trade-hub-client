import { TCategoryData } from '@/types'
import { Button } from '@nextui-org/react'
import React from 'react'

const TableRow = ({category, sl}: {category: TCategoryData, sl: number}) => {
  return (
    <tr key={category._id}>
    <th>{sl}</th>
    <td>{category.title}</td>
    <td>{category.description}</td>
    <td className='flex gap-4'>
        <Button>Edit</Button>
        <Button>Delete</Button>
    </td>
  </tr>
  )
}

export default TableRow
