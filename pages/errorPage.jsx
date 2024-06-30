import React from 'react'
import { Link } from 'react-router-dom'
import changeTitle from '../functions/changeTitle';

export default function ErrorPage() {

  changeTitle("Joy Art Gallery | ErrorPage")
  return (
    <box
        style={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
    >
        <h3>Sorry, Page Doesn't Exist</h3>
        <Link to='/home'>Go To Homepage</Link>
    </box>
  )
}
