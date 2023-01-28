import { Delete } from '@material-ui/icons'
import React from 'react'

const Note = ({title,content,deleteNote,id}) => {
  return (
    <div className='note'>
        <h1>{title}</h1>
        <p>{content}</p>
        <button onClick={()=>deleteNote(id)}>
            <Delete/>
        </button>
    </div>
  )
}

export default Note